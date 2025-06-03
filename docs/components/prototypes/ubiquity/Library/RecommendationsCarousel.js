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

var _dataPrototypesRecommendationsJson = require('../../../../data/prototypes/recommendations.json');

var _dataPrototypesRecommendationsJson2 = _interopRequireDefault(_dataPrototypesRecommendationsJson);

var RecommendationsCarousel = (function (_React$Component) {
  _inherits(RecommendationsCarousel, _React$Component);

  function RecommendationsCarousel(props) {
    _classCallCheck(this, RecommendationsCarousel);

    _get(Object.getPrototypeOf(RecommendationsCarousel.prototype), 'constructor', this).call(this, props);
  }

  _createClass(RecommendationsCarousel, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].Box,
        { paddingSize: 'medium', backgroundColor: 'secondary' },
        this.props.product.publication_name && _react2['default'].createElement(
          _cc2['default'].Tabs,
          null,
          _react2['default'].createElement(
            _cc2['default'].TabPanel,
            { title: 'Series' },
            _dataPrototypesRecommendationsJson2['default'].series.map(function (product, index) {
              if (index < 3) {
                return _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: index === 2 ? 'last' : null },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/pdp/" + product.asin },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: product.product_images[500] })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 9, spacingTop: 'micro', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { style: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }, headingLevel: 3, textNowrap: true },
                      product.title
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small' },
                      'by'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    product.authors.map(function (author, index, originalArr) {
                      return _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textSize: 'small' },
                        index + 1 >= originalArr.length ? author.name : author.name + ', '
                      );
                    })
                  )
                );
              } else {
                return false;
              }
            })
          ),
          _react2['default'].createElement(_cc2['default'].TabPanel, { title: '' })
        ),
        !this.props.product.publication_name && _react2['default'].createElement(
          _cc2['default'].Tabs,
          null,
          _react2['default'].createElement(
            _cc2['default'].TabPanel,
            { title: 'Author' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _dataPrototypesRecommendationsJson2['default'].author.map(function (product, index) {
                if (index < 3) {
                  return _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: index === 2 ? 'last' : null },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 3 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, url: "/prototypes/brickcity/pdp/" + product.asin },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: product.product_images[500] })
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 9, spacingTop: 'micro', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { style: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }, headingLevel: 3, textNowrap: true },
                        product.title
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small' },
                        'by'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      product.authors.map(function (author, index, originalArr) {
                        return _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textSize: 'small' },
                          index + 1 >= originalArr.length ? author.name : author.name + ', '
                        );
                      })
                    )
                  );
                } else {
                  return false;
                }
              })
            )
          ),
          _react2['default'].createElement(
            _cc2['default'].TabPanel,
            { title: 'Narrator' },
            _dataPrototypesRecommendationsJson2['default'].narrator.map(function (product, index) {
              if (index < 3) {
                return _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: index === 2 ? 'last' : null },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/pdp/" + product.asin },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: product.product_images[500] })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 9, spacingTop: 'micro', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { style: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }, headingLevel: 3, textNowrap: true },
                      product.title
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small' },
                      'by'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    product.authors.map(function (author, index, originalArr) {
                      return _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textSize: 'small' },
                        index + 1 >= originalArr.length ? author.name : author.name + ', '
                      );
                    })
                  )
                );
              } else {
                return false;
              }
            })
          )
        )
      );
    }
  }]);

  return RecommendationsCarousel;
})(_react2['default'].Component);

RecommendationsCarousel.propTypes = {
  product: _react.PropTypes.object
};

RecommendationsCarousel.defaultProps = {};

exports['default'] = RecommendationsCarousel;
module.exports = exports['default'];