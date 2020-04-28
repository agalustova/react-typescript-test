import React, { memo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import './List.css';
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { AppState } from '../../../reducers';
import {changeList} from "../../../reducers/actions";

export type ListType = {
  onClick?: (name?: string) => void;
  name?: string;
};

const List: React.FC<ListType> = ({
    name= 'button',
    onClick = (): void => {},
  }: ListType): React.ReactElement => {

  const dispatch = useDispatch();

  const selectIsOn = (state: AppState) => state.news.list

  const data = useSelector(selectIsOn)

  const loading = useSelector((state: AppState) => state.app.loading);

  const cityName = useSelector((state: AppState) => state.app.cityName);

  const handleOnClick = (): void => {
    if (onClick) {
      onClick(name);
      dispatch(changeList(false))
    }
  };

  return (
    <div className="base-style">
      <div className="list-container">
        <button name={name} className="button-close" onClick={handleOnClick}>&#215;</button>
        {loading
          ? (
          <CircularProgress className="loader" />
          ) : <div className="list-items">
					<TableHead>
						<TableRow>
							<TableCell>There are {data.length} planes arriving to {cityName}</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row}</TableCell>
              </TableRow>
            ))}
					</TableBody>
				</div>
        }
      </div>
    </div>
  );
};

export default memo(List);
