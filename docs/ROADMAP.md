# KAKARAIU RPG Proto 2 - Roadmap vivante

Ce document sert de fil de suivi pour le prototype `kakaraiu_rpg_proto2`.

Le depot actuel est un laboratoire HTML/canvas autonome. Ce n'est pas encore un projet RPG Maker. L'objectif est de tester rapidement le feeling des scenes speciales de KAKA RAIU: deplacement, saut, chi, combat, garde, decor, rythme, chute et checkpoints. Les sequences validees pourront ensuite etre portees dans RPG Maker via plugins JavaScript ou scenes separees.

## Vision de workflow

RPG Maker reste le socle roman/RPG:

- maps;
- dialogues;
- events;
- menus;
- inventaire;
- rythme narratif;
- mise en scene principale.

Le prototype HTML/canvas sert de laboratoire gameplay:

- scenes plateforme;
- combat leger;
- chi;
- infiltration;
- fuite;
- prototypes visuels;
- timings et sensations de controle.

Le repo GitHub est le point commun entre Codex, Claude, GPT et le travail manuel. Toute personne ou IA qui arrive sur le projet doit comprendre l'etat actuel, les chantiers ouverts et les decisions prises.

## Repartition du travail IA

Codex:

- gameplay;
- `index.html`;
- integration des assets;
- collisions;
- camera;
- combat;
- commits/push GitHub.

Claude:

- documentation;
- chantiers;
- art bible;
- lore bible;
- prompts;
- organisation des assets.

GPT:

- idees visuelles;
- prompts image;
- direction artistique;
- generation d'assets;
- avis de game design.

Regle importante: eviter que deux assistants modifient `index.html` en meme temps. Si Claude travaille en local sans GitHub, il doit de preference rester dans `docs/`, puis Codex verifie, commit et push.

## Etat actuel du prototype

Commits de reference:

- `f2e0b16` - Initial KAKARAIU RPG proto2
- `eac66e4` - Add living roadmap for KAKARAIU proto workflow
- `fb508c3` - Integrate painted scrolling manor background

Le prototype contient deja:

- une scene de toits de Tyrih basee sur deux backgrounds peints;
- une transition vers le manoir;
- une phase `manorEntry` avant le manoir existant;
- une phase manoir/fight;
- Raiu jouable;
- jauge de chi d'allegement;
- renforcement au chi;
- attaque;
- garde avec etats simples;
- musique `lantern-debt.mp3`;
- musique Tyrih `tyrih-lantern-debt.mp3`;
- mode de test direct du manoir via `?start=manor`;
- background peint `assets/manor-bg.png` integre dans le manoir;
- backgrounds `assets/manor-entry-01.png` et `assets/manor-entry-02.png`;
- camera horizontale scrollable dans le manoir.
- camera horizontale scrollable dans `manorEntry`;
- grappin prototype sur touche `E`;
- gardes simples dans l'entree du manoir;
- checkpoints simples dans `manorEntry`.
- backgrounds `assets/tyrih-rooftop-01-slums.png` et `assets/tyrih-rooftop-02-market.png`.

## Chantiers ouverts

### Chantier 1 - Manoir jouable

Objectif: transformer la phase manoir en vraie scene 2.5D atmospherique, lisible et jouable.

Voir:

```text
docs/CHANTIER_001_MANOIR.md
```

Priorite: haute.

### Chantier 1A - Entree du manoir

Objectif: ajouter une phase d'infiltration avant le manoir existant, sans remplacer la scene actuelle.

Voir:

```text
docs/CHANTIER_001_MANOIR_ENTRY.md
```

Priorite: haute.

### Chantier 1B - Tyrih toits

Objectif: remplacer les toits proceduraux par une sequence peinte en sections.

Voir:

```text
docs/CHANTIER_002_TYRIH_TOITS.md
```

Etat actuel:

- Section 1 integree;
- Section 2 integree;
- collisions invisibles prototype;
- premier tableau `tyrihSections` integre;
- transition vers `manorEntry`.

Decisions apres test:

- les backgrounds actuels valident le pipeline mais sont encore trop serres;
- generer une vraie Section 1B avant d'aller trop loin;
- extraire ensuite `tyrihSections` vers des donnees plus propres si le nombre de sections augmente;
- ne pas repartir de zero: utiliser les images actuelles comme references de palette, lumiere et composition.

### Chantier 2 - Asset pipeline

Objectif: produire les images une par une et les integrer proprement.

Voir:

```text
docs/CHANTIER_003_BACKGROUNDS_ASSETS.md
```

Regle de base:

```text
un asset = une generation dediee
```

Assets deja presents:

- Raiu idle;
- Raiu back/deplacement;
- Raiu attack;
- garde idle front;
- garde idle back;
- garde attack;
- musique `lantern-debt.mp3`;
- musique Tyrih `tyrih-lantern-debt.mp3`;
- background manoir `manor-bg.png`.
- backgrounds entree manoir `manor-entry-01.png` et `manor-entry-02.png`.
- backgrounds Tyrih `tyrih-rooftop-01-slums.png` et `tyrih-rooftop-02-market.png`.

Assets a produire ensuite:

- plateformes manoir separees si necessaire;
- porte;
- coffre;
- objets interactifs;
- fond Tyrih;
- toits peints;
- eventuels effets de chi.

### Chantier 3 - Gameplay systemique

Objectif: stabiliser les regles de base.

Voir:

```text
docs/GAMEPLAY.md
docs/CHANTIER_004_GRAPPIN.md
```

Decisions actuelles:

- vie de Raiu en coeurs;
- chi en jauge;
- renforcement en aura/timer;
- renforcement reduit les degats de garde a 1/2 coeur;
- chute = perte de vie + retour checkpoint;
- mort = respawn narratif, pas game over brutal.
- grappin = points d'accroche definis, corde visible, pendule en l'air, marche au sol conservee.

### Chantier 4 - Refactor du code

Objectif: eviter que `index.html` devienne impossible a maintenir.

Decoupage recommande plus tard:

- `src/core.js`;
- `src/assets.js`;
- `src/player.js`;
- `src/guard.js`;
- `src/scenes/rooftops.js`;
- `src/scenes/manor.js`;
- `src/ui.js`;
- `src/narrative.js`.

Priorite: moyenne. Ne pas refactorer trop tot avant stabilisation du manoir.

### Chantier 5 - Portage RPG Maker futur

Objectif: porter les scenes speciales validees dans RPG Maker plus tard, sans casser le RPG principal.

Principe: RPG Maker porte la narration, les maps, les dialogues et les menus. Les phases plateforme/combat deviennent des scenes speciales appelees depuis un event ou un plugin JS.

Plugin futur possible:

```text
js/plugins/KakaRaiu_PlatformScene.js
```

Ne pas faire maintenant: transformer le repo actuel en projet RPG Maker.

## Decisions validees

- Le repo actuel reste un laboratoire HTML/canvas.
- Le manoir est la premiere scene a stabiliser avant Tyrih.
- Le procedurale pur doit devenir semi-procedural: code pour placer, images peintes pour incarner.
- Le niveau peut etre construit avec un grand background scrolling, ou avec plusieurs sections peintes assemblees.
- `manorEntry` utilise deux backgrounds assembles horizontalement.
- Les collisions restent codees/invisibles au debut.
- Le grappin ne s'accroche que sur des points definis dans le level design.
- Les backgrounds peints actuels restent des prototypes/references, pas des fichiers a jeter.
- Le prochain niveau Tyrih doit etre pense en sections et, plus tard, en couches parallax.
- La vie de Raiu sera representee par des coeurs.
- Le chi reste une jauge.
- Les scenes validees pourront etre portees dans RPG Maker plus tard.

## Prochaine action recommandee

Stabiliser `manorEntry` puis le manoir:

1. tester `?start=manorEntry`;
2. ajuster les collisions sur les deux backgrounds d'entree;
3. valider les points d'accroche du grappin;
4. ajouter les coeurs de vie de Raiu;
5. placer un objectif visible: coffre, porte ou broche;
6. ajuster les collisions invisibles sur `manor-bg.png`.
