import { getInitialDeck } from '../utils/deck';
import {
  SHUFFLE,
  DEALING_CARDS,
  CARDS_DEALT,
  SET_CURRENT_DECK,
  ADD_CARD_TO_HAND
} from '../actions/deck';

const initialState = {
  currentDeck: getInitialDeck(),
  hand: [],
  isDealing: false
};

export default function deck (state = initialState, action) {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        currentDeck: getInitialDeck()
      };
    case DEALING_CARDS:
      return {
        ...state,
        isDealing: true,
        hand: null
      };
    case CARDS_DEALT:
      return {
        ...state,
        isDealing: false,
        hand: action.hand
      };
    case SET_CURRENT_DECK:
      return {
        ...state,
        currentDeck: action.deck
      };
    case ADD_CARD_TO_HAND:
      return {
        ...state,
        hand: [
          ...state.hand,
          action.card
        ]
      };
    default:
      return state;
  }
};
