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

var _layoutHeader = require('../layout/Header');

var _layoutHeader2 = _interopRequireDefault(_layoutHeader);

var _layoutFooter = require('../layout/Footer');

var _layoutFooter2 = _interopRequireDefault(_layoutFooter);

var _dataPrototypesProductsJson = require('../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var Prototypes = (function (_React$Component) {
  _inherits(Prototypes, _React$Component);

  function Prototypes(props) {
    _classCallCheck(this, Prototypes);

    _get(Object.getPrototypeOf(Prototypes.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentOffer: 1,
      showOther: false
    };
  }

  _createClass(Prototypes, [{
    key: 'selectOffers',
    value: function selectOffers(offerNumber, otherOption) {
      console.log(otherOption);

      this.setState({
        currentOffer: offerNumber,
        showOther: otherOption
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_layoutHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'large', spacingTop: 'medium', textSize: 'extra-large' },
            'Prototypes'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'left' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true, spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base' },
                  'Brick City Desktop'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Prototype for Brick City on Ubiquity.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { app: true, buttonType: 'primary', inline: true, url: "/prototypes/brickcity" },
                  'View Prototype'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true, spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base' },
                  'Brick City Mobile'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Prototype for Brick City Mobile on Ubiquity.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { app: true, buttonType: 'primary', inline: true, url: "/prototypes/brickcity-mobile" },
                  'View Prototype'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true, spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base' },
                  'Tray'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Prototype for the tray inside the grid and list views'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { app: true, buttonType: 'primary', inline: true, url: "/prototypes/tray" },
                  'View Prototype'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'extra-large', textAlign: 'left' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'micro' },
                'Status:',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: '#cc0000' },
                  ' [In Progress]'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: "/prototypes/brickcity/account-details" },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'mini', headingLevel: 2 },
                  'Account Details'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Profile / Membership / Billings / Order History / Subscriptions'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'horizontal', spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'mini' },
                    'Details Sub Pages'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/update-profile" },
                      'Update Profile'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/upgrade-membership_b" },
                      'Switch Membership'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/glg" },
                      'GLG'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/payment-information" },
                      'Edit Card'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'small', spacing: 'small' },
                'Audible Software Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/audible-software1-pc" },
                    'Audible Software 1'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/audible-software2-pc" },
                    'Audible Software 2'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/audible-software3-pc" },
                    'Audible Software 3'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/audible-software" },
                    'Audible Software for PC'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Cancel Flow Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel" },
                    'Cancel Credits'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel/form" },
                    'Cancel Form'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel/offers/" + this.state.currentOffer },
                    'Cancel Offers'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel/offers-b/" + this.state.currentOffer },
                    'Cancel Offers B'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel/success-pause" },
                    'Cancel Success'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cancel/success-cancel" },
                    'Cancel Success B'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Categories Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/all-categories" },
                    'All Category'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/category-archive" },
                    'Category Archive'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/all-categories/category" },
                    'Category'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Checkout Flow Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cart-no-card" },
                    'Cart No Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cart-step1" },
                    'Cart Step 1'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cart-step2" },
                    'Cart Step 2'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cart-step3" },
                    'Cart Step 3'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/cart-step3-member" },
                    'Cart Step 3 - Member'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Contact Flow Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/contact" },
                    'Contact Us'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Gateway Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity" },
                    'Gateway'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Library Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/library" },
                    'Library'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'MT Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/business-inquiries" },
                    'Business Inquiries'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/gift-center" },
                    'Gift Center'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/how-to-listen" },
                    'How To Listen'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/pick-a-plan" },
                    'Pick A Plan'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/special-offer" },
                    'Special Offer'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity/pdp/" + _dataPrototypesProductsJson2['default'][0].asin },
                  'Product Detail Page (PDP)'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Search Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/advanced-search" },
                    'Advanced Search'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/best-sellers" },
                    'Best Sellers'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/search" },
                    'Search'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/series-list" },
                    'Series List'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'T1 Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/trial-a" },
                    'Trial A'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/trial-b" },
                    'Trial B'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Other Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/device-video" },
                    'Device Video'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/redeem-promo" },
                    'Redeem Promo'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/recommendations" },
                    'Recommendations'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity/write-review" },
                    'Write Review'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'micro' },
                'Mobile Status: [In Progress]'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: "/prototypes/brickcity-mobile/account-details" },
                  'Account Details'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/add-card" },
                    'Add Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/edit-card" },
                    'Edit Card'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'Gateway Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile" },
                    'Gateway Mobile'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity-mobile/help-center" },
                  'Help Center'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/help-center/category/article" },
                    'Help Center Article - Mobile'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/help-center/category" },
                    'Help Center Category - Mobile'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity-mobile/pdp/" },
                  'Pick A Plan'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity-mobile/pdp/" + _dataPrototypesProductsJson2['default'][0].asin },
                  'Product Detail Page (PDP)'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity-mobile/search" },
                  'Search'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/best-sellers" },
                    'Best Sellers - Mobile'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/series-list" },
                    'Series List - Mobile'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacingTop: 'base', spacing: 'base' },
                'T1 Links'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'horizontal', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/trial-a" },
                    'Trial A - Mobile'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/trial-b" },
                    'Trial B - Mobile'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/trial-c" },
                    'Trial C - Mobile'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: "/prototypes/brickcity-mobile/trial-d" },
                    'Trial D - Mobile'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_layoutFooter2['default'], null)
      );
    }
  }]);

  return Prototypes;
})(_react2['default'].Component);

exports['default'] = Prototypes;
module.exports = exports['default'];