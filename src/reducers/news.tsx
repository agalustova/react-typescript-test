import { FETCH_DATA } from "../store/actionTypes";
import {DataState} from "./types";

const initialState: DataState = {
  list: []
};

const newsReducer = (state:DataState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
