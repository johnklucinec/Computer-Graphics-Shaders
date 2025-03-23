#version 330 compatibility

uniform float uKa;
uniform float uKd;
uniform float uKs;
uniform float uShininess;
uniform float uHeightScale;
uniform int uRoughness;
uniform float uCrackness;

uniform sampler2D uColor_Map;
uniform sampler2D uPacked_Map;
uniform sampler2D uNormal_Map;

in vec3 vSurfacePosition;
in vec3 vSurfaceNormal;
in vec3 vEyeVector;
in vec2 vST;
in vec3 vViewDirTangent;

const vec3 LIGHTPOSITION = vec3(50.0, 50.0, 10.0);
const vec3 WHITE = vec3(1.0, 1.0, 1.0);

void main()
{
    // Base coordinates
    float distance = length(vSurfaceNormal);
    vec2 baseST = distance * vST;

    // Texture lookups
    vec3 normalMap = texture(uNormal_Map, baseST).xyz;
    vec3 surfaceColor = texture(uColor_Map, baseST).rgb;
    vec3 displacementMap = texture(uPacked_Map, baseST).xyz;

    // Used for roughness distortion
    vec2 distortedST = baseST + (normalMap.xy * (uRoughness * 4.0));

    // Calculate normal contribution + cracked appearance
    const float NormalMap_Intensity = 2.0;
    float CrackedMap_Intensity = uCrackness;
    vec3 normalContribution = (displacementMap * CrackedMap_Intensity) + normalMap;

    // Lighting calculations
    vec3 P = vSurfacePosition;
    vec3 E = normalize(vEyeVector);
    vec3 N = normalize(gl_NormalMatrix * (NormalMap_Intensity * normalContribution));
    vec3 L = normalize(LIGHTPOSITION - P);

    // Parallax calculations using roughness-distorted coordinates
    vec3 rayDir = normalize(vViewDirTangent);
    float height = surfaceColor.r;
    vec2 offset = (rayDir.xy / abs(rayDir.z)) * (height * uHeightScale);
    vec2 displacedST = distortedST + offset;

    // Lighting calculations
    vec3 Ambient = uKa * texture(uColor_Map, displacedST).rgb;
    float Diffuse_Intensity = dot(L, N);
    vec3 Diffuse = uKd * Diffuse_Intensity * texture(uColor_Map, displacedST).rgb;
    float Specular_Intensity = pow(max(dot(reflect(-L, N), E), 0.0), uShininess);
    vec3 Specular = uKs * Specular_Intensity * WHITE;

    gl_FragColor = vec4(Ambient + Diffuse + Specular, 1.0);
}
