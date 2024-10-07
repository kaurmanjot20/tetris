import React from 'react';
import './styles/StyledCell.css';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <div
    className={`cell cell-${type}`}
    style={{ backgroundColor: `rgba(${TETROMINOS[type].color}, 0.8)` }}
  />
);

export default React.memo(Cell);