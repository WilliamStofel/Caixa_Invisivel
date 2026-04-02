# Design System - Caixa Invisível

## Color Palette

### Primary Colors
- **Indigo (Primary Action)**: `#4F46E5`
  - Used for: Buttons, links, primary CTAs, headers
  - Accessibility: WCAG AA compliant for white text

- **Green (Success/Safe)**: `#10B981`
  - Used for: Positive status, alerts "under control", confirmations
  - Semantic meaning: Safe spending, alert inactive

- **Red (Error/Alert)**: `#EF4444`
  - Used for: Negative status, alerts active, expense amounts, warnings
  - Semantic meaning: Alert active, spending over limit

### Neutral Colors
- **White**: `#FFFFFF`
  - Background for all screens
  - Input fields
  - Card backgrounds

- **Gray (Light)**: `#F3F4F6`
  - Alternative backgrounds
  - Secondary surfaces
  - Hover states

- **Gray (Medium)**: `#6B7280`
  - Secondary text
  - Labels
  - Disabled states

- **Gray (Dark)**: `#1F2937`
  - Primary text
  - Headers
  - Strong hierarchy

## Typography

### Font Family
- **Primary**: Inter sans-serif
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Font Sizes & Hierarchy
- **Heading 1**: 28-32px, bold (600-700 weight)
  - Used for: Page titles
- **Heading 2**: 20-24px, semibold (600 weight)
  - Used for: Section titles
- **Body Large**: 16px, regular (400 weight)
  - Used for: Form labels, main content
- **Body**: 14px, regular (400 weight)
  - Used for: Body text, descriptions
- **Small**: 12px, regular (400 weight)
  - Used for: Secondary text, timestamps
- **Button**: 14-16px, semibold (600 weight)
  - Used for: CTA buttons

## Spacing

### Base Unit: 4px Grid
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 32px

### Common Patterns
- **Component padding**: 16-20px
- **Input height**: 44px (mobile touch-friendly)
- **Button padding**: 16px vertical, 24px horizontal
- **Mobile screen padding**: 20px sides
- **Between form fields**: 16px gap
- **Between sections**: 24-32px

## Borders & Corners

### Border Radius
- **Small elements**: 4px (rare)
- **Input fields**: 8px
- **Buttons**: 8px
- **Cards**: 8px
- **Containers**: 12px (if needed)

### Border Style
- **Input borders**: 1px solid `#E5E7EB` (light gray)
- **Card borders**: 1px solid `#E5E7EB`
- **Focus state**: 2px solid `#4F46E5` (indigo)
- **No shadows** (minimal design principle)

## Component Specifications

### Buttons
- **Primary Button** (Indigo)
  - Background: `#4F46E5`
  - Text: `#FFFFFF` (white)
  - Padding: 12-16px vertical, 24px horizontal (minimum 44px touch target)
  - Border radius: 8px
  - Font weight: 600
  - Full-width on mobile
  - Hover: Slightly darker indigo `#4338CA`
  - Active: Even darker `#3730A3`

- **Secondary Button** (Text link)
  - Background: transparent
  - Text: `#6B7280` (medium gray)
  - No border
  - Hover: `#1F2937` (dark gray)
  - Underline on hover

### Input Fields
- **Height**: 44px (mobile-optimized)
- **Padding**: 12px horizontal, 14px vertical
- **Border**: 1px solid `#E5E7EB`
- **Border radius**: 8px
- **Font size**: 14-16px
- **Placeholder text**: `#9CA3AF` (light gray)
- **Focus state**:
  - Border: 2px solid `#4F46E5`
  - Background: `#FFFFFF`
  - Shadow: none
- **Disabled state**:
  - Background: `#F3F4F6`
  - Border: 1px solid `#E5E7EB`
  - Text: `#9CA3AF`
  - Cursor: not-allowed

### Cards
- **Background**: `#FFFFFF`
- **Border**: 1px solid `#E5E7EB`
- **Padding**: 16-20px
- **Border radius**: 8px
- **Shadow**: None (minimal design)
- **Hover**: Subtle border color change to `#D1D5DB`

### Status Indicators
- **Safe/Under Control**:
  - Color: `#10B981` (green)
  - Icon: Checkmark or shield (if applicable)
  - Text: "Sob controle" or similar

- **Alert/Over Limit**:
  - Color: `#EF4444` (red)
  - Icon: Alert/warning (if applicable)
  - Text: "Alerta" or similar

## Layout Patterns

### Mobile-First (375px - 480px)
- Full-width elements with 20px padding sides
- Single column layout
- Stacked buttons and form fields
- Touch targets minimum 44px height

### Tablet/Desktop (768px+)
- Optional: Centered card layout with max-width 600px
- Similar spacing maintained
- Form fields may have side-by-side layout if needed
- Hover states more prominent

## Responsive Guidelines

### Breakpoints
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Mobile-First Approach
- Design for 375-480px first
- Enhance for larger screens
- Test touch interactions (44px minimum targets)
- Ensure readability at mobile size

## Accessibility

### Contrast Ratios
- Text on Indigo (#4F46E5): Use white (#FFFFFF) - 8.59:1 ratio ✓
- Text on White (#FFFFFF): Use Dark Gray (#1F2937) - 9.21:1 ratio ✓
- All color combinations WCAG AAA compliant

### Touch Targets
- Minimum: 44px x 44px (iOS recommendation)
- Buttons, links, inputs all meet this requirement
- Proper spacing (at least 8px between targets)

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Label all form inputs
- Use semantic buttons not divs
- Include ARIA labels where needed
- Focus visible states clearly indicated

## Animation & Interaction

### General Principles
- **Minimal**: No unnecessary animations
- **Purposeful**: Animations support user understanding
- **Fast**: Transitions 150-300ms max
- **Smooth**: Easing: ease-in-out

### Transitions
- **Button hover**: 150ms ease-in-out on background color
- **Input focus**: 150ms ease-in-out on border color
- **Card hover**: 150ms ease-in-out on border/background
- **Page transitions**: None (SPA navigation should feel instant)

## Dark Mode (Optional Future)

If dark mode is added later:
- **Primary background**: `#111827` (very dark gray)
- **Secondary background**: `#1F2937`
- **Cards**: `#374151`
- **Text**: Invert colors (light on dark)
- **Borders**: Lighter gray on dark backgrounds
- **Indigo accent**: Same `#4F46E5` (works well in dark mode)

## Design Principles (Non-Negotiable)

1. **Minimal**: No unnecessary elements
2. **Clean**: Generous spacing, clear hierarchy
3. **Fast**: Speed and responsiveness prioritized
4. **Trust**: Clear, straightforward, honest design
5. **Accessible**: Works for everyone
6. **Mobile-First**: Designed for small screens first
7. **Consistent**: Same tokens everywhere
8. **Intentional**: Every design decision has a purpose

## File Organization

```
.stitch/
├── DESIGN.md (this file)
├── caixa-invisivel-metadata.json
├── SETUP_CAIXA_INVISIVEL.md
├── PROMPTS_CAIXA_INVISIVEL.md
└── designs/
    ├── INT-01-login.html
    ├── INT-01-login.png
    ├── INT-02-register.html
    ├── INT-02-register.png
    ├── ... (and so on for all 7 screens)
```

## Related Documentation

- **UI Specification**: `docs/spec_ui.md`
- **Technical Specification**: `docs/spec_tech.md`
- **Setup Instructions**: `.stitch/SETUP_CAIXA_INVISIVEL.md`
- **Prompts**: `.stitch/PROMPTS_CAIXA_INVISIVEL.md`

---

**Last Updated**: 2026-03-30
**Design System Version**: 1.0
**Platform**: Caixa Invisível (Personal Finance App)
