# Interactive Fire Icon Animation

This project creates an interactive fire icon that responds to mouse movements with a dynamic gradient effect.

## Video Tutorial
[![Watch the tutorial](https://img.shields.io/badge/YouTube-Watch%20Tutorial-red?style=for-the-badge&logo=youtube)](https://youtu.be/KKQQn_lDuVQ?si=FEofEPTIx6LKY2Y9)

## SVG Properties Explained

### Basic SVG Structure
- **`xmlns="http://www.w3.org/2000/svg"`** - Defines this as an SVG element using the standard SVG namespace
- **`fill="none"`** - Sets the default fill color to transparent
- **`viewBox="0 0 24 24"`** - Defines the coordinate system, creating a 24x24 unit canvas
- **`class="h-64 stroke-[0.1] hover:stroke-[0.2] ..."`** - Tailwind CSS classes for styling

### SVG Defs Section
The `<defs>` element is used to define reusable elements that can be referenced later in the SVG.

#### Radial Gradient (`<radialGradient>`)
- **`id="grad1"`** - Unique identifier to reference this gradient
- **`gradientUnits="userSpaceOnUse"`** - Makes the gradient coordinates relative to the user coordinate system
- **`cx="50%" cy="50%"`** - Sets the center point of the gradient (initially at 50% width and height)
- **`r="50%"`** - Defines the radius of the gradient as 50% of the element

#### Gradient Stops
- **`<stop id="centerStop" stop-color="#404040">`** - First stop at the center (gray color)
- **`<stop offset="1" stop-color="#404040">`** - Second stop at the edge (same gray color)
- The `offset="1"` means this stop is at 100% of the gradient radius

### Path Elements
Two `<path>` elements create the fire icon shape:

#### First Path (Outer flame)
- **`strokeLinecap="round"`** - Makes the line endings rounded
- **`strokeLinejoin="round"`** - Makes the line connections rounded
- **`class="fill-neutral-950/50"`** - Fills with semi-transparent dark color
- **`stroke="url(#grad1)"`** - Uses the defined gradient for the stroke
- **`d="..."`** - The path data defining the flame shape

#### Second Path (Inner flame)
- Same properties as the first path but with different fill color (`fill-neutral-800/50`)
- Different path data for the inner flame shape

## Animation Logic

### Event Listeners

#### Mouse Enter Event
```javascript
card.addEventListener('mouseenter', () => {
    centerStop.setAttribute('stop-color', '#10b981');
});
```
- **Purpose**: Changes the gradient color when mouse enters the card
- **Action**: Changes the center stop color from gray (`#404040`) to green (`#10b981`)

#### Mouse Leave Event
```javascript
card.addEventListener('mouseleave', () => {
    centerStop.setAttribute('stop-color', '#404040');
});
```
- **Purpose**: Resets the gradient color when mouse leaves the card
- **Action**: Changes the center stop color back to original gray (`#404040`)

#### Mouse Move Event
```javascript
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = (x / rect.width) * 100;
    const cy = (y / rect.height) * 100;

    const gradient = document.getElementById('grad1');
    gradient.setAttribute('cx', `${cx}%`);
    gradient.setAttribute('cy', `${cy}%`);
});
```

**Step-by-step breakdown:**

1. **Get card position**: `getBoundingClientRect()` gets the card's position on the screen
2. **Calculate mouse position**: 
   - `e.clientX - rect.left` gets mouse X position relative to the card
   - `e.clientY - rect.top` gets mouse Y position relative to the card
3. **Convert to percentage**:
   - `(x / rect.width) * 100` converts X position to percentage of card width
   - `(y / rect.height) * 100` converts Y position to percentage of card height
4. **Update gradient center**: Sets the gradient center to follow the mouse cursor

## How It Works Together

1. **Initial State**: The fire icon appears with a gray gradient stroke
2. **Mouse Enter**: The gradient color changes to green, creating a "lit" effect
3. **Mouse Movement**: The gradient center follows the mouse cursor, creating a dynamic lighting effect
4. **Mouse Leave**: The gradient returns to gray, "extinguishing" the fire

The combination of SVG gradients and JavaScript mouse events creates an interactive fire icon that appears to be lit by the user's cursor movement.
