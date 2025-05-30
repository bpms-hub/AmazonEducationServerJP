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

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var Browse = (function (_React$Component) {
  _inherits(Browse, _React$Component);

  function Browse(props) {
    _classCallCheck(this, Browse);

    _get(Object.getPrototypeOf(Browse.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Browse, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 200, spacingTop: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 200, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'tertiary', spacing: 'mini' },
                'Categories'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'mini', iconType: 'chevron-left' }),
                ' ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'mini', textColor: 'secondary' },
                  'See all categories'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textColor: 'secondary', textBold: false, spacing: 'mini' },
                'Sci-Fi & Fantasy'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', textSize: 'small', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Doctor Who'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Dramatizations'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Contemporary'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Epic'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Paranormal'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary', textBold: true },
                    'Sci-Fi: Contemporary'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Star Trek'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Star Wars'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'tertiary', spacing: 'mini' },
                'Filters'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Language', hideText: 'Language', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'English (27697)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'German (3266)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Spanish (800)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Italian (598)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'French (455)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'More Languages'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Program Type', hideText: 'Program Type', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Audiobook (27612)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Performance (3266)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Speech (800)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Periodical (598)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Lecture (455)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'More Program Types'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Program Format', hideText: 'Program Format', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Unabridged (27612)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Abridged (3266)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Original (800)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Highlights (598)'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Release Date', hideText: 'Release Date', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Last 30 Days (483)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Last 90 Days (1146)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Coming Soon (77)'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Length', hideText: 'Length', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Under 1 Hour (1725)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      '1-3 Hours (2255)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      '3-6 Hours (2588)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      '6-10 Hours (4805)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      '10-20 Hours (6423)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Over 20 Hours (855)'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { spacing: 'mini', anchor: true, showText: 'Listen or Read', hideText: 'Listen or Read', textBold: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Whispersync for Voice (8868)'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '40px', fixedColumn: 'left', side: 'right', spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 1 },
                    'Sci-Fi: Contemporary'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 3, position: 'last' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'mini' },
                'Editor\'s Pick'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', heightCss: '240px', paddingSize: 'medium', spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 1, spacing: 'base' },
                    'Magnificent, Etoarum Etoum'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary', spacing: 'base' },
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
                  )
                )
              ),
              _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselSize: 'base', carouselTitle: 'Recommended For You In Sci-Fi: Contemporary' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', heightCss: '120px', spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'tertiary' },
                  'Marketing Promotion'
                )
              ),
              _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselSize: 'base', carouselTitle: 'New Releases In Sci-Fi: Contemporary' }),
              _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselSize: 'base', carouselTitle: 'Best Sellers In Sci-Fi: Contemporary' })
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Browse;
})(_react2['default'].Component);

exports['default'] = Browse;
module.exports = exports['default'];
/* Left Side - Nav */ /*
                                   <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Categories</BC.Heading>
                                      <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Sci-Fi &amp; Fantasy</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Teens</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Kids</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Fiction</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Nostalgia Radio</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Mysteries & Thrillers</BC.Heading>
                                 <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Romance</BC.Heading>
                      <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Classics</BC.Heading>
                                 <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Radio & TV</BC.Heading>
                                 <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Comedy</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Arts & Entertainment</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Drama & Poetry</BC.Heading>
                           <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Erotica & Sexuality</BC.Heading>
                                 <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Comedy</BC.Heading>
                                 <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Arts & Entertainment</BC.Heading>
                         <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Drama & Poetry</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Erotica & Sexuality</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Religion & Spirituality</BC.Heading>
                               <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Language Instruction</BC.Heading>
                           <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Podcasts</BC.Heading>
                           <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Bios & Memoirs</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Nonfiction</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Science & Technology</BC.Heading>
                         <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Live Events</BC.Heading>
                         <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">Newspapers & Magazines</BC.Heading>
                             <BC.Heading headingLevel={3} textColor="secondary" textBold={false} spacing="mini">History</BC.Heading>
                      
                                          <BC.Divider spacing="base"/>
                                         <BC.Heading headingLevel={2} textColor="tertiary" spacing="mini">Filters</BC.Heading>
                                         <BC.Expander spacing="mini" anchor={true} showText="Language" hideText="Language" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">English (27697)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">German (3266)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Spanish (800)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Italian (598)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">French (455)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Icon iconType="add"></BC.Icon>
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">More Languages</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                       </BC.Expander>
                                         <BC.Expander spacing="mini" anchor={true} showText="Program Type" hideText="Program Type" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Audiobook (27612)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Performance (3266)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Speech (800)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Periodical (598)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Lecture (455)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Icon iconType="add"></BC.Icon>
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">More Program Types</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                         </BC.Expander>
                                         <BC.Expander spacing="mini" anchor={true} showText="Program Format" hideText="Program Format" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Unabridged (27612)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Abridged (3266)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Original (800)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Highlights (598)</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                         </BC.Expander>
                                         <BC.Expander spacing="mini" anchor={true} showText="Release Date" hideText="Release Date" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Last 30 Days (483)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Last 90 Days (1146)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Coming Soon (77)</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                         </BC.Expander>
                                         <BC.Expander spacing="mini" anchor={true} showText="Length" hideText="Length" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Under 1 Hour (1725)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">1-3 Hours (2255)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">3-6 Hours (2588)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">6-10 Hours (4805)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">10-20 Hours (6423)</BC.Text>
                                           </BC.ListItem>
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Over 20 Hours (855)</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                         </BC.Expander>
                                         <BC.Expander spacing="mini" anchor={true} showText="Listen or Read" hideText="Listen or Read" textBold={true}>
                                         <BC.List listType="nostyle" spacing="base" textSize="small">
                                           <BC.ListItem spacing="mini">
                                             <BC.Checkbox />
                                             <BC.LetterSpace />
                                             <BC.Text textColor="secondary">Whispersync for Voice (8868)</BC.Text>
                                           </BC.ListItem>
                                         </BC.List>
                                       </BC.Expander>
                      */ /* Right Side - Search Result */ /*    <BC.Text textAlign="right" textColor="tertiary" textSize="medium">See All: 5,892</BC.Text>*/