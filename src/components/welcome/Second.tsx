import React from "react";
import { Link } from "react-router-dom";

export const Second: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the welcome 2 page</p>
      <Link to="/welcome/3">下一页</Link>
      <Link to="/start">跳过</Link>
    </div>
  );
};
