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

Les collisions restent invisibles, mais elles ne sont plus listees directement dans `generateRooftops()`.

Premier refactor applique:

```js
const tyrihSections = [
  {
    id: "slums_start",
    image: tyrihRooftopImages[0],
    platforms: [],
    anchors: []
  },
  {
    id: "market_opening",
    image: tyrihRooftopImages[1],
    platforms: [],
    anchors: []
  }
];
```

`generateRooftops()` lit maintenant ces objets pour creer les plateformes et les points de grappin.

Des points de grappin prototype sont ajoutes dans les deux sections, surtout autour des mats, cordes et lanternes de la Section 2.

La transition vers le manoir se fait seulement a la fin de la Section 2:

```text
rooftops -> manorEntry -> manor
```

## Retour apres test

Le commit `Replace procedural Tyrih rooftops with painted sections` valide le pipeline, mais confirme que nous sommes encore au stade maquette jouable.

Points valides:

- le rendu procedural visible a bien ete remplace;
- les backgrounds peints donnent tout de suite une identite a Tyrih;
- la structure narrative `rooftops -> manorEntry -> manor` fonctionne;
- le repo peut maintenant recevoir des sections peintes une par une.

Points fragiles:

- les backgrounds donnent encore une sensation trop serree;
- le grappin existe techniquement mais il n'est pas encore indispensable au level design;
- les collisions en pourcentages dans `generateRooftops()` deviendront vite illisibles;
- la Section 2 actuelle ressemble deja a une grande ouverture/panorama, pas a une simple continuation pauvre;
- il manque une vraie Section 1B, plus large mais encore populaire et etouffante.

Decision de direction:

```text
Section 1A = slums_start
Section 1B = slums_continuation
Section 2 = market_opening
```

La Section 1B doit rester quartier pauvre:

- toits serres;
- linge;
- fumees;
- petites lanternes;
- quelques feux d'artifice au loin;
- pas encore la mega-ouverture marche/panorama.

## Refactor recommande

Avant d'ajouter trop de backgrounds, transformer la phase en donnees explicites:

```js
const tyrihSections = [
  {
    id: "slums_start",
    image: "assets/tyrih-rooftop-01-slums.png",
    platforms: [],
    anchors: [],
    guards: []
  },
  {
    id: "slums_continuation",
    image: "assets/tyrih-rooftop-01-slums-b.png",
    platforms: [],
    anchors: [],
    guards: []
  },
  {
    id: "market_opening",
    image: "assets/tyrih-rooftop-02-market.png",
    platforms: [],
    anchors: [],
    guards: []
  }
];
```

Objectif: pouvoir ajouter, remplacer ou renommer une section sans casser tout `generateRooftops()`.

## Decor: ne pas repartir de zero

Pour eviter de tout refaire:

1. garder les backgrounds actuels comme prototypes de pipeline;
2. les renommer mentalement comme `1A` et `2 prototype`;
3. generer une Section `1B` qui raccorde visuellement les deux;
4. elargir par ajout de sections, pas en etirant une image existante;
5. conserver les collisions invisibles mais les sortir dans des objets de section;
6. utiliser les images actuelles comme references de palette/lumiere pour les nouvelles generations.

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
4. Generer une vraie Section 1B.
5. Extraire ensuite `tyrihSections` dans des donnees plus lisibles si la liste grossit.
6. Ajouter une vraie Section 3 dediee au grand gap.

## Retour test collisions

Observation:

- certaines plateformes invisibles existent dans le vide;
- certaines surfaces visibles n'ont pas de collision;
- certaines collisions sont trop hautes par rapport au decor;
- ces erreurs rendent le grappin impossible a evaluer correctement.

Correction appliquee:

- nettoyage conservateur de la Section 2;
- suppression de plusieurs plateformes douteuses;
- ajout d'un sol plus continu sur le grand toit visible;
- activation d'un overlay debug avec:

```text
?debug=tyrih
```

Regle de travail:

```text
si le decor ne montre pas clairement un sol, ne pas mettre de plateforme invisible
```

La prochaine passe doit se faire avec captures en mode debug, section par section.
