import React from 'react';
import s from './First.module.scss';

type Props = {
  children: {
    icon: () => React.ReactNode;
    title: () => React.ReactNode;
    buttons: () => React.ReactNode;
  };
};
export const WelcomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        {children.icon?.()}
        {children.title?.()}
      </div>
      <div className={s.actions}>{children.buttons?.()}</div>
    </div>
  );
};
