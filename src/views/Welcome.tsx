import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/mangosteen.svg";

export const Welcome: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <img src={logo} alt="logo" />
        <h1 className="text-2xl">山竹记账</h1>
      </header>
      <main><Outlet /></main>
    </div>
  );
};
