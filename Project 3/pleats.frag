#version 330 compatibility

uniform float	uKa, uKd, uKs;	// coefficients of each type of lighting
uniform float	uShininess;		// specular exponent

uniform float	uNoiseFreq, uNoiseAmp; 
uniform sampler3D Noise3;

// interpolated from the vertex shader:
in  vec2  vST;					// texture coords
in  vec3  vN;                   // normal vector
in  vec3  vL;                   // vector from point to light
in  vec3  vE;                   // vector from point to eye
in  vec3  vMC;					// model coordinates

const vec3 OBJECTCOLOR          = vec3( 0.93, 0.29, 0.03 );	// color to make the object
const vec3 ELLIPSECOLOR         = vec3( 0.0, 0.0, 0.0 );	// color to make the ellipse
const vec3 SPECULARCOLOR        = vec3( 1.0, 1.0, 1.0 );

vec3
PerturbNormal2( float angx, float angy, vec3 n )
{
        float cx = cos( angx );
        float sx = sin( angx );
        float cy = cos( angy );
        float sy = sin( angy );

        // rotate about x:
        float yp =  n.y*cx - n.z*sx;    // y'
        n.z      =  n.y*sx + n.z*cx;    // z'
        n.y      =  yp;
        // n.x      =  n.x;

        // rotate about y:
        float xp =  n.x*cy + n.z*sy;    // x'
        n.z      = -n.x*sy + n.z*cy;    // z'
        n.x      =  xp;
        // n.y      =  n.y;

        return normalize( n );
}

void
main( )
{

	vec4 nvx = texture( Noise3, uNoiseFreq*vMC );
	float angx = nvx.r + nvx.g + nvx.b + nvx.a  -  2.;	// -1. to +1.
	angx *= uNoiseAmp;

    vec4 nvy = texture( Noise3, uNoiseFreq*vec3(vMC.xy,vMC.z+0.5) );
	float angy = nvy.r + nvy.g + nvy.b + nvy.a  -  2.;	// -1. to +1.
	angy *= uNoiseAmp;

	vec3 Normal = PerturbNormal2( angx, angy, vN );
	Normal    	= normalize(gl_NormalMatrix  * Normal );
	vec3 Light  = normalize(vL);
	vec3 Eye    = normalize(vE);

	vec3 ambient = uKa * OBJECTCOLOR;

	float d = max( dot(Normal,Light), 0. );       // only do diffuse if the light can see the point
	vec3 diffuse = uKd * d * OBJECTCOLOR;

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