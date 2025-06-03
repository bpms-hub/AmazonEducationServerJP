'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _engine = require('./engine');

var _engine2 = _interopRequireDefault(_engine);

var server = (0, _express2['default'])();
server.set('port', _config2['default'].port);

var router = _express2['default'].Router();
router.use((0, _compression2['default'])());

server.use("/", _engine2['default']);

server.listen(server.get('port'), function () {
  console.info("==> ✅  Server is listening");
  console.info("==> 🌎  Go to: http://" + process.env.HOSTNAME + ":" + server.get('port'));
});