import { Domain, DOMAINTYPE } from '@/assets/data/types/Domain.js';
import { DAY } from '@/assets/data/utils/days.js';

const clearPoolAndMountainCavern = new Domain({
  displayName: 'Clear Pool and Mountain Cavern',
  rewards: {
    [DAY.MONDAY]: [],
    [DAY.TUESDAY]: [],
    [DAY.WEDNESDAY]: [],
    [DAY.THURSDAY]: [],
    [DAY.FRIDAY]: [],
    [DAY.SATURDAY]: [],
    [DAY.SUNDAY]: [],
  },
  type: DOMAINTYPE.BLESSING,
});

export {
  clearPoolAndMountainCavern,
};
