import React from 'react';
import { array } from 'prop-types';
import styles from 'Hand.module.scss';

const Hand = ({ cards }) => {
  return (
    <div className={styles.hand}>
      {cards.map(card => <Card {...card} />)}
    </div>
  )
};

Hand.propTypes = {
  cards: array
}

export default Hand;
