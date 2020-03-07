import { damageTypes } from '../constants/deck';
import { getRandomInt } from './math';

const deck = damageTypes.map(type => ({
  damageType: type,
  count: getRandomInt(6)
}));

export const getInitialDeck = () => {
  const cards = [];
  deck.map(({ damageType, count }, cardId) => {
    for (let i = 0; i < count; i++) {
      cards.push({ cardId, damageType });
    }
    return 0;
  });

  return cards;
};
