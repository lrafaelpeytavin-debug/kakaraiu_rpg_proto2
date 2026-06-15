# CHANTIER 005 - Architecture du code

## Probleme

Le prototype tient encore dans `index.html`.

C'etait utile pour aller vite, mais le fichier commence a accumuler trop de responsabilites:

- chargement des assets;
- donnees de niveau;
- physique de Raiu;
- grappin;
- gardes;
- camera;
- audio;
- UI;
- narration;
- rendu canvas;
- transitions de phase.

Risque:

- corrections plus lentes;
- regressions faciles;
- conflit si Codex/Claude/GPT touchent le meme fichier;
- difficulte a tester une seule mecanique;
- dette technique avant meme d'avoir un vrai niveau.

## Principe inspire moteur de jeu

On ne copie pas Unity ou Godot au sens lourd.

On reprend seulement leurs idees utiles:

- une scene contient des entites;
- une entite a un etat et des composants;
- les donnees de niveau sont separees du code moteur;
- l'update, la physique et le rendu sont des passes distinctes;
- les assets sont declares au meme endroit.

## Architecture cible

```text
src/
  main.js
  core/
    game.js
    input.js
    camera.js
    audio.js
    assets.js
    math.js
  entities/
    player.js
    guard.js
    grapple.js
    particles.js
  scenes/
    rooftops.js
    manorEntry.js
    manor.js
  data/
    tyrihSections.js
    manorEntrySections.js
    manorLevel.js
  ui/
    hud.js
    narrative.js
```

Version HTML:

```text
index.html
```

doit garder seulement:

- structure HTML;
- canvas;
- boutons;
- liens scripts.

## Decoupage recommande

### 1. Donnees de niveau

Extraire en premier:

```text
src/data/tyrihSections.js
src/data/manorEntrySections.js
```

Raison:

- faible risque;
- aide directement le level design;
- evite de perdre les plateformes dans `index.html`.

### 2. Grappin

Extraire ensuite:

```text
src/entities/grapple.js
```

Raison:

- mecanique fragile;
- besoin de tester plusieurs feels;
- doit devenir une vraie machine a etats.

### 3. Player

Extraire:

```text
src/entities/player.js
```

Raison:

- Raiu accumule mouvement, vie, chi, attaque, hurt, animation;
- ce sera le coeur du portage futur RPG Maker/plugin.

### 4. Scenes

Extraire:

```text
src/scenes/rooftops.js
src/scenes/manorEntry.js
src/scenes/manor.js
```

Raison:

- chaque phase doit gerer ses assets, limites, transitions et regles.

## Regle de migration

Ne pas tout refactorer en une fois.

Ordre conseille:

```text
commit 1: creer src/ + module data sans changer le comportement
commit 2: extraire grappin
commit 3: extraire player
commit 4: extraire scenes
commit 5: nettoyer index.html
```

Chaque commit doit garder le jeu testable.

## Objectif pour KAKA RAIU

L'architecture doit aider le gameplay, pas devenir un projet d'ingenieur pour lui-meme.

Si une extraction ne rend pas plus simple:

- ajouter un background;
- corriger une plateforme;
- placer un garde;
- regler le grappin;
- porter plus tard dans RPG Maker;

alors elle attend.

## Decision actuelle

Premiere etape a faire prochainement:

```text
extraire les donnees de niveaux Tyrih et Manor Entry hors de index.html
```

Le refactor complet n'est pas fait dans le commit de correction gameplay afin d'eviter de melanger:

- bugfix;
- tuning;
- architecture.
