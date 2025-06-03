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

var Product = (function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    _get(Object.getPrototypeOf(Product.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Product, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        this.props,
        _react2['default'].createElement(
          'div',
          { className: 'bc-relative' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'micro' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { url: this.props.url ? this.props.url : null, app: this.props.url ? true : null },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', block: true, imageWidth: this.props.asinSize ? this.props.asinSize : '100%', imageHeight: this.props.asinSize ? this.props.asinSize : '100%', source: this.props.asinImageUrl ? this.props.asinImageUrl : 'test' })
            ),
            _react2['default'].createElement(_cc2['default'].AudioTrigger, { fullTitle: this.props.triggerFullTitle, onClick: this.props.onAudioTriggerClick, initialText: this.props.initialAudioTriggerText })
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.bookTitle
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.bookAuthor
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].GridRow, null)
      );
    }
  }]);

  return Product;
})(_react2['default'].Component);

Product.propTypes = {
  asinSize: _react.PropTypes.string,
  url: _react.PropTypes.string,
  asinImageUrl: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string,
  bookLength: _react.PropTypes.string,
  bookAuthor: _react.PropTypes.string,
  initialAudioTriggerText: _react.PropTypes.string,
  hasStars: _react.PropTypes.bool,
  onAudioTriggerClick: _react.PropTypes.func
};

Product.defaultProps = {
  hasStars: false
};

exports['default'] = Product;
module.exports = exports['default'];