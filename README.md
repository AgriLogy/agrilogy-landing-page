# Agrilogy Landing Page

Marketing site for **AgriLogy** — smart agriculture (IoT irrigation, precision farming, analytics).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Chakra UI](https://chakra-ui.com/)
- [Swiper](https://swiperjs.com/) (hero & partners)
- [EmailJS](https://www.emailjs.com/) (contact form)

## Package manager: npm **or** Yarn

Use **one** manager per clone and **commit its lockfile** (`package-lock.json` for npm, or `yarn.lock` for Yarn). Don’t mix them in the same repo without a reason.

### With npm

```bash
npm install
npm run dev
```

### With Yarn (classic v1)

```bash
yarn install
yarn dev
```

`yarn <script>` runs the same scripts as `npm run <script>` (e.g. `yarn build`, `yarn lint`).

### If install fails (`ENOTEMPTY`, broken `node_modules`)

```bash
rm -rf node_modules
# remove the lockfile for the tool you use:
rm -f package-lock.json   # npm
# rm -f yarn.lock         # yarn

npm cache clean --force   # npm
# yarn cache clean        # yarn

npm install   # or: yarn install
```

## Environment (optional)

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to your production URL for metadata / Open Graph.

## Scripts

| Script       | npm                    | Yarn                |
| ------------ | ---------------------- | ------------------- |
| Dev server   | `npm run dev`          | `yarn dev`          |
| Build        | `npm run build`        | `yarn build`        |
| Start (prod) | `npm run start`        | `yarn start`        |
| Lint         | `npm run lint`         | `yarn lint`         |
| Format       | `npm run format`       | `yarn format`       |
| Format check | `npm run format:check` | `yarn format:check` |

After install, **Husky** runs `prepare` and sets up Git hooks. On commit, **lint-staged** runs Prettier + ESLint on staged files.

## Project layout

- `src/app/page.tsx` — main landing page
- `src/app/components/ContactSection.tsx` — contact form & details
- `src/app/providers.tsx` — Chakra theme
- `public/img` — images
- `public/partners` — partner logos

## Deploy

Build with `npm run build` or `yarn build`, then host on Vercel, Netlify, or any Node/static host. Set the same env vars on the host.
