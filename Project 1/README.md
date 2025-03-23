# Project 1 - Step and Blended-edged Elliptical Dots

> [!IMPORTANT]
> Please refer to the [glman](./glman) directory if you would like to try out the shaders.

## Visual Demonstration

<p align="center">
  <img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/width.gif?raw=true" width="75%" height="75%">
  <i>Change the width of the ovals</i>
</p>

<p align="center">
  <img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/height.gif?raw=true" width="75%" height="75%">
  <i>Change the height of the ovals</i>
</p>

<p align="center">
  <img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/blur.gif?raw=true" width="75%" height="75%">
  <i>Change the smoothness (blur) of the ovals</i>
</p>

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

<p align="center">
  <a href="https://www.youtube.com/watch?v=QmyBkErh0g0">
    <img src="https://img.youtube.com/vi/QmyBkErh0g0/0.jpg" alt="Video Demo">
  </a>
  <i>Click the image above to watch the demonstration video</i>
</p>
