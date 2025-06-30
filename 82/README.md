# Scroll-Driven Path Animation Effect

This project creates a smooth scroll-driven path animation where an SVG path draws itself as the user scrolls, overlaid on top of a background video. The effect is built using GSAP (GreenSock Animation Platform) and CSS.

## 🎯 How It Works

The animation works by:
1. Creating an SVG path that starts completely hidden
2. As the user scrolls through a specific section, the path gradually reveals itself
3. The path is overlaid on top of a background video using CSS Grid
4. Smooth scrolling is applied to the entire page for a premium feel

## 📁 Project Structure

```
├── index.html      # Main HTML file with structure and GSAP logic
├── style.css       # CSS styles for layout and visual effects
└── README.md       # This documentation file
```

## 🔧 Key Technologies

- **GSAP ScrollTrigger**: Controls when animations start/stop based on scroll position
- **GSAP ScrollSmoother**: Adds smooth, eased scrolling to the page
- **CSS Grid**: Overlays the SVG on top of the video
- **SVG Stroke Animation**: Uses stroke-dasharray and stroke-dashoffset for the drawing effect

## 🏗️ HTML Structure Breakdown

### 1. Required Libraries
```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- ScrollTrigger Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<!-- ScrollSmoother Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollSmoother.min.js"></script>
```


### 2. Main Animation Section
```html
<section class="ipad-section">
    <!-- SVG Container (overlaid on top) -->
    <div class="svg-container">
        <svg viewBox="0 0 1400 700">
            <path id="svg-path" d="..." stroke="black" stroke-width="130" />
        </svg>
    </div>
    
    <!-- Video Container (background) -->
    <div class="video-container">
        <video src="..." autoplay muted loop></video>
    </div>
</section>
```

## 🎨 CSS Styles Explained

### 1. Grid Layout for Overlay Effect
```css
.ipad-section {
    display: grid; /* Enables grid layout */
    align-items: start; /* Aligns items to the start of the grid cell */
}

.svg-container {
    grid-area: 1/1;      /* Places in grid cell 1,1 */
    z-index: 10;         /* Brings SVG above video ( svg should be at the top ) */
    background-color: #fff;
    mix-blend-mode: lighten;  /* Blending effect with video */
}

.video-container {
    grid-area: 1/1;      /* Same grid cell = overlay */
    height: 100dvh;      /* Full viewport height */
}
```

**What this does:**
- Both containers occupy the same grid cell (1/1)
- SVG container has higher z-index, so it appears on top
- `mix-blend-mode: lighten` creates a visual blending effect
- Video fills the background while SVG animates on top


## ⚙️ JavaScript Logic Breakdown

### 1. Plugin Registration
```javascript
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
```
**Purpose:** Tells GSAP to load the ScrollTrigger and ScrollSmoother plugins.

### 2. ScrollSmoother Initialization
```javascript
ScrollSmoother.create({
    wrapper: "#smooth-wrapper",     // Outer container
    content: "#smooth-content",     // Inner scrollable content
    smooth: 1.5,                   // Smoothness duration (1.5 seconds to catch up)
    effects: true,                 // Enables data-speed/data-lag attributes
    smoothTouch: 0.1,              // Reduced smoothing on mobile devices
});
```

### 3. SVG Path Setup
```javascript
const path = document.getElementById('svg-path');
const pathLength = path.getTotalLength();  // Gets total path length in pixels

// Hide the path initially
path.style.strokeDasharray = pathLength;   // Creates dashes equal to path length
path.style.strokeDashoffset = pathLength;  // Offsets the dashes to hide the line
```

**How stroke animation works:**
- `strokeDasharray`: Creates a dash pattern. Setting it to the path length creates one long dash
- `strokeDashoffset`: Moves the dash pattern. Setting it to path length hides the entire line
- As offset decreases to 0, the line gradually appears

### 4. Scroll-Triggered Animation
```javascript
gsap.to(path, {
    strokeDashoffset: 0,        // Animate from pathLength to 0 (reveals line)
    ease: "none",               // Linear animation (no easing)
    scrollTrigger: {
        trigger: ".ipad-section",    // Element that triggers the animation
        start: "top 85%",           // Start when section top hits 85% of viewport
        end: "bottom 20%",          // End when section bottom hits 20% of viewport
        scrub: 2,                   // Smooth animation tied to scroll (2 second lag)
        invalidateOnRefresh: true,  // Recalculates on window resize
        markers: true               // Shows debug markers (remove in production)
    }
});
```


### Modify Path Appearance
```html
<path stroke="red"        <!-- Change color -->
      stroke-width="50"   <!-- Change thickness -->
      stroke-linecap="round" <!-- Rounded ends -->
      />
```


## 🛠️ Setup Instructions

1. **Create the HTML structure** with proper wrapper divs
2. **Include all GSAP libraries** (core, ScrollTrigger, ScrollSmoother)
3. **Set up CSS Grid** for overlay effect
4. **Initialize ScrollSmoother** before creating animations
5. **Create your SVG path** with proper stroke settings
6. **Set up ScrollTrigger** animation to control the drawing effect

## 🎭 Key Concepts

- **Stroke Dasharray/Offset**: The magic behind SVG line drawing animations
- **CSS Grid Overlay**: Positioning elements on top of each other
- **ScrollTrigger**: Connecting animations to scroll position
- **ScrollSmoother**: Adding premium smooth scrolling
- **Mix Blend Mode**: Creating visual effects where elements overlap

This creates a professional, smooth scroll-driven animation that reveals an SVG path as users scroll through your content!
