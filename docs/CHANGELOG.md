# CHANGELOG

## Non publie

- Ajout du chantier `CHANTIER_002_TYRIH_TOITS.md`.
- Ajout des backgrounds peints Tyrih:
  - `assets/tyrih-rooftop-01-slums.png`;
  - `assets/tyrih-rooftop-02-market.png`.
- Remplacement du rendu procedural des toits par les deux sections peintes.
- Ajout de collisions invisibles prototype pour Section 1 et Section 2.
- Transition `rooftops -> manorEntry` recalee a la fin de la Section 2.
- Ajout de la musique Tyrih `assets/tyrih-lantern-debt.mp3`.
- Correction de la propulsion garde dans `manorEntry`:
  - cooldown de hit;
  - vitesse plafonnee;
  - transition vers le manoir bloquee pendant un choc.
- Correction de l'ordre des backgrounds `manorEntry`:
  - `manor-entry-01.png` = entree par la fenetre haute gauche;
  - `manor-entry-02.png` = seconde salle plus dense.
- Repositionnement du spawn de Raiu sur la fenetre haute gauche du premier background.
- Ajustement des plateformes, gardes et points de grappin de `manorEntry` apres inversion des images.
- Modification du grappin: la corde ajoute maintenant une tension sans bloquer la marche ni le saut.
- Modification du contact garde dans `manorEntry`: choc/knockback temporaire au lieu de respawn immediat.
- Ajout de la phase `manorEntry` avant le manoir existant.
- Ajout de `assets/manor-entry-01.png` et `assets/manor-entry-02.png`.
- Assemblage horizontal des deux backgrounds d'entree du manoir.
- Ajout d'un test direct via `?start=manorEntry`.
- Ajout de plateformes invisibles alignees aux corniches/balcons visibles.
- Ajout de gardes simples dans `manorEntry`.
- Ajout de checkpoints simples et respawn sur chute.
- Ajout d'un prototype de grappin:
  - touche `E`;
  - bouton `Grappin`;
  - points d'accroche definis;
  - corde visible;
  - traction/relachement.
- Ajout du document `CHANTIER_001_MANOIR_ENTRY.md`.
- Ajout du document `CHANTIER_001_MANOIR.md`.
- Ajout du document `GAMEPLAY.md`.
- Clarification du workflow Codex / Claude / GPT dans `ROADMAP.md`.
- Documentation des decisions suivantes:
  - niveau manoir en background peint scrolling;
  - collisions invisibles;
  - vie de Raiu en 3 coeurs;
  - chi en jauge;
  - chute = perte de coeur + checkpoint;
  - portage RPG Maker futur, mais pas maintenant.

## fb508c3

- Integration de `assets/manor-bg.png`.
- Integration d'un background manoir peint et scrollable.

## eac66e4

- Ajout de `docs/ROADMAP.md`.

## f2e0b16

- Premiere version du prototype KAKARAIU RPG Proto 2.
