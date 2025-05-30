import express from 'express';
import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RoutingContext, match } from 'react-router';
import routes from './routes';
import CONFIG from './config';
import compression from 'compression';
import device from 'mobile-detect';

const server = express();
server.set('port', (CONFIG.port));


const router = express.Router();
router.use(compression());

import engine from './engine';

server.use("/",engine);

server.listen(server.get('port'), () => {
  console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to: http://"+process.env.HOSTNAME +":"+ server.get('port'));

});
