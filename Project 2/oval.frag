#version 330 compatibility

uniform float	uKa, uKd, uKs;	// coefficients of each type of lighting
uniform float	uShininess;		// specular exponent
uniform float	uAd, uBd; 		// Elipsis width and height variables
uniform float	uTol;			// Tolorance (blur) variable

// variables to adjust how much the noise mixes in with the ellipse color
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

void
main( )
{
	vec3 myColor = OBJECTCOLOR;
	vec2 st = vST;

	// Making the noise usable
	vec4 nv = texture(Noise3, uNoiseFreq * vMC);
	float n =  nv.r + nv.g + nv.b + nv.a; 	// Range is from 1.0 -> 3.0
	n = n - 2.0; 							// Range is now -1.0 -> 1.0
	n *= uNoiseAmp;

	// Make the spheres start circular with default values
	float uAd = uAd / 2;

	// Calulates the horizontal and vertical radius for each ellipse
	float ar = uAd / 2.0;
	float br = uBd / 2.0;

	// Apply noise to texture coordinates for a distorted effect
	st += n;

	// Calculates which grid cell contains point st.s and st.t
	int numins = int( st.s / uAd);
	int numint = int( st.t / uBd);

	// Calculates the center points
	float sc = numins * uAd + ar;
	float tc = numint * uBd + br;

	// Ellipse Equation
	float f = pow(st.s - sc, 2.0) / pow(ar, 2.0) + pow(st.t - tc, 2.0) / pow(br, 2.0);

	float t = smoothstep( 1.0 - uTol, 1.0 + uTol, f );
	myColor = mix( ELLIPSECOLOR, OBJECTCOLOR, t );

	// Now, use myColor in the per-fragment lighting equations:
	vec3 Normal    = normalize(vN);
	vec3 Light     = normalize(vL);
	vec3 Eye       = normalize(vE);

	vec3 ambient = uKa * myColor;

	float d = max( dot(Normal,Light), 0. );       // only do diffuse if the light can see the point
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
