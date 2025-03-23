#version 330 compatibility

uniform float       uEta;
uniform float       uMix;
uniform float       uWhiteMix;
uniform samplerCube uReflectUnit;
uniform samplerCube uRefractUnit;

in vec3     vNormal;
in vec3     vEyeDir;
in vec3     vMC;

const vec3 WHITE = vec3(1.0, 1.0, 1.0);

void
main()
{
    vec3 Normal = normalize(gl_NormalMatrix * vNormal);
    vec3 Eye = normalize(vEyeDir);

    vec3 reflectVector = reflect(Eye, Normal);
    vec3 reflectColor = texture(uReflectUnit, reflectVector).rgb;

    vec3 refractVector = refract(Eye, Normal, uEta);

    vec3 refractColor;
    if (all(equal(refractVector, vec3(0.0, 0.0, 0.0))))
    {
        refractColor = reflectColor;
    }
    else
    {
        refractColor = texture(uRefractUnit, refractVector).rgb;
        refractColor = mix(refractColor, WHITE, uWhiteMix);
    }

    vec3 color = mix(refractColor, reflectColor, uMix);
    gl_FragColor = vec4(color, 1.0);
}
