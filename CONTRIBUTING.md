# Contributing to `agri-landing-page`

## What this repo is

`AgriLogy/agri-landing-page` is the **public marketing site** — a single-page Next.js 15 (App
Router) site built with Chakra UI v2, `next-intl`, Swiper and `framer-motion`.

Verified against the source at the time of writing:

- **No farmer data, no authenticated API calls.** `grep` over `src/` finds no `fetch(`, no API
  client, no auth/session/token code, and no `process.env` reads at all. The only outbound call is
  the contact form, which posts to **EmailJS** from the browser
  (`src/app/components/ContactSection.tsx`) using publishable service/template/public keys that are
  **hard-coded in that file**.
- **No links to the product apps.** There are no links to `app.agrogo-datafarm.com`,
  `identity.…`, `back.…` or any login page anywhere in `src/`. Every nav item is an in-page anchor
  (`#home`, `#about`, `#services`, `#products`, `#platform`, `#industry`, `#equipment`,
  `#partners`, `#contact`); the only external links are the footer socials (Facebook, Instagram,
  WhatsApp, LinkedIn) and `mailto:contact@agrogo.ma` / `tel:`. If a "Log in / Open the app" CTA is
  wanted, it does not exist yet — add it deliberately, don't assume it's there.

## Prerequisites & first-time setup

Node 20+ (`@types/node: ^20`) and npm (repo ships `package-lock.json`).

```bash
git clone git@github-personal:AgriLogy/agri-landing-page.git
cd agri-landing-page
npm ci
npm run dev            # http://localhost:3000
```

### Environment variables

**None.** No `.env` file is read by the code — there is not a single `process.env` reference in
`src/`. `.gitignore` ignores `.env*` for safety, but nothing consumes it today. EmailJS credentials
live inline in `ContactSection.tsx`; moving them to `NEXT_PUBLIC_*` vars would be a welcome change
but is **not** the current state.

## Dev loop

| Task | Command | Notes |
|---|---|---|
| Dev server | `npm run dev` | `next dev --turbopack` |
| Production build | `npm run build` | `next build --turbopack` |
| Serve the build | `npm start` | after `npm run build` |
| Lint | `npm run lint` | flat config, `next/core-web-vitals` + `next/typescript` |
| Typecheck | `npx tsc --noEmit` | **no `typecheck` script exists** — run it manually |

There is **no test runner** in this repo (no `test` script, no jest/vitest dependency).

**Before opening a PR, all three must pass:**

```bash
npx tsc --noEmit && npm run lint && npm run build
```

`tsconfig.json` is `strict: true` with the `@/*` → `./src/*` path alias.

## Layout

| Path | What lives there |
|---|---|
| `src/app/layout.tsx` | Root layout: `<Metadata>` (title/description), `<html lang dir>`, `NextIntlClientProvider`, `Providers` |
| `src/app/page.tsx` | **The entire landing page** — every section, ~1100 lines, one default-exported client component |
| `src/app/providers.tsx` | Chakra `extendTheme` — green palette, fonts, `radii.card/button`, `shadows.card/card-hover`, direction |
| `src/app/globals.css` | CSS vars (light/dark), `scroll-behavior: smooth`, resets |
| `src/app/page.module.css` | Legacy create-next-app module CSS (largely unused) |
| `src/app/favicon.ico` | Favicon |
| `src/app/components/ContactSection.tsx` | Contact form (EmailJS) + contact info cards |
| `src/app/components/LanguageSwitcher.tsx` | Locale menu; calls the `setUserLocale` server action then `router.refresh()` |
| `src/i18n/config.ts` | `locales`, `defaultLocale`, `LOCALE_COOKIE`, `isRtl`, `dirFor`, `localeNames` |
| `src/i18n/locale.ts` | Server actions `getUserLocale` / `setUserLocale` (cookie `NEXT_LOCALE`, 1 year) |
| `src/i18n/request.ts` | `getRequestConfig` — loads `src/messages/<locale>.json`; wired in `next.config.ts` |
| `src/messages/{fr,en,ar}.json` | **All copy.** 149 leaf keys each, currently in exact parity |
| `public/img/` | Hero/product/equipment photos + **the logo: `public/img/logo_Plan de travail 1.png`** |
| `public/platform/` | Platform-capability screenshots (`1.jpeg`, `2.jpeg`) |
| `public/partners/` | Partner logos referenced by the `PARTNERS` array in `page.tsx` |
| `public/{next,vercel,file,globe,window}.svg` | create-next-app leftovers, unused |

Section IDs in `page.tsx`, in order: `home`, `about`, `services`, `products`, `platform`,
`platform-features`, `industry`, `equipment`, `partners`, `contact`, then the footer.

### Locales

`fr` (**default**), `en`, `ar`. **Arabic is RTL** — `dirFor()` returns `rtl` and the value is
applied both to `<html dir>` (`layout.tsx`) and to the Chakra theme (`providers.tsx`). Locale is
cookie-based (`NEXT_LOCALE`); there is **no `/fr`, `/en`, `/ar` URL segment** and no middleware.

## Worked example — adding a marketing section

Say you're adding a "Testimonials" section between `#partners` and `#contact`.

1. **Copy first, in all three locales.** Add the same key path to
   `src/messages/fr.json`, `src/messages/en.json` and `src/messages/ar.json`. Follow the existing
   shape: section chrome goes under `sections.*` (`<name>Eyebrow`, `<name>Title`), body copy under
   its own namespace.

   ```jsonc
   // src/messages/fr.json  (mirror in en.json and ar.json)
   "sections": { "testimonialsEyebrow": "Ils témoignent", "testimonialsTitle": "Témoignages" },
   "testimonials": { "quote1": "…", "author1": "…" }
   ```

   Never ship a key in one file only — `next-intl` will throw at render for the missing locale.
   Keep the Arabic string genuinely translated, not a copy of the French.

2. **Markup.** Either add the `<Box id="testimonials">` block inline in `src/app/page.tsx` next to
   its neighbours, or — preferred for anything non-trivial — create
   `src/app/components/TestimonialsSection.tsx` (`"use client"`), read copy with
   `const t = useTranslations("testimonials")`, and render it from `page.tsx` like
   `ContactSection`. Reuse the established section skeleton: `<Box id py={{base:16,md:24}} bg={…}>`
   → eyebrow `<Text>` → `<Heading size="xl" color="green.600">` → the green underline `<Box>` →
   `<Container>`. Use the theme tokens (`boxShadow="card"`, `borderRadius="2xl"`, `colorScheme="green"`)
   rather than new hard-coded colours, and `useColorModeValue` for anything background-ish.

3. **Nav entry.** Add `nav.testimonials` to all three message files and an anchor `<Link href="#testimonials">`
   in the header nav of `page.tsx`, matching the surrounding items.

4. **Images.** Drop files in `public/<group>/` (`public/img/` for photos, a new folder for a new
   group) and reference them by absolute public path, e.g. `src="/img/testimonial-1.jpg"`. Note the
   repo currently uses **Chakra's `<Image>` (a plain `<img>`) everywhere — `next/image` is not used
   at all**, so there is no automatic optimization: compress/resize before committing (existing
   assets sit at 4 KB–420 KB; keep new ones well under ~300 KB), prefer `.jpg`/`.webp` for photos
   and `.png` only for logos with transparency, and always pass a meaningful `alt`. Repeating
   collections belong in a module-level array like `PARTNERS` / `PLATFORM_FEATURES` at the top of
   `page.tsx`.

5. **Verify** in all three locales via the language switcher, including the RTL Arabic pass, then
   run the three gate commands above.

## Content / SEO conventions

Only what is actually in the repo today:

- **Metadata** is a single static `export const metadata: Metadata` in `src/app/layout.tsx`
  (`title: "AgriLogy — Smart Agriculture"`, `description: "IoT-based irrigation & farm analytics
  that boost yields."`). It is **not localized** — update it there if the wording changes.
- `<html lang>` and `<html dir>` are set per-locale from the cookie.
- **No `sitemap.ts`/`sitemap.xml`, no `robots.ts`/`robots.txt`, no `opengraph-image`, no
  `twitter-image`, no JSON-LD, no canonical/`metadataBase`.** These simply do not exist yet; adding
  them is a legitimate improvement, not a convention to follow.
- Only `src/app/favicon.ico` is wired as an icon.
- Alt text on images is the one accessibility convention consistently applied.

## Branch & PR rules

- Branch off **`main`**. Name branches by scope, e.g. `feat/testimonials-section`,
  `fix/ar-nav-overflow`.
- **One dedicated, scope-matched issue per PR.** Open the issue first; the PR body contains
  `Closes #N`. Both the issue and the PR are **assigned to the author (`mks-zakaria`)**.
- PR titles follow **Conventional Commits** — `feat(i18n): add Arabic, French & English localization`
  is the reference example from this repo's history. (No commitlint hook is installed here; the
  convention is enforced by review.)
- **Zero AI/assistant attribution anywhere** — no `Co-Authored-By` bots, no "generated with" footers,
  no mention in commit messages, branch names, issues or PR descriptions.
- Keep PRs scoped: a copy change, a section, or a fix — not a bundle.

## Deploy

- No `.github/workflows/` exist in this repo — **there is no CI**. `npx tsc --noEmit`,
  `npm run lint` and `npm run build` are the reviewer's/author's responsibility.
- Deployment is via **Vercel's GitHub integration**: merging to `main` ships production, and each
  PR gets an automatic preview URL commented on the PR. There is **no `vercel.json` and no checked-in
  `.vercel/` link** in the repo, so the exact project/domain wiring is *not documented in-repo* —
  confirm in the Vercel dashboard before assuming a domain.
- Nothing else consumes this repo (no package publish, no Docker image).

## Git remote gotcha

The remote uses an **SSH host alias**, not `github.com`:

```
origin  git@github-personal:AgriLogy/agri-landing-page.git
```

`github-personal` must be defined in your `~/.ssh/config`, e.g.

```sshconfig
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/<your-key>
```

Without that block, a fresh clone or `git push` fails with
`ssh: Could not resolve hostname github-personal`. Either add the alias or re-point the remote to
`https://github.com/AgriLogy/agri-landing-page.git`.
