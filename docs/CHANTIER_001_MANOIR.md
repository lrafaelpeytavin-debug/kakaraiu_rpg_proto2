# CHANTIER 001 - Manoir

## Objectif

Faire du manoir la premiere scene speciale jouable de KAKA RAIU.

Le manoir doit servir de niveau test controle avant Tyrih. Il doit valider:

- deplacement de Raiu;
- saut;
- attaque;
- chi d'allegement;
- renforcement;
- garde ennemi;
- chute;
- checkpoints;
- objectif de vol;
- transition de retour vers le RPG principal plus tard.

## Etat actuel

Le prototype HTML/canvas contient deja:

- un mode direct `?start=manor`;
- Raiu jouable;
- un garde;
- une jauge de chi;
- attaque et renforcement;
- musique;
- background peint `assets/manor-bg.png`;
- camera horizontale scrollable dans le manoir;
- collisions invisibles basees sur `platforms`.

Problemes actuels:

- le niveau n'est pas encore complet;
- apres les limites du background, il faut mieux gerer les bornes;
- la chute doit retirer de la vie au lieu de respawn arbitrairement;
- il manque un vrai objectif: coffre, broche, porte ou fuite;
- les collisions doivent etre ajustees au decor peint;
- le retour en arriere doit etre decide: libre, bloque, ou limite par checkpoint.

## Direction niveau

Trois approches possibles:

### Option 1 - Grand background unique

Une image tres large, par exemple:

```text
4096x1440
6144x1440
```

Avantages:

- tres beau;
- tres lisible;
- parfait pour un niveau court;
- facile a integrer.

Limites:

- peu flexible;
- si la structure change, il faut refaire une grande image.

### Option 2 - Sections peintes

Le niveau est decoupe en morceaux:

```text
manor_01_entry.png
manor_02_hall.png
manor_03_guard_room.png
manor_04_chest_room.png
manor_05_escape.png
```

Avantages:

- extensible;
- bon workflow asset par asset;
- facile de rajouter une salle;
- bon compromis pour KAKA RAIU.

Limites:

- il faut gerer les transitions entre sections.

### Option 3 - Tiles semi-procedurales

Le code assemble:

```text
wall_panel.png
floor_tile.png
platform.png
door.png
window.png
lantern.png
stairs.png
```

Avantages:

- tres flexible;
- proche d'une logique moteur/RPG Maker;
- reutilisable.

Limites:

- demande une art bible solide;
- peut faire moins peint si mal assemble.

## Decision actuelle

Pour le manoir, on part sur un mix:

```text
sections peintes + collisions invisibles + objets separes
```

Le background `manor-bg.png` sert de premiere base visuelle. Le code garde les collisions invisibles. Les objets importants doivent devenir separes:

- coffre;
- porte;
- broche;
- lanternes interactives si besoin;
- garde;
- Raiu.

## Layout actuel vise

Structure de niveau a court terme:

1. entree gauche;
2. couloir/platforming leger;
3. zone garde;
4. coffre ou broche;
5. fuite/retour.

La camera doit scroller horizontalement.

Le joueur peut revenir en arriere au debut, mais plus tard on pourra ajouter:

- `levelMinX`;
- `levelMaxX`;
- `checkpointX`;
- portes verrouillees;
- camera lock apres certains evenements.

## Regles de chute

La chute ne doit plus etre un simple reset a `y = 100`.

Regle visee:

```text
si Raiu tombe sous l'ecran:
  perdre 1 coeur
  respawn au dernier checkpoint
```

Si Raiu tombe a 0 coeur:

```text
pause narrative courte
respawn debut de salle ou dernier checkpoint majeur
```

Phrase d'ambiance possible:

```text
Raiu reprend son souffle dans l'ombre.
```

## Assets necessaires

Deja presents:

- `assets/manor-bg.png`;
- `assets/raiu-idle.png`;
- `assets/raiu-back.png`;
- `assets/raiu-attack.png`;
- `assets/guard-idle-front.png`;
- `assets/guard-idle-back.png`;
- `assets/guard-attack.png`;
- `assets/lantern-debt.mp3`.

A produire:

- `assets/manor-chest.png`;
- `assets/manor-door.png`;
- `assets/manor-brooch.png`;
- eventuellement `assets/manor-section-02.png`;
- eventuellement plateformes separees si le decor doit etre module.

## Code concerne

Fichier actuel:

```text
index.html
```

Zones principales:

- `enterManorPhase()`;
- `drawManorScene()`;
- `updateCamera()`;
- logique de chute dans `updateRaiu()`;
- UI vie/chi;
- collisions `platforms`.

## Prochaines actions

1. Ajouter la vie de Raiu en coeurs.
2. Ajouter checkpoint de respawn.
3. Remplacer la chute infinie par perte de coeur.
4. Ajuster collisions sur le background peint.
5. Ajouter coffre/broche comme objectif.
6. Decider si le retour en arriere est libre ou limite.

## Bloqueurs

- Il faut valider l'echelle des sprites dans le decor.
- Il faut decider la longueur finale du niveau manoir.
- Il faut produire les objets clefs separes.
