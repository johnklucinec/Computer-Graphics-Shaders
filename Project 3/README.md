# Project 3 - Displacement Mapping, Bump Mapping, and Lighting

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Change Amplitude</th>
      <th style="min-width: 250px; text-align: center">Change Phase</th>
      <th style="min-width: 250px; text-align: center">Change Roughness</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/freq2.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/noise.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/amp2.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

## Shader Implementation

This shader creates a dynamic curtain effect by displacing vertices of a quad to simulate fabric folds,
enhancing the texture with bump mapping for realistic wrinkles, and adjusting lighting through normal recalculations.

### Implementation Process

First, I ensured all my lighting worked correctly with a flat quad and the same lighting from Project 1.
Once I was done with that, I started working on implementing the z displacement equation. I then
replaced everywhere I was using gl_Vertex with the new offset vertex vector. I tested out changing uA and
uP, and it started to show the waves, but the lighting was not updating correctly.

I then used the equations from the project writeup to calculate the new lighting and replaced the normal
vector I used with the newly calculated one. Now, the shape of the curtain and the lighting are
appropriately updated. At first, the lighting would not change when I moved the object, but then I realized
I was multiplying it by the ModelViewMatrix and not the ModelViewProjectionMatrix.

I added the two new uniform variables to my fragment shader. I then added the given
perturb function from the project writeup and added it to my code. I then added the bump mapping code
that the new frequency and amplitude options can modify. Finally, I perturbed the normal with the given
function and multiplied it by the normal matrix. I then replaced the Normal variable I was using with this
new one, and everything worked.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=DqCE4ivDF6I">
          <img src="https://img.youtube.com/vi/DqCE4ivDF6I/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
