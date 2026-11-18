# Gracebound — Elden Ring Companion

A bilingual (Deutsch / English), responsive fan companion for **Elden Ring** and **Shadow of the Erdtree**.

## Features in the current version

- Region overview for the Lands Between and the Realm of Shadow
- Clickable schematic region map with region details
- Suggested progression levels and DLC Scadutree Blessing guidance
- Searchable atlas for bosses, NPCs, quests, places and exploration collectibles
- Personal checklist and notes, saved locally in the browser
- German / English language toggle and light / dark theme
- Static site: no server, account or build step required
- GitHub Pages deployment through GitHub Actions
- Service-worker app-shell caching for repeat offline visits on supported browsers

## Run locally

Open `index.html` in a modern browser. For the most reliable service-worker testing, serve this folder from a local static web server; local file mode still supports the core companion features.

## Publish on GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the build and deployment source.
3. Push to `main` (or run the workflow manually in the Actions tab).
4. The workflow publishes the static site automatically.

## Project notes

- The map is an original, schematic overview showing rough regional relationships. It is **not** a scale-accurate in-game map.
- Region levels are broad orientation ranges, not requirements.
- DLC progression additionally references Scadutree Blessing ranges.
- Progress and notes stay in the current browser on the current device. They are not synced between devices.
- This version focuses on exploration, locations, quests, characters and progression tracking.

## Credits and rights

Unofficial fan project, not affiliated with FromSoftware or Bandai Namco. Elden Ring, Shadow of the Erdtree and their related names and artwork belong to their respective rights holders. No original game artwork is bundled with this project.
