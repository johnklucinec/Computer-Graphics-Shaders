#version 330 compatibility


uniform  float      uSc;
uniform  float      uTc;
uniform  float      uMag;
uniform  float      uRad;
uniform  float      uWhirl;
uniform  float      uMosaic;
uniform  sampler2D  uImageUnit;

in vec2 vST;

void main()
{
    // Uses uSc and uTc to determine the center of the circle
    vec2 st = vST - vec2(uSc, uTc);

    // Checks if the pixel is outside the circle
    if (st.t * st.t + st.s * st.s > uRad * uRad)
    {
        vec3 rgb = texture(uImageUnit, vST).rgb;
        gl_FragColor = vec4(rgb, 1.0);
    }
    else
    {
        // Magnifying
        float r = length(st);       // gets the distance from center
        float r_prime = r / uMag;   // scales based on uMag. uses division since uMag is a multiplier

        // Whirling
        float theta = atan(st.t, st.s);                 // gets the angle from the center
        float theta_prime = theta - uWhirl * r_prime;   // whirls based on uWhirl + distance from the center

        // Restoring (Going back to the origional coordinate space)
        // Undo what you did when you changed the fragment's (s,t) to make it with respect to the center (uSc,uTc) of the Magic Lens.
        st = r_prime * vec2(cos(theta_prime), sin(theta_prime));    // Now the range is -1 to +1
        st += vec2(uSc, uTc);                                       // Restores the center

        // Mosaicing ========================================
        // Which block of pixels will this pixel be in?
        int numins = int( st.s / uMosaic ); // number of mosaics in the s direction
        int numint = int( st.t / uMosaic ); // number of mosaics in the t direction
        float sc = numins * uMosaic;        // center of the block
        float tc = numint * uMosaic;

        // for this entire block of pixels, we are only going to sample the texture at its center (sc,tc):
        st.s = sc;
        st.t = tc;
        // ==================================================

        vec3 rgb = texture( uImageUnit, st ).rgb;
        gl_FragColor = vec4( rgb, 1.0 );
    }

}
