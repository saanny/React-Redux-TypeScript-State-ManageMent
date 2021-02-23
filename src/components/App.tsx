import { Provider } from "react-redux";
import { store } from "../state";
import { RepositoriesList } from "./RepositoriesList";
export const App: React.FC = ({}) => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};
