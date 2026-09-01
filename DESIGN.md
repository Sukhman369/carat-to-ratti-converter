---
version: alpha
name: Obsidian & Vedic Gold (Gemological Atelier)
description: A high-precision, dark luxury design system for the Ratti to Carat gemological and Vedic astrology suite. Built on deep obsidian canvas, precise 1px starlight hairlines, pure monospaced technical readouts, and warm Vedic gold accents that evoke raw uncut gemstones under laboratory lighting.

colors:
  canvas: "#07090e"
  canvas-subtle: "#0c1017"
  canvas-card: "#111622"
  canvas-elevated: "#171e2e"
  canvas-input: "#090d15"

  primary: "#f59e0b"
  primary-hover: "#fbbf24"
  primary-glow: "rgba(245, 158, 11, 0.22)"
  on-primary: "#000000"

  ink: "#f8fafc"
  ink-secondary: "#94a3b8"
  ink-muted: "#64748b"
  ink-faint: "#334155"

  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-strong: "rgba(255, 255, 255, 0.16)"
  hairline-gold: "rgba(245, 158, 11, 0.35)"

  gem-ruby: "#f43f5e"
  gem-sapphire: "#3b82f6"
  gem-emerald: "#10b981"
  gem-pearl: "#e2e8f0"
  gem-coral: "#fb923c"
  gem-heera: "#38bdf8"
  gem-gomed: "#a855f7"
  gem-lehsuniya: "#ca8a04"

typography:
  display-xl:
    fontFamily: Outfit, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: -1.4px
  heading-lg:
    fontFamily: Outfit, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: -0.8px
  heading-md:
    fontFamily: Outfit, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.4px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  code-mono:
    fontFamily: Geist Mono, monospace
    fontSize: 14px
    fontWeight: 500
    letterSpacing: -0.2px

components:
  calculator-card:
    background: "{colors.canvas-card}"
    border: "1px solid {colors.hairline}"
    borderRadius: 24px
    padding: 32px
  metric-tile:
    background: "{colors.canvas-subtle}"
    border: "1px solid {colors.hairline}"
    borderRadius: 14px
    padding: 16px
  button-primary:
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    borderRadius: 9999px
    fontWeight: 600
    padding: "10px 24px"
  button-secondary:
    background: "rgba(255, 255, 255, 0.05)"
    color: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    borderRadius: 9999px
    fontWeight: 500
    padding: "10px 20px"
