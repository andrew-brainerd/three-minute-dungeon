import React from 'react';
import { string, oneOf, bool } from 'prop-types';
import { damageTypes } from '../../constants/deck';
import styles from './Card.module.scss';

const Card = ({ className, damageType, mini }) => {
  return (
    <div
      className={[
        styles.card,
        mini ? styles.mini : '',
        className || ''
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
  className: string,
  damageType: oneOf(damageTypes),
  mini: bool
};

export default Card;
