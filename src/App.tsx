import { useRoutes } from 'react-router-dom';
import { routes } from './config/routes';

export const App = () => <div className="page">{useRoutes(routes)}</div>;
