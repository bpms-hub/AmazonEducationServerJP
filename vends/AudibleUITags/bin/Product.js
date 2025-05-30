'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// eslint-disable-line no-unused-vars

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PopoverTrigger = require('./PopoverTrigger');

var _PopoverTrigger2 = _interopRequireDefault(_PopoverTrigger);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Flyout = require('./Flyout');

var _Flyout2 = _interopRequireDefault(_Flyout);

var _Paragraph = require('./Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _ReviewStars = require('./ReviewStars');

var _ReviewStars2 = _interopRequireDefault(_ReviewStars);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _AudioTrigger = require('./AudioTrigger');

var _AudioTrigger2 = _interopRequireDefault(_AudioTrigger);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var Product = (function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    _get(Object.getPrototypeOf(Product.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Product, [{
    key: 'renderProductWithFlyout',
    value: function renderProductWithFlyout() {
      return _react2['default'].createElement(
        _PopoverTrigger2['default'],
        {
          flyoutSide: 'right',
          flyout: _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _Heading2['default'],
              { headingLevel: 3, textColor: 'tertiary' },
              this.props.bookTitle
            ),
            _react2['default'].createElement(
              _Heading2['default'],
              { headingLevel: 2 },
              'Ender’s Game: Special 20th Anniversary Edition'
            ),
            _react2['default'].createElement(
              _List2['default'],
              { listType: 'nostyle', textSize: 'small' },
              _react2['default'].createElement(
                _ListItem2['default'],
                { spacing: 'mini' },
                'Written by ',
                this.props.bookAuthor
              ),
              _react2['default'].createElement(
                _ListItem2['default'],
                { textColor: 'secondary', spacing: 'mini' },
                'Narrated by ',
                this.props.bookNarrator
              ),
              _react2['default'].createElement(
                _ListItem2['default'],
                { textColor: 'secondary', spacing: 'mini' },
                this.props.bookLength,
                ', ',
                this.props.bookFormat
              ),
              this.props.bookHasWhispersync ? _react2['default'].createElement(
                _ListItem2['default'],
                { textColor: 'secondary', spacing: 'base' },
                'Whispersync for Voice-ready'
              ) : null
            ),
            _react2['default'].createElement(
              _GridRow2['default'],
              { spacing: 'mini', textSize: 'small', textColor: 'secondary' },
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 4 },
                'Overall '
              ),
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 8, last: true },
                _react2['default'].createElement(_ReviewStars2['default'], null)
              )
            ),
            _react2['default'].createElement(
              _GridRow2['default'],
              { spacing: 'mini', textSize: 'small', textColor: 'secondary' },
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 4 },
                'Performance '
              ),
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 8, last: true },
                _react2['default'].createElement(_ReviewStars2['default'], null)
              )
            ),
            _react2['default'].createElement(
              _GridRow2['default'],
              { spacing: 'base', textSize: 'small', textColor: 'secondary' },
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 4 },
                'Story '
              ),
              _react2['default'].createElement(
                _GridColumn2['default'],
                { gridUnits: 8, last: true },
                _react2['default'].createElement(_ReviewStars2['default'], null)
              )
            ),
            _react2['default'].createElement(
              _Paragraph2['default'],
              null,
              this.props.bookSummary
            )
          ),
          flyoutWidth: 310 },
        this.renderProduct()
      );
    }
  }, {
    key: 'renderProduct',
    value: function renderProduct() {
      var asinSize = undefined;
      var smallPlayer = undefined;

      switch (this.props.asinSize) {
        case 'mini':
          asinSize = 80;smallPlayer = true;
          break;
        case 'small':
          asinSize = 120;
          break;
        case 'base':
          asinSize = 150;
          break;
        case 'medium':
          asinSize = 184;
          break;
        case 'large':
          asinSize = 235;
          break;
        case 'extra-large':
          asinSize = 300;
          break;
        case 'fluid':
          asinSize = '100%';
          break;
      };

      return _react2['default'].createElement(
        'span',
        { className: 'bc-product' },
        _react2['default'].createElement(
          'div',
          { className: 'bc-relative' },
          _react2['default'].createElement(
            _Link2['default'],
            _extends({}, this.props, { url: this.props.url ? this.props.url : null, app: this.props.url ? true : null }),
            _react2['default'].createElement(_Image2['default'], { cssClass: 'bc-product-asin', imageWidth: asinSize, imageHeight: asinSize, source: this.props.asinImageUrl })
          ),
          _react2['default'].createElement(_AudioTrigger2['default'], { fullTitle: this.props.triggerFullTitle, onClick: this.props.onAudioTriggerClick, initialText: this.props.initialAudioTriggerText, onAsin: this.props.onAsin, small: smallPlayer })
        ),
        this.props.hasCard && _react2['default'].createElement(
          _Box2['default'],
          { backgroundColor: 'secondary', paddingSize: 'mini', heightCss: '60px' },
          _react2['default'].createElement(
            _GridRow2['default'],
            { textAlign: 'left', textColor: 'base' },
            _react2['default'].createElement(
              _GridRow2['default'],
              { spacing: 'micro' },
              this.props.bookTitle
            ),
            _react2['default'].createElement(
              _GridRow2['default'],
              { textSize: 'mini' },
              'by ',
              this.props.bookAuthor
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
        this.props.hasFlyout ? this.renderProductWithFlyout() : this.renderProduct()
      );
    }
  }]);

  return Product;
})(_react2['default'].Component);

Product.propTypes = {
  asinSize: _react.PropTypes.string,
  onAsin: _react.PropTypes.bool,
  hasFlyout: _react.PropTypes.bool,
  url: _react.PropTypes.string,
  asinImageUrl: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string,
  bookAuthor: _react.PropTypes.string,
  bookNarrator: _react.PropTypes.string,
  bookLength: _react.PropTypes.string,
  bookFormat: _react.PropTypes.string,
  bookHasWhispersync: _react.PropTypes.bool,
  bookSummary: _react.PropTypes.string,
  triggerFullTitle: _react.PropTypes.bool,
  hasCard: _react.PropTypes.bool,
  initialAudioTriggerText: _react.PropTypes.string,
  onAudioTriggerClick: _react.PropTypes.func
};

Product.defaultProps = {
  asinSize: 'base'
};

exports['default'] = Product;
module.exports = exports['default'];