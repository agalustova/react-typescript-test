import { combineReducers } from 'redux';
import newsReducer from './news';
import appReducer from "./appReducer";
import {DataState, UtilsState} from "./types";

export type AppState = {
  app: UtilsState;
  news: DataState;
};

const rootReducer = combineReducers({
  news: newsReducer,
  app: appReducer,
});

export default rootReducer;
