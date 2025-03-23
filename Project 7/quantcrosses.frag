#version 330 compatibility

uniform vec4	uColor;
uniform float	uKd, uKs, uKa;
uniform float	uShininess;
uniform float	uRedDepth, uBlueDepth;
uniform bool	uUseChromaDepth;

in vec3	 gN;	// normal vector
in vec3	 gL;	// vector from point to light
in vec3  gE;	// vector from point to eye
in float gZ;    // depth value

const vec3 SPECULARCOLOR        = vec3( 1.0, 1.0, 1.0 );

vec3
Rainbow( float t )
{
        t = clamp( t, 0., 1. );         // 0.00 is red, 0.33 is green, 0.67 is blue

        float r = 1.;
        float g = 0.0;
        float b = 1.  -  6. * ( t - (5./6.) );

        if( t <= (5./6.) )
        {
            r = 6. * ( t - (4./6.) );
            g = 0.;
            b = 1.;
        }

        if( t <= (4./6.) )
        {
            r = 0.;
            g = 1.  -  6. * ( t - (3./6.) );
            b = 1.;
        }

        if( t <= (3./6.) )
        {
            r = 0.;
            g = 1.;
            b = 6. * ( t - (2./6.) );
        }

        if( t <= (2./6.) )
        {
            r = 1.  -  6. * ( t - (1./6.) );
            g = 1.;
            b = 0.;
        }

        if( t <= (1./6.) )
        {
            r = 1.;
            g = 6. * t;
        }

        return vec3( r, g, b );
}

void
main( )
{
    vec3 myColor = uColor.rgb;

    if (uUseChromaDepth)
    {
		float t = (2./3.) * ( abs(gZ) - uRedDepth ) / ( uBlueDepth - uRedDepth );
        t = clamp( t, 0., 2./3. );
        myColor = Rainbow( t );
    }

    vec3 Normal = normalize(gN);
    vec3 Light = normalize(gL);
    vec3 Eye = normalize(gE);

    vec3 ambient = uKa * myColor;

    float d = max( dot(Normal,Light), 0.0 );
    vec3 diffuse = uKd * d * myColor;

    float s = 0.0;

    if( d > 0.0 )              // only do specular if the light can see the point
    {
        vec3 ref = normalize(  reflect( -Light, Normal )  );
        float cosphi = dot( Eye, ref );
        if( cosphi > 0.0 )
                s = pow( max( cosphi, 0.0 ), uShininess );
    }

    vec3 specular = uKs * s * SPECULARCOLOR.rgb;
    gl_FragColor = vec4( ambient + diffuse + specular,  1.0 );
}
