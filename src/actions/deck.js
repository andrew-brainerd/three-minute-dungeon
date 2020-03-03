import dungeon from '../api/dungeon';

const PREFIX = 'DECK';

export const SHUFFLE = `${PREFIX}/SHUFFLE`;
export const DEALING_CARDS = `${PREFIX}/DEALING_CARDS`;
export const CARDS_DEALT = `${PREFIX}/CARDS_DEALT`;

export const shuffleDeck = { type: SHUFFLE };
export const dealingCards = { type: DEALING_CARDS };
export const cardsDealt = hand => ({ type: CARDS_DEALT, hand });

export const deal = () => async dispatch => {
  dispatch(shuffleDeck;
  dispatch(dealingCards);

};
