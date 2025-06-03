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

var ProductCarouselMobile = (function (_React$Component) {
  _inherits(ProductCarouselMobile, _React$Component);

  function ProductCarouselMobile(props) {
    _classCallCheck(this, ProductCarouselMobile);

    _get(Object.getPrototypeOf(ProductCarouselMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      showViewAllArrow: false,
      showViewAllText: true
    };
  }

  _createClass(ProductCarouselMobile, [{
    key: 'renderProducts',
    value: function renderProducts() {
      var productMap = _dataPrototypesProductsJson2['default'].map(function (product, index) {
        return _react2['default'].createElement(
          _AudibleUITags2['default'].ListItem,
          { key: index },
          _react2['default'].createElement(_cc2['default'].Asin, {
            hasCard: true,
            asinSize: '114',
            url: "/prototypes/brickcity-mobile/pdp/" + product.asin,
            product: product
          })
        );
      });
      return productMap;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var itemWidth = 114;
      var carouselWidth = (itemWidth + 20) * _dataPrototypesProductsJson2['default'].length - 20;
      var screenWidth = this.refs.content.clientWidth;
      var ScrollXPos = window.scrollX;
      console.log("carouselWidth " + carouselWidth + " screenWidth " + screenWidth + " ScrollXPos " + ScrollXPos);

      if (ScrollXPos >= carouselWidth - itemWidth) {
        alert("fade in view all");
        this.setState({
          showViewAllArrow: true,
          showViewAllText: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 10 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Browse Category Title'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 2, textAlign: 'right', position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'View All'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { cssClass: 'bc-mobile-carousel' },
          _react2['default'].createElement(
            'div',
            { ref: 'content' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'horizontal' },
              this.renderProducts(),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { cssClass: 'bc-carousel-see-all' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { textAlign: 'center', paddingSize: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini', cssClass: 'bc-carousel-see-all-btn' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-right', textColor: 'link', iconSize: 'medium' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'View All'
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

  return ProductCarouselMobile;
})(_react2['default'].Component);

ProductCarouselMobile.PropTypes = {
  id: _react.PropTypes.string,
  carouselSize: _react.PropTypes.string
};

ProductCarouselMobile.defaultProps = {
  carouselSize: 114
};

exports['default'] = ProductCarouselMobile;
module.exports = exports['default'];