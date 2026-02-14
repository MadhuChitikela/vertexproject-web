# Vertex Project - Brand Identity Guide

## Logo Design

### Logo Concept
The Vertex Project logo features a geometric, futuristic design that represents:
- **Triangle/Vertex Structure**: Symbolizing precision, technology, and the vertex point where innovation meets excellence
- **Connected Nodes**: Representing the connection between students, technology, and success
- **3D Depth Effect**: Created through layered geometric shapes and gradient applications
- **Neon Glow**: Modern tech aesthetic with electric blue and purple gradients

### Logo Variants

The logo system includes multiple variants for different use cases:

1. **Icon Only** (`variant="icon"`)
   - Pure geometric symbol
   - Triangle with vertex connections
   - Ideal for: Favicons, app icons, social media avatars
   - Sizes: 32px (sm), 48px (md), 64px (lg)

2. **Full Logo** (`variant="full"`)
   - Stacked layout: Icon on top, text below
   - "VERTEX" text with gradient
   - "PROJECT" subtitle
   - Ideal for: App headers, splash screens

3. **Horizontal Logo** (`variant="horizontal"`)
   - Side-by-side layout: Icon + text
   - Best for: Navigation bars, footers, letterheads
   - Default navbar logo

### Typography

**Primary Text: VERTEX**
- Font Weight: 700 (Bold)
- Tracking: Tight
- Gradient: Linear gradient from Electric Blue (#00E5FF) to Neon Purple (#7C3AED)
- Treatment: Gradient fill with transparent stroke

**Secondary Text: PROJECT**
- Font Weight: 500 (Medium)
- Tracking: Wide (letter-spacing)
- Color: Electric Blue (#00E5FF) at 80% opacity
- Size: 35% of primary text

### Color Palette

#### Primary Colors
- **Vertex Dark**: `#0B0F19` - Main background
- **Electric Blue**: `#00E5FF` - Primary accent, neon highlights
- **Neon Purple**: `#7C3AED` - Secondary accent, depth

#### Gradients
- **Primary Gradient**: `linear-gradient(135deg, #00E5FF, #7C3AED)`
- **Reverse Gradient**: `linear-gradient(135deg, #7C3AED, #00E5FF)`
- **Text Gradient**: `linear-gradient(135deg, #ffffff, #00E5FF)`

#### Supporting Colors
- **White**: `#ffffff` - Text, UI elements
- **White Muted**: `rgba(255, 255, 255, 0.7)` - Secondary text
- **White Subtle**: `rgba(255, 255, 255, 0.1)` - Borders, dividers

### Logo Animation

The logo features smooth entrance animations:
- **Icon**: Scale and fade in (0.8s duration)
- **Text**: Slide from left with fade (0.8s duration, 0.2s delay)
- **Path Drawing**: SVG paths animate from 0 to 100% (1.5s staggered)
- **Hover Effect**: Subtle rotation and scale (0.5s duration)

### Usage Guidelines

✅ **DO:**
- Use on dark backgrounds (#0B0F19 or darker)
- Maintain minimum clear space (equal to logo height)
- Use approved color variants only
- Keep logo legible at all sizes
- Use SVG format when possible for scalability

❌ **DON'T:**
- Don't use on light backgrounds without proper contrast
- Don't modify the geometry or proportions
- Don't use unapproved colors
- Don't add effects (shadows, outlines) beyond the design
- Don't rotate or skew the logo

## 3D Design Elements

### Floating Geometry Component
- Rotating 3D vertex structure
- Animated triangle wireframes
- Glowing particle effects
- Radial gradient backgrounds
- Continuous rotation animation (20s duration)

### Particle Background
- 80 interactive particles
- Connection lines within 150px distance
- Colors: Electric Blue, Neon Purple, White
- Smooth movement with edge wrapping
- Creates depth and atmosphere

## Glassmorphism UI Style

### Glass Card Properties
```css
background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.1)
border-radius: 16px-24px
```

### Glow Effects
- Box Shadow: `0 0 30px rgba(0, 229, 255, 0.3)`
- Hover Enhancement: Increase glow intensity by 50%
- Border Glow: 2px gradient border on hover
- Icon Glow: Match accent color with filter blur

## Typography Scale

- **Hero Heading**: 6xl-8xl (96px-128px)
- **Section Heading**: 5xl-6xl (64px-96px)
- **Card Title**: 2xl (32px)
- **Body Text**: xl (20px)
- **Small Text**: sm (14px)

## Spacing System

- **Section Padding**: 96px vertical (py-24)
- **Card Gap**: 32px (gap-8)
- **Element Spacing**: 16px-24px (space-y-4 to space-y-6)

## Animation Principles

1. **Smooth Entrance**: 0.6-0.8s duration with easeOut
2. **Stagger Delays**: 0.1-0.15s between elements
3. **Hover Interactions**: 0.3-0.5s duration
4. **3D Rotations**: 15-20s for full rotation
5. **Glow Pulses**: 2-4s repeat infinity

## Export Specifications

### Logo Exports Needed
- Icon: 16x16, 32x32, 64x64, 128x128, 512x512 (PNG)
- Icon: SVG (scalable)
- Horizontal: 200px height (PNG + SVG)
- Monochrome: White version for dark backgrounds
- Monochrome: Dark version for light backgrounds (if needed)

## Brand Voice

**Tagline**: "Score High. Stress Less."

**Tone**:
- Professional yet approachable
- Tech-forward and innovative
- Confident and trustworthy
- Student-focused and supportive

**Messaging**:
- Emphasize quality and speed
- Highlight 24/7 support
- Showcase success statistics
- Build trust through testimonials
