# Project 1 - Step and Blended-edged Elliptical Dots

## Visual Demonstration

![Shader Demo Image](./images/width.gif)
*Change the width of the ovals*

![Shader Demo Image](./images/height.gif)
*Change the height of the ovals*

![Shader Demo Image](./images/blur.gif)
*Change the smoothness (blur) of the ovals*

## Shader Implementation

This shader creates an elliptical pattern on a sphere, allowing for dynamic adjustments to the ellipse's size, elongation, and edge smoothness through uniform variables like uAd, uBd, and uTol, and applies per-fragment lighting calculations to render the pattern with ambient, diffuse, and specular components

### Implementation Process

I started by setting up glman, which ended making this whole project more straightforward. Once I
imported the GLIB file, I added the two shaders file and ran into a few errors. I worked on getting rid of the
errors, and I ended up with an orange sphere. There were no patterns showing, but at least the lighting
worked. I was partially stuck on how to create the ellipse patterns, but then I saw there was a similar
demo provided in the notes. Glman made it easy to change values on the fly, so it was easy to see how
changing each value affects the output.

## Video Demonstration

[![Video Demo](https://img.youtube.com/vi/QmyBkErh0g0/0.jpg)](https://www.youtube.com/watch?v=QmyBkErh0g0)
*Click the image above to watch the demonstration video*
