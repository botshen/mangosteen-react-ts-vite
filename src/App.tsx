import { useRoutes } from 'react-router-dom';
import { routes } from './config/routes';

export default function App() {
  const element = useRoutes(routes);
  return <div className="page">{element}</div>;
}
