import React from 'react';
import { string, number, oneOf, bool, func } from 'prop-types';
import { useDrag } from 'react-dnd';
import { itemTypes, damageTypes } from '../../constants/deck';
import styles from './Card.module.scss';

const Card = ({ className, cardId, damageType, mini, playCard }) => {
  const [{ isDragging }, dragRef] = useDrag({
    // eslint-disable-next-line no-restricted-globals
    item: { damageType, type: itemTypes.CARD },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        playCard({ cardId, damageType: item.damageType });
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div
      className={[
        styles.card,
        mini ? styles.mini : '',
        isDragging ? styles.dragging : '',
        className || ''
      ].join(' ')}
      ref={dragRef}
    >
      <div
        className={[
          styles.damageType,
          styles[damageType]
        ].join(' ')}
      >
        {damageType}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: string,
  cardId: number,
  damageType: oneOf(damageTypes),
  mini: bool,
  playCard: func.isRequired
};

export default Card;
