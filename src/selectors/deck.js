import { pathOr } from 'ramda';
import { createSelector } from 'reselect';
import { MAX_HAND_SIZE } from '../constants/deck';

export const getCurrentDeck = pathOr([], ['deck', 'currentDeck']);

export const getHand = pathOr([], ['deck', 'hand']);

export const getCanDrawCard = createSelector([getHand], hand => {
  console.log('getCanDrawCard: ', hand);
  return hand.length < MAX_HAND_SIZE;
});
