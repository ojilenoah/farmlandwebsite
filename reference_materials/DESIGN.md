---
name: Terraform Heritage
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727972'
  outline-variant: '#c2c8c0'
  surface-tint: '#466550'
  primary: '#163422'
  on-primary: '#ffffff'
  primary-container: '#2d4b37'
  on-primary-container: '#99baa1'
  inverse-primary: '#adcfb4'
  secondary: '#536442'
  on-secondary: '#ffffff'
  secondary-container: '#d6e9be'
  on-secondary-container: '#596a47'
  tertiary: '#382c1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#504234'
  on-tertiary-container: '#c2af9c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ebd0'
  primary-fixed-dim: '#adcfb4'
  on-primary-fixed: '#022110'
  on-primary-fixed-variant: '#2f4d39'
  secondary-fixed: '#d6e9be'
  secondary-fixed-dim: '#bacda4'
  on-secondary-fixed: '#111f05'
  on-secondary-fixed-variant: '#3c4c2c'
  tertiary-fixed: '#f4dfcb'
  tertiary-fixed-dim: '#d7c3b0'
  on-tertiary-fixed: '#241a0e'
  on-tertiary-fixed-variant: '#524436'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  gutter: 24px
  card-gap: 32px
  section-margin: 64px
---

## Brand & Style

This design system is built on a philosophy of **Organic Minimalism**. It marries the rugged reliability of high-scale livestock farming with a sophisticated, contemporary digital interface. The objective is to evoke a sense of calm stewardship and operational excellence. 

The aesthetic leverages high-end **Modern Corporate** principles with a tactile, human touch. By utilizing generous white space and a palette inspired by the landscape, the interface avoids the coldness of typical industrial software. It should feel as premium as an artisanal brand while remaining robust enough for complex data management. The emotional response should be one of clarity, trust, and grounded professionalism.

## Colors

The color palette is derived from the natural lifecycle of the farm. 

- **Primary (Deep Forest):** A grounding, authoritative green used for primary actions, navigation headers, and critical brand moments.
- **Secondary (Sage Moss):** A softer, functional green for secondary buttons, active states, and success indicators.
- **Warm Neutrals:** A range of "Oatmeal" and "Sand" tones (Tertiary and Neutral) replace harsh grays to keep the interface feeling sun-drenched and approachable.
- **Crisp White:** Used as the base "Canvas" color to ensure maximum readability and a clean, modern finish.
- **Functional Accent:** A muted burnt orange is reserved for alerts or high-priority notifications, ensuring they stand out without breaking the earthy harmony.

## Typography

This design system utilizes a dual sans-serif pairing to balance modern aesthetics with high-utility legibility.

- **Headings (Manrope):** Chosen for its geometric purity and slightly condensed proportions, providing a professional and balanced look for data dashboards and section titles.
- **Body & UI (Work Sans):** A highly legible, grounded typeface that performs exceptionally well in technical contexts. Its open apertures ensure readability even on mobile devices in outdoor lighting.
- **Hierarchy:** Use tight leading for large headlines to maintain a "block" feel, while employing generous line heights for body text to promote scanning and reduce cognitive load during long periods of use.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (1280px max-width) and a fluid 4-column system on mobile. 

The spacing rhythm is intentionally spacious. Elements are given significant room to "breathe," reinforcing the minimalist aesthetic. A standard 8px baseline grid governs all internal component padding, while layout-level containers use a 32px margin to create a frame-like effect. Visual grouping should be achieved through generous white space rather than heavy dividers.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Ambient Shadows**. 

Depth is communicated through three primary planes:
1. **The Canvas:** The `#F9F8F6` background layer.
2. **The Card Layer:** White surfaces with a 1px border in a slightly darker neutral (`#E5E2DA`). These feature a "Signature Soft Shadow": an ultra-diffused, 15% opacity shadow with a 40px blur and a subtle 4px vertical offset, tinted with the primary green to feel integrated with the environment.
3. **The Interaction Layer:** Components like primary buttons and active dropdowns use a slight lift (8px shadow) to indicate interactivity.

Avoid harsh black shadows or heavy gradients; the depth should feel like natural morning light hitting a physical surface.

## Shapes

The shape language is the defining characteristic of this design system. 

- **Containers:** All primary cards and content sections must use a minimum radius of **24px**. For larger dashboard widgets, this can scale up to **32px**.
- **UI Elements:** Buttons and input fields follow a `rounded-lg` (16px) or `pill` (500px) format to maintain a soft, approachable feel that contrasts with the "hard" nature of farm data.
- **Icons:** Use thick-stroke (2pt) icons with rounded caps and joins to match the curvature of the containers.

## Components

### Buttons & Chips
Primary buttons are solid Deep Forest green with pill-shaped corners. Secondary buttons use a Sage Moss ghost-style border. Chips are used for livestock categorization (e.g., "Bovine," "Equine") and should feature a light tonal fill of the tertiary color with dark text.

### Inputs
Input fields use a subtle Sand-colored background rather than a white one to differentiate them from the primary card surfaces. On focus, the border transitions to a 2px Sage Moss stroke.

### Cards
Cards are the hero of the system. Every card must have a white background, a 1px `#E5E2DA` border, and the signature 24px+ rounded corners. Padding inside cards should be a minimum of 32px to maintain the "Modern Minimalist" look.

### Livestock Status Indicators
Specialized circular progress indicators and "health bars" should use organic, variable-width strokes to feel less like a spreadsheet and more like a dashboard for living assets.

### Navigation
Vertical sidebars should be transparent or use the canvas color, with active links indicated by a pill-shaped background highlight in Sage Moss at 10% opacity.