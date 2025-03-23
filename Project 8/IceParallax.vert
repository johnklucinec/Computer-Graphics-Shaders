#version 330 compatibility

out vec3 vSurfacePosition;
out vec3 vSurfaceNormal;
out vec3 vEyeVector;
out vec3 vViewDirTangent;
out vec2 vST;

in vec4 Tangent;  // Must include tangent.w for handedness

void main() {

    vSurfacePosition = (gl_ModelViewMatrix * gl_Vertex).xyz;
    vSurfaceNormal = normalize( gl_NormalMatrix * gl_Normal );
    vEyeVector = vec3( 0.0, 0.0, 0.0 ) - vSurfacePosition;
    vST = gl_MultiTexCoord0.st;

    // TBN Construction (SCALE-INVARIANT)
    vec3 N = normalize(gl_NormalMatrix * gl_Normal);    // Normal matrix for rotation only
    vec3 T = normalize(gl_NormalMatrix * Tangent.xyz);
    vec3 B = normalize(cross(N, T) * Tangent.w);        // Handedness preservation
    mat3 TBN = mat3(normalize(T), normalize(B), normalize(N));

    // View Direction Calculation
    vec3 viewPos = (gl_ModelViewMatrix * gl_Vertex).xyz;
    vec3 viewDir = normalize(-viewPos);                 // Camera-relative direction
    vViewDirTangent = normalize(viewDir * TBN);

    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
}
