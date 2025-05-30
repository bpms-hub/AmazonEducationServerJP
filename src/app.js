import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, Link } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'

function run(){
	const reactMountPoint = document.getElementById('app');

	let history = createBrowserHistory();

	ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={history} routes={routes}/>, reactMountPoint );
}

new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(run)
