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
```

Progression possible:

```text
chapitre 1: 3 coeurs
plus tard: 4, 5, 6 coeurs max
```

Degats proposes:

```text
garde touche Raiu = -1 coeur
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
