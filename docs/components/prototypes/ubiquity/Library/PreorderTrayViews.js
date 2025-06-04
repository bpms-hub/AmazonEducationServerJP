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

var _RecommendationsCarousel = require('./RecommendationsCarousel');

var _RecommendationsCarousel2 = _interopRequireDefault(_RecommendationsCarousel);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var PreorderTrayViews = (function (_React$Component) {
  _inherits(PreorderTrayViews, _React$Component);

  function PreorderTrayViews(props) {
    _classCallCheck(this, PreorderTrayViews);

    _get(Object.getPrototypeOf(PreorderTrayViews.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentTrayView: 1
    };
  }

  _createClass(PreorderTrayViews, [{
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { textColor: 'secondary' },
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example4' },
          this.state.currentTrayView === 1 && _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'medium', backgroundColor: 'base', heightCss: '285px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
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
                    this.props.product.title,
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
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
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: this.props.showAsin ? 6 : 7 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
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
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'Series Name Here'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: this.props.showAsin ? 5 : 4, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { cssClass: 'bc-inline-block', listType: 'nostyle', spacingTop: 'mini', spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base', onClick: function () {
                                return _this.setState({ currentTrayView: 2 });
                              } },
                            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' }),
                            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                            'But Matching Kindle Book'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base', onClick: function () {
                                return _this.setState({ currentTrayView: 3 });
                              } },
                            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' }),
                            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                            'Cancel Pre-order'
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(_RecommendationsCarousel2['default'], { product: this.props.product })
          )
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example3' },
          this.state.currentTrayView === 2 && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'medium', backgroundColor: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: function () {
                    return _this.setState({ currentTrayView: 1 });
                  }, textColor: 'base' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', iconSize: 'large', verticalAlign: 'top' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Get the kindle companion'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'base' },
              'Whispersync for Voice lets you seamlessly switch back and forth between listening and reading without ever losing your place.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', imageHeight: '170px', source: this.props.product.product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', textColor: 'secondary' },
                  'Kindle Edition'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'mini' },
                  this.props.product.title
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  'by ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Author Name'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  'Sold and delivered by Amazon.com'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary' },
                  'Buy on Amazon.com'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PreorderTrayViews;
})(_react2['default'].Component);

PreorderTrayViews.PropTypes = {
  product: _react.PropTypes.object,
  showAsin: _react.PropTypes.bool
};

exports['default'] = PreorderTrayViews;
module.exports = exports['default'];