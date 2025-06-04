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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductListingColumn2 = (function (_React$Component) {
  _inherits(ProductListingColumn2, _React$Component);

  function ProductListingColumn2() {
    _classCallCheck(this, ProductListingColumn2);

    _get(Object.getPrototypeOf(ProductListingColumn2.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProductListingColumn2, [{
    key: 'renderProduct',
    value: function renderProduct() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 2, spacing: 'base' },
            this.props.hasAsin ? _react2['default'].createElement(_cc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] }) : _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', source: this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : _dataPrototypesProductsJson2['default'][0].product_images[500] })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 10, position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listDirection: 'nostyle' },
              this.props.bookTitle ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'base', textSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  this.props.bookTitle
                )
              ) : null,
              this.props.bookAuthor ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                'Author: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  this.props.bookAuthor
                )
              ) : null,
              this.props.bookNarrator ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Narrator: '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  this.props.bookNarrator
                )
              ) : null,
              this.props.trialImage ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium' },
                    '30-day Free Membership'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPull: 6, gridUnits: 6, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'bullet' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          '1 book per month'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'Free for the first 30 days and $14.95/month thereafter'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'Membership Continues until you cancel (by visiting your account or contacting customer service)'
                        )
                      )
                    )
                  )
                )
              ) : null
            )
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        null,
        this.renderProduct()
      );
    }
  }]);

  return ProductListingColumn2;
})(_react2['default'].Component);

ProductListingColumn2.propTypes = {
  bookAuthor: _react.PropTypes.string,
  bookNarrator: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string,
  hasAsin: _react.PropTypes.bool,
  trialImage: _react.PropTypes.bool
};

exports['default'] = ProductListingColumn2;
module.exports = exports['default'];