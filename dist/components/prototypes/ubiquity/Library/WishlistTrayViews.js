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

var ReactCSSTransitionGroup = _AudibleUITags2['default'].Text;

var LibraryTrayViews = (function (_React$Component) {
  _inherits(LibraryTrayViews, _React$Component);

  function LibraryTrayViews(props) {
    _classCallCheck(this, LibraryTrayViews);

    _get(Object.getPrototypeOf(LibraryTrayViews.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentTrayView: 1
    };
  }

  _createClass(LibraryTrayViews, [{
    key: 'render',
    value: function render() {
      var productSummary = this.props.product.publisher_summary;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].Box,
        { paddingSize: 'medium', backgroundColor: 'base', heightCss: '430px' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { textColor: 'secondary' },
          this.props.showAsin && _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement(_cc2['default'].Asin, { product: this.props.product })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.props.showAsin ? 9 : 12, position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'micro' },
              this.props.product.title
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: this.props.showAsin ? 6 : 7 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  this.props.product.authors.map(function (author, index, originalArr) {
                    return _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      index + 1 >= originalArr.length ? author.name : author.name + ', '
                    );
                  })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Narrated by:'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    this.props.product.narrators.map(function (narrator, index, originalArr) {
                      return _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        index + 1 >= originalArr.length ? narrator.name : narrator.name + ', '
                      );
                    })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Duration:'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    Math.floor(this.props.product.runtime_length_min / 60),
                    ' hrs ',
                    this.props.product.runtime_length_min % 60,
                    ' mins'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    'Series: ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Series Name Here'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'micro' },
                  _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: productSummary.substring(0, 250) + '...' } })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { onClick: function () {
                      return alert('opens pdp');
                    } },
                  'Read More'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: this.props.showAsin ? 5 : 4, position: 'last' },
                _react2['default'].createElement(_cc2['default'].BuyBox, {
                  inWishlist: true })
              )
            )
          )
        )
      );
    }
  }]);

  return LibraryTrayViews;
})(_react2['default'].Component);

LibraryTrayViews.PropTypes = {
  product: _react.PropTypes.object,
  showAsin: _react.PropTypes.bool
};

exports['default'] = LibraryTrayViews;
module.exports = exports['default'];