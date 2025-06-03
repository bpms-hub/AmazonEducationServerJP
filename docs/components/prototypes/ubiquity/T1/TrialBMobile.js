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

var _HeaderAquisitionHeaderMobile = require('../Header/AquisitionHeaderMobile');

var _HeaderAquisitionHeaderMobile2 = _interopRequireDefault(_HeaderAquisitionHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var TrialB_Mobile = (function (_React$Component) {
  _inherits(TrialB_Mobile, _React$Component);

  function TrialB_Mobile() {
    _classCallCheck(this, TrialB_Mobile);

    _get(Object.getPrototypeOf(TrialB_Mobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TrialB_Mobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderAquisitionHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { backgroundColor: 'secondary' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'small', backgroundColor: 'base', spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { textAlign: 'center' },
                'Download a ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textEmphasis: true, textBold: true },
                  'free'
                ),
                ' audiobook.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/trial/30day-trial-banner._V288436985_.jpg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', spacing: 'base' },
                'Get Started'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Section,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, textCapitalize: true },
                    'Audible membership includes'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free._V311706744_.svg' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Your first book free!'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Choose from over 180,000 audio titles at Audible.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'medium' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-save-now._V311706744_.svg' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Keep Saving'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'After your free trial get one book a month, your choice, for just $14.95'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'medium' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-no-strings._V311706744_.svg' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'No Strings'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Easily change or cancel your plan at any time'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'medium' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Love it...or exchange it.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Not happy with a choice you made? Exchange it for another title anytime, no hassles.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1, gridPush: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'apple', textColor: 'secondary' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1, gridPush: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'android', textColor: 'secondary' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1, gridPush: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'amazon', textColor: 'secondary' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1, gridPull: 4, position: 'last' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'windows', textColor: 'secondary' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Our Apps'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Audible apps for your tablet or smartphone make it easy to listen wherever you are.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'medium' },
                    'Get Started'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, textAlign: 'left' },
                    'Audible Free Trial Details'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textAlign: 'left' },
                    'After the trial, your paid membership will begin at $14.95 per month. With your membership, you will receive one credit every month, good for any audiobook on Audible.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textAlign: 'left' },
                    'Cancel anytime, effective the next monthly billing cycle. Cancel before your trial ends and you will not be charged. Check out the full ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'terms and policies'
                    ),
                    ' that apply to Audible membership.'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return TrialB_Mobile;
})(_react2['default'].Component);

exports['default'] = TrialB_Mobile;
module.exports = exports['default'];