# 🚫 No Feed LinkedIn

**Stop doomscrolling. Start job hunting.**

The LinkedIn feed is a wall of promoted posts, recycled hot takes and AI-generated "thought leadership". You opened LinkedIn to find a job, not to read a 14-paragraph story about a CEO and a croissant.

**No Feed LinkedIn** is a tiny Chromium extension that sends you from `linkedin.com/feed/` straight to `linkedin.com/jobs/`. No feed, no slop, just opportunities.

## ✨ Features

- 🎯 Redirects `https://www.linkedin.com/feed/` → `https://www.linkedin.com/jobs/`
- ⚡ Catches full page loads *and* LinkedIn's in-app (single-page) navigation, e.g. clicking the Home icon
- 🔒 No data collected, no network requests, no tracking. Only needs access to `linkedin.com`
- 🪶 Zero dependencies, ~20 lines of code

## 📦 Install (Chrome, Edge, Brave, and other Chromium browsers)

1. Clone or download this repo.
2. Open `chrome://extensions` (or `edge://extensions`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this folder.
5. Go to LinkedIn and click Home. Enjoy the jobs page instead.

## 🔧 How it works

- `rules.json` – a `declarativeNetRequest` rule that redirects direct loads of the feed.
- `background.js` – listens to `webNavigation` events (including History API changes) and redirects client-side navigation to the feed.

## 🛠 Customizing

Want to land somewhere else (e.g. `/mynetwork/`)? Change the URL in `rules.json` and `JOBS_URL` in `background.js`.

## 📄 License

MIT. Go get that job. 💼
