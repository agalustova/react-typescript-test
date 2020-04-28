import React, { memo, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Typography } from '@material-ui/core';
import './Modal.css';
import {changeList, fetchPosts} from "../../../reducers/actions";
import { changeModalWindow } from '../../../reducers/actions';
import {AppState} from "../../../reducers";

export type ModalType = {
  onClick?: (name?: string) => void;
  name?: string;
};

const Modal: React.FC<ModalType> = ({
  name= 'button',
  onClick = (): void => {},
  }: ModalType): React.ReactElement => {

  const dispatch = useDispatch();

  const [departingTime, setDepartingTime] = useState('');

  const [arrivingTime, setArrivingTime] = useState('');

  const [flightInfo, setFlightInfo] = useState('icao24');

  const cityName = useSelector((state: AppState) => state.app.cityName);

  const handleOnClick = (): void => {
    if (onClick) {
      onClick(name);
      dispatch(changeModalWindow(false));
    }
  };

  const handlerSubmit = (event: any) => {
    event.preventDefault();

    if (departingTime.trim() && arrivingTime.trim() && flightInfo.trim()) {
      let parseDepartingTime = Date.parse(departingTime).toString().slice(0,10);
      let parseArrivingTime = Date.parse(arrivingTime).toString().slice(0,10);
      dispatch(fetchPosts(parseDepartingTime, parseArrivingTime, flightInfo, cityName));
      setDepartingTime('');
      setArrivingTime('');
      setFlightInfo('icao24');
      dispatch(changeModalWindow(false));
      dispatch(changeList(true))
    }
  };

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Atlanta', 159, 6.0, 24, 4.0),
    createData('New York LGA', 237, 9.0, 37, 4.3),
    createData('Amsterdam', 262, 16.0, 24, 6.0),
    createData('London', 305, 3.7, 67, 4.3),
    createData('Berlin', 356, 16.0, 49, 3.9),
    createData('Paris', 356, 16.0, 49, 3.9),
    createData('Bangkok', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="base-style">
      <div className="modal-container">
        <button name={name} className="button-close" onClick={handleOnClick}>&#215;</button>
        <Typography align="center" color="primary" className="title">{cityName}</Typography>
        <Typography align="center" color="primary" className="title">Please enter </Typography>
        <form onSubmit={handlerSubmit} className="input-wrapper">
          <input type="datetime-local" value={departingTime} onChange={event => setDepartingTime(event.target.value)} />
          <input type="datetime-local" value={arrivingTime} onChange={event => setArrivingTime(event.target.value)} />
          <select value={flightInfo} onChange={event => setFlightInfo(event.target.value)}>
            <option value="icao24">ICAO</option>
            <option value="callsign">Call Sign</option>
            <option value="estDepartureAirport">Departure Airport</option>
          </select>
          <button type="submit" className="add">GET INFO</button>
        </form>
      </div>
    </div>
  );
};

export default memo(Modal);
