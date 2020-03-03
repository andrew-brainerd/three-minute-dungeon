import { getInitialDeck } from "../utils/deck";

const initialState = {
  desk: getInitialDeck(),
  isDealing: false
};

export default function deck(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE:
      return {
        ...state,
        deck: getInitialDeck()
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
        hand: action.hands
      };
    default:
      return state;
  }
};
