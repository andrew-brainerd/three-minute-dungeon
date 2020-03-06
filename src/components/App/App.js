import React, { useEffect } from 'react';
import { func } from 'prop-types';
import Deck from '../Deck/container';
import Hand from '../Hand/container';
import styles from './App.module.scss';

const App = ({ deal }) => {
  useEffect(() => {
    deal();
  }, [deal]);

  return (
    <div className={styles.app}>
      <div className={styles.gameContainer}>
        <div className={styles.playArea}></div>
        <Deck />
      </div>
      <Hand />
    </div>
  );
};

App.propTypes = {
  deal: func.isRequired
};

export default App;
