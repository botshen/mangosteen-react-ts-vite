import React from 'react';
import { Link } from 'react-router-dom';
import s from './welcome.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { WelcomeLayout } from './WelcomeLayout';

export const Forth: React.FC = () => {
  return (
    <WelcomeLayout>
      {{
        icon: () => <img className={s.icon} src={cloud} alt="cloud" />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
        buttons: () => (
          <>
            <Link className={s.fake} to="/start">
              跳过
            </Link>
            <Link to="/start">完成</Link>
            <Link className={s.fake} to="/start">
              跳过
            </Link>
          </>
        ),
      }}
    </WelcomeLayout>
  );
};
