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

var _cc = require('../../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('../../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _AccountDetailsBProfile_B = require('../../AccountDetails/B/Profile_B');

var _AccountDetailsBProfile_B2 = _interopRequireDefault(_AccountDetailsBProfile_B);

var _AccountDetailsBMembership_B = require('../../AccountDetails/B/Membership_B');

// import PaymentMethod from '../AccountDetails/PaymentMethod';
// import MemberBenefits_B from '../../AccountDetails/B/MemberBenefits_B';

var _AccountDetailsBMembership_B2 = _interopRequireDefault(_AccountDetailsBMembership_B);

var _AccountDetailsBOrderHistory_B = require('../../AccountDetails/B/OrderHistory_B');

// import OrderHistory_C from '../../AccountDetails/B/OrderHistory_C';

var _AccountDetailsBOrderHistory_B2 = _interopRequireDefault(_AccountDetailsBOrderHistory_B);

var _AccountDetailsBSubscriptions_B = require('../../AccountDetails/B/Subscriptions_B');

var _AccountDetailsBSubscriptions_B2 = _interopRequireDefault(_AccountDetailsBSubscriptions_B);

var AccountDetails_B = (function (_React$Component) {
  _inherits(AccountDetails_B, _React$Component);

  function AccountDetails_B() {
    _classCallCheck(this, AccountDetails_B);

    _get(Object.getPrototypeOf(AccountDetails_B.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccountDetails_B, [{
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
            _AudibleUITags2['default'].Section,
            { spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              null,
              'Account Details'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, position: 'last', spacingTop: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Tabs,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TabPanel,
                    { title: 'Overview' },
                    _react2['default'].createElement(_AccountDetailsBProfile_B2['default'], null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TabPanel,
                    { title: 'Payment Method' },
                    _react2['default'].createElement(Billings_B, null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TabPanel,
                    { title: 'Transaction History' },
                    _react2['default'].createElement(OrderHistory_C, null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TabPanel,
                    { title: 'Notifications & Settings' },
                    _react2['default'].createElement(_AccountDetailsBSubscriptions_B2['default'], null)
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return AccountDetails_B;
})(_react2['default'].Component);

exports['default'] = AccountDetails_B;
module.exports = exports['default'];
/*      <BC.Breadcrumbs breadcrumbTrail={[{name: "Home", url: "/prototypes/brickcity"},{name: "Account Details"}]} spacing="small" />*/ /* Tab1 - Profile */ /* Tab3 - Billings */ /* Tab5 - Subscriptions */ /* Tab5 - Subscriptions */