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

var _HeaderAquisitionHeader = require('../Header/AquisitionHeader');

var _HeaderAquisitionHeader2 = _interopRequireDefault(_HeaderAquisitionHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var Trial_A = (function (_React$Component) {
  _inherits(Trial_A, _React$Component);

  function Trial_A() {
    _classCallCheck(this, Trial_A);

    _get(Object.getPrototypeOf(Trial_A.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Trial_A, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderAquisitionHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { spacing: 'base', hasBorder: true, heightCss: '400px', paddingSize: 'large',

              cssClass: 'bc-trial-a-box' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 5, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { textNormal: true, textSize: 'extra-large' },
                'Your first story',
                _react2['default'].createElement('br', null),
                'is free.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { textSize: 'medium' },
                'Choose from more than 180,000 titles to begin your 30-day trial.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', size: 'base' },
                'GET MY FREE AUDIOBOOK'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'base' },
                  'Sign in with your',
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'amazon', paddingSide: 'right', paddingSize: '20px' }),
                  'account'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'extra-large', role: 'main' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base', textAlign: 'center' },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg', verticalAlign: 'middle' }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'medium' },
                'Don\'t like your audiobook? No problem. Exchange it for free.'
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'apple', verticalAlign: 'bottom' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'android', verticalAlign: 'bottom' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'windows', verticalAlign: 'bottom' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, textSize: 'mini' },
                      'WORKS ON YOUR IPHONE®, IPAD®, ANDROID™, KINDLE FIRE, WINDOWS PHONE'
                    ),
                    _react2['default'].createElement('br', null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'mini' },
                      'and over 500 mp3 players including Apple® iPod™'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textBold: true, textSize: 'mini' },
                  'CHOOSE FROM MORE THAN 180,000 TITLES'
                ),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'mini' },
                  'You\'ll be listening in seconds'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Trial_A;
})(_react2['default'].Component);

exports['default'] = Trial_A;
module.exports = exports['default'];
/*Hero Unit*/ /*Great Listen Guarantee*/ /*
                                         <BC.Divider spacing="small"/>
                                         <BC.GridRow>
                                          <BC.Paragraph textBold={true} textSize="small">
                                            Audible Free Trial Details
                                          </BC.Paragraph>
                                           <BC.Paragraph spacing="base" textSize="small">
                                            Get an audiobook of your choice, free, with a 30-day trial. After the trial, your paid membership will
                                            begin at $14.95 per month. With your membership, you will receive one credit every month, good for any
                                            audiobook on Audible.
                                          </BC.Paragraph>
                                           <BC.Paragraph textSize="small">
                                            Cancel anytime, effective the next monthly billing cycle. Cancel before your trial ends and you will not be charged. Check out the full terms and policies that apply to Audible membership.
                                          </BC.Paragraph>
                                         </BC.GridRow>
                                         */