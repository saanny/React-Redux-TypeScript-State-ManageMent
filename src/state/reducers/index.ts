import { combineReducers } from "redux";
import repositoriesReducer from "./RepositoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});
export default reducers;
