import React from 'react';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../constants/deck';
import styles from './PlayArea.module.scss';

const PlayArea = () => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: itemTypes.CARD,
    drop: () => ({ name: 'PlayArea' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  return (
    <div
      className={[
        styles.playArea,
        isActive ? styles.active : ''
      ].join(' ')}
      ref={dropRef}
    >
    </div>
  );
};

PlayArea.propTypes = {

};

export default PlayArea;
