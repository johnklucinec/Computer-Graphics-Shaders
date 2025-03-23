# Project 2 - Noisy Elliptical Dots

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Noise Amplitude</th>
      <th style="min-width: 250px; text-align: center">Noise Frequency</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/amp.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/freq.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

## Shader Implementation

This shader creates an elliptical pattern on a sphere, and allows for dynamic noise
generation through uniform variables like uNoiseAmp and uNoiseFreq.

### Implementation Process

I cloned my first project since this one is mostly built off of that one. I first made to add any new variables
to my .glib file since I now need something to control the noise. I went to my vertex shader and made sure
I was already passing my model coordinates to the fragment shader. Then, in my fragment shader, I read
the noise file that glman generated as a texture and added the RGBA values into its own variable. After
fixing the range on this new variable, I applied the noise amplitude to it so I could adjust that with glman. I
then added that new variable to my S and T coordinates, which is how I got the distorted effect. I tried
playing around with glman and found out that the max noise texture size it could generate was 400x400,
which took a while to generate, but it ran fine on my computer once that was done.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=tCNmPvQeuV4">
          <img src="https://img.youtube.com/vi/tCNmPvQeuV4/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
