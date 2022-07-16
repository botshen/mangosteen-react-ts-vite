import { useRoutes } from "react-router-dom";
import { routes } from "./config/routes";

export default function App() {
  const element = useRoutes(routes);
  console.log(element);
  return (
      <div className="App">
        {element}
      </div>
  );
}
