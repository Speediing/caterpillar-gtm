# Caterpillar x SpaceXAI

Passworded customer leave-behind for Caterpillar.

## What it is

Three GTM jobs on one page. Each job has a short problem statement, an interactive Grok Bot demo, and the matching product clip. Below that are a product comparison and the public Grok Bot quote wall.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Krista clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Deploy

Deploy under the `jasonwiker` Vercel team with project name `caterpillar-grokbot`. Set `SITE_PASSWORD=land2expand`.
