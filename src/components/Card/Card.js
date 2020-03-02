import React from 'react';
import { oneOf, bool } from 'prop-types';
import { damageTypes } from '../../constants/deck';
import styles from './Card.module.scss';

const Card = ({ damageType, mini }) => {
  return (
    <div
      className={[
        styles.card,
        mini ? styles.mini : ''
      ].join(' ')}
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
  damageType: oneOf(damageTypes),
  mini: bool
};

export default Card;
