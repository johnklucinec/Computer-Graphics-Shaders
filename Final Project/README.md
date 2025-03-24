# Project 8 -  Ice Parallax (Final Project)

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Roughness</th>
      <th style="min-width: 250px; text-align: center">Crackness</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/roughness.gif?raw=true" width="350"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/crackness.gif?raw=true" width="350"></td>
    </tr>
  </table>
</div>

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Depth Test with Surface Details</th>
      <th style="min-width: 250px; text-align: center">Simple Depth Test (Zoomed-Out)</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/depth1.gif?raw=true" width="350"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/depth2.gif?raw=true" width="350"></td>
    </tr>
  </table>
</div>


## Shader Implementation

This shader creates a realistic ice effect by combining parallax mapping to simulate depth beneath the surface with normal mapping for surface details,
allowing the ice to appear as a proper sheet by scaling textures based on viewing angle and adding controlled roughness and crack features.

### Implementation Process

I first started getting the depth-like parallax effect to work. Instead of parallax mapping, which would look
like the ice connected to the surface texture and then expanded inward, I wanted to create an interior
parallax effect. Basically, the goal was to make the back of the plane look inset by a certain amount,
almost as if you were looking into a window, but you could only see the back wall.

I first got normal parallax mapping working based on the normal mapping PowerPoint. When I tried to get
the parallax interior mapping to work, it never seemed to look correct. If I moved the camera, sometimes
the texture would stretch the wrong way, or sometimes it would not stretch at all. I then found out I had to
change the coordinate space I was using for the parallax calculations. The lighting was also messed up,
but I fixed that by inverting a variable. After finding a helpful article explaining some of the math, I created
a TBN matrix in the vertex shader. This allowed me to make a view direction tangent for my parallax
calculation. I was still stuck at this point, so I just started changing random variables and found out I was
using the wrong texture to sample for the parallax effect. Now, the parallax worked as I originally
envisioned, so I decided to move on to the top texture.

For the top of the plane, I planned to use a normal mapped texture to give it some depth and move on.
However, I accidentally used the wrong texture, giving the ice many more cracks, which I liked. I still used
the normal map, so the cracks under the ice lined up with the cracks on the top. This was almost perfect,
but the ice should not be that clear. I knew my normal map texture had some slight texture, but it was very
hard to see. So, I made a slider that multiplied that texture by a certain number, making the ice look a
little more frosted. After playing with the lighting a little bit and adding a few sliders to blend some of the
textures and height, I was finally satisfied with my ice.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=28VQCRxPIlA">
          <img src="https://img.youtube.com/vi/28VQCRxPIlA/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>

## Resources
- [Three Normal Mapping Techniques Explained For the Mathematically Uninclined](https://www.gamedeveloper.com/programming/three-normal-mapping-techniques-explained-for-the-mathematically-uninclined)
- [(Project Inspiration) Fixing Borderlands 2's Ice Shader](https://www.youtube.com/watch?v=dfjsXlbvxGs)
