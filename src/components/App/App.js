import React from 'react';
import deck from '../../utils/deck';
import Card from '../Card/Card';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    {console.log(deck)}
    {deck.map(({ damageType, count }) => {
      console.log({ damageType, count });
      let cards = [];
      for (let i = 0; i < count; i++) {
        cards.push(
          <Card
            key={damageType + i}
            damageType={damageType}
          />);
      }

      return cards;
    }
    )}
  </div>
);

export default App;
