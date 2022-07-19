import React from 'react';
import { Link } from 'react-router-dom';
import s from './welcome.module.scss';
import clock from '../../assets/icons/clock.svg';
import { WelcomeLayout } from './WelcomeLayout';

export const Second: React.FC = () => {
  return (
    <WelcomeLayout>
      {{
        icon: () => <img className={s.icon} src={clock} alt="clock" />,
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
            <Link to="/welcome/3">下一页</Link>
            <Link to="/start">跳过</Link>
          </>
        ),
      }}
    </WelcomeLayout>
  );
};
