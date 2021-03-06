import { Weapon } from '@/assets/data/types/Weapon.js';
import { FORGERY } from '@/assets/data/materials/forgery.js';

const prototypeRancour = new Weapon({
  displayName: 'Prototype Rancour',
  rarity: 4,
  ascensionMaterials: [
    FORGERY.ELIXIR
  ],
  iconImageSrc: 'images/weapons/swords/prototype_rancour.png',
});

export {
  prototypeRancour
};