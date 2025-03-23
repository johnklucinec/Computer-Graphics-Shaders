#version 330 compatibility

uniform float Timer;
uniform float uFireIntensity;
uniform float uScrollSpeed;
uniform float uNoiseScale;
uniform float uAlphaCutoff;
uniform float uNoiseThreshold;
uniform sampler2D NoiseTexture;

in vec2 vST;
in vec3 vMC;
in float vHeight;

void main() {
    // Use + animate the 2D texture coordinates
    vec2 noiseCoord = vST + vec2(0.0, -Timer * uScrollSpeed);

    // Multi-octave noise sampling
    float noise1 = texture(NoiseTexture, noiseCoord * uNoiseScale).r;               // First octave: base frequency, full amplitude
    float noise2 = texture(NoiseTexture, noiseCoord * uNoiseScale * 2.0).r * 0.5;   // Second octave: double frequency, half amplitude
    float noise3 = texture(NoiseTexture, noiseCoord * uNoiseScale * 4.0).r * 0.25;  // Third octave: double frequency, half amplitude
    float combinedNoise = (noise1 + noise2 + noise3) * uFireIntensity;

    // Vertical fade effect
    float verticalFade = 1.0 - smoothstep(0.0, 1.0, vHeight);

    // Core fire color gradient
    vec3 fireColor = mix(
        vec3(1.0, 0.9, 0.1),    // yellow (tip of the fire)
        vec3(1.0, 0.3, 0.0),    // orange (base of the fire)
        combinedNoise * verticalFade
    );

    // Alpha transparency
    float alphaBase = combinedNoise * 2.0 * (2.0 - vHeight);
    float alpha = step(uAlphaCutoff, alphaBase)     // Core fire shape with alpha (flame) cutoff
                * step(uNoiseThreshold, noise1);    // Noise threshold to break up the flame

    if (alpha < 1.0) discard;                       // Discard transparent fragments to make the flame shape
    gl_FragColor = vec4(fireColor, 1.0);
}
