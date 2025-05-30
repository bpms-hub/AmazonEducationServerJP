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

var _CancelLayout = require('./CancelLayout');

var _CancelLayout2 = _interopRequireDefault(_CancelLayout);

var CancelForm = (function (_React$Component) {
  _inherits(CancelForm, _React$Component);

  function CancelForm(props) {
    _classCallCheck(this, CancelForm);

    _get(Object.getPrototypeOf(CancelForm.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentOffer: 1,
      showOther: false
    };
  }

  _createClass(CancelForm, [{
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
        _CancelLayout2['default'],
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'micro' },
          'Will you let us know why you\'re canceling?'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          { spacing: 'medium' },
          'It\'ll just take a minute.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Form,
          { spacing: 'medium' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 1, false), label: 'It\'s too expensive' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 3, false), label: 'I had technical issues' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 1, false), label: 'I couldn\'t find audiobooks I liked' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 4, false), label: 'Audiobooks aren\'t for me' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 1, false), label: 'I didn\'t know it was a member' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 2, false), label: 'I don\'t use it enough' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 1, false), label: 'I\'m using another service' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'cancel-option', onChange: this.selectOffers.bind(this, 1, true), label: 'Other reason:' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { cssClass: this.state.showOther ? null : "bc-hidden", spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { rows: 10, placeholder: 'Please describe your reason for canceling.' })
            )
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { textAlign: 'right' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { inline: true, buttonType: 'primary', app: true, url: "/prototypes/brickcity/cancel/offers/" + this.state.currentOffer },
            'Continue to Cancel'
          )
        )
      );
    }
  }]);

  return CancelForm;
})(_react2['default'].Component);

exports['default'] = CancelForm;
module.exports = exports['default'];