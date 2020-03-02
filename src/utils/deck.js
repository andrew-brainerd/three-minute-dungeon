import { damageTypes } from '../constants/deck';

const deck = damageTypes.map(type => ({
  damageType: type,
  count: 3
}));

export const getInitialDeck = () => {
  const cards = [];
  deck.map(({ damageType, count }) => {
    for (let i = 0; i < count; i++) {
      cards.push({ damageType });
    }
  });

  return cards;
};
