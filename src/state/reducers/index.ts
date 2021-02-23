import { combineReducers } from "redux";
import repositoriesReducer from "./RepositoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
