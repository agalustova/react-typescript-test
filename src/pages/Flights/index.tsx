import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Modal from './Modal';
import List from './List';
import {changeCityName, changeModalWindow} from "../../reducers/actions";
import { AppState } from "../../reducers";

const Flights = () => {
  const dispatch = useDispatch();

  const selectIsOn = (state: AppState) => state.news.list

  const isOn = useSelector(selectIsOn)

  const modalVisible = useSelector((state: AppState) => state.app.isModalOpen);

  const listVisible = useSelector((state: AppState) => state.app.isListOpen);

  const clickOnCity = (name : string): void => {
    dispatch(changeCityName(name))
    dispatch(changeModalWindow(true));
  }

  function createData(name: string) {
    return { name };
  }

  const rows = [
    createData('Atlanta'),
    createData('New York LGA'),
    createData('Amsterdam'),
    createData('London'),
    createData('Berlin'),
    createData('Paris'),
    createData('Bangkok'),
    createData('San Francisco'),
    createData('Hong Kong'),
  ];

  return (
    <TableContainer component={Paper}>
      {modalVisible && <Modal />}
      {listVisible && <List />}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="titles">Сities with heavy air traffic:</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center" onClick={() => clickOnCity(row.name)}>
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(Flights);
