# Ready Labs — Design System Preview

Clickable dark preview of the **Ready Labs** family (Devco Labs LLC). It mocks the aesthetic — not live products. One shared visual language. Distinct flavor accents per product.

This is a static Next.js App Router site. No Stripe, no WhatsApp, no bookings, no auth.

## Accents

Shared tokens stay put: background, surface, border, text, radius, type, buttons.

`--flavor` (plus `--flavor-soft` and `--flavor-glow`) swaps per product via `data-flavor`:

| Product | Route | Accent |
|---|---|---|
| PageReady | `/pageready` | Cyan `#5CE1FF` |
| AfterHours Booker | `/afterhours` | Amber `#F5A524` |
| WaReady | `/waready` | Green `#3DFF9A` |
| SponsorReady | `/sponsorready` | Violet `#A78BFA` |
| Family / Tokens | `/` · `/tokens` | Neutral silver |

## How to review

1. Start on `/` — four product cards. Layout and functionality should impress; this page is the pitch.
2. Open each product. Same landing skeleton: sticky nav, hero, product theater, features, pricing stub, CTA.
3. Watch the theater:
   - PageReady: notes collapse into a one-pager
   - AfterHours: intake fills, booking confirms
   - WaReady: template flies, inbox pings
   - SponsorReady: agent kit lights up
4. Open `/tokens` and use the flavor switcher. Buttons, glow, and kickers should recolor without changing structure.
5. Click primary CTAs — they are mocks. Nothing charges or sends.

Review desktop and a phone-width viewport. Motion is CSS; it respects `prefers-reduced-motion`.

## Local run

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43173](http://127.0.0.1:43173)

```bash
npm run build
npm start
```

The app is a front-end mock only. `npm run build` must pass before review.

## Stack

Next.js 16, React 19, Tailwind v4, shadcn/ui, Inter. Pure front-end mock.
