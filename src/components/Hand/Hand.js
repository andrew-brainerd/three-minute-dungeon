import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'ramda';
import Card from '../Card/container';
import styles from './Hand.module.scss';

const Hand = ({ cards }) => (
  <div className={styles.hand}>
    {!isEmpty(cards) ? cards.map((card, c) =>
      <Card
        key={c}
        className={styles.handCard}
        {...card}
      />) : <div className={styles.dealButton}>Deal</div>
    }
  </div>
);

Hand.propTypes = {
  cards: array.isRequired
};

export default Hand;
