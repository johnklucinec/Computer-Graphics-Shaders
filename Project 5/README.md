# Project 5 - Image Manipulation in a "Magic Lens"

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Magnification</th>
      <th style="min-width: 250px; text-align: center">Whirl</th>
      <th style="min-width: 250px; text-align: center">Mosaic</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/zoom.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/twirl.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/pixel.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

## Shader Implementation

The purpose of this shader is to apply magnification, whirl, and mosaic effects to an image within a specified circular region,
allowing for dynamic manipulation of the image's appearance through adjustable parameters.

### Implementation Process

For Project 5, I started with a simple vertex and fragment shader, very similar to the one provided for the
background in Project 4. Once I verified that the image loaded, I started working on separating the ‘lens’
logic from the rest of the background. I eventually got a grey circle in the center of the background, so I
knew my code was working. I started implementing the zoom and swirl effects from there since they were
a little simpler. Once I got those two working, I was having trouble getting the mosaic effect to work, but
then I realized I was using the same variable twice when I should have been using one with a similar
name.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=FLOCucxD6Ws">
          <img src="https://img.youtube.com/vi/FLOCucxD6Ws/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
