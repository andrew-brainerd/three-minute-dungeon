import React from 'react';
import { oneOf } from 'prop-types';
import { damageTypes } from '../../constants/deck';
import styles from './Card.module.scss';

const Card = ({ damageType }) => {
  return (
    <div className={styles.card}>
      <div
        className={[
          styles.damageType,
          styles[damageType]].join(' ')}
      >
        {damageType}
      </div>
    </div>
  );
};

Card.propTypes = {
  damageType: oneOf(damageTypes)
}

export default Card;
