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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var GiftsGiven = (function (_React$Component) {
  _inherits(GiftsGiven, _React$Component);

  function GiftsGiven() {
    _classCallCheck(this, GiftsGiven);

    _get(Object.getPrototypeOf(GiftsGiven.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GiftsGiven, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            'Gifts Given'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'No gifts purchased: You have not purchased any gifts. You may purchase any audiobook as a gift from the book\'s product detail page, or from many other locations throughout our site. Look for the "Give as a Gift" link. Continue shopping.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { background: 'primary', spacing: 'base', paddingSize: 'base', hasBorder: false },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, textColor: 'secondary', spacing: 'small' },
              'Gifts Given'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Table,
                { textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumnHeading,
                    null,
                    'Date'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumnHeading,
                    null,
                    'Gift #'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumnHeading,
                    null,
                    'Membership Length'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumnHeading,
                    null,
                    'Price'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '05-19-15'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      '7ZCMMCZ1FCL8DTZDQ0Z0'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '3 Months'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '$45.00'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '05-24-15'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'NNWKAZZYYZJJ9MVC0910'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '6 Months'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '$90.00'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '12-20-14'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      '8HDDF99ZDJKLJRZPTQW1'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '12 Months'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '$150.00'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return GiftsGiven;
})(_react2['default'].Component);

exports['default'] = GiftsGiven;
module.exports = exports['default'];