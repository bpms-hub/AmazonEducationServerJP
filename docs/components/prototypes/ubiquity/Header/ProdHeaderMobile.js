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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ProdHeaderMobile = (function (_React$Component) {
  _inherits(ProdHeaderMobile, _React$Component);

  function ProdHeaderMobile(props) {
    _classCallCheck(this, ProdHeaderMobile);

    _get(Object.getPrototypeOf(ProdHeaderMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: null
    };
  }

  _createClass(ProdHeaderMobile, [{
    key: 'toggleElement',
    value: function toggleElement(element) {
      if (this.state.activeElement === element) {
        this.setState({
          activeElement: null
        });
      } else {
        this.setState({
          activeElement: element
        });
      }

      if (element === "menu" && this.state.activeElement != "menu") {
        document.body.classList.add('bc-nav-mobile-open');
      } else {
        document.body.classList.remove('bc-nav-mobile-open');
      }
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      if (this.props.member) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { cssClass: 'bc-nav-mobile-cta', onClick: this.toggleElement.bind(this, "credits"), textColor: this.state.activeElement === "credits" ? "active" : "base" },
            _react2['default'].createElement(
              'div',
              { className: (0, _classnames2['default'])(["bc-nav-mobile-balance", this.state.activeElement === "credits" ? "active" : null]) },
              '1'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { cssClass: 'bc-nav-mobile-cta', onClick: this.toggleElement.bind(this, "search") },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'search', iconSize: 'medium', textColor: this.state.activeElement === "search" ? "active" : "base" })
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { cssClass: 'bc-nav-mobile-cta', onClick: this.toggleElement.bind(this, "search") },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'search', iconSize: 'medium', textColor: this.state.activeElement === "search" ? "active" : "base" })
          )
        );
      }
    }
  }, {
    key: 'renderSearch',
    value: function renderSearch() {
      if (this.props.member) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { spacing: 'small', fixedColumn: 'right', fixedColumnWidth: 40 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'right', side: 'left', columnPadding: '10px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Search, { value: 'Search' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { textAlign: 'right', fixedColumn: 'right', side: 'right', fixedColumnWidth: 40 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { onClick: this.toggleElement.bind(this, null) },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' })
                )
              )
            )
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { spacing: 'small', fixedColumn: 'right', fixedColumnWidth: 40 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'right', side: 'left', columnPadding: '10px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Choose any audiobook from over 180,000 ',
                  _react2['default'].createElement('br', null),
                  'titles... yours to keep with a free trial.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { textAlign: 'right', fixedColumn: 'right', side: 'right', fixedColumnWidth: 40 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { onClick: this.toggleElement.bind(this, null) },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' })
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { spacing: 'small' },
              _react2['default'].createElement(_AudibleUITags2['default'].Search, { value: 'Search' })
            )
          )
        );
      }
    }
  }, {
    key: 'renderNav',
    value: function renderNav() {
      if (this.props.member) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { backgroundColor: 'base', cssClass: 'bc-nav-mobile-menu' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro', textSize: 'large', textColor: 'tertiary' },
                'Lisa'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro', textSize: 'base', textColor: 'tertiary' },
                'Coupon balance: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textBold: true },
                  ' $50.00'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textSize: 'base', textColor: 'tertiary' },
                'Credit: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textBold: true },
                  ' 1'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textSize: 'small', textColor: 'tertiary' },
                'Next credit available: Oct 03, 2015'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Get More Credits Now'
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      'Wish List'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'My Pre Orders'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Browse'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix', app: true, url: "/prototypes/brickcity-mobile" },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Home'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Best Sellers'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].DropdownNavMobile,
                    { anchor: true, hideNavs: 'Categories', showNavs: 'Categories' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 11, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Mysteries & Thrillers'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Scrience Fiction & Fantasy'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'History'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Fiction'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Comedy'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Business'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'View All Categories'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'New Releases'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Coming Soon'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'The Great Courses'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Listen to Audiobooks'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'How To Listen'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Promotions and Gifts'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Enter a Promo Code'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'More'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'My Account'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Contact Us'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix', app: true, url: "/prototypes/brickcity-mobile/help-center" },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Help'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Send Us Suggestions'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Sign Out'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { cssClass: 'bc-clearfix' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { spacing: 'mini', spacingTop: 'mini', fixedColumn: 'left', fixedColumnWidth: 46 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'left', fixedColumnWidth: 46 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageHeight: '46px', imageWidth: '46px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/app_icon._V288474374_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'right', columnPadding: '10px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small' },
                        'Listen on your device'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small' },
                        'Get the free Audible App'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
            )
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { backgroundColor: 'base', cssClass: 'bc-nav-mobile-menu' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { spacing: 'small', buttonType: 'primary' },
                'Sign in'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Browse'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix', app: true, url: "/prototypes/brickcity-mobile" },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Home'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Best Sellers'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].DropdownNavMobile,
                    { anchor: true, hideNavs: 'Categories', showNavs: 'Categories' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 11, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Mysteries & Thrillers'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Scrience Fiction & Fantasy'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'History'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Fiction'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Comedy'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'Business'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { cssClass: 'bc-clearfix' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'mini', spacingTop: 'mini' },
                                'View All Categories'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'The Best of Audible'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Listen to Audiobooks'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Why Audiobooks?'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Learn About Membership'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'How To Listen'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Why Audible?'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'Promotions and Gifts'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Enter a Promo Code'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini', headingLevel: 2, textCapitalize: true, textSize: 'small', textColor: 'tertiary' },
                'More'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Contact Us'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix', app: true, url: "/prototypes/brickcity-mobile/help-center" },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Help'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-clearfix' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      'Send Us Suggestions'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { cssClass: 'bc-clearfix' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { spacing: 'mini', spacingTop: 'mini', fixedColumn: 'left', fixedColumnWidth: 46 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'left', fixedColumnWidth: 46 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageHeight: '46px', imageWidth: '46px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/app_icon._V288474374_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'right', columnPadding: '10px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small' },
                        'Listen on your device'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small' },
                        'Get the free Audible App'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
            )
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var navClasses = ['bc-nav-mobile'];
      if (this.state.activeElement === "menu") navClasses.push('bc-nav-mobile-menu-active');

      return _react2['default'].createElement(
        'span',
        { className: 'bc-theme-dark' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { cssClass: (0, _classnames2['default'])(navClasses), backgroundColor: 'base', textColor: 'base' },
          _react2['default'].createElement(
            'header',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'bc-container' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '50px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: 'bc-nav-mobile-cta', onClick: this.toggleElement.bind(this, "menu") },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'hamburger', iconSize: 'medium', textColor: this.state.activeElement === "menu" ? "active" : "base" })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, textAlign: 'center' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { cssClass: (0, _classnames2['default'])(["bc-nav-mobile-logo", "bc-nav-mobile-cta"]), app: true, url: "/prototypes/brickcity-mobile" },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { verticalAlign: 'middle', imageHeight: '30px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5, textAlign: 'right', position: 'last' },
                  this.renderHeader()
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: this.state.activeElement === "search" ? "bc-active" : "bc-hidden" },
              this.renderSearch()
            ),
            _react2['default'].createElement(
              'div',
              { className: this.state.activeElement === "credits" ? "bc-active" : "bc-hidden" },
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
              _react2['default'].createElement(
                'div',
                { className: 'bc-container' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { spacing: 'mini', fixedColumn: 'right', fixedColumnWidth: 40 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'right', side: 'left', columnPadding: '10px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { textSize: 'base', spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Coupon balance: ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          ' $50.00'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { textSize: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Credit: ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          ' 1'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { textColor: 'tertiary', textSize: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Next credit available: Oct 03, 2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { textSize: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Get More Credits Now'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { textAlign: 'right', fixedColumn: 'right', side: 'right', fixedColumnWidth: 40 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { onClick: this.toggleElement.bind(this, null) },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' })
                    )
                  )
                )
              )
            ),
            this.renderNav()
          )
        ),
        this.state.activeElement === "menu" ? [_react2['default'].createElement('div', { style: { backgroundColor: "rgba(0,0,0,0.8)", position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998" }, onClick: this.toggleElement.bind(this, null) })] : null,
        this.state.activeElement === "search" ? [_react2['default'].createElement('div', { style: { position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998" }, onClick: this.toggleElement.bind(this, null) })] : null,
        this.state.activeElement === "credits" ? [_react2['default'].createElement('div', { style: { position: "fixed", left: 0, right: 0, bottom: 0, top: 0, zIndex: "9998" }, onClick: this.toggleElement.bind(this, null) })] : null,
        _react2['default'].createElement('div', { className: 'bc-nav-mobile-spacer' })
      );
    }
  }]);

  return ProdHeaderMobile;
})(_react2['default'].Component);

ProdHeaderMobile.PropTypes = {
  member: _react.PropTypes.bool

};
exports['default'] = ProdHeaderMobile;
module.exports = exports['default'];