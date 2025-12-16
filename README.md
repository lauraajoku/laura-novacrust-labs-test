# Laura Novacrust Labs Test

Next.js + Tailwind playground for the crypto convert UI task.

## Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm installed globally: `npm install -g pnpm`

## Setup
1) Install dependencies
```bash
pnpm install
```

2) Start the dev server
```bash
pnpm dev
```
The app runs on http://localhost:3000.

## Useful scripts
- `pnpm dev` – run Next.js in development mode.
- `pnpm build` – create the production build.
- `pnpm start` – serve the production build (after `pnpm build`).
- `pnpm lint` – run ESLint.

## Notes
- This repo uses pnpm (a lockfile is provided). If you prefer npm or yarn, delete `pnpm-lock.yaml` and reinstall, but pnpm is recommended for consistency.

### Assumptions Made
- Pay and receive amount are equal. Same amount you pay is same amount you receive.