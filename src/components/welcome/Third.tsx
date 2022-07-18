import React from 'react';
import { Link } from 'react-router-dom';
import s from './First.module.scss';
import { WelcomeLayout } from './WelcomeLayout';
import chart from '../../assets/icons/chart.svg';

export const Third: React.FC = () => {
  return (
    <WelcomeLayout>
      {{
        icon: () => <img className={s.icon} src={chart} alt="chart" />,
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
            <Link to="/welcome/4">下一页</Link>
            <Link to="/start">跳过</Link>
          </>
        ),
      }}
    </WelcomeLayout>
  );
};
