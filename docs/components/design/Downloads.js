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

var Downloads = (function (_React$Component) {
  _inherits(Downloads, _React$Component);

  function Downloads() {
    _classCallCheck(this, Downloads);

    _get(Object.getPrototypeOf(Downloads.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Downloads, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'base' },
          'Downloads'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'extra-large', hasBorder: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'UI Library'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'Sketch'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { buttonType: 'primary', inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/BrickCity_UI_Library_08_15_sketch._V313115560_.zip' },
              'Sketch (Version 8/15)'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'Photoshop'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/BrickCity_UI_Library_08_15_psd._V313115555_.zip' },
              'PSD (Version 8/15)'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'Jpgs'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/BrickCity_UI_Library_08_15_jpg._V313115561_.zip' },
              'JPG (Version 8/15)'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'extra-large', hasBorder: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'UI Icons'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4, position: 'last', textAlign: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: "/elements/Icon", textSize: 'small' },
                'View Icon Playground'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'Web Icons'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/brickcity_icons_webfont._V310520326_.zip' },
              'Web Icons Webfont'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'micro' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/brickcity_icons_web._V310520326_.zip' },
              'Web Icons Sketch Master File'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/elements/Icon", textSize: 'small' },
              'View the Icon Playground'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'App Icons'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/brickcity_icons_apps._V310520326_.zip' },
            'App Icons Sketch Master File'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'extra-large', hasBorder: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'Logos'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 3, spacing: 'mini' },
              'All Logos'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/audible_logos._V313097582_.zip' },
              'Logos (zip)'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 3, spacing: 'mini' },
            'Individual Logos'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro', backgroundColor: 'inverse' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_black.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_black.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro', backgroundColor: 'inverse' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_white.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_white.svg' },
                'Mediacentral Location'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_softblack.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_softblack.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'base', spacing: 'micro', backgroundColor: 'inverse' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_white.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_white.svg' },
                'Mediacentral Location'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'extra-large', hasBorder: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'Marketing Icons'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4, position: 'last', textAlign: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: "/changelog", textSize: 'small' },
                'View Changelog'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-180000-plus-titles._V311720626_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                '180000-plus-titles'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-180000-plus-titles._V311720626_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-45000-wsfv-titles._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                '45000-wsfv-titles'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-45000-wsfv-titles._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V311720626_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                '30-percent-off'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V311720626_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'credit'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-coupon._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'coupon'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-coupon._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'customer-care'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care._V311706744_.svg' },
                'Mediacentral Location'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-deals._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'deals'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-deals._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-download._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'download'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-download._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'free'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'free-audio-newspaper'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'glg'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'members-only-deals'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals._V311706744_.svg' },
                'Mediacentral Location'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'membership'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'no-strings'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership._V311705986_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'pause-membership'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership._V311705986_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'save-now'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'switch'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch._V311706744_.svg' },
                'Mediacentral Location'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-upgrade._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'upgrade'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-upgrade._V311706744_.svg' },
                'Mediacentral Location'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-wsfv-99-cent-classics._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textNormal: true },
                'wsfv-99-cent-classics'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  textSize: 'small',
                  url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-wsfv-99-cent-classics._V311706744_.svg' },
                'Mediacentral Location'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'inverse' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center', spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-180000-plus-titles-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  '180000-plus-titles'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-180000-plus-titles-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-45000-wsfv-titles-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  '45000-wsfv-titles'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-45000-wsfv-titles-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  '30-percent-off'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'credit'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-coupon-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'coupon'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-coupon-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'customer-care'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center', spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-deals-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'deals'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-deals-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-download-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'download'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-download-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'free'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'free-audio-newspaper'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'glg'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'members-only-deals'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center', spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'membership'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'no-strings'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'pause-membership'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'save-now'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'switch'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-upgrade-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'upgrade'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-upgrade-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-wsfv-99-cent-classics-inverse._V311720857_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', textNormal: true },
                  'wsfv-99-cent-classics'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  {
                    textSize: 'small',
                    url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-wsfv-99-cent-classics-inverse._V311720857_.svg' },
                  'Mediacentral Location'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'extra-large', hasBorder: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base' },
                'Asin Samples'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { inline: true, url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/downloads/asin_samples._V313094845_.zip' },
            'Asin Samples'
          )
        )
      );
    }
  }]);

  return Downloads;
})(_react2['default'].Component);

exports.Downloads = Downloads;
exports['default'] = Downloads;