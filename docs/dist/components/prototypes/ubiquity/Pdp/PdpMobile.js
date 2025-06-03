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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeaderMobile = require('../Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var _reactRouter = require('react-router');

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var Pdp = (function (_React$Component) {
  _inherits(Pdp, _React$Component);

  function Pdp(props, context) {
    _classCallCheck(this, Pdp);

    _get(Object.getPrototypeOf(Pdp.prototype), 'constructor', this).call(this, props, context);
    this.state = {
      currentProduct: _dataPrototypesProductsJson2['default'][0]
    };
  }

  _createClass(Pdp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateAsin();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateAsin();
    }
  }, {
    key: 'updateAsin',
    value: function updateAsin() {
      var asinSelected = this.props.params.asin;

      if (this.state.currentProduct.asin === asinSelected) {
        return;
      } else {
        for (var i = 0; i < _dataPrototypesProductsJson2['default'].length; i++) {
          if (_dataPrototypesProductsJson2['default'][i].asin === asinSelected) {
            this.setState({
              currentProduct: _dataPrototypesProductsJson2['default'][i]
            });
          }
        }
      }
    }
  }, {
    key: 'renderReviews',
    value: function renderReviews() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        null,
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
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-relative' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-hero' },
            _react2['default'].createElement('div', {
              className: 'bc-hero-blur',
              style: {
                backgroundImage: "url(" + this.state.currentProduct.product_images[500].replace('.jpg', 'BL60.jpg') + ")"
              } }),
            _react2['default'].createElement('div', { className: 'bc-hero-mask' })
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base', spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 2 }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(_cc2['default'].Asin, { product: this.state.currentProduct })
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                null,
                'Book Title Name Will Go Here'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'micro', textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'By Book Author Name'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Narrated by Book Narrator Name'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    '23 hrs & 38 mins, Unabridged'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Whispersync for Voice'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'medium' },
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, numRatings: 20535, showAverageRating: true })
              )
            ),
            _react2['default'].createElement(_cc2['default'].BuyBox, null),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small' },
              'Publisher\'s Summary'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textcolor: 'secondary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'From the internationally best-selling author of the acclaimed novel The Power of the Dog comes The Cartel, a gripping, ripped-from-the-headlines story of power, corruption, revenge, and justice spanning the past decade of the Mexican-American drug wars.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { hideText: 'Show Less', showText: 'Show More' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'It\'s 2004. DEA agent Art Keller has been fighting the war on drugs for 30 years in a blood feud against Adán Barrera, the head of El Federación, the world\'s most powerful cartel, and the man who brutally murdered Keller\'s partner. Finally putting Barrera away cost Keller dearly - the woman he loves, the beliefs he cherishes, the life he wants to lead.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Then Barrera gets out, determined to rebuild the empire that Keller shattered. Unwilling to live in a world with Barrera in it, Keller goes on a 10-year odyssey to take him down. His obsession with justice - or is it revenge? - becomes a ruthless struggle that stretches from the cities, mountains, and deserts of Mexico to Washington\'s corridors of power to the streets of Berlin and Barcelona.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Keller fights his personal battle against the devastated backdrop of Mexico\'s drug war, a conflict of unprecedented scale and viciousness, as cartels vie for power and he comes to the final reckoning with Barrera - and himself - that he always knew must happen.The Cartel is a true-to-life story of honor and sacrifice as one man tries to face down the devil without losing his soul. It is the story of the war on drugs and the men - and women - who wage it.'
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(_cc2['default'].ProductCarouselMobile, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'inverse', spacing: 'large', paddingSize: 'double-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textColor: 'inverse', textAlign: 'center' },
                'Editor\'s Reviews Carousel Goes Here'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'mini' },
              'More from'
            ),
            _react2['default'].createElement(
              _cc2['default'].Tabs,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'Author' },
                _dataPrototypesProductsJson2['default'].map(function (product, index) {
                  if (index < 3) {
                    return _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(_cc2['default'].Asin, {
                          url: "/prototypes/brickcity/pdp/" + product.asin,
                          product: product })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 8, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          product.title
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'by Author'
                          )
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
                      )
                    );
                  } else {
                    return false;
                  }
                })
              ),
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'Narrator' },
                _dataPrototypesProductsJson2['default'].map(function (product, index) {
                  if (index > 3 && index < 8) {
                    return _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(_cc2['default'].Asin, {
                          url: "/prototypes/brickcity/pdp/" + product.asin,
                          product: product })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 8, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          product.title
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'by Author'
                          )
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
                      )
                    );
                  } else {
                    return false;
                  }
                })
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small' },
              'Customer Reviews'
            ),
            _react2['default'].createElement(
              _cc2['default'].Tabs,
              null,
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'Audible.com' },
                this.renderReviews()
              ),
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'Amazon.com' },
                this.renderReviews()
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _cc2['default'].MobileLink,
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
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return Pdp;
})(_react2['default'].Component);

Pdp.contextTypes = {
  history: _react2['default'].PropTypes.object
};

exports['default'] = Pdp;
module.exports = exports['default'];