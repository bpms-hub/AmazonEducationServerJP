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

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _ubiquityHeaderProdHeaderMobile = require('../../ubiquity/Header/ProdHeaderMobile');

var _ubiquityHeaderProdHeaderMobile2 = _interopRequireDefault(_ubiquityHeaderProdHeaderMobile);

var _ubiquityFooterProdFooterMobile = require('../../ubiquity/Footer/ProdFooterMobile');

var _ubiquityFooterProdFooterMobile2 = _interopRequireDefault(_ubiquityFooterProdFooterMobile);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var JeffPdp = (function (_React$Component) {
  _inherits(JeffPdp, _React$Component);

  function JeffPdp(props, context) {
    _classCallCheck(this, JeffPdp);

    _get(Object.getPrototypeOf(JeffPdp.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(JeffPdp, [{
    key: 'renderReviews',
    value: function renderReviews() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { cssClass: 'bc-theme-dark' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].FixedGridRow,
          { spacing: 'base', fixedColumn: 'left', fixedColumnWidth: 80 },
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridColumn,
            { side: 'left', fixedColumn: 'left', fixedColumnWidth: 80 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '80px', imageWidth: '80px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/profile_pic._V288437133_.png' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridColumn,
            { spacingTop: 'medium', side: 'right', fixedColumn: 'left', columnPadding: '20px' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'nostyle', spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Michael G. Kurilla'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                'Nantucket, MA • 04-18-12'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'micro' },
          _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0 }),
          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            'Overall'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'micro' },
          _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 2.7 }),
          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            'Performance'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.1 }),
          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            'Story'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'micro', textQuote: true },
          'Excellent book, narrator did such a good job!'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonnproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Expander,
          { hideText: 'Show Less', showText: 'Show More' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'micro' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'mobile' },
        _react2['default'].createElement(_ubiquityHeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Container,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(_ubiquityCc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', size: 'small' },
                'Free with Trail'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { size: 'small' },
                '$9.99'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                null,
                _dataPrototypesProductsJson2['default'][0].title
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                null,
                _dataPrototypesProductsJson2['default'][0].subtitle
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                _dataPrototypesProductsJson2['default'][0].runtime_length_min
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Tabs,
            null,
            _react2['default'].createElement(_AudibleUITags2['default'].TabPanel, { title: 'Details' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TabPanel,
              { title: 'Reviews' },
              this.renderReviews()
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TabPanel,
              { title: 'Related' },
              _react2['default'].createElement(_ubiquityCc2['default'].ProductCarouselMobile, null)
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _ubiquityCc2['default'].MobileLink,
              null,
              'See All Reviews'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'mini' },
            'Book Details'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', textColor: 'secondary' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              'Release Date: 03-31-2015'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              'Publisher: ',
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'HarperAudio'
              )
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return JeffPdp;
})(_react2['default'].Component);

JeffPdp.contextTypes = {
  history: _react2['default'].PropTypes.object
};

exports['default'] = JeffPdp;
module.exports = exports['default'];