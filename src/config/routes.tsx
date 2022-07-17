import { Navigate } from 'react-router-dom';
import { Welcome } from '../views/Welcome';
import { First } from '../components/welcome/First';
import { Second } from '../components/welcome/Second';
import { Third } from '../components/welcome/Third';
import { Forth } from '../components/welcome/Forth';

export const routes = [
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      { path: '', element: <Navigate to="/welcome/1" /> },
      { path: '/welcome/1', element: <First /> },
      { path: '/welcome/2', element: <Second /> },
      { path: '/welcome/3', element: <Third /> },
      { path: '/welcome/4', element: <Forth /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/welcome" />,
  },
];
