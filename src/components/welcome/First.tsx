import React from 'react';
import { WelcomeLayout } from './WelcomeLayout';
import { Link } from 'react-router-dom';
import pig from '../../assets/icons/pig.svg';
import s from './WelcomeLayout.module.scss';

export const First: React.FC = () => {
  return (
    <WelcomeLayout>
      {{
        icon: () => <img className={s.icon} src={pig} alt="pig" />,
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
            <Link to="/welcome/2">下一页</Link>
            <Link to="/start">跳过</Link>
          </>
        ),
      }}
    </WelcomeLayout>
  );
};
