import React from "react";
import { Link } from "react-router-dom";

export const Third: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the welcome 3 page</p>
      <Link to="/welcome/4">下一页</Link>
      <Link to="/start">跳过</Link>
    </div>
  );
};
