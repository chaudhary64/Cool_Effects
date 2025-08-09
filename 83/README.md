## GSAP Mask Animation Effect

This effect uses GSAP (GreenSock Animation Platform) to animate a mask over an image. The mask is implemented using a polygon clip-path on an image element. The animation transitions the mask from fully visible to hidden and back, creating a dynamic reveal effect.

### How it works

1. The HTML contains two images stacked on top of each other. The top image (`#mask`) uses a CSS clip-path to control its visibility.
2. GSAP is used in `script.js` to animate the clip-path property of the mask image.
3. The animation moves the mask polygon from covering the entire image to hiding it, then reverses (yoyo) and repeats infinitely.

### Key files
- `index.html`: Sets up the structure and includes GSAP and Tailwind CSS.
- `script.js`: Contains the GSAP animation logic for the mask effect.