import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './src/TicTacToe';
import './sass/style.scss';

'use strict';

ReactDOM.render(<TicTacToe xAxis={ 3 } yAxis={ 3 } />, document.getElementById('app'));
