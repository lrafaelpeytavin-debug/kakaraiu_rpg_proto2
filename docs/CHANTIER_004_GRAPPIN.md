# CHANTIER 004 - Grappin de Raiu

## Intention

Le grappin de Raiu n'est pas un pouvoir de super-heros.

C'est un outil mecanique de voleur:

- vieux;
- imparfait;
- bruyant;
- violent quand la corde se tend;
- utilisable par un gamin doue, mais pas encore parfaitement maitrise.

Sensation visee:

```text
accroche -> claquement sec -> tension -> swing -> relachement -> projection
```

## References et enseignements

Les analyses externes indiquent deux directions utiles:

- systeme type Godot Grappling Hook: cible valide, corde visible, traction lisible;
- systeme type Latch-On: etat clair entre visee, accrochage, swing et relachement.

Enseignement principal:

```text
Un bon grappin est moins une force magique qu'une machine a etats + une physique simple mais coherente.
```

## Regles de design

Le grappin ne s'accroche que sur des points definis.

Objets valides:

- chaines;
- poutres;
- lanternes suspendues;
- mats;
- corniches solides.

Objets invalides:

- ciel vide;
- mur lisse;
- decoration sans poids apparent;
- zone non lisible.

## Machine a etats visee

Etat complet vise a terme:

```text
idle
aiming
firing
attached_ground
swinging
releasing
miss
```

Version actuelle du prototype:

```text
idle
attached
miss
```

La version actuelle est volontairement simple, mais elle commence maintenant a distinguer deux comportements:

- au sol: la corde reste attachee sans bloquer la marche;
- en l'air: la corde impose un pendule autour du point d'accroche.

## Physique actuelle implementee

Premier passage applique dans `index.html`:

- `ropeLength`;
- `angle`;
- `angularVelocity`;
- raccourcir/allonger la corde avec haut/bas;
- relacher avec projection basee sur la vitesse tangentielle;
- chi d'allegement qui adoucit la gravite du swing;
- damping pour eviter une acceleration infinie.

Parametres actuels:

```text
GRAPPLE_MAX_DISTANCE = 340
GRAPPLE_MIN_DISTANCE = 80
GRAPPLE_SWING_GRAVITY = 0.55
GRAPPLE_DAMPING = 0.995
GRAPPLE_RELEASE_MULT = 1.1
GRAPPLE_SHORTEN_SPEED = 3
GRAPPLE_LENGTHEN_SPEED = 2
GRAPPLE_CHI_GRAVITY = 0.25
```

## Panneau pedagogique

Le panneau doit expliquer le comportement reel:

```text
Au sol, Raiu peut marcher corde accrochee.
En l'air, la corde devient un pendule.
Haut/bas regle la longueur.
E relache l'elan.
```

Le panneau ne doit pas trop parler. Il doit apparaitre au premier vrai moment ou des points bleus de grappin sont visibles.

## Level design

Le grappin doit devenir necessaire par le niveau, pas par un texte.

Exemples:

```text
petit toit -> gap trop large -> point d'accroche visible -> plateforme
```

```text
garde sur route basse -> point d'accroche au-dessus -> passage vertical
```

```text
corniche haute -> raccourcir corde -> atteindre balcon
```

## Prochaines ameliorations

1. Extraire les points d'accroche dans les objets de section.
2. Ajouter un etat `firing` visuel avant l'accroche immediate.
3. Ajouter un petit son ou flash de claquement.
4. Ajouter une indication de point cible plus subtile.
5. Ajouter une vraie scene d'apprentissage dans Tyrih Section 1B.
6. Ajuster les gaps pour que le grappin soit utile sans devenir obligatoire partout.
7. Passer vers une machine a etats de Raiu plus claire quand le prototype grossit.

## Decision importante

Le grappin ne doit pas corriger un mauvais level design.

Si le joueur dit "le grappin ne sert a rien", la reponse prioritaire est:

- elargir les backgrounds;
- ajouter des gaps;
- placer les gardes sous les trajectoires;
- rendre les points d'accroche evidents;
- tester la trajectoire avant de generer le decor final.
