import React from 'react';
import pig from '../../assets/icons/pig.svg';
import s from './welcome.module.scss';

export const First: React.FC = () => {
  return (
    <div className={s.card}>
      <img src={pig} alt="pig" />
      <h2>
        会挣钱
        <br />
        还会省钱
      </h2>
    </div>
  );
};
