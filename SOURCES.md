# Quellenprüfung und Datenmethodik

Stand der Auswertung: 18.11.2026

## 1. Quellenhierarchie

Die Datenbank nutzt drei unterschiedliche Evidenzarten:

1. **Community-Wiki-Referenzen:** Für die Prüfung von Rüstungswerten, Figuren, Kreaturen und Bossübersichten wurden thematisch passende Seiten des Elden Ring Wiki / Eldenpedia herangezogen. Diese Seiten sind gemeinschaftlich gepflegte Sekundärquellen und keine offiziellen Spieldateien.
2. **Strukturierter Community-Datensatz:** Ein maschinenlesbarer Export dient als Ausgangspunkt für Namen, Kennzahlen und Fundortzuordnungen. Die Dokumentation des Exports verweist auf eine Wiki-basierte Zusammenstellung. Die Herkunft jedes einzelnen Feldes wurde nicht unabhängig rekonstruiert.
3. **Redaktionelle Normalisierung:** Dubletten, Varianten und uneinheitliche Ortsbezeichnungen wurden im Projekt vereinheitlicht. Wo sich ein Detail nicht sicher zuordnen ließ, blieb es leer oder wurde als unsicher gekennzeichnet.

Wichtig: Ein Community-Export und ein Wiki, aus dem der Export abgeleitet wurde, sind keine zwei unabhängigen Bestätigungen. Deshalb wird die Übereinstimmung dieser Quellen nicht als doppelte Evidenz gewertet.

## 2. Verwendete Referenzen

- Elden Ring Wiki — Armor: https://eldenring.wiki.gg/wiki/Armor
- Elden Ring Wiki — Bosses: https://eldenring.wiki.gg/wiki/Bosses
- Elden Ring Wiki — Characters: https://eldenring.wiki.gg/wiki/Category:Characters
- Elden Ring Wiki — Creatures: https://eldenring.wiki.gg/wiki/Category:Creatures

## 3. Datenumfang im aktuellen Import

| Bereich | Einträge | Behandlung |
|---|---:|---|
| Rüstung | 668 | Werte für Gewicht, Schutz und Widerstände normalisiert |
| Bosse | 137 | Namensvarianten zusammengeführt; Belohnungslisten nicht übernommen |
| Orte | 285 | Alle Einträge einer Hauptregion zugeordnet |
| NPCs | 109 | Name, Standort und Rolle |
| Kreaturen | 196 | Varianten zu allgemeinen Kreaturentypen zusammengefasst |
| Questübersichten | 5 | Eigene kurze Zusammenfassungen wichtiger NPC-Handlungsstränge |

## 4. Auffälligkeiten und Korrekturen

- **Bosse:** Die Wiki-Übersicht beschreibt mehr als 200 Bossbegegnungen. Der bereinigte Import enthält 146 eindeutige Datensätze. Der Unterschied kann durch Varianten, Feld- und Dungeonbegegnungen sowie unterschiedliche Zählweisen entstehen. Die Importliste wird deshalb nicht als vollständig dargestellt.
- **DLC-Markierung:** Die ursprünglichen DLC-Kennzeichen wurden nicht blind übernommen. Für erkennbare Schattenland-Orte wurden DLC-Zuordnungen zusätzlich anhand der Ortsnamen abgeleitet. Das reduziert offensichtliche Fehlmarkierungen, ersetzt aber keine Prüfung jedes einzelnen Datensatzes im Spiel.
- **Dubletten:** Eindeutige Alias- bzw. Phasen-Dubletten wurden zusammengeführt. Bei Kreaturen wurden Variantenbezeichnungen zu einer Familienbezeichnung normalisiert.
- **Ortszuordnung:** Alle 285 importierten Orte sind einer der Hauptregionen der Website zugeordnet. Bei Bossen ohne klare Ortsangabe wurde keine Region erfunden.
- **Lokalisierung:** Die Oberfläche ist zweisprachig. Wo keine verlässliche deutsche Bezeichnung vorlag, bleibt der englische Eigenname erhalten.

## 5. Grenzen der Datenbank

- Die Daten sind Sekundärdaten aus Community-Quellen und können Fehler oder Auslassungen enthalten.
- Rüstungs- und Ortswerte wurden strukturiert importiert, aber nicht jeder Eintrag wurde einzeln durch einen Spieltest verifiziert.
- Die Levelbereiche sind grobe Orientierung und keine Zugangsvoraussetzung.
- Die Karte ist schematisch und nicht maßstabsgetreu.
- Questübersichten sind knappe Wegweiser; optionale Dialoge und alle Verzweigungen sind nicht vollständig abgebildet.
- Es werden keine Originalbilder oder längeren Wiki-Beschreibungen übernommen.

## 6. Pflegeempfehlung

Bei größeren Spielupdates sollten insbesondere Ortszuordnungen, DLC-Kennzeichen und neue Questabschnitte erneut geprüft werden. Die Datenbank trennt deshalb Importdaten, redaktionelle Zusammenfassungen und Quellenhinweise, damit spätere Korrekturen nachvollziehbar bleiben.


## 7. Erweiterung v0.3 — Quest-, Karten- und Bossleitfaden

### Questverläufe
Die folgenden Questverläufe wurden als redaktionelle Schrittfolgen zusammengefasst. Einträge geben optionale Begegnungen und Verzweigungen an; sie ersetzen keine vollständige Dialog- oder Trigger-Datenbank.

- Ranni: https://eldenring.wiki.gg/wiki/Ranni_quest
- Millicent: https://eldenring.wiki.gg/wiki/Millicent
- Nadelritterin Leda: https://eldenring.wiki.gg/wiki/Leda
- Sir Ansbach: https://eldenring.wiki.gg/wiki/Sir_Ansbach
- Igon: https://eldenring.wiki.gg/wiki/Igon
- Alexander: https://eldenring.wiki.gg/wiki/Alexander,_Warrior_Jar

Die Questübersichten wurden in eigene Zwischenstationen aufgeteilt. Fortschritt wird pro Station lokal im Browser gespeichert. Einige Dialogbedingungen können abhängig von der vorherigen Spielreihenfolge abweichen.

### Kartenfragmente
Die regionale Karte verlinkt die 19 Fragmente des Grundspiels und die 5 Fragmente von Shadow of the Erdtree. Fundorttexte sind kurze Zusammenfassungen der Wiki-Kartenübersicht:
https://eldenring.wiki.gg/wiki/Maps

Zusätzliche Fundortabgleiche:
- https://eldenringinteractivemap.com/guides/how-to-reveal-the-map/
- https://eldenringinteractivemap.com/map-fragments/
- https://www.pcgamer.com/elden-ring-map-fragments-locations/

Für fünf Gebiete werden zusätzlich redaktionell zugeordnete Screenshot-/Kartenbilder angezeigt. Wo kein eigenes Bild hinterlegt ist, bietet die Oberfläche den direkten Link zur Kartenansicht und den Fundorttext.

### Bossprofile
Die 18 ausführlicheren Bossprofile kombinieren Hintergrund, Rolle im Handlungsverlauf und bekannte Begegnungsorte. Die Profile sind redaktionelle Kurztexte, keine vollständigen Boss-Wikis. Die allgemeine Bossübersicht bleibt die Referenz zur Prüfung der Vollständigkeit:
https://eldenring.wiki.gg/wiki/Bosses

### Runen-Fundorte
- Lenne's Rise: https://eldenring.wiki.gg/wiki/Lenne%27s_Rise
- Bestial Sanctum: https://eldenring.wiki.gg/wiki/Bestial_Sanctum
- Palace Approach Ledge-Road: https://eldenring.wiki.gg/wiki/Palace_Approach_Ledge-Road
- Vergleichende Community-Übersicht: https://tarnishedwiki.com/elden-ring-rune-farming/

Ertragsangaben werden als grobe Richtwerte gekennzeichnet. Sie können sich durch NG-Zyklus und Spielfortschritt verändern. Einmalige Runenbelohnungen sind von wiederholbaren Routen getrennt.

### Bildnachweise
Die Galerie verwendet externe Screenshots/Spielansichten. Sie werden nicht als eigene Spielgrafik ausgegeben; die jeweilige Quellseite und der Anbieter werden direkt am Bild genannt.

- GameStar — Limgrave: https://www.gamestar.de/artikel/elden-ring-acht-haertesten-bosse-verzweifelt%2C3378728.html
- Red Bull — Liurnia: https://www.redbull.com/es-es/elden-ring-lugares-mas-bellos
- Sportskeeda — Caelid: https://www.sportskeeda.com/esports/what-sacramental-bud-elden-ring
- GameWith — Leyndell: https://gamewith.jp/eldenring/322222
- Neoseeker — Gravesite Plain: https://www.neoseeker.com/elden-ring-shadow-of-the-erdtree/walkthrough/Gravesite_Plain
- VidaExtra — Cerulean Coast: https://www.vidaextra.com/rpg/no-todo-elden-ring-shadow-of-the-erdtree-es-muerte-desesperacion-su-mundo-poesia-derrocha-belleza-muy-especial
- Analog Stick Gaming — Realm of Shadow: https://www.analogstickgaming.com/game-reviews/2024/7/15/elden-ring-shadow-of-the-erdtree

### Defensiver Rüstungsvergleich
Der Rüstungs-Check nutzt ausschließlich importierte Gewicht-, Schadensnegations- und Widerstandswerte. Er ist eine regelbasierte Sortierung der vorhandenen Daten, kein KI-Modell und keine Garantie für optimale Ausrüstung.
