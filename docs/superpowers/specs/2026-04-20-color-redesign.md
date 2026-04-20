---
title: Color Redesign — Replace Orange with Off-Black & Deep Amber
date: 2026-04-20
status: approved
---

## Summary

Replace the orange accent (#f0a000) with:
- **Off-black (#1c1a17)** on primary buttons
- **Deep amber (#92400e)** on all other accent elements (eyebrows, bullet borders, stat numbers, links, sup elements)

Background, text, surfaces, and borders are unchanged.

## Token changes

| Variable | Before | After |
|---|---|---|
| `--color-accent` | `#f0a000` | `#92400e` |
| `--color-accent-strong` | `#de9300` | `#78350f` |

## Element-level changes (all in `src/styles/global.css`)

| Element | Property | Before | After |
|---|---|---|---|
| `.button-primary` | `background` | `var(--color-accent)` | `#1c1a17` |
| `.button-primary` | `color` | `#1b1408` | `#fcf8f1` |
| `.button-primary` | `box-shadow` | amber glow | `0 14px 32px rgba(28,26,23,0.18)` |
| `.button-primary:hover` | `background` | `var(--color-accent-strong)` | `#111010` |
| `.button-secondary:hover` | `border-color` | `rgba(240,160,0,0.32)` | `rgba(28,26,23,0.22)` |
| `body` bg gradients | radial stops | `rgba(240,160,0,…)` | `rgba(146,64,14,…)` |
| `::selection` | `background` | `rgba(240,160,0,0.24)` | `rgba(146,64,14,0.18)` |
| `.button-primary:focus-visible` | `outline` | `rgba(240,160,0,0.55)` | `rgba(146,64,14,0.5)` |
| `.button-secondary:focus-visible` | `outline` | `rgba(240,160,0,0.55)` | `rgba(146,64,14,0.5)` |
| `.skip-link` | `border` | `rgba(240,160,0,0.32)` | `rgba(146,64,14,0.28)` |
| `.mobile-nav[open] summary` | `border-color` | `rgba(240,160,0,0.5)` | `rgba(146,64,14,0.45)` |
| `.article-content a` | `text-decoration-color` | `rgba(240,160,0,0.34)` | `rgba(146,64,14,0.34)` |

All other uses of `var(--color-accent)` update automatically via the token.
