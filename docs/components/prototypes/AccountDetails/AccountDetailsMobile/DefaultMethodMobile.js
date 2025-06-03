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

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _ubiquityHeaderProdHeaderMobile = require('../../ubiquity/Header/ProdHeaderMobile');

var _ubiquityHeaderProdHeaderMobile2 = _interopRequireDefault(_ubiquityHeaderProdHeaderMobile);

var _ubiquityFooterProdFooterMobile = require('../../ubiquity/Footer/ProdFooterMobile');

var _ubiquityFooterProdFooterMobile2 = _interopRequireDefault(_ubiquityFooterProdFooterMobile);

var DefaultMethodMobile = (function (_React$Component) {
  _inherits(DefaultMethodMobile, _React$Component);

  function DefaultMethodMobile() {
    _classCallCheck(this, DefaultMethodMobile);

    _get(Object.getPrototypeOf(DefaultMethodMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DefaultMethodMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _ubiquityCc2['default'].MobilePageTitle,
          { textAlign: 'center', first: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base' },
            'Default Payment'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { spacing: 'base', textBold: false, textColor: 'base' },
                ' DEFAULT PAYMENT'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini', spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'none' },
                      'Card Type:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, textAlign: 'right', spacing: 'none', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'inactive', url: "/prototypes/brickcity-mobile/edit-card" },
                      'Change'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    'American Express ***-1041'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'none' },
                    'Name on Card:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    'Lisa Del Monte'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'none' },
                    'Exp. Date:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    '03-2020'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini', spacing: 'mini' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'none' },
                      'Card Type:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, textAlign: 'right', spacing: 'none', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Set to Default'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    'American Express ***-1041'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'none' },
                    'Name on Card:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    'Lisa Del Monte'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'none' },
                    'Exp. Date:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    '02-2020'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return DefaultMethodMobile;
})(_react2['default'].Component);

exports['default'] = DefaultMethodMobile;
module.exports = exports['default'];
/*Account Infomrmation*/