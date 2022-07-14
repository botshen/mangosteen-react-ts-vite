import { routes } from './config/routes';
import { HashRouter, useRoutes } from 'react-router-dom';

function RouteElement() {
  return useRoutes(routes);
}

function App() {
  return (
    <HashRouter>
      <RouteElement />
    </HashRouter>
  );
}

export default App;
