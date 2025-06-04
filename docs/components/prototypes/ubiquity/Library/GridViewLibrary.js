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

var _Tray = require('./Tray');

var _Tray2 = _interopRequireDefault(_Tray);

var _BulkSelect = require('./BulkSelect');

var _BulkSelect2 = _interopRequireDefault(_BulkSelect);

var _LibraryTrayViews = require('./LibraryTrayViews');

var _LibraryTrayViews2 = _interopRequireDefault(_LibraryTrayViews);

var _WishlistTrayViews = require('./WishlistTrayViews');

var _WishlistTrayViews2 = _interopRequireDefault(_WishlistTrayViews);

var _PreorderTrayViews = require('./PreorderTrayViews');

var _PreorderTrayViews2 = _interopRequireDefault(_PreorderTrayViews);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var GridViewLibrary = (function (_React$Component) {
  _inherits(GridViewLibrary, _React$Component);

  function GridViewLibrary(props) {
    _classCallCheck(this, GridViewLibrary);

    _get(Object.getPrototypeOf(GridViewLibrary.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentAsinHovered: null
    };
  }

  _createClass(GridViewLibrary, [{
    key: 'onChangeBulkSelector',
    value: function onChangeBulkSelector(index, event) {
      this.props.onChangeBulkSelector(index, event);
    }
  }, {
    key: 'onClickQuickview',
    value: function onClickQuickview(index) {
      this.props.onClickQuickview(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var productList = this.props.products;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacing: 'base' },
        productList.length === 0 && _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { heightCss: '150px', spacing: 'double-large', spacingTop: 'double-large', textAlign: 'center' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { textSize: 'large', headingLevel: 2, spacing: 'mini' },
            'No results found'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textSize: 'medium' },
            'Try adjusting your search or filter to find what you\'re looking for.'
          )
        ),
        productList.map(function (product, index, productArray) {
          var _this = this;

          return _react2['default'].createElement(
            'span',
            { key: index },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, key: product.asin, spacing: 'base', position: (index + 1) % 4 === 0 ? 'last' : null },
              _react2['default'].createElement(
                'div',
                {
                  onMouseEnter: function () {
                    return _this.setState({ currentAsinHovered: index });
                  },
                  onMouseLeave: function () {
                    return _this.setState({ currentAsinHovered: null });
                  },
                  className: 'bc-pub-relative',
                  style: {
                    opacity: this.state.currentAsinHovered !== index && this.props.activeBook !== null && this.props.activeBook !== index && this.props.bulkSelectedItems.indexOf(index) === -1 ? null : null,
                    top: this.props.activeBook === index ? '78px' : 0,
                    WebkitTransition: 'top 250ms ease-in-out'
                  } },
                _react2['default'].createElement(
                  _BulkSelect2['default'],
                  {
                    activeBook: this.props.activeBook === index,
                    onChangeBulkSelector: this.onChangeBulkSelector.bind(this, index),
                    isSelected: this.props.bulkSelectedItems.indexOf(index) > -1 ? true : false },
                  _react2['default'].createElement(_cc2['default'].Asin, {
                    url: "/prototypes/brickcity/pdp/" + product.asin,
                    onClickQuickview: this.onClickQuickview.bind(this, index),
                    product: product,
                    ownershipState: this.props.ownershipState,
                    hasHoverMask: this.props.bulkSelectedItems.indexOf(index) > -1 ? false : true,
                    disabled: this.props.bulkSelectedItems.indexOf(index) > -1 ? true : false,
                    meterProgress: product.complete ? 100 : product.listening_progress,
                    hasCard: this.props.activeBook === index ? false : true })
                )
              )
            ),
            _react2['default'].createElement(
              _reactAddonsCssTransitionGroup2['default'],
              { transitionName: 'slideDown', transitionEnterTimeout: 850, transitionLeaveTimeout: 850 },
              this.props.activeBook !== null && Math.ceil((this.props.activeBook + 1) / 4) * 4 === index + 1 ? _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, position: 'last', key: 'tray' },
                this.props.ownershipState === 'owned' && _react2['default'].createElement(
                  _Tray2['default'],
                  { trayHeight: 480, onClickTrayClose: this.props.onClickTrayClose },
                  _react2['default'].createElement(_LibraryTrayViews2['default'], { product: productArray[this.props.activeBook] })
                ),
                this.props.ownershipState === 'preordered' && _react2['default'].createElement(
                  _Tray2['default'],
                  { trayHeight: 480, onClickTrayClose: this.props.onClickTrayClose },
                  _react2['default'].createElement(_PreorderTrayViews2['default'], { product: productArray[this.props.activeBook] })
                ),
                this.props.ownershipState === 'unowned' && _react2['default'].createElement(
                  _Tray2['default'],
                  { trayHeight: 430, onClickTrayClose: this.props.onClickTrayClose },
                  _react2['default'].createElement(_WishlistTrayViews2['default'], { product: productArray[this.props.activeBook] })
                )
              ) : null
            )
          );
        }, this)
      );
    }
  }]);

  return GridViewLibrary;
})(_react2['default'].Component);

GridViewLibrary.PropTypes = {
  products: _react.PropTypes.array,
  activeBook: _react.PropTypes.number,
  bulkSelectedItems: _react.PropTypes.array,
  onChangeBulkSelector: _react.PropTypes['function'],
  onClickQuickview: _react.PropTypes['function'],
  onClickTrayClose: _react.PropTypes['function'],
  ownershipState: _react.PropTypes.string
};

GridViewLibrary.defaultProps = {
  products: []
};

exports['default'] = GridViewLibrary;
module.exports = exports['default'];