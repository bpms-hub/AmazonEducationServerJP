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

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var BrickCityComponent = (function (_React$Component) {
  _inherits(BrickCityComponent, _React$Component);

  function BrickCityComponent(props, context) {
    _classCallCheck(this, BrickCityComponent);

    _get(Object.getPrototypeOf(BrickCityComponent.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(BrickCityComponent, [{
    key: 'getBrickCityComponent',
    value: function getBrickCityComponent(name, att, children) {
      var RenderElement = _AudibleUITags2['default'][name];
      if (RenderElement === undefined) RenderElement = _AudibleUITags2['default']['Link'];
      return _react2['default'].createElement(RenderElement, att, children);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        this.getBrickCityComponent(this.props.name, this.props.att, this.props.content)
      );
    }
  }]);

  return BrickCityComponent;
})(_react2['default'].Component);

BrickCityComponent.propTypes = {
  name: _react.PropTypes.string.isRequired,
  att: _react.PropTypes.object.isRequired,
  content: _react.PropTypes.string.isRequired
};

exports['default'] = BrickCityComponent;
module.exports = exports['default'];