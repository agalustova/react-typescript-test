import {
  CHANGE_ALERT,
  CHANGE_CITY_NAME,
  CHANGE_LIST,
  CHANGE_WINDOW,
  HIDE_LOADER,
  REQUEST_DATA,
  SHOW_LOADER
} from "../store/actionTypes";

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function fetchPosts(parseDepartingTime: string, parseArrivingTime: string, flightInfo: string, cityName: string) {
  return {
    type: REQUEST_DATA,
    parseDepartingTime,
    parseArrivingTime,
    flightInfo,
    cityName,
  }
}

export const changeModalWindow = (payload: boolean) => ({
  type: CHANGE_WINDOW,
  payload,
});

export const changeList = (payload: boolean) => ({
  type: CHANGE_LIST,
  payload,
});

export const changeCityName = (payload: string) => ({
  type: CHANGE_CITY_NAME,
  payload,
});

export const changeAlert = (payload: string) => ({
  type: CHANGE_ALERT,
  payload
});
