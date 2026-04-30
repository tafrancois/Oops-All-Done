# Oops, All Done

A productivity + self-care tracker with points, streaks, graphs, and a planner. Installable as a standalone app on phones and computers.

## Features

- Two user profiles + combined view
- Shared task library with emoji picker (including custom emojis)
- Daily points goal with progress bar and confetti celebration
- Stats: 7-day chart, task breakdown donut, user-vs-user comparison
- History tab with delete option
- Planner with calendar, per-day freeform notes, and checkable tasks
- Installable PWA — works offline once installed

## Deploy to GitHub Pages

1. Create a new repo on GitHub (any name, e.g. `tally_hoes`)
2. Upload ALL these files to the root of the repo:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-180.png`
   - `icon.svg` (optional, source for the icons)
3. Go to **Settings > Pages > Source**, pick your main branch, save
4. Site goes live at `https://<your-username>.github.io/<repo-name>/`

## How to Install on iPhone

1. Open the site URL in **Safari** (must be Safari, not Chrome)
2. Tap the Share button (square with up arrow)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**

The app icon appears on the home screen. Opens fullscreen with no browser chrome. Works offline.

## How to Install on Android

1. Open the site URL in **Chrome**
2. Tap the three-dot menu
3. Tap **Install app** or **Add to Home screen**
4. Confirm

## How to Install on Desktop (Chrome / Edge)

1. Open the site in Chrome or Edge
2. Click the install icon in the address bar (monitor with down arrow), or
3. Three-dot menu > **Install Tally Hoes**

## Updating the App

When you change `index.html`, bump the version number in `sw.js`:

```js
const CACHE = 'tally-hoes-v1';  // change to v2, v3, etc.
```

This forces installed PWAs to fetch the new version on next open.

## Data

All data is stored in the browser's localStorage. It's per-device — data on phone and data on laptop are separate. If you want sync later, you'd need a backend.
