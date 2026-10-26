# Task Planner

(formerly *Oops, All Done*)

A daily planner + self-care tracker with sub-tasks, maybe-lists, routines, points, streaks, and graphs. Installable as a standalone app on phones and computers.

## Features

- Two user profiles + combined view
- Shared task library with emoji picker (including custom emojis)
- Daily points goal with progress bar and confetti celebration
- Stats: 7-day chart, task breakdown donut, user-vs-user comparison
- History tab with delete option
- **Planner is the home screen** — calendar + checkable list for each day
- **Sub-tasks** — press Tab (or the ⇥ indent button on phones) to nest a task; checking all sub-tasks checks the parent
- **Must-do / maybe lists** — maybes don't count against "all done", and unfinished ones can be moved to any day with 📅 move
- **⏰ Times + durations** — toggle on to show pills like `3pm` · `45m`; type `@3pm` / `~45m` or tap the pill to set them
- **Routines** — saved task lists that auto-add on chosen weekdays, or drop in with one tap
- **Notes** — a per-day notes box under the list
- **Daily streak** — counts consecutive days you open the app
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
3. Three-dot menu > **Install Task Planner**

## Updating the App

When you change `index.html`, bump the version number in `sw.js`:

```js
const CACHE = 'task-planner-v7';  // change to v7, v8, etc.
```

This forces installed PWAs to fetch the new version on next open.

## Data

All data is stored in the browser's localStorage. It's per-device — data on phone and data on laptop are separate. If you want sync later, you'd need a backend.

Storage key is still `tallyHoes_v1`, so updating from Oops, All Done keeps all existing data.
