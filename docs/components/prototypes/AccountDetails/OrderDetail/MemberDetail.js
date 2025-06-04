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

var _ubiquityHeaderProdHeader = require('../../ubiquity/Header/ProdHeader');

var _ubiquityHeaderProdHeader2 = _interopRequireDefault(_ubiquityHeaderProdHeader);

var _ubiquityFooterProdFooter = require('../../ubiquity/Footer/ProdFooter');

var _ubiquityFooterProdFooter2 = _interopRequireDefault(_ubiquityFooterProdFooter);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Overview = require('../Overview');

var _Overview2 = _interopRequireDefault(_Overview);

var _PaymentMethod = require('../PaymentMethod');

var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

var _TransactionHistory = require('../TransactionHistory');

var _TransactionHistory2 = _interopRequireDefault(_TransactionHistory);

var _NotificationsSettings = require('../NotificationsSettings');

var _NotificationsSettings2 = _interopRequireDefault(_NotificationsSettings);

var MemberDetail = (function (_React$Component) {
  _inherits(MemberDetail, _React$Component);

  function MemberDetail() {
    _classCallCheck(this, MemberDetail);

    _get(Object.getPrototypeOf(MemberDetail.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MemberDetail, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 1 },
              'ACCOUNT'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last', spacingTop: 'micro' },
              _react2['default'].createElement(
                _ubiquityCc2['default'].Tabs,
                { tabActive: 3 },
                _react2['default'].createElement(
                  _ubiquityCc2['default'].TabPanel,
                  { title: 'Overview' },
                  _react2['default'].createElement(_Overview2['default'], null)
                ),
                _react2['default'].createElement(
                  _ubiquityCc2['default'].TabPanel,
                  { title: 'Payment' },
                  _react2['default'].createElement(_PaymentMethod2['default'], null)
                ),
                _react2['default'].createElement(
                  _ubiquityCc2['default'].TabPanel,
                  { title: 'Orders' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', url: "/prototypes/brickcity/account-details-b" },
                      'Back to Orders'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { background: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'large', spacingTop: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 2, spacing: 'base', textColor: 'base' },
                          'Membership Detail'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 5, textAlign: 'right' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'Refund Date:'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textAlign: 'left', textColor: 'base', textSize: 'base' },
                          '10-14-2015'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 3, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'Order #:'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textAlign: 'left', textColor: 'base', textSize: 'base' },
                          'D01-7339708-6780702'
                        )
                      )
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 2 },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/crest._V289338205_.svg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 5 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: false, textSize: 'medium', textColor: 'base' },
                          'Gold Annual Membership'
                        )
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 1, spacingTop: 'mini', position: 'last' })
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Section,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 6, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Table,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].TableRow,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].TableColumn,
                                null,
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textAlign: 'left', textColor: 'base', textBold: true },
                                  'Total Paid'
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].TableColumn,
                                null,
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textAlign: 'left', textColor: 'base', textBold: true },
                                  '$13.96'
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _ubiquityCc2['default'].TabPanel,
                  { title: 'Preferences' },
                  _react2['default'].createElement(_NotificationsSettings2['default'], null)
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooter2['default'], null)
      );
    }
  }]);

  return MemberDetail;
})(_react2['default'].Component);

exports['default'] = MemberDetail;
module.exports = exports['default'];
/* Tab1 - Profile */ /* Tab3 - Billings */ /* Tab4 - Subscriptions */ /* Tab5 - Subscriptions */