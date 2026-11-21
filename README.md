# Gracebound — Elden Ring Companion

A responsive German/English fan companion for Elden Ring and Shadow of the Erdtree.

## Current features (v0.9.0)

- Detailed quest atlas with 6 questlines and 36 intermediate stops, optional steps, branching notes and local checkmarks
- Direct map jumps from quest stops, regional station lists and Atlas details
- 18 extended boss profiles with story context and known encounter locations
- 24 map-fragment records (19 base game + 5 DLC), pickup notes and individual map links
- Sourced screenshot gallery with publisher/source credits
- Rune-farming area guide with one-time vs repeatable spots and level notes
- Six build archetypes with weapon and talisman locations, RL 150 stat targets, and leveling guidance
- Personal build library with notes, editing, and JSON backup import/export
- Personal checklist for 260+ map collectibles with filters, map jumps, and saved completion
- Defensive armor comparison based on weight, damage negation and resistance values (rule-based; not AI)

- Schematic regional overview for the Lands Between and the Realm of Shadow
- Region panels with relevant locations and connected entries
- Searchable atlas with pagination (60 entries per page) and detail dialogs
- Catalogue entries for bosses, armor pieces, locations, NPCs and creature families
- Five major NPC questline outlines, marked as spoiler-heavy
- Suggested progression ranges and DLC Scadutree Blessing guidance
- Personal checklist, category filter and notes saved in the current browser
- German/English interface and light/dark theme
- Static website with no backend or build step
- GitHub Pages deployment through GitHub Actions
- Service-worker app shell cache for repeat offline visits on supported browsers

## Data and source quality

See [SOURCES.md](SOURCES.md) for the source review, normalization method, data counts, quest/map references and image credits.

The catalogue is derived from structured community-wiki data and normalized for this project. The public reference checks include Elden Ring Wiki community pages for armor, boss encounters, characters and the bestiary.

The source data is secondary-reference material, not official game files. The project does not treat one wiki export as independent confirmation. Entries were normalized, duplicate boss aliases and creature variants were merged where identifiable, and the DLC flag for several boss entries was inferred from their named Realm of Shadow locations.

Important limitations:

- The 146 boss records are a useful index, not a promise that every field boss, dungeon encounter or variant is represented. Wiki counting methods differ; broader wiki lists describe more than 200 encounters.
- Some English proper names remain unchanged in German mode until a verified official German localization is available.
- Acquisition notes and community data can contain omissions or outdated details. Check important quest progression in-game.
- The map is an original schematic overview, not a scale-accurate in-game map.
- Level ranges are orientation values, not requirements.
- Boss and NPC portraits and descriptions load on demand from the Elden Ring API when online; they are not bundled with the static site.
- Map-marker coverage comes from community data and can include omissions or duplicate encounters.
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


## Version 0.6.0

- Interactive tiled map for the Lands Between, underground areas and the Realm of Shadow.
- Dedicated boss-location view with searchable map markers.
- Map filters for Sites of Grace, NPCs, all 154 imported talisman locations and selected collectibles.
- Boss and NPC map popups open matching Gracebound Atlas entries; details add community images and descriptions when online.
- Build guide with RL 150 Paladin, Sorcery, and Bleed archetypes, each with two variants and prefilled planner links.
- Scenic Elden Ring title-screen background with image credit.
- Personal named waypoints with notes, saved in the current browser.
- Searchable index of 31 NPC questlines and 280 location steps.
- Map tiles are loaded online; personal progress and waypoint data remain local to the browser.
