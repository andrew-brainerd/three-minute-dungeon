import React, { useEffect } from 'react';
import { func } from 'prop-types';
import PlayArea from '../PlayArea/PlayArea';
import Deck from '../Deck/container';
import Hand from '../Hand/container';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import styles from './App.module.scss';

const App = ({ deal }) => {
  useEffect(() => {
    deal();
  }, [deal]);

  return (
    <div className={styles.app}>
      <DndProvider backend={Backend}>
        <div className={styles.gameContainer}>
          <PlayArea />
          <Deck />
        </div>
        <Hand />
      </DndProvider>
    </div>
  );
};

App.propTypes = {
  deal: func.isRequired
};

export default App;
