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
