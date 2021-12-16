/// <reference types="chrome"/>
import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from '../app';
import { ENUM_VIEW_TYPE } from '../utils/types';

ReactDOM.render(
  <React.StrictMode>
    <Index type={ENUM_VIEW_TYPE.PANEL} />
  </React.StrictMode>,
  document.getElementById('root')
);
