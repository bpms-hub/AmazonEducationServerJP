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

var PreferencesMobile = (function (_React$Component) {
  _inherits(PreferencesMobile, _React$Component);

  function PreferencesMobile(props) {
    _classCallCheck(this, PreferencesMobile);

    _get(Object.getPrototypeOf(PreferencesMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      notificationsUpdated: false,
      notifications: true,
      privacy: true
    };
  }

  _createClass(PreferencesMobile, [{
    key: 'updateNotifications',
    value: function updateNotifications() {
      var _this = this;

      this.setState({
        notificationsUpdated: true
      });

      setTimeout(function () {
        _this.setState({
          notificationsUpdated: false
        });
      }, 7000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacingTop: 'micro', spacing: 'large' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { inline: true, headingLevel: 2, spacing: 'base', textColor: 'base' },
              'Notifications'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 8, position: 'last', textAlign: 'right' },
            _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: this.state.notifications, labelOn: 'on', labelOff: 'off', onChange: function (event) {
                _this2.setState({
                  notifications: event.target.checked
                });
              } })
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { backgroundColor: 'secondary', paddingSize: 'small', spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { spacing: 'none', textColor: 'secondary' },
            'Note: Even if you choose not to receive some marketing emails from us, you will still receive our transactional emails, such as messages related to your orders, updates about products or services you have purchased from us, or information about your account. ',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'Learn More'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Credit Alert' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Get a note saying your monthly credit(s) are available (and what better news than that, right?)'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Editors\' Picks & Customer Favorites' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Sales & Offers' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Be the first to know about sales and special offers.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'User Research Study Announcements' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Audible News & Announcements' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'We will send occasional emails letting you know about site improvements or changes.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Rate & Review' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'What you thought of your most recent purchase? Most members find reviews really helpful in deciding what to listen to next.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Hear & Now: New Releases Newsletter' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'We will keep you updated with the best new books each week.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'OneBook' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Receive audiobook recommendations from your friends.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Author, Narrator, & Series Alerts' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Personalized emails with recommendations based on your past purchases.'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.notifications ? true : false, label: 'Daily Deal' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'One great book on sale every day at a super-low price.'
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'base', textColor: 'base' },
          'Other Contact Options'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: 'true', label: 'Send me offers through mail.' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: 'true', label: 'Send me offers through phone.' })
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { inline: true, headingLevel: 2, spacing: 'base', textColor: 'base' },
              'Privacy Preferences'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, position: 'last', textAlign: 'right' },
            _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: this.state.privacy, labelOn: 'on', labelOff: 'off', onChange: function (event) {
                _this2.setState({
                  privacy: event.target.checked
                });
              } })
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Display my location to other Audible members' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Share my ratings with other Audible members' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'This will allow other users to see each book that you have rated in your library'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Display my listening stats to other Audible members' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textColor: 'secondary' },
            'Join date, membership plan, number of books'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Let me show up in suggestion to other Audible members' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Hide adult content in searches' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Share my likes on Audible.com' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Get notified of reviews posted by people you follow' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'micro', checked: this.state.privacy, label: 'Software verification' })
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Button,
          { inline: true, buttonType: 'primary', onClick: this.updateNotifications.bind(this) },
          'Update'
        ),
        this.state.notificationsUpdated && _react2['default'].createElement(
          _AudibleUITags2['default'].ToastAlert,
          { onClose: function () {
              _this2.setState({
                notificationsUpdated: false
              });
            } },
          'Your preferences have been updated'
        )
      );
    }
  }]);

  return PreferencesMobile;
})(_react2['default'].Component);

exports['default'] = PreferencesMobile;
module.exports = exports['default'];