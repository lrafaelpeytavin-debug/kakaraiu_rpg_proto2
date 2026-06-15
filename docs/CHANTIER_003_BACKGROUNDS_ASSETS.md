# CHANTIER 003 - Backgrounds et assets jouables

## Probleme actuel

Les backgrounds peints donnent enfin une ame a KAKA RAIU, mais ils restent encore trop monolithiques pour du vrai level design.

Risque:

- image tres belle mais difficile a jouer;
- plateformes peu lisibles;
- grappin inutile si les gaps ne sont pas construits pour lui;
- collisions difficiles a maintenir;
- decor trop serre, donc peu de respiration pour la camera.

Le but n'est pas de repartir de zero. Le but est de passer d'une image spectaculaire a un kit de scene jouable.

## Direction validee

Pour chaque grosse sequence, viser une structure en couches:

```text
assets/tyrih/section_01a/
  sky_back.png
  far_city.png
  mid_rooftops.png
  playfield_roofs.png
  foreground_props.png
  collision.json
  anchors.json
```

Version prototype acceptable:

```text
assets/tyrih-rooftop-01-slums.png
assets/tyrih-rooftop-02-market.png
```

Version production visee:

- fond lointain separe;
- ville moyenne separee;
- zone jouable separee;
- props de premier plan separes;
- collisions et points de grappin dans des donnees lisibles.

## Parallaxe

Quand les couches existent, le rendu doit utiliser des facteurs differents:

```js
drawLayer(skyBack, 0.04);
drawLayer(farCity, 0.12);
drawLayer(midRooftops, 0.32);
drawLayer(playfieldRoofs, 1.0);
drawLayer(foregroundProps, 1.18);
```

Regle:

- plus la couche est loin, moins elle bouge;
- la couche `playfield` est la seule qui doit correspondre aux collisions principales;
- le premier plan peut masquer legerement Raiu, mais jamais nuire a la lisibilite.

## Lisibilite

Le joueur doit comprendre instantanement:

- ou Raiu peut marcher;
- ou il peut sauter;
- ou il peut accrocher le grappin;
- ou il risque de tomber;
- ou un garde bloque le passage.

Les points de grappin doivent correspondre a des objets visuels forts:

- mat;
- chaine;
- lanterne suspendue;
- poutre;
- corniche.

## Workflow recommande

1. Faire un blockout simple du niveau.
2. Placer les plateformes invisibles.
3. Placer les points de grappin.
4. Tester le parcours en rectangles.
5. Generer ou peindre le background autour du parcours valide.
6. Decouper le decor en couches si la section devient importante.
7. Ajuster les collisions seulement apres test jouable.

## Prompt type pour GPT / generation image

```text
Background side-scrolling 2.5D playable level for KAKA RAIU.
Dark fantasy anime, poor rooftops of Tyrih at night, close cramped roofs, laundry ropes, smoke, red lanterns, small shrines, visible solid beams and hooks for grappling.
Keep a clear horizontal gameplay path with readable ledges and gaps.
Leave foreground gameplay surfaces visually distinct from distant city.
No UI, no character, no text.
Ultra-wide 16:9 or wider.
```

## Decision pour les decors actuels

Ne pas jeter:

- `tyrih-rooftop-01-slums.png`;
- `tyrih-rooftop-02-market.png`;
- `manor-entry-01.png`;
- `manor-entry-02.png`;
- `manor-bg.png`.

Ces images restent:

- references de palette;
- prototypes jouables;
- base de composition;
- preuve que le pipeline marche.

Ce qu'il faut ajouter ensuite:

- une vraie Section 1B Tyrih, plus large et plus pauvre;
- des backgrounds plus aeres pour laisser respirer le grappin;
- des collisions/anchors sortis progressivement du code vers des donnees;
- des couches parallax quand une section est stabilisee.

## References techniques a garder

- Canvas `drawImage`: base du rendu image 2D dans le prototype.
- `imageSmoothingEnabled`: utile pour controler le rendu des sprites et du pixel/painted art.
- Documentation Godot Parallax2D: reference conceptuelle pour la logique de couches.
- Retours de dev metroidvania: la lisibilite des surfaces jouables prime sur la beaute brute.
