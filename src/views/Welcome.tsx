import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Welcome.module.scss";

export const Welcome: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.welcome}>
        <h1>山竹记账</h1>
      </header>
      <main><Outlet /></main>
      <footer> butttons</footer>
    </div>
  );
};
