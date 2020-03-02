import React, { useState } from 'react';
import { remove } from 'ramda';
import Card from '../Card/Card';
import { getInitialDeck } from '../../utils/deck';
import { getRandomInt } from '../../utils/math';
import styles from './Deck.module.scss';

const initialDeck = getInitialDeck();

const Deck = () => {
  const [currentDeck, setCurrentDeck] = useState(initialDeck);

  const drawCardFromDeck = () => {
    const cardNumToDraw = getRandomInt(currentDeck.length);
    const cardDrawn = currentDeck[cardNumToDraw];

    setCurrentDeck(remove(cardNumToDraw, 1, currentDeck));

    return cardDrawn;
  };

  return (
    <>
      <div className={styles.deck}>
        {currentDeck.map((card, c) =>
          <Card key={c} mini={true} {...card} />
        )}
      </div>
      <div className={styles.buttonContainer}>
        {currentDeck.length &&
          <div
            className={styles.button}
            onClick={() => console.log(drawCardFromDeck())}
          >
            Draw Card
          </div>
        }
      </div>
    </>
  );
};

export default Deck;
