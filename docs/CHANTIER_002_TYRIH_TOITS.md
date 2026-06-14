# CHANTIER 002 - Tyrih Toits

## Objectif

Remplacer les toits proceduraux par une sequence de backgrounds peints qui se suivent horizontalement.

La sequence raconte la progression de Raiu sur les toits de Tyrih pendant la nuit du Nouvel An.

## Vision

Tyrih ne doit pas apparaitre directement comme une mega-vue spectaculaire.

Progression visee:

```text
taudis serres
toits populaires
premiers quartiers marchands
revelation de Tyrih au loin
approche du manoir
```

Le joueur doit d'abord sentir Raiu comme un enfant des toits pauvres, proche des tuiles, des cheminees, du linge, des lanternes et des ruelles invisibles. Le panorama de Tyrih doit arriver comme une recompense visuelle.

## Sections actuelles integrees

### Section 1 - Quartier des pauvres / ouverture de Tyrih

Fichier:

```text
assets/tyrih-rooftop-01-slums.png
```

Role:

- debut jouable de la sequence;
- controle de Raiu;
- toits proches;
- ambiance pauvre mais vivante;
- premiere ouverture vers la ville.

Cette image est encore spectaculaire, mais elle sert pour le prototype comme Section 1 deja jouable.

### Section 2 - Au-dessus du marche nocturne

Fichier:

```text
assets/tyrih-rooftop-02-market.png
```

Role:

- panorama plus large;
- foule et marche devines en contrebas;
- lanternes et feux d'artifice;
- gaps plus grands;
- transition vers l'infiltration du manoir.

## Sections futures

### Section 3 - Frontiere entre quartiers

Grand gap au grappin entre quartier pauvre et premiers toits nobles.

### Section 4 - Approche du manoir

Toits nobles, gardes, silhouettes officielles, tension plus forte.

### Section 5 - Mur et cour exterieure

Escalade verticale du mur au grappin, transition finale vers `manorEntry`.

## Implementation actuelle

Le prototype garde le nom de phase:

```text
rooftops
```

Mais cette phase n'est plus dessinee proceduralement.

Elle charge maintenant:

```text
tyrihRooftopImages[0] = assets/tyrih-rooftop-01-slums.png
tyrihRooftopImages[1] = assets/tyrih-rooftop-02-market.png
```

Les collisions restent invisibles et codees dans `generateRooftops()`.

Des points de grappin prototype sont ajoutes dans les deux sections, surtout autour des mats, cordes et lanternes de la Section 2.

La transition vers le manoir se fait seulement a la fin de la Section 2:

```text
rooftops -> manorEntry -> manor
```

## Musique

La musique Tyrih actuelle est:

```text
assets/tyrih-lantern-debt.mp3
```

Elle vient du fichier utilisateur:

```text
Lantern Debt (1).mp3
```

## Prochaines actions

1. Tester les collisions sur Section 1.
2. Tester les collisions sur Section 2.
3. Ajuster les points de grappin Tyrih sur les mats/cordes visibles.
4. Ajouter une vraie Section 3 dediee au grand gap.
5. Ajouter la vie de Raiu en coeurs avant d'introduire trop de gardes.
