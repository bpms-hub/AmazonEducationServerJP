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

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductDetail = (function (_React$Component) {
  _inherits(ProductDetail, _React$Component);

  function ProductDetail(props) {
    _classCallCheck(this, ProductDetail);

    _get(Object.getPrototypeOf(ProductDetail.prototype), 'constructor', this).call(this, props);
    this.state = {
      contentWidth: null
    };
  }

  _createClass(ProductDetail, [{
    key: 'renderProducts',
    value: function renderProducts() {
      var _this = this;

      var productArr = _dataPrototypesProductsJson2['default'];
      var rows = [];
      for (var x = 0; x < 4; x++) {
        rows.push(x);
      }
      productArr = rows.map(function (product, index, productArr) {
        if (_this.props.verticalProduct) {
          return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _this.props.hasAsin ? _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(_cc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] })
              ) : _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', source: _dataPrototypesProductsJson2['default'][0].product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listDirection: 'nostyle' },
                  _this.props.bookTitle ? _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _this.props.bookTitle
                  ) : null,
                  _this.props.bookAuthor ? _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    'by ',
                    _this.props.bookAuthor
                  ) : null,
                  _this.props.bookRating ? _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
                  ) : null,
                  _this.props.addCartButton ? _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 9 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { size: 'small' },
                          'Add to Cart'
                        )
                      )
                    )
                  ) : null
                )
              )
            )
          );
        } else if (_this.props.horizontalProduct) {
          return _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])(["bc-product-detail-horizontal", index + 1 === productArr.length ? " last" : null]) },
            _react2['default'].createElement(_AudibleUITags2['default'].Product, {
              asinSize: _this.props.horizontalSize,
              onAsin: true,
              productAsin: product.asin }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listDirection: 'nostyle' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Departure'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  '1 Credit or $17.99'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last', gridPull: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      null,
                      'Add to Cart'
                    )
                  )
                )
              )
            )
          );
        }
      });

      return productArr;
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-product-detail'];

      var contentWidth = {
        width: this.state.contentWidth
      };

      return _react2['default'].createElement(
        _AudibleUITags2['default'].Section,
        {
          id: this.props.id,
          cssClass: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { ref: 'container', cssClass: 'bc-product-detail-container' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-product-detail-content', style: contentWidth },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'medium' },
                this.props.productTitle
              )
            ),
            this.renderProducts()
          )
        )
      );
    }
  }]);

  return ProductDetail;
})(_react2['default'].Component);

ProductDetail.PropTypes = {
  id: _react.PropTypes.string,
  addCartButton: _react.PropTypes.bool,
  bookTitle: _react.PropTypes.string,
  bookAuthor: _react.PropTypes.string,
  bookRating: _react.PropTypes.bool,
  cssClass: _react.PropTypes.string,
  hasAsin: _react.PropTypes.bool,
  horizontalSize: _react.PropTypes.string,
  productList: _react.PropTypes.array,
  verticalProduct: _react.PropTypes.bool,
  horizontalProduct: _react.PropTypes.bool,
  productTitle: _react.PropTypes.string

};

exports['default'] = ProductDetail;
module.exports = exports['default'];