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

var Listing = (function (_React$Component) {
  _inherits(Listing, _React$Component);

  function Listing(props) {
    _classCallCheck(this, Listing);

    _get(Object.getPrototypeOf(Listing.prototype), 'constructor', this).call(this, props);
    this.state = {
      isHovered: false
    };
  }

  _createClass(Listing, [{
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
          onMouseEnter: this.toggleHover.bind(this, true),
          onMouseLeave: this.toggleHover.bind(this, false) },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { cssClass: 'bc-clearfix bc-relative', paddingSize: 'none', backgroundColor: this.state.isHovered ? 'secondary' : 'base' },
          this.props.isSelected && _react2['default'].createElement('div', { style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2
            } }),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: this.props.isSelected ? 'bc-disabled' : null, spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base', textColor: 'secondary', verticalAlign: 'middle' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 1 },
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { style: { position: 'relative', zIndex: 3 }, onChange: this.props.onChangeBulkSelector, checked: this.props.isSelected ? true : false })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 1, textAlign: 'center' },
              !this.props.isSelected && this.state.isHovered ? _react2['default'].createElement(_cc2['default'].AudioTrigger, null) : _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '40px', source: this.props.product.product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 4 },
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.product.title
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                this.props.product.authors.map(function (author, index, originalArr) {
                  return _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      author.name
                    )
                  );
                })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                this.props.product.narrators.map(function (narrator, index, originalArr) {
                  return _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      narrator.name
                    )
                  );
                })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 1 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'small' },
                this.props.ownershipState === 'owned' && '2h 35min',
                this.props.ownershipState === 'preordered' && '03 Days',
                this.props.ownershipState === 'unowned' && '$0.00'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { cssClass: this.props.isSelected ? 'bc-disabled' : null, gridUnits: 1, position: 'last', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { textColor: 'base', onClick: this.props.onClickQuickview },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-down' })
              )
            )
          )
        )
      );
    }
  }]);

  return Listing;
})(_react2['default'].Component);

Listing.propTypes = {
  url: _react.PropTypes.string,
  ownershipState: _react.PropTypes.string,
  hasCard: _react.PropTypes.bool,
  hasQuickview: _react.PropTypes.bool,
  product: _react.PropTypes.object
};

Listing.defaultProps = {
  ownershipState: 'unowned'
};

exports['default'] = Listing;
module.exports = exports['default'];