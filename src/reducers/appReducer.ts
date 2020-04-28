import {
  SHOW_LOADER,
  HIDE_LOADER,
  CHANGE_WINDOW,
  CHANGE_LIST,
  CHANGE_CITY_NAME,
  CHANGE_ALERT,
} from "../store/actionTypes";
import {UtilsState} from "./types";

const initialState: UtilsState = {
  loading: false,
  isModalOpen: false,
  isListOpen: false,
  cityName: '',
  alertMessage: '',
}

const appReducer = (state: UtilsState = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case CHANGE_WINDOW:
      return {
        ...state,
        isModalOpen: action.payload || false,
      }
    case CHANGE_LIST:
      return {...state,
        isListOpen: action.payload || false,
      }
    case CHANGE_CITY_NAME:
      return {...state,
        cityName: action.payload || '',
      }
    case CHANGE_ALERT:
      return {...state,
        alertMessage: action.payload || '',
      }
    default: return state
  }
}

export default appReducer;
