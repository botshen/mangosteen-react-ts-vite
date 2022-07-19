import React from 'react';
import s from './Welcome.module.scss';
import logo from '../assets/icons/mangosteen.svg';
import { NamedOutlet } from '../utils/NamedOutlet';

export const Welcome: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={logo} alt="logo" />
        <h1>山竹记账</h1>
      </header>
      <main className={s.main}>
        <NamedOutlet name="main" />
      </main>
      <footer>
        <NamedOutlet name="footer" />
      </footer>
    </div>
  );
};
