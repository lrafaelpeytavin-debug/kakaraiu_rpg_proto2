# GAMEPLAY

## Principes actuels

KAKA RAIU doit rester lisible:

- Raiu est fragile, vif, voleur;
- le garde est massif et dangereux;
- le chi est une ressource active;
- la mort ne doit pas casser le rythme narratif.

## Vie de Raiu

Decision actuelle: utiliser des coeurs, pas une barre.

Raison:

- plus lisible;
- plus action-aventure/RPG;
- correspond mieux a un jeune voleur fragile;
- laisse la barre au chi, qui est une vraie ressource consommable.

Valeur de depart:

```text
3 coeurs
6 demi-coeurs internes
```

Progression possible:

```text
chapitre 1: 3 coeurs
plus tard: 4, 5, 6 coeurs max
```

Degats proposes:

```text
garde touche Raiu = -1 coeur
garde touche Raiu pendant renforcement = -1/2 coeur
chute = -1 coeur
piege = -1 coeur
attaque speciale ennemie = -2 coeurs plus tard
```

Mort:

```text
0 coeur = respawn narratif au checkpoint
```

Pas de game over brutal pour le prototype.

## Chi

Decision actuelle: le chi reste une jauge.

Raison:

- il se consomme;
- il remonte;
- il sert au saut/allegement;
- il sert au renforcement;
- il doit se lire differemment de la vie.

Structure UI:

```text
Vie = coeurs
Chi = jauge
Renforcement = aura + timer
```

Regle actuelle:

```text
Shift / bouton Chi = renforcement
degats de garde reduits de 1 coeur a 1/2 coeur
```

## Chute

Regle visee:

```text
si Raiu tombe sous le niveau:
  perdre 1 coeur
  respawn au checkpoint
```

Il faut eviter:

```text
raiu.y = 100
```

comme reset arbitraire.

Dans `manorEntry`, la version actuelle fait deja:

```text
chute sous le niveau = respawn au checkpoint
```

La perte de coeur sera ajoutee quand la vie de Raiu sera implementee dans l'UI.

## Checkpoints

Chaque scene speciale doit avoir au minimum:

```text
checkpointX
checkpointY
```

Dans le manoir:

- checkpoint debut de salle;
- checkpoint apres passage de plateforme si necessaire;
- checkpoint apres garde si le combat est valide.

## Camera et limites

Chaque niveau doit definir:

```text
levelMinX
levelMaxX
cameraMinX
cameraMaxX
```

Pour eviter:

- ecran noir apres le decor;
- retour trop loin si la scene doit se verrouiller;
- chute hors zone jouable.

## Combat garde

Etat actuel:

- garde actif dans le manoir;
- idle;
- alert;
- attack;
- hurt;
- dead.

Dans `manorEntry`, les gardes sont plus simples:

- patrouille gauche/droite;
- contact dangereux;
- pas de combat complexe;
- objectif: pousser le joueur a passer au-dessus.

Regle prototype actuelle:

```text
contact garde dans manorEntry = choc + knockback + invincibilite courte
```

Ce comportement remplace l'ancien placeholder trop brutal:

```text
contact garde = respawn checkpoint immediat
```

Quand la vie de Raiu sera implementee:

```text
contact garde = -1 coeur + knockback + invincibilite courte
0 coeur = respawn checkpoint
```

Etat actuel:

```text
vie implementee
3 coeurs affiches
contact garde = -1 coeur
contact garde sous renforcement = -1/2 coeur
```

A ameliorer:

- telegraphier l'attaque;
- rendre le contact lisible;
- donner du knockback a Raiu;
- retirer 1 coeur a Raiu;
- ajouter invincibilite courte apres degat.

## Retour en arriere

Decision non definitive.

Options:

1. retour libre, exploration simple;
2. retour bloque apres un evenement;
3. camera lock pendant une sequence;
4. porte verrouillee apres entree.

Pour le prototype manoir, commencer avec retour libre. Ajouter locks seulement quand l'objectif coffre/fuite existe.

## Grappin

Le grappin de Raiu est un outil mecanique de voleur, pas un pouvoir magique.

Sensation visee:

- claquement sec a l'accroche;
- corde qui se tend;
- traction brusque;
- relachement en projection;
- legere maladresse assumee.

Regles:

- le grappin ne s'accroche pas partout;
- uniquement sur des points valides;
- les points doivent correspondre a des elements visibles: chaines, poutres, lanternes, corniches;
- pas d'accroche sur murs lisses ou ciel vide.

Version actuelle dans `manorEntry`:

```text
E = tirer / relacher le grappin
bouton Grappin = idem
```

Physique actuelle:

- recherche du point d'accroche dans la direction visee;
- corde visible;
- au sol, la corde ne bloque pas la marche;
- en l'air, la corde passe en pendule autour du point d'accroche;
- relachement avec projection basee sur l'elan tangent;
- raccourcir/allonger avec haut/bas pendant l'accroche;
- chi d'allegement qui adoucit la gravite du swing.

Parametres prototype:

```text
GRAPPLE_MAX_DISTANCE = 340px
GRAPPLE_MIN_DISTANCE = 80px
GRAPPLE_DAMPING = 0.995
GRAPPLE_RELEASE_MULT = 1.1
GRAPPLE_SHORTEN_SPEED = 3px/frame
GRAPPLE_LENGTHEN_SPEED = 2px/frame
GRAPPLE_CHI_GRAVITY = 0.25
GRAPPLE_SWING_GRAVITY = 0.55
```

Voir aussi:

```text
docs/CHANTIER_004_GRAPPIN.md
```

Regle importante:

```text
si le grappin ne sert a rien, il faut d'abord corriger le level design
```

Ameliorations futures:

- sons du grappin;
- animation du lancer;
- ratage plus lisible;
- indicateur de visee plus clair;
- combinaison plus forte avec le chi d'allegement.

## Panneaux pedagogiques

Des panneaux de tutoriel courts sont utilises pour les mecaniques peu lisibles:

- premier passage avec cercles de grappin: explication du grappin;
- premier garde du manoir: explication du chi de renforcement.

Objectif: eviter que le joueur voie des boutons decoratifs sans comprendre leur usage.
