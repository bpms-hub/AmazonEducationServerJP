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

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _reactRouter = require('react-router');

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
        { spacing: 'extra-large' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 3 },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '80px', imageWidth: '80px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/profile_pic._V288437133_.png' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, position: 'last' },
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
                  'Nantucket, MA'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  '04-18-12'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'micro' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'mini' },
                'Overall'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, position: 'last' },
              _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0 })
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'micro' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'mini' },
                'Performance'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, position: 'last' },
              _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 2.3 })
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'mini' },
                'Story'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, position: 'last' },
              _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.1 })
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 9, position: 'last' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'small', textQuote: true },
            'Excellent book, narrator did such a good job!'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonnproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textColor: 'tertiary', textSize: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Was this review helpful?'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: true, size: 'small' },
                'Yes'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: true, size: 'small' },
                'No'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Report this'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4, position: 'last', textAlign: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '17 of 17 people found this helpful'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-hero bc-theme-dark' },
            _react2['default'].createElement(
              'div',
              { className: (0, _classnames2['default'])(["bc-container", "bc-relative"]), style: { zIndex: 2 } },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { paddingTop: 'medium', padding: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textColor: 'secondary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(_cc2['default'].Asin, { product: this.state.currentProduct })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { textColor: 'base' },
                      'Book Title Name Will Go Here'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      'by ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textColor: 'base' },
                        'Book Author Name'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle', spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Narrated by ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Book Narrator Name'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'secondary' },
                          '23 hrs & 38 mins, Unabridged'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Whispersync for Voice Ready'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'medium' },
                      _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, numRatings: 20535, showAverageRating: true })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(_cc2['default'].BuyBox, null)
                  )
                )
              )
            ),
            _react2['default'].createElement('div', {
              className: 'bc-hero-blur',
              style: {
                backgroundImage: "url(" + this.state.currentProduct.product_images[500].replace('.jpg', 'BL60.jpg') + ")"
              } }),
            _react2['default'].createElement('div', { className: 'bc-hero-mask' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Publisher\'s Summary'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'From the internationally best-selling author of the acclaimed novel The Power of the Dog comes The Cartel, a gripping, ripped-from-the-headlines story of power, corruption, revenge, and justice spanning the past decade of the Mexican-American drug wars.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'It\'s 2004. DEA agent Art Keller has been fighting the war on drugs for 30 years in a blood feud against Adán Barrera, the head of El Federación, the world\'s most powerful cartel, and the man who brutally murdered Keller\'s partner. Finally putting Barrera away cost Keller dearly - the woman he loves, the beliefs he cherishes, the life he wants to lead.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Then Barrera gets out, determined to rebuild the empire that Keller shattered. Unwilling to live in a world with Barrera in it, Keller goes on a 10-year odyssey to take him down. His obsession with justice - or is it revenge? - becomes a ruthless struggle that stretches from the cities, mountains, and deserts of Mexico to Washington\'s corridors of power to the streets of Berlin and Barcelona.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'Publisher\'s Information'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
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
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'mini' },
                'More from the same...'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Tabs,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
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
                          { gridUnits: 7, position: 'last' },
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
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Narrator' },
                  _dataPrototypesProductsJson2['default'].map(function (product, index) {
                    if (index > 3 && index < 7) {
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
                          { gridUnits: 7, position: 'last' },
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
              )
            )
          ),
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { pagination: true, arrows: true }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'inverse', paddingSize: 'extra-large', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center', textColor: 'inverse', textSize: 'large' },
              'Testimonials carousel goes here'
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'small' },
            'What Members Say'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'extra-large', spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(_cc2['default'].Histogram, { averageRating: 3.8, numFiveStars: 60, numFourStars: 140, numOneStars: 3, numRatings: 297, numThreeStars: 51, numTwoStars: 43 })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(_cc2['default'].Histogram, { averageRating: 3.8, numFiveStars: 60, numFourStars: 140, numOneStars: 3, numRatings: 297, numThreeStars: 51, numTwoStars: 43 })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4, position: 'last' },
              _react2['default'].createElement(_cc2['default'].Histogram, { averageRating: 3.8, numFiveStars: 60, numFourStars: 140, numOneStars: 3, numRatings: 297, numThreeStars: 51, numTwoStars: 43 })
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Tabs,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TabPanel,
              { title: 'Audible.com' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini', textAlign: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Sort by'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: true },
                  _react2['default'].createElement(
                    'option',
                    null,
                    'Rating'
                  ),
                  _react2['default'].createElement(
                    'option',
                    null,
                    'Date Added'
                  ),
                  _react2['default'].createElement(
                    'option',
                    null,
                    'Random'
                  )
                )
              ),
              this.renderReviews()
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TabPanel,
              { title: 'Amazon.com' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini', textAlign: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Sort by'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: true },
                  _react2['default'].createElement(
                    'option',
                    null,
                    'test 1'
                  ),
                  _react2['default'].createElement(
                    'option',
                    null,
                    'test 2'
                  ),
                  _react2['default'].createElement(
                    'option',
                    null,
                    'test 3'
                  )
                )
              ),
              this.renderReviews()
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Pdp;
})(_react2['default'].Component);

exports['default'] = Pdp;
module.exports = exports['default'];