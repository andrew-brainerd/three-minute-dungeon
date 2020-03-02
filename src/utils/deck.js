import { damageTypes } from '../constants/deck';

const deck = damageTypes.map(type => ({
  damageType: type,
  count: 12
}));

export default deck;
