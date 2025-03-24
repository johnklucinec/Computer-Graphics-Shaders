# Project 7 - Geometry Shaders: Turning a Triangle Model into a Collection of 3D Crosses

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">LOD</th>
      <th style="min-width: 250px; text-align: center">Quantization</th>
      <th style="min-width: 250px; text-align: center">Cross Size</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/LOD.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/quant.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/size.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Chroma Depth</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/rainbow.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

## Shader Implementation

The purpose of this shader project is to create a "Quantized Crosses" effect that subdivides triangles in a 3D model, quantizes (snaps) the vertices to discrete locations, and places 3D crosses at each vertex position.
The shader also includes ChromaDepth coloring as an optional feature, which colors objects based on their distance from the viewer.

### Implementation Process

I first focused on the geometry shader without doing any lighting in the fragment shader. Everything was
going smoothly, but my 3D crosses looked more like 3D L shapes for some reason. I realized my math was
slightly off, but that was an easy fix. When I went to implement the lighting, it mostly worked, but the
color was always black for some reason. I then realized that the uColor variable is a vec4 and not a vec3,
so it all looked right once I got that sorted out.

When I went to do the bonus part, my program kept crashing. The information was pretty straightforward,
so I was slightly confused. I kept getting “error C6033: Hardware limitation reached, can only emit 73
vertices of this size.” I did not know why this happened, but it would only occur after I added the depth
code. I then found out that if I set the max_vertices in the geometry shader from 78 to 73, it all worked out.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=EjOzJnFdbso">
          <img src="https://img.youtube.com/vi/EjOzJnFdbso/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
