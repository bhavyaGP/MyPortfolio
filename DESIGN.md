---
name: Bhavya Prajapati portfolio
colors:
  ground: "#e9ece7"
  surface: "#dde1da"
  ink: "#11161b"
  muted: "#454d55"
  action: "#0a4a8a"
  night-ground: "#0a0f16"
  night-surface: "#111823"
  night-ink: "#e8edf3"
  lamp-go: "#1f9d55"
  lamp-warn: "#d98a00"
  lamp-stop: "#c8372d"
typography:
  display: "Barlow Semi Condensed, 600"
  text: "Barlow, 400-600"
  mono: "JetBrains Mono, terminal and figures only"
rounded:
  controls: 999px
  plates: 20px
  nodes: 12px
---

# Design system: signal-box panel

The page is a railway signal-box track diagram. Work is the line, sections are stations, lit lamps show what is running.

## Colour
Enamel-plate grey ground with near-black ink. One enamel blue carries actions (white on blue in light, off-white in night mode). Lamp colours (green, amber, red) appear only as small lit lamps, never as fills. The terminal and architecture figures stay on the night panel in both themes.

## Type
Barlow Semi Condensed 600 for headlines and station names, Barlow for text, JetBrains Mono only inside the terminal and figures. Sentence case, no tracked capitals.

## Shape
Rounded plates (20px) with a 1.5px ink keyline, no soft shadows. Controls and chips are pills; figure nodes 12px; lamps are circles.

## Signature
- Header nav is a line diagram: a station square per link, the section in view lit green.
- Every section head sits under a track rule (1.5px line) with a junction lamp at its start.
- Under the hero terminal a short line lists the running systems (ValuraAI, QuickLearnAI, Coding evaluation) with lit lamps.
- Motion: lamps switch on once (900ms ease-out); reduced motion turns it off.

## Do not
Add kickers above headings, section numbers, gradient text, glows, or lamp colours as backgrounds. Do not state a status (amber, red) for any real system without evidence.
