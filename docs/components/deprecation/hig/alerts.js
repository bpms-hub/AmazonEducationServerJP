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

var _HigLayout = require('./HigLayout');

var _HigLayout2 = _interopRequireDefault(_HigLayout);

var alerts = (function (_React$Component) {
  _inherits(alerts, _React$Component);

  function alerts() {
    _classCallCheck(this, alerts);

    _get(Object.getPrototypeOf(alerts.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(alerts, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _HigLayout2['default'],
        { activeRow: 3 },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'mini', textBold: true },
          'Alert Patterns'
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'mini' },
          'Global Alerts'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Global alerts slide into view along the top of the screen (above the navigation) on page load. These alerts are not an immediate result of an action taken by a user but rather a system level alert. The alert must remain persistent until the user interacts with message or decides to close the alert.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Global error alert'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Alert,
            { closeable: true },
            'This is a global error alert. ',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { url: '#' },
              'Link here'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. Credit Card Expired, Credit Card expiring soon'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Error alerts require action and consequently must contain a CTA. The close icon is optional and  depends on the level of urgency.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Global general alert:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Alert,
            { closeable: true, alertType: 'info' },
            'This is a global alert. ',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { url: '#' },
              'Link here'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. IP Redirect, Get the App'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'General alerts do not require action and consequently does not require a CTA.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Location:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/global_desktop._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Desktop'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, position: 'last' },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/global_mobile._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Mobile Web'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'mini' },
          'Inline Alerts'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Inline alerts are the immediate result of an action taken by the user. Inline alerts must clearly communicate what is happening and how the user can resolve the issue at hand. They appear above the affected area and are not dismissible.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].InlineAlert,
          { spacing: 'mini' },
          'This is an inline alert. ',
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            null,
            'Click Here'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. Form error, content not available in your market place'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base', textSize: 'small', textColor: 'secondary' },
          'See also: ',
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            null,
            'Form errors'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Location:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/inline_desktop._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Desktop'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, position: 'last' },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/inline_mobile._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Mobile Web'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'mini' },
          'Toast Alerts'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].ToastAlert,
          { spacing: 'mini' },
          'This is a toast alert'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Toast alerts are displayed briefly and then automatically disappear. Toast alerts do not require actions and are usually used for success messages.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. Successfully added to library, finished downloading'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Location:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/toast_desktop._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Desktop'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, position: 'last' },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/toast_mobile._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Mobile Web'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'mini' },
          'System Alerts'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'Gives user important information that affects their use of the app or the device, interrupting the user and requiring them to stop what they’re doing to choose an action or dismiss the alert. For example, iOS uses alerts to warn the user that battery power is running low, so they can connect a power adapter before their work is interrupted. An alert view appears on top of app content, and must be manually dismissed by the user before he can resume interaction with the app.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '270px', imageHeight: '125px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/hig/alert-system._V288474209_.jpg' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. Storage full, Enable Wi-Fi'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Location:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/systemalert_ios._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'iOS'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'mini' },
          'New Indicator'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'The orange dot highlights new content in channels.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'mini' },
          _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '320px', imageHeight: '360px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/hig/alert-new-callout._V288474209_.jpg' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textEmphasis: true },
            'E.g. New feature, new content'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'micro' },
          'Location:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '200px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/articles/alerts/callout_alert._V311921565_.jpg' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textEmphasis: true },
                'Apps'
              )
            )
          )
        )
      );
    }
  }]);

  return alerts;
})(_react2['default'].Component);

exports['default'] = alerts;
module.exports = exports['default'];
/*<BC.GridRow textSize="small" textColor="secondary" spacing="medium">
 See Also <BC.Link>Modals,</BC.Link> <BC.Link>Prompts,</BC.Link> <BC.Link>Notifications</BC.Link>
 <BC.Pipe />
 Tagged: <BC.Link>UI,</BC.Link> <BC.Link>Buttons,</BC.Link> <BC.Link>Forms</BC.Link>
 <BC.Pipe />
 Last edited: May 10, 2015
</BC.GridRow>*/