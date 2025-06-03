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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _dataPrototypesProductsJson = require('../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var components = (function (_React$Component) {
  _inherits(components, _React$Component);

  function components() {
    _classCallCheck(this, components);

    _get(Object.getPrototypeOf(components.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(components, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'extra-large', spacingTop: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'large', textSize: 'extra-large' },
              'Components'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'base' },
              'These components are explorations to help create parity between designers looking for solutions to their problems. These are not representations of the production environment and make no suggestions on the underlying code. They are purely to display interactive example of components that streams are using or have identified as possible solutions.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'extra-large' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Toggle Buttons'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(_AudibleUITags2['default'].ToggleButton, { activeText: 'Following', inactiveText: 'Follow' })
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Alerts'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Alert,
                { closeable: true },
                'This is an error alert ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: '#' },
                  'Link here'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Alert,
                { alertType: 'info', closeable: true },
                'This is an info alert ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: '#' },
                  'Link here'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Toast Alerts'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ToastAlert,
                null,
                'This is a toast alert'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Library'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Documentation:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { size: 'small', spacing: 'mini', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/component-docs/Toast_UX_Doc._V311718959_.pdf' },
                    'UX Docs'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { size: 'small', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/component-docs/Toast_VX_Redlines._V311718958_.zip' },
                    'VX Redlines'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Search'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Search, null),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Breadcrumbs'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, {
                breadcrumbTrail: [{ name: "home", url: "/prototypes/brickcity" }, { name: "Mysteries & Thrillers", url: "/prototypes/brickcity/category" }, { name: "True Crime" }] }),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'medium', textSize: 'large' },
              'Content Optimization'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Expanders'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'mini' },
                'Expander (content above)'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { hideText: 'Hide Synopsis', showText: 'Synopsis' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'mini' },
                'Expander (content below)'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { anchor: true, hideText: 'Hide Synopsis', showText: 'Synopsis' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Tabs'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Tabs,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Library' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    null,
                    'panel 1'
                  ),
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Wishlist' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    null,
                    'panel 2'
                  ),
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Accordions'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Accordion,
                    { activeRow: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Accordion row' },
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Accordion row' },
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Accordion row' },
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Modal'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ModalTrigger,
                    { modalContent: 'test content2' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { inline: true },
                      'Modal Trigger Empty'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ModalTrigger,
                    { modalContent: _react2['default'].createElement(
                        'div',
                        null,
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'base' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 6 },
                            ' ',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Box,
                              { hasBorder: false, backgroundColor: 'base' },
                              ' ',
                              _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://ecx.images-amazon.com/images/I/51KcgxXmuHL.jpg' }),
                              ' '
                            ),
                            ' '
                          ),
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 5, position: 'last' },
                            ' ',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 2, spacing: 'base' },
                              'Give an Audiobook'
                            ),
                            ' ',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              { spacing: 'base' },
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 6 },
                                ' ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].RadioButton,
                                  null,
                                  'Email it'
                                ),
                                ' '
                              ),
                              ' ',
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 6, position: 'last' },
                                ' ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].RadioButton,
                                  null,
                                  'Print it Out'
                                ),
                                ' '
                              ),
                              ' '
                            ),
                            ' ',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              { textColor: 'secondary' },
                              'Send:'
                            ),
                            ' ',
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'now' }),
                            ' ',
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'sample@gmail.com' }),
                            ' ',
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Amanda' }),
                            ' ',
                            _react2['default'].createElement(_AudibleUITags2['default'].TextArea, null),
                            ' ',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              null,
                              'Gift Terms & Conditions'
                            ),
                            ' '
                          ),
                          ' '
                        ),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { textAlign: 'right' },
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { linkType: 'nav' },
                            'Cancel'
                          ),
                          ' ',
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                          ' ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Button,
                            { buttonType: 'primary', inline: true },
                            'Preview'
                          ),
                          ' '
                        ),
                        ' '
                      ), width: '740px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { inline: true },
                      'Modal Trigger With Example Content'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Documentation:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { size: 'small', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/component-docs/Modal_VX_Redlines._V311719000_.zip' },
                    'VX Redlines'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'medium', textSize: 'large' },
              'Popovers'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Flyouts'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { flyout: _react2['default'].createElement(
                    'div',
                    null,
                    ' test flyout content '
                  ), flyoutSide: 'right', flyoutWidth: 250 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Flyout Right'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { flyout: _react2['default'].createElement(
                    'div',
                    null,
                    ' test flyout content '
                  ), flyoutSide: 'top', flyoutWidth: 250 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Flyout Top'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { flyout: _react2['default'].createElement(
                    'div',
                    null,
                    ' test flyout content '
                  ), flyoutSide: 'bottom', flyoutWidth: 250 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Flyout Bottom'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { flyout: _react2['default'].createElement(
                    'div',
                    null,
                    ' test flyout content '
                  ), flyoutSide: 'left', flyoutWidth: 250 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Flyout Left'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Documentation:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { size: 'small', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/component-docs/Flyout_VX_Redlines._V311718977_.zip' },
                    'VX Redlines'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Tooltips'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { tooltip: 'this is tooltip text', tooltipSide: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Tooltip Left'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { tooltip: 'this is tooltip text', tooltipSide: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Tooltip Right'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { tooltip: 'this is tooltip text', tooltipSide: 'bottom' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Tooltip Bottom'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].PopoverTrigger,
                { tooltip: 'this is tooltip text' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { inline: true },
                  'Tooltip Top'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Documentation:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { size: 'small', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/component-docs/Tooltip_VX_Redlines._V311718945_.zip' },
                    'VX Redlines'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'medium', textSize: 'large' },
              'Product'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'RatingSelector'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Review Stars'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini' },
                  'Stars Only'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0 })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini' },
                  'Stars with Average Rating'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0, showAverageRating: true })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini' },
                  'Stars with Total Ratings'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0, numRatings: 340 })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini' },
                  'Stars with Average and Total Ratings'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 3.0, numRatings: 340, showAverageRating: true })
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Histogram'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Histogram, { averageRating: 3.8, numFiveStars: 60, numFourStars: 140, numOneStars: 3, numRatings: 297, numThreeStars: 51, numTwoStars: 43 }),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Status:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 10, percentage: 25, progressColor: 'experimental' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'experimental' },
                    'Experimental'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Proposing Streams:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, null)
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return components;
})(_react2['default'].Component);

exports['default'] = components;
module.exports = exports['default'];
/* In progress
<BC.Box hasBorder={true} spacing="extra-large">
 <BC.GridRow>
   <BC.GridColumn gridUnits={8}>
     <BC.Heading headingLevel={2} spacing="base">BuyBox</BC.Heading>
   </BC.GridColumn>
 </BC.GridRow>
  <BC.Divider spacing="base"/>
  <BC.FixedGridRow fixedColumn="right" fixedColumnWidth={246}>
   <BC.FixedGridColumn fixedColumn="right" side="left"></BC.FixedGridColumn>
    <BC.FixedGridColumn fixedColumn="right" fixedColumnWidth={246} side="right">
     <BC.BuyBox/>
   </BC.FixedGridColumn>
 </BC.FixedGridRow>
  <BC.Divider spacingTop="large"/>
   <BC.GridRow spacing="base" spacingTop="medium">
   <BC.GridColumn gridUnits={3}>
     <BC.Heading headingLevel={3} spacing="micro">Status:</BC.Heading>
      <BC.Meter meterHeight={10} percentage={25} progressColor="experimental"/>
      <BC.Text textColor="experimental">Experimental</BC.Text>
   </BC.GridColumn>
    <BC.GridColumn gridPush={1} gridUnits={6}>
     <BC.Heading headingLevel={3} spacing="micro">Proposing Streams:</BC.Heading>
     <BC.Text>AYCE, International</BC.Text>
   </BC.GridColumn>
 </BC.GridRow>
</BC.Box>
*/ /*
   <BC.Box hasBorder={true} spacing="extra-large">
    <BC.GridRow>
      <BC.GridColumn gridUnits={8}>
        <BC.Heading headingLevel={2} spacing="base">Pagination</BC.Heading>
      </BC.GridColumn>
    </BC.GridRow>
     <BC.Divider spacing="base"/>
     <BC.Pagination/>
     <BC.Divider spacingTop="large"/>
     <BC.GridRow spacing="base" spacingTop="medium">
      <BC.GridColumn gridUnits={3}>
        <BC.Heading headingLevel={3} spacing="micro">Status:</BC.Heading>
         <BC.Meter meterHeight={10} percentage={25} progressColor="experimental"/>
         <BC.Text textColor="experimental">Experimental</BC.Text>
      </BC.GridColumn>
       <BC.GridColumn gridPush={1} gridUnits={6}>
        <BC.Heading headingLevel={3} spacing="micro">Proposing Streams:</BC.Heading>
        <BC.Text></BC.Text>
      </BC.GridColumn>
    </BC.GridRow>
   </BC.Box>
   */ /* In progress
      <BC.Box hasBorder={true} spacing="extra-large">
       <BC.GridRow>
         <BC.GridColumn gridUnits={8}>
           <BC.Heading headingLevel={2} spacing="base">Product</BC.Heading>
         </BC.GridColumn>
       </BC.GridRow>
        <BC.Divider spacing="base"/>
        <CC.Product asinSize="mini" onAsin={true} productAsin={productData[0].asin} />
       <BC.LetterSpace />
       <CC.Product asinSize="small" onAsin={true} productAsin={productData[1].asin} />
       <BC.LetterSpace />
       <CC.Product asinSize="base" onAsin={true} productAsin={productData[2].asin} />
       <BC.LetterSpace />
       <CC.Product asinSize="medium"onAsin={true} productAsin={productData[3].asin}  />
       <BC.LetterSpace />
       <CC.Product asinSize="large" productAsin={productData[4].asin} />
        <BC.Divider spacingTop="large"/>
        <BC.GridRow spacing="base" spacingTop="medium">
         <BC.GridColumn gridUnits={3}>
           <BC.Heading headingLevel={3} spacing="micro">Status:</BC.Heading>
            <BC.Meter meterHeight={10} percentage={25} progressColor="experimental"/>
            <BC.Text textColor="experimental">Experimental</BC.Text>
         </BC.GridColumn>
          <BC.GridColumn gridPush={1} gridUnits={6}>
           <BC.Heading headingLevel={3} spacing="micro">Proposing Streams:</BC.Heading>
           <BC.Text></BC.Text>
         </BC.GridColumn>
       </BC.GridRow>
      </BC.Box>
      <BC.Box hasBorder={true} spacing="extra-large">
       <BC.GridRow>
         <BC.GridColumn gridUnits={8}>
           <BC.Heading headingLevel={2} spacing="base">Audio Trigger</BC.Heading>
         </BC.GridColumn>
       </BC.GridRow>
        <BC.Divider spacing="base"/>
        <BC.Heading headingLevel={3} spacing="mini">Default</BC.Heading>
       <BC.GridRow spacing="small">
         <BC.AudioTrigger>Sample</BC.AudioTrigger>
       </BC.GridRow>
        <BC.Heading headingLevel={3} spacing="mini">Off Small</BC.Heading>
       <BC.GridRow spacing="small">
         <BC.AudioTrigger small={true}>Sample</BC.AudioTrigger>
       </BC.GridRow>
        <BC.Heading headingLevel={3} spacing="mini">On Asin</BC.Heading>
       <BC.GridRow spacing="small">
         <BC.AudioTrigger onAsin={true}>Sample</BC.AudioTrigger>
       </BC.GridRow>
        <BC.Heading headingLevel={3} spacing="mini">On Asin Small</BC.Heading>
       <BC.GridRow spacing="small">
         <BC.AudioTrigger onAsin={true} small={true}>Sample</BC.AudioTrigger>
       </BC.GridRow>
        <BC.Divider spacingTop="large"/>
        <BC.GridRow spacing="base" spacingTop="medium">
         <BC.GridColumn gridUnits={3}>
           <BC.Heading headingLevel={3} spacing="micro">Status:</BC.Heading>
            <BC.Meter meterHeight={10} percentage={25} progressColor="experimental"/>
            <BC.Text textColor="experimental">Experimental</BC.Text>
         </BC.GridColumn>
          <BC.GridColumn gridPush={1} gridUnits={6}>
           <BC.Heading headingLevel={3} spacing="micro">Proposing Streams:</BC.Heading>
           <BC.Text></BC.Text>
         </BC.GridColumn>
       </BC.GridRow>
      </BC.Box>
      */