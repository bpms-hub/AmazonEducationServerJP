'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// eslint-disable-line no-unused-vars

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Image = (function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    _get(Object.getPrototypeOf(Image.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-image'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.lazyLoaded) staticClasses.push('bc-lazy-loaded');
      if (this.props.block) staticClasses.push('bc-block');

      var inlineStyles = {
        verticalAlign: this.props.verticalAlign
      };
      return _react2['default'].createElement('img', {
        alt: this.props.altText,
        className: (0, _classnames2['default'])(staticClasses),
        'data-bc-hires': this.props.hiResSource,
        height: this.props.imageHeight,
        id: this.props.id,
        src: this.props.source,
        style: inlineStyles,
        title: this.props.title,
        width: this.props.imageWidth });
    }
  }]);

  return Image;
})(_react2['default'].Component);

Image.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  source: _react.PropTypes.string,
  hiResSource: _react.PropTypes.string,
  title: _react.PropTypes.string,
  altText: _react.PropTypes.string,
  lazyLoaded: _react.PropTypes.bool,
  imageHeight: _react.PropTypes.string,
  imageWidth: _react.PropTypes.string,
  verticalAlign: _react.PropTypes.string
};
exports['default'] = Image;
module.exports = exports['default'];