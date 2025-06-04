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

var ProductCarousel = (function (_React$Component) {
  _inherits(ProductCarousel, _React$Component);

  function ProductCarousel(props) {
    _classCallCheck(this, ProductCarousel);

    _get(Object.getPrototypeOf(ProductCarousel.prototype), 'constructor', this).call(this, props);
    this.state = {
      itemWidth: null,
      contentWidth: null,
      contentOffset: 0,
      containerWidth: null,
      arrowClicked: null,
      pagination: 0
    };
  }

  _createClass(ProductCarousel, [{
    key: 'slide',
    value: function slide(direction) {
      var containerWidth = this.state.containerWidth + 20;
      var loopBack = this.state.contentWidth - containerWidth;
      var reachedEndBoolean = direction === "left" && this.state.contentOffset === 0 || direction === "right" && this.state.contentOffset === loopBack;
      var paginationTotal = this.state.contentWidth / containerWidth;
      var pagination = (this.state.contentOffset + containerWidth) / containerWidth;

      if (direction === "left") {
        if (reachedEndBoolean) {
          this.state.contentOffset += loopBack;
        } else {
          this.state.contentOffset -= containerWidth;
        }

        this.setState({
          arrowClicked: "left"
        });
      }
      if (direction === "right") {

        if (reachedEndBoolean) {
          this.state.contentOffset -= loopBack;
        } else {
          this.state.contentOffset += containerWidth;
        }
        this.setState({
          arrowClicked: "right"
        });
      }
    }
  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      var _this = this;

      var productArr = _dataPrototypesProductsJson2['default'].map(function (product, index, productArr) {
        if (_this.props.editorsPick) {
          var carouselMargin = (_this.props.carouselAmount - 1) * 20;
          var itemWidth = (_this.state.containerWidth - carouselMargin) / _this.props.carouselAmount;
          return _react2['default'].createElement(
            'div',
            {
              key: index,
              className: (0, _classnames2['default'])("bc-product-carousel-item"),
              ref: 'slide'
            },
            _react2['default'].createElement(_cc2['default'].EditorsPick, null)
          );
        } else {
          var carouselMargin = (_this.props.carouselAmount - 1) * 20;
          var itemWidth = (_this.state.containerWidth - carouselMargin) / _this.props.carouselAmount;
          return _react2['default'].createElement(
            'div',
            {
              key: index,
              className: (0, _classnames2['default'])("bc-product-carousel-item"),
              ref: 'slide',
              style: { width: itemWidth + 'px' }
            },
            _react2['default'].createElement(_cc2['default'].Asin, {
              asinSize: itemWidth + 'px',
              url: "/prototypes/brickcity/pdp/" + product.asin,
              product: product,
              hasCard: _this.props.hasCard
            })
          );
        }
      });

      return productArr;
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var containerWidth = this.state.containerWidth + 20;
      var paginations = [];
      var paginationTotal = this.state.contentWidth / containerWidth;
      var pagination = this.state.contentOffset / containerWidth;

      for (var x = 0; x < paginationTotal; x++) {
        paginations.push(x);
      }

      var paginationMap = paginations.map(function (index) {
        return _react2['default'].createElement(_AudibleUITags2['default'].ListItem, { key: index, cssClass: ["bc-pagination", pagination === index ? "bc-pagination-active" : null] });
      });

      return paginationMap;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var containerWidth = this.refs.container.clientWidth;
      var totalMargin = (this.props.carouselAmount - 1) * 20;
      var itemWidth = (containerWidth - totalMargin) / this.props.carouselAmount;
      var contentWidth = (itemWidth + 20) * _dataPrototypesProductsJson2['default'].length;
      var pagination = contentWidth / (containerWidth + 20);

      this.setState({
        itemWidth: itemWidth,
        containerWidth: containerWidth,
        contentWidth: contentWidth,
        pagination: pagination
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-product-carousel'];
      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacing: 'base' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 10 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              this.props.editorsPick ? "Editor's Pick" : 'Product',
              ' Carousel Title'
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
          { cssClass: 'bc-product-carousel-container', spacing: 'mini' },
          _react2['default'].createElement(
            'div',
            { ref: 'container', className: (0, _classnames2['default'])(["bc-product-carousel-content", this.props.slide ? "bc-product-carousel-slide" : [this.props.fade ? "bc-product-carousel-fade" : null]]),
              style: {
                width: this.state.contentWidth,
                right: this.state.arrowClicked ? this.state.contentOffset : null } },
            this.renderProducts()
          ),
          this.props.arrows ? _react2['default'].createElement(
            'div',
            { className: 'bc-product-carousel-nav' },
            _react2['default'].createElement(
              'div',
              {
                className: 'bc-product-carousel-nav-arrow bc-product-carousel-nav-arrow-left',
                onClick: this.slide.bind(this, "left") },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '30px', imageWidth: '12px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/carousels/carousel-left-arrow._V311835961_.svg' })
            ),
            _react2['default'].createElement(
              'div',
              {
                className: 'bc-product-carousel-nav-arrow bc-product-carousel-nav-arrow-right',
                onClick: this.slide.bind(this, "right") },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '30px', imageWidth: '12px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/carousels/carousel-right-arrow._V311835961_.svg' })
            )
          ) : null
        ),
        this.props.pagination ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'horizontal' },
              this.renderPagination()
            )
          )
        ) : null
      );
    }
  }]);

  return ProductCarousel;
})(_react2['default'].Component);

ProductCarousel.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  editorsPick: _react.PropTypes.bool,
  pagination: _react.PropTypes.bool,
  slide: _react.PropTypes.bool,
  arrows: _react.PropTypes.bool,
  hasCard: _react.PropTypes.bool,
  carouselAmount: _react.PropTypes.string
};

ProductCarousel.defaultProps = {
  carouselAmount: "4"
};

exports['default'] = ProductCarousel;
module.exports = exports['default'];