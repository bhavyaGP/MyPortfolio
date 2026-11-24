---
name: Bhavya Prajapati
description: A black window at night; every panel is a drop of liquid glass that bends the giant lettering behind it.
colors:
  night-window: "#050505"
  dawn-window: "#f1f1f1"
  intro-black: "#000000"
  white-ink: "#ffffff"
  black-ink: "#0a0a0a"
  night-grey: "#a3a3a3"
  dawn-grey: "#525252"
  word-night: "#1e1e1e"
  word-night-hero: "#262626"
  word-dawn: "#cfcfcf"
  word-dawn-hero: "#c2c2c2"
  raster-night: "rgb(255 255 255 / .065)"
  raster-dawn: "rgb(0 0 0 / .07)"
  smoke-night: "rgb(0 0 0 / .45)"
  smoke-dawn: "rgb(12 12 12 / .84)"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(104px, 24vw, 370px)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.045em"
  anchor-word:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(120px, 21vw, 320px)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 64px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(28px, 2.8vw, 42px)"
    fontWeight: 600
    lineHeight: 1.04
  title-tile:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 40px)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
  body-sm:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  pane: "28px"
  pane-phone: "22px"
  media: "16px"
  node: "12px"
  pill: "999px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.black-ink}"
    textColor: "{colors.white-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-primary-night:
    backgroundColor: "{colors.white-ink}"
    textColor: "{colors.black-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-secondary:
    textColor: "{colors.black-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  glass-pane:
    rounded: "{rounded.pane}"
    padding: "32px"
  smoked-pane:
    backgroundColor: "{colors.smoke-dawn}"
    textColor: "{colors.white-ink}"
    rounded: "{rounded.pane}"
  nav-drop:
    rounded: "{rounded.pill}"
    padding: "6px"
    height: "56px"
  nav-link:
    textColor: "{colors.dawn-grey}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  label-band:
    textColor: "{colors.dawn-grey}"
    typography: "{typography.label}"
    padding: "0 0 8px"
---

# Design System: Bhavya Prajapati

## Overview

**Creative North Star: "The Night Window"**

The page is a black window at night. A fine line raster runs across the pane, his name and each section's anchor word sit huge and grey on it, and every panel is a drop of liquid glass in front of that lettering, so the drops visibly bend the letters at their rims. The light theme is the same window at dawn: a pale grey pane, pale grey lettering, dark ink. Nothing else changes between the two.

The system is monochrome by law. Pure black, white and greys carry every role; depth comes from glass, rim light and a soft drop shadow rather than from colour. Type is condensed and heavy where it is scenery (name, anchor words, headings), plain Barlow where it is reading, and JetBrains Mono only where the page shows machine facts: the terminal, the architecture figures and the label bands.

There is one pane module, repeated like a meter bridge: one radius, one rim, one sheen, one shadow, used for the nav, the statement, the project tiles, the rows, the hackathon chapters, the activity cards and the closing call. It refuses the flat dark developer hero and frosted cards over an empty ground.

**Key Characteristics:**
- Monochrome: black, white and greys only, in both themes.
- A 32px line raster on the window ground; giant grey lettering behind the panes.
- One liquid-glass module everywhere, with real rim refraction in Chromium.
- Smoked glass for the terminal and figures, dark in both themes so the mono stays white.
- A mono label band on every pane: facts only (where, when, stack, result).
- An intro of four words made of heavy glass on pure black.

## Colors

A greyscale palette with no hue anywhere: the window, the ink, and a ladder of greys between them.

### Primary
- **White Ink** (white-ink): the ink of the night window, the primary button in dark theme, all text on smoked glass and on the intro.
- **Black Ink** (black-ink): the ink of the dawn window and the primary button in light theme.

### Neutral
- **Night Window** (night-window): the dark-theme ground, under the raster.
- **Dawn Window** (dawn-window): the light-theme ground, under the raster.
- **Intro Black** (intro-black): the greeting's ground in both themes; pure black so the glass words read as light.
- **Night Grey** (night-grey) / **Dawn Grey** (dawn-grey): muted text per theme: leads, nav links at rest, label bands.
- **Word Night** (word-night) / **Word Night Hero** (word-night-hero): the anchor words and the hero name on the night window. Barely above the ground on purpose; they are scenery for the glass to bend, not reading text.
- **Word Dawn** (word-dawn) / **Word Dawn Hero** (word-dawn-hero): the same lettering at dawn.
- **Raster** (raster-night / raster-dawn): the 1px vertical lines every 32px; horizontals at half that strength (rgb(255 255 255 / .03) at night, rgb(0 0 0 / .035) at dawn).
- **Smoke** (smoke-night / smoke-dawn): the smoked-glass body for the terminal and figures.

### Named Rules
**The No Hue Rule.** Every colour on the page is a neutral. Terminal states that were once green, blue and red are greys (#fff, #bdbdbd, #d4d4d4); the GitHub heat cells are ink mixed into the ground at 22, 45, 70 and 100%.

**The Scenery Grey Rule.** Anchor words and the hero name stay within a few steps of the window. They are decorative, `aria-hidden` where duplicated, and never carry information.

## Typography

**Display Font:** Barlow Semi Condensed (with Barlow, system-ui)
**Body Font:** Barlow (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** A heavy condensed grotesque for the lettering on the window and the headings, a calm humanist grotesque for reading, and a mono that appears only where the page shows machine output.

### Hierarchy
- **Display** (700, clamp(104px, 24vw, 370px), 0.8): the hero name, two lines across the window, set in word-hero grey. 22vw at tablet, 25vw on phones. Drifts with page scroll.
- **Anchor word** (700, clamp(120px, 21vw, 320px), 0.8): one word per section (Work, Experience, Hackathons, Awards, Stack, Activity, Contact), hung below the section head and behind the first panes. 30vw on phones.
- **Headline** (700, clamp(36px, 4.4vw, 64px), 0.98, -0.02em): section headings, balanced wrap.
- **Title** (600, clamp(28px, 2.8vw, 42px), 1.04): the hero statement. Tile titles take 700 at clamp(28px, 2.6vw, 40px), line height 1.
- **Body** (400, 18px): section leads (max 60ch) and tile copy (max 52ch). Kit body is 16px.
- **Label** (500, 13px, 1.4, JetBrains Mono): the label band on every pane; muted grey; sentence case, no tracking.

### Named Rules
**The Mono Means Machine Rule.** JetBrains Mono is used only in the terminal, the architecture figures and the label bands. Headings, buttons and navigation are never mono.

**The No Kicker Rule.** Nothing sits above a heading: no eyebrow, no tracked uppercase label. The anchor word hangs below the head, and the label band holds facts inside the pane.

## Layout

A 12-column kit grid inside a centred wrap, on the kit's 4/8 spacing scale (s-1 to s-10). Sections pad clamp(96px, 9vw, 150px) top and bottom; the footer opens with clamp(150px, 15vw, 230px) above so its anchor word has room. The section head sits 48px (s-7) above its panes; the anchor word starts 24px (s-5) below the head and runs under the first row of panes.

The hero fills 100svh: the name is set absolutely 92px from the top, and the grid starts clamp(240px, 21.5vw, 320px) down, so the terminal (columns 1 to 7) and the statement pane (columns 8 to 12) both sit over the name's second line. Below 1024px they stack to full width and the nav links fold away, leaving the logo drop, the theme switch and the email pill. Below 640px the pane radius drops to 22px, pane padding to 24px, and the hidden "phone-hide" rows drop out.

Only the pinned hackathon chapter keeps a screen-multiple height; every other section is content height. Breakpoints: 640px and 1024px.

## Elevation & Depth

Depth is glass, not colour and not stacked surfaces. Each pane is a thin tint with a top-down sheen, a bright 1px top rim, a 1px inner edge, a soft inner glow at the bottom and a long, low drop shadow. Behind it the page's own lettering and raster are blurred lightly and, in Chromium, bent at the rim by an SVG displacement map drawn for that pane's size and corner. Other browsers keep a 16px backdrop blur and the rim.

### Shadow Vocabulary
- **Pane, dawn** (`0 28px 56px -30px rgb(0 0 0 / .32)`): every glass pane in light theme.
- **Pane, night** (`0 30px 60px -24px rgb(0 0 0 / .9)`): every glass pane in dark theme.
- **Rim** (`inset 0 1px 0` rim colour, white at dawn, white at 50% at night): the lit top edge.
- **Edge** (`inset 0 0 0 1px` edge colour, black at 9% at dawn, white at 10% at night): the pane's outline and its internal hairlines.
- **Inner glow** (`inset 0 -12px 28px -16px` sheen colour): the thickness at the bottom of the drop.

### Named Rules
**The Something Behind Rule.** Glass always has type or raster behind it. A pane over flat, empty ground is not glass; move it over the lettering or do not use the module.

**The One Drop Rule.** Glass is never nested inside glass. Inside a pane, actions are solid ink or plain links.

## Shapes

Soft, generous corners from one value: panes at 28px (22px on phones), pills at 999px for the nav drops and buttons, media inside a pane inset to 16px (the pane radius minus its 12px padding) so corners stay concentric, figure nodes at 12px. No hard corners and no visible borders: edges are drawn by the rim and edge insets, never by a 1px border.

## Components

### Buttons
- **Shape:** pill (999px), 44px tall, 24px side padding, Barlow 500 16px.
- **Primary:** solid ink: black-ink on light, white-ink on dark, with the window colour as its label. As built, its fill does not change on hover (the kit's hover mixes the action toward the ink, which is the same colour here). One primary per view: Email Bhavya.
- **Secondary:** an ink pill at 8% with the glass rim and edge but no backdrop (it sits inside a pane, and glass never nests). Hover lifts the ink to 14%. Used for Resume.
- **Focus:** a 2px ink outline, 3px offset, on everything.

### Glass pane (signature)
- **Corner Style:** pane radius (28px / 22px).
- **Background:** sheen gradient (top 38%) over the tint; light tint white at 18%, night tint white at 4%.
- **Backdrop:** Chromium: per-pane displacement map, band = min(max(r, 16) x 1.6, 56, w/3, h/3), scale = band x 1.2, then blur(2px dawn / 1.5px night), saturate(1.4), brightness(1.03 dawn / 1.45 night). Elsewhere: blur(16px) saturate(1.5).
- **Internal Padding:** 32px (s-6); tiles 16px around their media, 12px inset for text.
- **Hairlines inside:** row dividers and band rules use the edge colour.

### Smoked glass
The terminal and the three architecture figures. Same radius and refraction, but the body is smoke (black at 84% at dawn, 45% at night) with a white rim at 45% and a white edge at 12%, so mono text stays white in both themes. Inner boxes are white at 4%.

### Label band
A mono strip on every pane: 13px JetBrains Mono 500, muted grey, 8px under it and a 1px edge-colour hairline below. In the hero statement it moves to the bottom with the hairline above; in the closing call it has no rule. Facts only: where, when, stack, result.

### Navigation
Two drops at the top, 18px from the edge, 56px tall. The logo drop (pill, Barlow Semi Condensed 600 19px) sits on the left; the link drop sits centred and holds the section links (Barlow 500 16px, muted at rest), the theme switch and the email pill. Hover tints 8% ink, the current section 14% ink, colour and background easing 160ms. Both drops use a lighter glass: blur 7px and a 45% window-colour tint. Below 1024px the links hide and the link drop moves right.

### Anchor words
Each section head carries a `data-word`; the word renders as a pseudo-element below the head, behind the first panes, in word grey. With scroll-driven animation available and motion allowed it drifts sideways from 4vw to -8vw across the section's view, so the rims keep bending different letters. The hero name drifts the same way over the first 100vh.

### Intro
On load, a pure black ground with a white raster at 5% and six words in turn: Hello, Kem cho, Hola, Ciao, Aloha, Bonjour (Barlow Semi Condensed 700). Each word is heavy glass: an element masked to the letters that bends and brightens (2.6) what is behind, with a white rim stroke brightest at the top. The pace accelerates: Hello holds 1.3s, Kem cho 0.8s, then each word comes faster (0.5s, 0.3s, 0.2s) with shorter gaps and quicker rises from 0.9 scale; Bonjour holds 0.65s as the landing beat. About 5s in all. A click, any key or the Skip pill ends it; reduced motion skips it entirely.

### Cursor
A sharp Figma-style arrow, black with a white outline, legible on both windows; the pointer state uses the same arrow. Text fields and editable areas keep their caret.

## Do's and Don'ts

### Do:
- **Do** keep every colour a neutral: black, white or a grey from the palette.
- **Do** build every panel from the one glass module (28px, rim, sheen, shadow) and let mount.jsx add the refraction.
- **Do** put type or raster behind every pane: the hero name or a section's anchor word.
- **Do** give every pane a label band with facts, in 13px JetBrains Mono.
- **Do** use smoked glass for terminal and figure content in both themes.
- **Do** keep the primary button solid ink and the secondary a glass pill on lettering.

### Don't:
- **Don't** introduce any hue: no accent colour, no coloured states, no tinted greys.
- **Don't** put kickers, eyebrows or tracked labels above headings.
- **Don't** place glass over flat ground; glass must always have type or raster behind it.
- **Don't** nest glass inside glass.
- **Don't** use JetBrains Mono outside the terminal, the figures and the label bands.
- **Don't** draw pane edges with borders; the rim and edge insets are the outline.
