// import dungeon from '../api/dungeon';
import { remove } from 'ramda';
import { getRandomInt } from '../utils/math';
import { getCanDrawCard, getCurrentDeck } from '../selectors/deck';

const PREFIX = 'DECK';

export const SHUFFLE = `${PREFIX}/SHUFFLE`;
export const DEALING_CARDS = `${PREFIX}/DEALING_CARDS`;
export const CARDS_DEALT = `${PREFIX}/CARDS_DEALT`;
export const SET_CURRENT_DECK = `${PREFIX}/SET_CURRENT_DECK`;
export const ADD_CARD_TO_HAND = `${PREFIX}/ADD_CARD_TO_HAND`;

export const shuffleDeck = { type: SHUFFLE };
export const dealingCards = { type: DEALING_CARDS };
export const cardsDealt = hand => ({ type: CARDS_DEALT, hand });
export const setCurrentDeck = deck => ({ type: SET_CURRENT_DECK, deck });
export const addCardToHand = card => ({ type: ADD_CARD_TO_HAND, card });

export const deal = () => async dispatch => {
  console.log('Dealing Cards...');
  dispatch(shuffleDeck);
  dispatch(dealingCards);
};

export const drawCard = () => async (dispatch, getState) => {
  const canDraw = getCanDrawCard(getState());
  if (!canDraw) return;

  const currentDeck = getCurrentDeck(getState());
  const cardNumToDraw = getRandomInt(currentDeck.length);
  const cardDrawn = currentDeck[cardNumToDraw];
  const newDeck = remove(cardNumToDraw, 1, currentDeck);

  console.log('Drawing Card...', { cardNumToDraw, cardDrawn, newDeck });

  dispatch(addCardToHand(cardDrawn));
  dispatch(setCurrentDeck(newDeck));

  return cardDrawn;
};
