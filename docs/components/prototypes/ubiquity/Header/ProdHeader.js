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

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var ProdHeader = (function (_React$Component) {
  _inherits(ProdHeader, _React$Component);

  function ProdHeader() {
    _classCallCheck(this, ProdHeader);

    _get(Object.getPrototypeOf(ProdHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProdHeader, [{
    key: 'render',
    value: function render() {
      var conf = this.props.config || { color: { primary: "base", secondary: "secondary", pipe: null, link: null, icon: null }, style: { container: { background: "none" } }, flyer: "bc-library-element-39", logo: "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg", menu: { top: { user: "Hi John", credits: "0 Credits Available", balance: "Coupon Balance: $5.00", contact: "Contact Us 24/7" }, main: { library: "Library", whishlist: "Wish List", browse: "Browse", lp: "Listener Page" } } };
      return _react2['default'].createElement(
        'div',
        { style: conf.style.container },
        _react2['default'].createElement(
          'header',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 140, spacing: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 140, side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity" },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '140px', source: conf.logo })
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '30px', fixedColumn: 'left', side: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { cssClass: 'bc-pub-relative', spacing: 'base', spacingTop: 'micro', textAlign: 'right', textColor: conf.color.secondary, textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].PopoverTrigger,
                    { flyout: _react2['default'].createElement(
                        'div',
                        null,
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base' },
                            'Membership status'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/prototypes/brickcity/account-details" },
                            'Account Details'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/prototypes/brickcity/how-to-listen" },
                            'How to Listen'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base' },
                            'Help'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/prototypes/brickcity/gift-center" },
                            'Gift Center'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left', spacing: 'mini' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base' },
                            ' Video Tutorials'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'left' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base' },
                            'Not John? '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base' },
                            'Sign Out'
                          ),
                          ' '
                        ),
                        ' '
                      ), flyoutWidth: '170px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      conf.menu.top.user
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 5, iconType: 'chevron-down', verticalAlign: 'middle' })
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    conf.menu.top.credits
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    conf.menu.top.balance
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/contact" },
                      conf.menu.top.contact
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'base', app: true, url: "/prototypes/brickcity/cart-step1" },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'cart' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'right', fixedColumnWidth: 235 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { columnPadding: '20px', fixedColumn: 'right', side: 'left' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacingTop: 'mini', listDirection: 'horizontal', listType: 'menu' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].PopoverTrigger,
                          { flyout: _react2['default'].createElement(
                              'div',
                              null,
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { textAlign: 'left', spacing: 'mini' },
                                ' ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Link,
                                  { textColor: 'base', app: true, url: "/prototypes/brickcity/library" },
                                  'My Books'
                                ),
                                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini' }),
                                ' '
                              ),
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { textAlign: 'left' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Link,
                                  { textColor: 'base', app: true, url: "/prototypes/brickcity/preorders" },
                                  'My Pre Orders'
                                )
                              ),
                              ' '
                            ), flyoutWidth: '170px' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/prototypes/brickcity/library" },
                            conf.menu.main.library
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 5, iconColor: conf.color.icon, iconType: 'chevron-down', verticalAlign: 'middle' })
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base', url: "/prototypes/brickcity/wishlist", app: true },
                          conf.menu.main.whishlist
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].PopoverTrigger,
                          { center: true, cssClass: conf.flyer, flyout: _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              null,
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 9 },
                                ' ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  null,
                                  ' ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 6 },
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'tertiary' },
                                      'AudioBook Categories'
                                    ),
                                    ' ',
                                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini', spacing: 'mini' }),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      null,
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].GridColumn,
                                        { gridUnits: 6 },
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            ' Mysteries & Thrillers '
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Sci-Fi & Fantasy'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'History'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Science & Technology'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Classics'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Bios & Memoirs'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Business'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Self Development'
                                          ),
                                          ' '
                                        ),
                                        ' '
                                      ),
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].GridColumn,
                                        { gridUnits: 6, position: 'last' },
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Romance'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Fiction'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Teens'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Kids'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Nonfiction'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Comedy'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                                            'Foreign Language'
                                          ),
                                          ' '
                                        ),
                                        ' ',
                                        _react2['default'].createElement(
                                          _AudibleUITags2['default'].GridRow,
                                          { spacing: 'mini' },
                                          ' ',
                                          _react2['default'].createElement(
                                            _AudibleUITags2['default'].Link,
                                            { app: true, textColor: 'base', url: "/prototypes/brickcity/category-archive" },
                                            'More Categories'
                                          ),
                                          ' '
                                        ),
                                        ' '
                                      ),
                                      ' '
                                    ),
                                    ' '
                                  ),
                                  ' ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 3 },
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'tertiary' },
                                      'More to Explore'
                                    ),
                                    ' ',
                                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini', spacing: 'mini' }),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { app: true, textColor: 'base', url: "/prototypes/brickcity/best-sellers" },
                                        'Best Sellers'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'New At Audible'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Coming Soon'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'The Great Courses'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Customer Favorites'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Audible Studios'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Popular Features'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Whispersync for Voice'
                                      ),
                                      ' '
                                    ),
                                    ' '
                                  ),
                                  ' ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 3, position: 'last' },
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'tertiary' },
                                      'Membership & Gifts'
                                    ),
                                    ' ',
                                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'mini', spacing: 'mini' }),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { app: true, textColor: 'base', url: "/prototypes/brickcity/gift-center" },
                                        'Gift Membership'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { textColor: 'base' },
                                        'Gift A Book'
                                      ),
                                      ' '
                                    ),
                                    ' ',
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].GridRow,
                                      { spacing: 'mini' },
                                      ' ',
                                      _react2['default'].createElement(
                                        _AudibleUITags2['default'].Link,
                                        { app: true, textColor: 'base', url: "/prototypes/brickcity/redeem-promo" },
                                        'Redeem Promo Code'
                                      ),
                                      ' '
                                    ),
                                    ' '
                                  ),
                                  ' '
                                ),
                                ' '
                              ),
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 3, position: 'last' },
                                ' ',
                                _react2['default'].createElement(_AudibleUITags2['default'].Image, { hiResSource: 'https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/banners/ADBLCRE-4537_Editor_AUG_wingman.jpg', imageHeight: '', source: 'https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/banners/ADBLCRE-4537_Editor_AUG_wingman.jpg' }),
                                ' '
                              ),
                              ' '
                            ), flyoutWidth: '1020px' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textColor: 'base', app: true, url: "/prototypes/brickcity" },
                            conf.menu.main.browse
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { textColor: 'base', heightPx: 5, iconType: 'chevron-down', verticalAlign: 'middle' })
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          conf.menu.main.lp
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'right', fixedColumnWidth: 235, side: 'right', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Search, { placeholder: 'Search' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'secondary', textSize: 'mini', app: true, url: "/prototypes/brickcity/advanced-search" },
                      'Advanced Search'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProdHeader;
})(_react2['default'].Component);

exports['default'] = ProdHeader;
module.exports = exports['default'];