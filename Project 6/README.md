# Project 6 - The Snake Menagerie Project

> [!IMPORTANT]
> Please refer to the [glman](.././glman) directory if you would like to try out the shaders.

## Visual Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <th style="min-width: 250px; text-align: center">Fire Intensity</th>
      <th style="min-width: 250px; text-align: center">Alpha Cutoff</th>
      <th style="min-width: 250px; text-align: center">Noise Threshold</th>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/intensity.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/alpha.gif?raw=true" width="250"></td>
      <td align="center"><img src="https://github.com/johnklucinec/Computer-Graphics-Shaders/blob/main/.images/thresh.gif?raw=true" width="250"></td>
    </tr>
  </table>
</div>

## Shader Implementation

The purpose of this shader project is to allow students to creatively apply any shader effect of their choice to a snake model. I chose
to implement a fire effect and I modified the snake model to my liking in blender.

### Implementation Process

First, I had to figure out how to make a fire shader work. I had something working, but I was using the
default generated Glman noise, which I did not like the look of. I found a nice noise texture online that
made the fire look closer to what I imagined. I then used octaves to make the fire look a little more
natural. At this point, the fire was more of a “realistic” fire where the edges faded. I wanted to make it look
more cartoonish, so I cut it more abruptly. Unfortunately, I had an issue where it would make half of the
vertices the color of the background and half of them invisible. I fixed this by just discarding it instead of
changing the alpha.

I tried the fire shader on just the snake, which looked boring. So, I used a blender to create a crest for the
fish. This is where all the problems began. I have not really used a Blender before, but I eventually figured
out how to make a plane and bevel the edges. It looked good in a blender, but for some reason, the sides
of the crest would never show up in my shader. I tried a few different things, and after remeshing the
object, I finally got it to appear in my shader. But then I had a new problem: my shader worked on the
snake, but when it got to the crest, the whole crest acted as if it was one pixel (it was one color and would
not fade). I could not figure this out, but then I had the idea to use the blade of a sword instead of a crest
that I made, which worked out fine.

## Video Demonstration

<div align="center" style="overflow-x: auto;">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.youtube.com/watch?v=jWFPEcEbF3s">
          <img src="https://img.youtube.com/vi/jWFPEcEbF3s/0.jpg" width="450" alt="Video Demo">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center"><i>Click the image above to watch the demonstration video</i></td>
    </tr>
  </table>
</div>
