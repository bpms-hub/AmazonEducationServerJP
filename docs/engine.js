'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var router = _express2['default'].Router();
router.use((0, _compression2['default'])());

var jsPath = '/app.js';

if (global.__DEV__) {
  var hostname = process.env.HOSTNAME || "localhost";
  jsPath = 'http://' + hostname + ':8080/app.js';
}

var templateFile = '<!DOCTYPE html>\n                      <html>\n                          <head>\n                            <title>Audible Brick City</title>\n                            <link rel="stylesheet" type="text/css" href="/skin.css">\n                            <link rel="stylesheet" type="text/css" href="/local.css">\n                            <link rel="stylesheet" type="text/css" href="/components.css">\n                            <link rel="stylesheet" type="text/css" href="/fonts.css">\n                            <meta name="viewport" content="width=device-width, initial-scale=1">\n                            <script src="<%= path %>"></script>\n                          </head>\n                          <body class="svg <%= device %>">\n                            <div id="app"><%= body %></div>\n                          </body>\n                      </html>';

var template = _lodash2['default'].template(templateFile);

router.use(_express2['default']['static'](_path2['default'].join(__dirname, '../assets')));

router.use(function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2['default'], location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var md = new _mobileDetect2['default'](req.headers['user-agent']);
      var devices = [];
      md.mobile() ? devices.push('mobile') : null;
      md.phone() ? devices.push('phone') : null;
      md.tablet() ? devices.push('tablet') : null;
      md.os() ? devices.push(md.os()) : null;
      var data = {};
      data.body = _reactDomServer2['default'].renderToString(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps));
      data.path = jsPath;
      data.device = devices.join(' ') || '';
      var html = template(data);
      res.status(200).send(html);
    } else {
      res.status(404).set('Content-Type', 'text/html').send('Not found');
    }
  });
});

exports['default'] = router;
module.exports = exports['default'];