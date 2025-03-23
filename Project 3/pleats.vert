#version 330 compatibility

// will be interpolated into the fragment shader:
uniform float 	uLightX, uLightY, uLightZ;
uniform float	uA, uP;

out  vec2  vST;                 // texture coords
out  vec3  vN;                  // normal vector
out  vec3  vL;                  // vector from point to light
out  vec3  vE;                  // vector from point to eye
out  vec3  vMC;					// model coordinates

const float  Y0 = 1.0;
const float  PI = 3.14159265359;

vec3 LIGHTPOSITION = normalize( vec3( uLightX, uLightY, uLightZ ) );

void
main( )
{	

	// Generate sine wave displacement along Z (The wave pattern)
	float z = uA * (Y0 - gl_Vertex.y) * sin(2.0 * PI * gl_Vertex.x / uP);

	// Offset vertex Z position by wave height
	vec4 vert = gl_Vertex;
	vert.z = z;

	// Calculate wave surface derivatives for lighting (I need to relearn math)
	float dzdx = uA * (Y0 - vert.y) * (2.0 * PI / uP) * cos(2.0 * PI * vert.x / uP);
	float dzdy = -uA * sin(2.0 * PI * vert.x / uP);

	// Define surface tangent vectors
	vec3 Tx = vec3(1.0, 0.0, dzdx);
	vec3 Ty = vec3(0.0, 1.0, dzdy); 

	// Compute surface normal (perpendicular vector) from tangents [This makes the lighting work]
	vec3 normal = normalize( cross( Tx, Ty ) );

	vST = gl_MultiTexCoord0.st;
	vMC = vert.xyz;
	vec4 ECposition = vert * gl_ModelViewProjectionMatrix; 		// eye coordinate position
	//vN = normalize( gl_NormalMatrix * gl_Normal ); 	// normal vector
	vN = normal;										// new normal vector
	vL = LIGHTPOSITION - ECposition.xyz; 				// vector from the point to the light position
	vE = vec3( 0.0, 0.0, 0.0 ) - ECposition.xyz; 		// vector from the point to the eye position
	gl_Position = gl_ModelViewProjectionMatrix * vert;
}