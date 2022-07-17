import React from 'react';
import { Link } from 'react-router-dom';
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';

export const First: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img src={pig} alt="pig" />
        <h2>
          会挣钱
          <br />
          还要会省钱
        </h2>
      </div>
      <div className={s.actions}>
        <Link className={s.fake} to="/start">
          跳过
        </Link>
        <Link to="/welcome/2">下一页</Link>
        <Link to="/start">跳过</Link>
      </div>
    </div>
  );
};
