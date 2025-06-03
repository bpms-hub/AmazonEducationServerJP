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

var ProductListingMobile = (function (_React$Component) {
  _inherits(ProductListingMobile, _React$Component);

  function ProductListingMobile(props) {
    _classCallCheck(this, ProductListingMobile);

    _get(Object.getPrototypeOf(ProductListingMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      showActionButtons: false
    };
  }

  _createClass(ProductListingMobile, [{
    key: 'toggleActionButtons',
    value: function toggleActionButtons() {
      if (this.state.showActionButtons) {
        this.setState({
          showActionButtons: false
        });
      } else {
        this.setState({
          showActionButtons: true
        });
      }
    }
  }, {
    key: 'renderProduct',
    value: function renderProduct() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(_cc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 7 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'mini' },
                this.props.bookSeries ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary' },
                  'Series: ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    this.props.bookSeries
                  )
                ) : null,
                this.props.bookTitle ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'base', textSize: 'base' },
                  this.props.bookTitle
                ) : null,
                this.props.bookAuthor ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary' },
                  'by ',
                  this.props.bookAuthor
                ) : null,
                this.props.bookNarrator ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Narrator: '
                  ),
                  this.props.bookNarrator
                ) : null,
                this.props.bookLength ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Duration: '
                  ),
                  this.props.bookLength
                ) : null,
                this.props.bookPrice ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary', spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$',
                    this.props.bookPrice,
                    ' With Membership'
                  )
                ) : null,
                this.props.bookRating ? _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, iconColor: 'state', showAverageRating: true })
                ) : null
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last', textAlign: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: this.toggleActionButtons.bind(this) },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/overflow._V288120370_.svg' })
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(["bc-action-sheet, bc-action-sheet", this.state.showActionButtons ? "bc-block" : "bc-hidden"]) },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { textAlign: 'center' },
            _react2['default'].createElement(
              'div',
              {
                className: 'bc-action-sheet-btns',
                style: {
                  top: this.state.showActionButtons ? "auto" : "100%",
                  bottom: this.state.showActionButtons ? "0" : "auto"
                } },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'base', onClick: this.toggleActionButtons.bind(this) },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { backgroundColor: 'secondary' },
                      'Add to Library'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'base', onClick: this.toggleActionButtons.bind(this) },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { backgroundColor: 'secondary' },
                      'Add to Wish List'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'base', onClick: this.toggleActionButtons.bind(this) },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { backgroundColor: 'secondary' },
                      'Cancel'
                    )
                  )
                )
              )
            )
          )
        )
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

  return ProductListingMobile;
})(_react2['default'].Component);

ProductListingMobile.propTypes = {
  bookAuthor: _react.PropTypes.string,
  bookLength: _react.PropTypes.string,
  bookNarrator: _react.PropTypes.string,
  bookPrice: _react.PropTypes.string,
  bookRating: _react.PropTypes.bool,
  bookSeries: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string
};

exports['default'] = ProductListingMobile;
module.exports = exports['default'];