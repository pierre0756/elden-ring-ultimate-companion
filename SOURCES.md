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
- Elden Ring Wiki — Bosses: Eldenpedia — Bossübersicht und Bosskategorien
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
| Importierte Questzusammenfassungen | 5 | Kurze Zusammenfassungen im Ausgangskatalog |

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
- Originalbilder und längere Wiki-Texte werden nicht kopiert oder mit der Website ausgeliefert. Boss- und NPC-Bilder sowie kurze API-Beschreibungen werden bei Online-Verbindung auf Anfrage eingeblendet.

## 6. Pflegeempfehlung

Bei größeren Spielupdates sollten insbesondere Ortszuordnungen, DLC-Kennzeichen und neue Questabschnitte erneut geprüft werden. Die Datenbank trennt deshalb Importdaten, redaktionelle Zusammenfassungen und Quellenhinweise, damit spätere Korrekturen nachvollziehbar bleiben.


## 7. Erweiterung v0.3 — Quest-, Karten- und Bossleitfaden

### Questverläufe
Die folgenden Questverläufe wurden als redaktionelle Schrittfolgen zusammengefasst. Einträge geben optionale Begegnungen und Verzweigungen an; sie ersetzen keine vollständige Dialog- oder Trigger-Datenbank.

- Eldenpedia — Ranni-Questreihe (NPC-Begegnungen, Trigger, optionale Gespräche)
- Eldenpedia — Millicent-Questreihe (Reihenfolge und Verzweigung)
- Eldenpedia — Nadelritterin Leda (DLC-Ereignisse und Entscheidungen)
- Eldenpedia — Sir Ansbach (DLC-Quest und Freyja-Verknüpfung)
- Eldenpedia — Igon (Zackengipfel-Fortschritt)
- Eldenpedia — Alexander, das Kriegergefäß (Begegnungsorte und Abschluss)

Die Questübersichten wurden in sechs eigene Questverläufe mit insgesamt 36 Zwischenstationen ausgebaut. Fortschritt wird pro Station lokal im Browser gespeichert. Einige Dialogbedingungen können abhängig von der vorherigen Spielreihenfolge abweichen. Zusätzlich gibt es 18 redaktionelle Bossprofile mit Rolle und Kontext; die Bossliste selbst ist weiterhin nicht vollständig.

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
- Eldenpedia — Lenne's Rise (Gebiet und Runen-Route)
- Eldenpedia — Bestial Sanctum (Gebiet und wiederkehrende Gegnergruppen)
- Eldenpedia — Palace Approach Ledge-Road (Gebietsbeschreibung und Farm-Kontext)
- Tarnished Wiki — vergleichende Community-Übersicht zu Runen-Fundorten

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

## 8. Erweiterung v0.4 — Interaktive Karte und NPC-Questübersicht

Die schematische Regionsgrafik wurde durch eine kachelbasierte Kartenansicht mit drei Ebenen ersetzt: Zwischenlande, Untergrund und Schattenland. Die Darstellung basiert auf Community-Kartenkoordinaten und extern bereitgestellten Kartenkacheln. Die Kacheln werden online geladen; die Kartendaten sind daher nicht vollständig offline verfügbar.

Für die eigenen Markierungen werden Gnadenorte, Boss-Standorte, NPC-Standorte, Talismane, Goldene Saat, Heilige Tränen, Kristalltränen, Große Runen, Larventränen und Gedächtnissteine in Gracebound importiert. Die gefilterte Datei enthält nach der Talismane-Erweiterung 1.170 Marker: 403 Gnadenort-Marker, 195 Boss-Marker, 312 NPC-Marker, 154 Talisman-Marker sowie 106 weitere Sammel-/Schlüsselobjekt-Marker. Die Kategorisierung und Ortsangaben stammen aus Community-Daten und wurden nicht einzeln im Spiel verifiziert.

Die Boss-Ansicht ist ein eigener Reiter mit Standortkarte und durchsuchbarer Ortsliste; Marker-Popups springen zu den jeweiligen Atlasdetails mit zusätzlichen Boss- und NPC-Infos. Eigene Wegpunkte können mit Name und Notiz auf der Karte gesetzt, bearbeitet bzw. gelöscht werden; sie werden ausschließlich im lokalen Browser-Speicher des jeweiligen Geräts gespeichert und nicht zwischen Geräten synchronisiert.

Die NPC-Questübersicht bündelt 31 Questlinien mit 280 Orts-/NPC-Stationen. Dargestellt werden Schrittname, Gebiet und Kartenposition; es handelt sich um eine gekürzte Orientierungshilfe, nicht um eine vollständige Dialog- oder Triggerdatenbank. Questfortschritt und eigene Kartenmarkierungen bleiben lokal im Browser.

Nicht Bestandteil dieser Version sind Waffen-Buildempfehlungen und Fundortlisten für Waffen-Aufwertungsmaterialien. Der vorhandene Rüstungs-Check bleibt ein rein defensiver Rüstungsvergleich.


## 9. Erweiterung v0.5.0 — Boss-/NPC-Infos und Talisman-Fundorte

Die interaktive Karte ergänzt 154 Talisman-Markierungen aus dem Community-Kartenprojekt [jw-ofs/elden-ring-map](https://github.com/jw-ofs/elden-ring-map). Die Koordinaten verweisen auf die drei Kartenebenen und sind Community-Daten, keine offiziellen FromSoftware-Daten. Talisman-Effekte stammen ebenfalls aus dessen Itemdaten.

Boss- und NPC-Markierungen öffnen nun passende Gracebound-Atlasdetails. Die vorhandenen lokalen Datensätze liefern Rollen, Orte, Bosswerte und redaktionelle Hinweise. Zusätzliche Kurzbeschreibungen, NPC-Zitate und Bilder werden bei geöffnetem Detailfenster über die öffentliche [Elden Ring API](https://docs.eldenring.fanapis.com/docs/) abgerufen. Diese API ist ein Community-Projekt und kann ausfallen; lokale Orts- und Atlasdaten bleiben davon unabhängig verfügbar. Die Bilder werden nicht in Gracebound gespeichert.


## 10. Erweiterung v0.6.0 — Build-Bibliothek und Startseitenbild

Die Build-Bibliothek enthält drei frei anpassbare RL-150-Beispiele: Glaube/Nahkampf, Intelligenz-Zauberei und Blutung/Arkan. Je Beispiel gibt es zwei Varianten. Die Links führen zu Tarnished.dev mit vorausgefüllter Startklasse, Attributen und Kernwaffe. Der externe Rechner unterstützt Builds mit Attributen, Waffen, Rüstung, Zaubern und Talismanen; seine Spielwerte werden vom Betreiber gepflegt.

Das Startseitenbild zeigt einen Elden-Ring-Limgrave-Screenshot. Quelle und Bildnachweis stehen direkt auf der Startseite: [Red Bull — Elden Ring’s most beautiful places](https://www.redbull.com/es-es/elden-ring-lugares-mas-bellos). Das Bild wird vom Anbieter geladen, nicht im Repository gespeichert.


## 11. Erweiterung v0.7.0 — Build-Pfade und Levelhilfe

Die Build-Bibliothek ergänzt Stärke/Kolossalwaffen, Geschicklichkeit/Frost und Drachenkommunion. Angaben zu Waffen, Talismanen und Fundorten verlinken auf die jeweilige Seite im Community-Wiki [Elden Ring Wiki.gg](https://eldenring.wiki.gg/wiki/Elden_Ring_Wiki). Level-Empfehlungen sind Richtwerte; die Vigor-Schwellen bei 40 und 60 sind im [Bandai-Namco-Stat-Guide](https://www.bandainamcoent.com/news/elden-ring-introduction-part-2-advanced-stats) erläutert. Eine vollständige Übersicht zu Talisman-Fundorten gibt es außerdem bei [PowerPyx](https://www.powerpyx.com/elden-ring-all-talisman-locations/).


## 12. Erweiterung v0.9.0 — Persönliche Builds und Fundstückliste

Eigene Builds, Attribute und Notizen werden lokal im Browser gespeichert. JSON-Export und -Import ermöglichen eine manuelle Sicherung oder den Umzug auf ein anderes Gerät. Die Fundstückliste nutzt die bereits dokumentierten Community-Kartenmarkierungen für Talismane, Goldene Saat, Tränen, Gedächtnissteine und Große Runen; erledigte Funde werden getrennt vom Atlas-Fortschritt lokal abgelegt. „Auf Karte“ fokussiert die passende Markierung. Das Fortschritt-zurücksetzen löscht Atlas-, Quest- und Fundstück-Haken sowie Reisenotizen, behält aber persönliche Build-Sicherungen.


## 13. Erweiterung v0.10.0 — Quest-Schritte, Wegweiser und Build-Fenster

Der NPC-Questatlas enthält jetzt 31 Questlinien mit je einem konkreten Handlungstext pro Station. Die Texte beschreiben, wohin der Kartenpin führt, welche Interaktion oder welcher Kampf ansteht und ob eine Auswahl Auswirkungen hat. Die Schrittfolge bleibt eine redaktionelle Community-Zusammenstellung. Referenzen für wichtige Routen: [Rannis Quest (PC Gamer)](https://www.pcgamer.com/elden-ring-ranni-quest-nokron/), [Ansbach/Leda/Freyja (PowerPyx)](https://www.powerpyx.com/elden-ring-shadow-of-the-erdtree-sir-ansbach-leda-freyja-questline-walkthrough/) und [NPC-Questübersicht (Elden Ring Wiki)](https://www.eldenringwiki.cc/quests/).

Jeder der sechs Build-Stile öffnet ein eigenes Detailfenster mit fünf RL-Meilensteinen (30/60/90/120/150), vollständig aufs RL summierten Attributvorschlägen, Waffen-, Talisman-, Rüstungs- und Zauberfundorten sowie Spielhinweisen. Die Werte sind anpassbare Vorschläge, keine Anforderungen. Gegenstandsseiten und Locations verlinken ins Community-Wiki [Elden Ring Wiki.gg](https://eldenring.wiki.gg/wiki/Elden_Ring_Wiki).

Der Wegweiser ergänzt levelpassende Regionen mit bis zu drei noch offenen Boss-, NPC- oder Quest-Atlaszielen pro Gebiet. Abschlussstatus folgt den vorhandenen Atlas-Haken.
