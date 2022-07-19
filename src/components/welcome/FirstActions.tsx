import React from 'react';
import { Link } from 'react-router-dom';
import s from './welcome.module.scss';

export const FirstActions: React.FC = () => {
  return (
    <div className={s.actions}>
      <Link className={s.fake} to="/start">
        跳过
      </Link>
      <Link to="/welcome/2">下一页</Link>
      <Link to="/start">跳过</Link>
    </div>
  );
};
