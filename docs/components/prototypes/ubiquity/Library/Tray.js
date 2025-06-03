'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ReactCSSTransitionGroup = _AudibleUITags2['default'].Text;

var Tray = (function (_React$Component) {
  _inherits(Tray, _React$Component);

  function Tray(props) {
    _classCallCheck(this, Tray);

    _get(Object.getPrototypeOf(Tray.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Tray, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].Box,
        {
          cssClass: 'bc-pub-relative bc-pub-overflow-hidden bc-shadow',
          spacing: 'base',
          paddingSize: 'none',
          hasBorder: true,
          heightCss: this.props.trayHeight && this.props.trayHeight + 'px' },
        _react2['default'].createElement(
          'span',
          { style: {
              position: 'absolute',
              right: '16px',
              top: '16px',
              zIndex: '2'
            } },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { onClick: this.props.onClickTrayClose },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close', textColor: 'base' })
          )
        ),
        this.props.children
      );
    }
  }]);

  return Tray;
})(_react2['default'].Component);

Tray.PropTypes = {
  onClickTrayClose: _react.PropTypes['function'],
  trayHeight: _react.PropTypes.string
};

exports['default'] = Tray;
module.exports = exports['default'];