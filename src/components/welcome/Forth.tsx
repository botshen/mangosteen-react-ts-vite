import React from 'react';
import { Link } from 'react-router-dom';
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';

export const Forth: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.icon} src={cloud} alt="cloud" />
        <h2>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      </div>
      <div className={s.actions}>
        <Link className={s.fake} to="/start">
          跳过
        </Link>
        <Link to="/start">完成</Link>
        <Link className={s.fake} to="/start">
          跳过
        </Link>
      </div>
    </div>
  );
};
