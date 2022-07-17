import React from 'react';
import { Link } from 'react-router-dom';

export const First: React.FC = () => {
  return (
    <div>
      <h1>子路组件</h1>
      <p>This is the welcome 1 page</p>
      <Link to="/welcome/2">下一页</Link>
      <Link to="/start">跳过</Link>
    </div>
  );
};
