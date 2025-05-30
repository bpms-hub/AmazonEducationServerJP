import express from 'express';
import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RoutingContext, match } from 'react-router';
import routes from './routes';
import compression from 'compression';
import device from 'mobile-detect';


const router = express.Router();
      router.use(compression());

let jsPath = '/app.js';

if(global.__DEV__ ){
  var hostname = process.env.HOSTNAME || "localhost";
  jsPath = 'http://'+hostname+':8080/app.js';
}

const templateFile = `<!DOCTYPE html>
                      <html>
                          <head>
                            <title>Audible Brick City</title>
                            <link rel="stylesheet" type="text/css" href="/skin.css">
                            <link rel="stylesheet" type="text/css" href="/local.css">
                            <link rel="stylesheet" type="text/css" href="/components.css">
                            <link rel="stylesheet" type="text/css" href="/fonts.css">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <script src="<%= path %>"></script>
                          </head>
                          <body class="svg <%= device %>">
                            <div id="app"><%= body %></div>
                          </body>
                      </html>`;

const template = _.template(templateFile);

router.use(express.static(path.join(__dirname, '../assets')));

router.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let md = new device(req.headers['user-agent']);
      let devices = [];
      md.mobile() ? devices.push('mobile'):null;
      md.phone() ? devices.push('phone'):null;
      md.tablet() ? devices.push('tablet'):null;
      md.os() ? devices.push(md.os()):null;
      let data = {}
      data.body = ReactDOMServer.renderToString(
                    <RoutingContext {...renderProps} />
                  );
      data.path = jsPath;
      data.device = devices.join(' ') || '';
      let html = template(data);
      res.status(200).send(html)
    } else {
      res.status(404)
        .set( 'Content-Type', 'text/html' )
        .send('Not found')
    }
  })
});

export default router;
