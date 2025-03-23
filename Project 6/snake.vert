#version 330 compatibility

out vec2 vST;        // Texture coordinates
out vec3 vMC;        // Model coordinates
out float vHeight;   // Vertical position for color gradient
uniform float Timer;

const float PI 			= 3.14159265;
const float	TWOPI 		= 2.0 * PI;
const float	LENGTH 		= 5.0;
const float uAmp 		= 1.0;
const float uSpeed 		= 4.0;
const float uFreq 		= 0.5;

void main() {
    vST = gl_MultiTexCoord0.st;
   	vec3 vert = gl_Vertex.xyz;

	// Make the snake wiggle.
	vert.z += uAmp * sin( TWOPI * ((uSpeed * Timer) + (uFreq * vert.x / LENGTH)) );

    vMC = gl_Vertex.xyz;
    vHeight = gl_Vertex.y;
    gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1.0 );
}
