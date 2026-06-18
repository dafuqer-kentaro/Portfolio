---
name: Artisanal Precision
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#003ec6'
  on-secondary: '#ffffff'
  secondary-container: '#0052fe'
  on-secondary-container: '#dfe3ff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001452'
  on-secondary-fixed-variant: '#0038b6'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 80px
  stack-xl: 160px
---

## Brand & Style

The design system is engineered for high-end creative portfolios and design studios. It emphasizes the work by utilizing a "Gallery-First" philosophy, where the interface acts as a sophisticated frame rather than a distraction. The brand personality is professional, authoritative, and meticulously organized, evoking an emotional response of trust and premium quality.

The aesthetic merges **Minimalism** with **Modern Corporate** refinements. It relies on extreme clarity, generous white space (macro-white space), and a strict adherence to a grid. Visual interest is generated through high-contrast typography and singular, purposeful "electric" highlights rather than decorative patterns or complex gradients.

## Colors

The palette is anchored in a high-contrast monochromatic base to ensure maximum legibility and a timeless feel. 

- **Primary (#1A1A1A):** Used for all headings, primary text, and heavy structural elements. It is a "near-black" that feels softer and more premium than pure hex black.
- **Secondary/Accent (#0052FF):** An "Electric Blue" used sparingly for interactive states, primary Call-to-Actions (CTAs), and progress indicators.
- **Tertiary/Surface (#F5F5F5):** A cool light gray used for section backgrounds and subtle UI containers to differentiate from the pure white page background.
- **Neutral/Body (#666666):** Optimized for long-form reading, providing enough contrast against white while appearing softer than the primary headings.

## Typography

This design system utilizes **Outfit** for headlines to provide a modern, geometric, and slightly "architectural" feel. **Inter** is used for body text and functional labels due to its exceptional legibility and systematic appearance.

- **Scale:** High contrast between display types and body text is essential to create a clear information hierarchy.
- **Leading:** Body text uses a generous 1.6x line height to ensure comfortable reading across long case studies.
- **Tracking:** Headings use tight negative letter-spacing to feel more cohesive at large scales, while labels use expanded tracking and uppercase styling for a sophisticated, functional look.

## Layout & Spacing

The system uses a **Fixed-Fluid Hybrid Grid**. Content is constrained to a 1280px maximum width on desktop, centered with 64px outer margins. Within the container, a 12-column grid provides the framework for project cards and text blocks.

- **Vertical Rhythm:** A "Stack" philosophy is used. Large sections (e.g., Hero to Project Grid) are separated by `stack-xl` (160px) to provide maximum "breathability."
- **Mobile Adaptation:** On mobile, margins reduce to 24px and the grid collapses to a single column. Headlines scale down significantly (see `display-lg-mobile`) to prevent awkward line breaks.
- **Gutters:** A consistent 32px gutter ensures that even dense project grids feel airy and intentional.

## Elevation & Depth

To maintain a "flat-plus" aesthetic, elevation is communicated through **Subtle Ambient Shadows** and **Tonal Layering** rather than heavy depth.

- **Level 0 (Surface):** The default background (#FFFFFF).
- **Level 1 (Subtle Depth):** Used for project cards. A very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.04)`.
- **Level 2 (Interaction):** On hover, cards transition to a slightly more pronounced shadow `0px 12px 32px rgba(0, 0, 0, 0.08)` and a 1px solid border (#F5F5F5).
- **Overlays:** Navigation bars use a backdrop-blur (12px) with a semi-transparent white background (80% opacity) to maintain context while scrolling.

## Shapes

The design system favors a **Soft-Geometric** shape language.

- **Base Radius:** 0.25rem (4px) is the standard for small components like checkboxes or buttons, providing a precise, "machined" look.
- **Large Radius:** Project cards and large imagery use `rounded-lg` (8px) to soften the overall composition without appearing "bubbly" or informal.
- **Full Radius:** Only used for small badge-style chips and icon containers to distinguish them as secondary interactive elements.

## Components

### Buttons
- **Primary:** Solid #1A1A1A background, white text, 4px border-radius. Transitions to #0052FF on hover.
- **Secondary:** Transparent background, 1px solid #1A1A1A border. Subtle gray fill on hover.

### Project Cards
Cards are the core of the portfolio. They feature a full-bleed image at the top with an 8px corner radius. Text metadata (Title, Category) sits below with `stack-md` padding. On hover, the image should subtly scale (1.02x) within its container.

### Navigation
A minimal top-bar. Links use `label-md` typography. The active state is indicated by a 2px horizontal line in #0052FF centered beneath the text.

### Input Fields
Understated design: 1px solid #E0E0E0 border, 4px radius. On focus, the border changes to #1A1A1A. Labels are always visible above the field in `label-md` style.

### Chips/Tags
Used for project categories. Small, light-gray (#F5F5F5) backgrounds with `label-md` text. No border, 100px (pill) radius.