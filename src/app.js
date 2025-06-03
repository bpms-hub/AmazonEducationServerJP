import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, Link } from 'react-router';
import routes from './routes';
import createHashHistory from 'history/lib/createHashHistory';

let history = createHashHistory();

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);
