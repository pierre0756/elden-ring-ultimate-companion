# Gracebound — Elden Ring Companion

A responsive German/English fan companion for Elden Ring and Shadow of the Erdtree.

## Current features

- Schematic regional overview for the Lands Between and the Realm of Shadow
- Region panels with relevant locations and connected entries
- Searchable atlas with pagination (60 entries per page)
- Catalogue entries for bosses, armor pieces, locations, NPCs and creature families
- Five major NPC questline outlines, marked as spoiler-heavy
- Suggested progression ranges and DLC Scadutree Blessing guidance
- Personal checklist, category filter and notes saved in the current browser
- German/English interface and light/dark theme
- Static website with no backend or build step
- GitHub Pages deployment through GitHub Actions
- Service-worker app shell cache for repeat offline visits on supported browsers

## Data and source quality

The catalogue is derived from structured community-wiki data and normalized for this project. The public reference checks include Elden Ring Wiki community pages for armor, boss encounters, characters and the bestiary.

The source data is secondary-reference material, not official game files. The project does not treat one wiki export as independent confirmation. Entries were normalized, duplicate boss aliases and creature variants were merged where identifiable, and the DLC flag for several boss entries was inferred from their named Realm of Shadow locations.

Important limitations:

- The 146 boss records are a useful index, not a promise that every field boss, dungeon encounter or variant is represented. Wiki counting methods differ; broader wiki lists describe more than 200 encounters.
- Some English proper names remain unchanged in German mode until a verified official German localization is available.
- Acquisition notes and community data can contain omissions or outdated details. Check important quest progression in-game.
- The map is an original schematic overview, not a scale-accurate in-game map.
- Level ranges are orientation values, not requirements.
- Images and original game artwork are not bundled.
- Progress is stored locally in the browser and is not synchronized between devices.

## Run locally

Open `index.html` in a modern browser. Core catalogue, search and local progress work without a server. For service-worker/offline-cache testing, serve the folder with a local static web server; browsers do not enable service workers on `file://` pages.

## Publish on GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Select **GitHub Actions** as the deployment source.
3. Push to `main` or run the workflow manually in the Actions tab.
4. GitHub Actions publishes the static site.

## Credits and rights

Unofficial fan project, not affiliated with FromSoftware or Bandai Namco. Elden Ring, Shadow of the Erdtree and all related names and assets belong to their respective rights holders. This project does not bundle original game artwork.
