# Project 4 - Cube Mapping Reflective and Refractive Surfaces

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Refraction</th>
      <th style="min-width: 250px; text-align: center">Reflection</th>
      <th style="min-width: 250px; text-align: center">Changing Eta</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/refract.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/reflect.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/eta.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Emerald</th>
      <th style="min-width: 250px; text-align: center">Adding Noise</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/emerald.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/emeraldnoise.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

*A different cube map was used for reflection to get the emerald appearance.*

## Shader Implementation

This shader simulates both reflection and refraction effects on a 3D object,
with the added complexity of bump mapping to create a more realistic visual appearance.

### Implementation Process

For Project 4, I started with the sample code and fixed all the pieces that were left out. For the most part,
it was pretty straightforward, but I did run into a slight issue when setting the gl_FragColor. After getting
that sorted, I decided I wanted to use my own obj file, so I found a cool-looking gem online. After making it
look like quartz, I wanted it to look more like an emerald, so I found some cube-mapped textures online.
The main issue was that the files were in a .dds format, which does not work with glman. I found a
converter from .dds to .bmp online. However, I still got an error in glman saying it could not read the file.
After reviewing the glman documentation, I discovered that the .bmp file should be 24-bit with no alpha. I
had no idea how to check or change this, but I randomly tried opening the .bmp file with Visual Studio
2022, and there was an option to change it right there. Once I did that, I got my emerald texture working.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=_KvgeZjscZM">
          <img src="https://img.youtube.com/vi/_KvgeZjscZM/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
