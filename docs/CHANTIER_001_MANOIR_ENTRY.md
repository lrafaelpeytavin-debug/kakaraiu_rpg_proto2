# CHANTIER 001 - Manor Entry

## Objectif

Ajouter une nouvelle phase jouable avant le manoir existant:

```text
manorEntry
```

Cette phase ne remplace pas le manoir deja code. Elle sert d'entree d'infiltration: Raiu passe par une fenetre haute, traverse deux backgrounds, puis arrive dans la scene manoir actuelle.

## Assets

Deux backgrounds sont assembles horizontalement:

```text
assets/manor-entry-01.png
assets/manor-entry-02.png
```

Ordre corrige:

```text
manor-entry-01.png = salle avec la grande fenetre ouverte en haut a gauche
manor-entry-02.png = salle plus dense avec plateformes suspendues
```

Ordre de progression:

```text
manor-entry-01
manor-entry-02
manor existant
```

La sortie droite du second background declenche:

```text
phase = manor
```

## Gameplay de la premiere version

Gameplay demande:

- deplacement;
- saut;
- plateformes;
- gardes;
- grappin;
- checkpoints simples;
- chute mortelle.

Aucune mecanique de combat complexe n'est necessaire dans `manorEntry`.

## Depart

Raiu commence pres de la fenetre haute gauche du premier background. Cette fenetre represente son point d'infiltration.

Le joueur commence directement en hauteur pour comprendre que le niveau se lit verticalement, pas seulement comme un couloir horizontal.

## Level design

Les plateformes doivent correspondre aux elements visibles:

- corniches;
- poutres;
- balcons;
- plateformes suspendues;
- marches;
- structures de pierre.

Le code utilise des collisions invisibles placees sur ces elements. Le but n'est pas de redessiner un niveau par-dessus l'image, mais de rendre jouable ce qui est deja peint.

## Gardes

Les gardes servent surtout:

- d'obstacles;
- de zones de danger;
- de justification au parcours vertical.

Comportement acceptable:

- patrouille gauche/droite;
- contact dangereux;
- pas de combat complexe.

Ancienne decision prototype, rejetee apres test:

```text
contact garde = respawn checkpoint immediat
```

Decision actuelle pour le prototype:

```text
contact garde = choc + knockback + invincibilite courte
```

Plus tard, ce choc retirera un coeur quand la vie de Raiu sera branchee.

## Vides et dangers

Les vides sont de vrais dangers.

Regle actuelle:

```text
si Raiu tombe sous le niveau:
  respawn au checkpoint precedent
```

Les zones de piques visibles dans les backgrounds peuvent aussi etre mappees en danger.

## Grappin

Le grappin est introduit dans `manorEntry`.

Philosophie:

- outil de voleur artisanal;
- pas un pouvoir magique;
- pas un grappin parfait de super-heros;
- corde visible;
- tension brusque;
- relachement avec projection.

Version prototype:

- touche `E`;
- bouton mobile `Grappin`;
- points d'accroche definis par le level design;
- accroche seulement sur points valides;
- corde visible;
- tension de corde non bloquante;
- Raiu peut marcher et sauter avec la corde accrochee;
- la corde retient Raiu quand il tombe ou quand elle devient tendue;
- relachement avec multiplication de vitesse.

Parametres actuels:

```text
GRAPPLE_MAX_DISTANCE = 340px
GRAPPLE_MIN_DISTANCE = 80px
GRAPPLE_DAMPING = 0.995
GRAPPLE_RELEASE_MULT = 1.1
GRAPPLE_SHORTEN_SPEED = 3px/frame
GRAPPLE_LENGTHEN_SPEED = 2px/frame
GRAPPLE_CHI_GRAVITY = 0.25
```

Points d'accroche utilises:

- chaines;
- poutres;
- lanternes;
- elements suspendus visibles.

## Complexification

Premier background:

- introduction;
- premier usage du grappin;
- gardes simples;
- parcours relativement lisible.

Second background:

- plus de vide;
- plus de verticalite;
- davantage de precision;
- gardes plus proches de la route principale;
- grappin plus necessaire.

## Code concerne

Fichier principal:

```text
index.html
```

Elements ajoutes:

- `manorEntryImages`;
- `manorEntryWorldWidth`;
- `setupManorEntryLevel()`;
- `enterManorEntryPhase()`;
- `entryGuards`;
- `grappleAnchors`;
- `grapple`;
- `drawManorEntryScene()`;
- `updateEntryGuards()`;
- `?start=manorEntry`.

## Prochaines actions

1. Tester la taille des collisions sur les deux backgrounds.
2. Ajuster les plateformes apres screenshot.
3. Ajouter une vraie UI de visee si la touche `E` manque de lisibilite.
4. Transformer le respawn garde en perte de coeur quand la vie de Raiu sera implementee.
5. Ajouter sons: claquement du grappin, corde tendue, ratage.
