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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var Asin = (function (_React$Component) {
  _inherits(Asin, _React$Component);

  function Asin(props) {
    _classCallCheck(this, Asin);

    _get(Object.getPrototypeOf(Asin.prototype), 'constructor', this).call(this, props);
    this.state = {
      isHovered: false
    };
  }

  _createClass(Asin, [{
    key: 'toggleHover',
    value: function toggleHover(willHover) {
      this.setState({
        isHovered: willHover
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        {
          className: this.props.disabled ? 'bc-disabled' : null,
          onMouseEnter: this.props.hasHoverMask && this.toggleHover.bind(this, true),
          onMouseLeave: this.props.hasHoverMask && this.toggleHover.bind(this, false) },
        _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(["bc-pub-relative"]) },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { url: this.props.url ? this.props.url : null, app: this.props.url ? true : null },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', block: true, imageWidth: this.props.asinSize ? this.props.asinSize : '100%', imageHeight: this.props.asinSize ? this.props.asinSize : '100%', source: this.props.product ? this.props.product.product_images[500] : 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/image_placeholder._V288789908_.jpg' }),
            this.props.hasHoverMask && this.state.isHovered && _react2['default'].createElement('div', { style: {
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1
              } })
          ),
          _react2['default'].createElement(_cc2['default'].AudioTrigger, {
            style: {
              left: '12px',
              bottom: '12px',
              position: 'absolute',
              zIndex: 2
            },
            fullTitle: this.props.triggerFullTitle,
            onClick: function (e) {
              e.stopPropagation();
              alert('play book');
            } })
        ),
        this.props.ownershipState === 'owned' && _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 6, percentage: this.props.meterProgress, progressColor: 'active', inactiveColor: 'secondary' }),
        this.props.hasCard ? _react2['default'].createElement(
          'span',
          null,
          this.state.isHovered && _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { textColor: 'base', onClick: this.props.onClickQuickview },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              {
                cssClass: 'bc-relative',
                backgroundColor: 'base',
                hasBorder: true,
                heightCss: '78px',
                paddingSize: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textAlign: 'center', verticalAlign: 'middle', heightCss: '100%' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Quickview'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-down' })
                )
              )
            )
          ),
          !this.state.isHovered && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            {
              cssClass: 'bc-relative',
              backgroundColor: 'base',
              hasBorder: true,
              heightCss: '78px',
              paddingSize: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { cssClass: 'bc-overflow-hidden', heightCss: '36px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base' },
                  this.props.product.title.length > 37 ? this.props.product.title.substring(0, 37) + " ..." : this.props.product.title
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textColor: 'secondary' },
                this.props.ownershipState === 'owned' && _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  '2h 35min left'
                ),
                this.props.ownershipState === 'preordered' && _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  '00 Days'
                ),
                this.props.ownershipState === 'unowned' && _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              )
            )
          )
        ) : null
      );
    }
  }]);

  return Asin;
})(_react2['default'].Component);

Asin.propTypes = {
  url: _react.PropTypes.string,
  asinSize: _react.PropTypes.string,
  ownershipState: _react.PropTypes.string,
  meterProgress: _react.PropTypes.number,
  hasCard: _react.PropTypes.bool,
  hasQuickview: _react.PropTypes.bool,
  hasHoverMask: _react.PropTypes.bool,
  product: _react.PropTypes.object,
  onClickQuickview: _react.PropTypes.func
};

Asin.defaultProps = {
  ownershipState: 'unowned'
};

exports['default'] = Asin;
module.exports = exports['default'];