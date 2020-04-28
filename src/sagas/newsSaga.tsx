import { put, call, takeEvery } from 'redux-saga/effects';
import {FETCH_DATA, REQUEST_DATA} from "../store/actionTypes";
import {hideLoader, showLoader} from "../reducers/actions";
import axios from 'axios'

function *getData({ parseDepartingTime, parseArrivingTime, flightInfo, cityName }: any) {
  try {
    yield put(showLoader());
    let city = '';
    if (cityName === 'Atlanta') {
      city = 'KATL';
    } else if (cityName === 'New York LGA') {
      city = 'KLGA';
    } else if (cityName === 'Amsterdam') {
      city = 'EHAM'
    } else if (cityName === 'London') {
      city = 'EGLL'
    } else if (cityName === 'Berlin') {
      city = 'EDDB'
    } else if (cityName === 'Paris') {
      city = 'LFPG'
    } else if (cityName === 'Bangkok') {
      city = 'VTBD'
    } else if (cityName === 'San Francisco') {
      city = 'KSFO'
    } else if (cityName === 'Hong Kong') {
      city = 'VHHH'
    }
    const res = yield call(axios, `https://opensky-network.org/api/flights/arrival?airport=${city}&begin=${parseDepartingTime}&end=${parseArrivingTime}`);
    let payload = res.data;
    if (flightInfo === 'icao24') {
      payload = res.data.map((item:any) => item.icao24)
    } else if (flightInfo === 'callsign') {
      payload = res.data.map((item:any) => item.callsign)
    } else if (flightInfo === 'estDepartureAirport') {
      payload = res.data.map((item:any) => item.estDepartureAirport)
    }
    yield put({ type: FETCH_DATA, payload })
    yield put(hideLoader())
  } catch (error) {
    console.log(error);
  }
}

export default function *watchData() {
  yield takeEvery(REQUEST_DATA, getData);
}

