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

var _ProdHeader = require('./ProdHeader');

var _ProdHeader2 = _interopRequireDefault(_ProdHeader);

var _ProdFooter = require('./ProdFooter');

var _ProdFooter2 = _interopRequireDefault(_ProdFooter);

var PromoCode = (function (_React$Component) {
  _inherits(PromoCode, _React$Component);

  function PromoCode() {
    _classCallCheck(this, PromoCode);

    _get(Object.getPrototypeOf(PromoCode.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PromoCode, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'extra-large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'small', spacingTop: 'medium' },
              'Redeem Your Promotional Code'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 5 },
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter promo code', spacing: 'micro' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 5, gridUnits: 2, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary' },
                    'Redeem'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'small', textColor: 'secondary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, gridPull: 6, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Redeeming a gift from a friend? Go now to the'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    ' Gift Center'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '2', spacing: 'micro' },
                  'Way to go!'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'You have received a special offer from Audible or one of our partners. Please enter your code above to take advantage of this promotion.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Terms and Conditions fro Audible Promotional Codes'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_ProdFooter2['default'], null)
      );
    }
  }]);

  return PromoCode;
})(_react2['default'].Component);

exports['default'] = PromoCode;
module.exports = exports['default'];
/* Promo Code */