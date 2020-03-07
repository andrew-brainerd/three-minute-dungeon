import React from 'react';
import { array, func } from 'prop-types';
import styles from './Deck.module.scss';

const Deck = ({ currentDeck, drawCard }) => {
  const hasMoreCards = !!currentDeck.length;

  return (
    <div className={styles.deck}>
      <div
        className={[
          styles.button,
          !hasMoreCards ? styles.disabled : ''
        ].join(' ')}
        onClick={() => hasMoreCards && drawCard()}
      >
        {!hasMoreCards ? 'Empty' : 'Draw Card'}
      </div>
    </div>
  );
};

Deck.propTypes = {
  currentDeck: array,
  drawCard: func.isRequired
};

export default Deck;
