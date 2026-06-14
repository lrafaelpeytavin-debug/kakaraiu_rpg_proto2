# KAKARAIU RPG Proto 2 — Roadmap vivante

Ce document sert de fil de suivi pour le prototype `kakaraiu_rpg_proto2`.

Le dépôt actuel est un laboratoire HTML/canvas autonome. Il ne s’agit pas encore d’un projet RPG Maker. L’objectif est de tester rapidement le feeling des scènes spéciales de KAKA RAIU — déplacement, saut, chi, combat, garde, décor, rythme — avant de porter les séquences validées dans RPG Maker via plugins JavaScript ou scènes séparées.

## Vision de workflow

RPG Maker reste pensé comme socle roman/RPG : maps, dialogues, events, menus, inventaire, rythme narratif et mise en scène principale.

Le prototype HTML/canvas sert de laboratoire gameplay : scènes plateforme, combat léger, chi, infiltration, fuite, prototypes visuels, timings et sensations de contrôle.

Les IA de génération et d’assistance interviennent selon plusieurs rôles : génération d’assets, prompts visuels, variantes de design, avis de game design, refactor de code, documentation et suivi.

Le repo GitHub devient le point commun : toute personne ou IA qui arrive sur le projet doit pouvoir comprendre l’état actuel, les chantiers ouverts et les décisions prises.

## État actuel du prototype

Commit initial de référence : `f2e0b16 Initial KAKARAIU RPG proto2`.

Fichiers principaux actuellement repérés :

- `index.html` : prototype complet HTML/canvas, avec gameplay, UI, phases, dessin procédural et chargement des assets.
- `server.mjs` : serveur local de test.
- `package.json` : scripts de lancement.
- `assets/` : sprites Raiu, garde et musique.

Le prototype contient déjà :

- une scène de toits de Tyrih générée en canvas ;
- une transition vers le manoir ;
- une phase manoir/fight ;
- Raiu jouable ;
- jauge de chi d’allègement ;
- renforcement au chi ;
- attaque ;
- garde avec états simples ;
- musique `lantern-debt.mp3` ;
- mode de test direct du manoir via `?start=manor`.

## Chantiers ouverts

### Chantier 1 — Manoir jouable

Objectif : transformer la phase manoir actuelle en vraie scène 2.5D atmosphérique.

État actuel : le gameplay existe, mais le décor est encore dessiné par code avec rectangles, gradients, colonnes et plateformes placeholders.

À faire :

- générer `assets/manor-bg.png` comme décor plein écran ou large scrolling horizontal ;
- générer `assets/manor-platform.png` en PNG alpha ;
- générer `assets/manor-door.png` ;
- générer `assets/manor-window.png` ;
- générer `assets/manor-chest.png` ;
- adapter `drawManorScene()` pour afficher ces assets ;
- garder les collisions actuelles basées sur `platforms` ;
- ajouter un coffre visible à la fin du manoir ;
- préparer plus tard une interaction simple avec le coffre.

Priorité : haute.

### Chantier 2 — Asset pipeline

Objectif : établir une méthode propre pour produire et intégrer les images.

Règle de base : un asset = une génération dédiée.

Assets validés ou en cours :

- Raiu idle ;
- Raiu back / déplacement ;
- Raiu attack ;
- garde idle front ;
- garde idle back ;
- garde attack ;
- musique `lantern-debt.mp3`.

Assets à produire ensuite :

- background manoir ;
- plateformes manoir ;
- porte ;
- fenêtre ;
- coffre ;
- lanterne murale ;
- fond Tyrih plus tard ;
- toits peints plus tard.

### Chantier 3 — Refactor du code

Objectif : éviter que `index.html` devienne impossible à maintenir.

État actuel : tout est dans un seul fichier. C’est acceptable pour le prototype initial, mais il faudra probablement découper ensuite.

Découpage recommandé :

- `src/core.js` : loop, canvas, resize, état global ;
- `src/assets.js` : chargement des images et sons ;
- `src/player.js` : logique Raiu ;
- `src/guard.js` : logique garde ;
- `src/scenes/rooftops.js` ;
- `src/scenes/manor.js` ;
- `src/ui.js` ;
- `src/narrative.js`.

Priorité : moyenne. Ne pas refactorer trop tôt avant stabilisation du manoir.

### Chantier 4 — Portage RPG Maker futur

Objectif : porter les scènes spéciales validées dans RPG Maker plus tard, sans casser le RPG principal.

Principe : RPG Maker porte la narration, les maps, les dialogues et les menus. Les phases plateforme/combat deviennent des scènes spéciales appelées depuis un event ou un plugin JS.

Plugin futur possible :

- `js/plugins/KakaRaiu_PlatformScene.js`

À ne pas faire maintenant : transformer le repo actuel en RPG Maker.

## Décisions validées

- Le repo actuel reste un laboratoire HTML/canvas.
- Le manoir est la première scène à stabiliser avant Tyrih.
- Le procédural pur doit devenir semi-procédural : code pour placer, images peintes pour incarner.
- Les assets doivent être produits un par un, avec dimensions raisonnables et fonds alpha quand nécessaire.
- Les scènes validées pourront plus tard être portées dans RPG Maker.

## Prochaine action recommandée

Produire le background du manoir en 2.5D, puis préparer le code pour le charger avec fallback procédural si l’image manque.

Nom recommandé :

```text
assets/manor-bg.png
```

Format recommandé :

```text
2560x1440 ou 1920x1080
fond non alpha
ambiance sombre
manoir ancien
profondeur horizontale
lisibilité gameplay
zones basses assez calmes pour plateformes et personnages
```
