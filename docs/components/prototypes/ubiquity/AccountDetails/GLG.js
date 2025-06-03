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

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

{
  /*
         TO DO:
  
        •Set height with GridRow, equal spacing √
        •Create play video CTA.
        •paddingTop for headline to description copy. √
        •Add Legal √
  
  
        */}

var GLG = (function (_React$Component) {
  _inherits(GLG, _React$Component);

  function GLG(props) {
    _classCallCheck(this, GLG);

    _get(Object.getPrototypeOf(GLG.prototype), 'constructor', this).call(this, props);
  }

  _createClass(GLG, [{
    key: 'renderRow',
    value: function renderRow() {

      var iconImages = new Array();
      iconImages[0] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/members._V288437235_.png";
      iconImages[1] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/any_book._V288437235_.png";
      iconImages[2] = "http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V289411048_.svg";
      iconImages[3] = "http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V289411048_.svg";
      iconImages[4] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/members._V288437235_.png";
      iconImages[5] = "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/glg/newspaper._V288437235_.png";

      var headlineCopy = new Array();
      headlineCopy[0] = "Audible Membership";
      headlineCopy[1] = "Any book just one credit";
      headlineCopy[2] = "Exchange any book";
      headlineCopy[3] = "Never pay full price";
      headlineCopy[4] = "Members-only deals";
      headlineCopy[5] = "Free audio subscription";

      var descriptionCopy = new Array();
      descriptionCopy[0] = "Audible Membership";
      descriptionCopy[1] = "Any book just one credit";
      descriptionCopy[2] = "Exchange any book";
      descriptionCopy[3] = "Never pay full price";
      descriptionCopy[4] = "Members-only deals";
      descriptionCopy[5] = "Get a daily subscription to The Wall Street Journal or The New York Times, also get a free digital issue of AudioFile Magazine.";

      var linkCopy = new Array();
      linkCopy[0] = "Watch the video";
      linkCopy[1] = "Watch the video";
      linkCopy[2] = "Watch the video";
      linkCopy[3] = "Never pay full price";
      linkCopy[4] = "Members-only deals";
      linkCopy[5] = "Free audio subscription";

      var rows = [];

      for (var x = 0; x < 6; x++) {
        rows.push(x);
      }

      var BenefitsRow = rows.map(function (row, index) {
        return {
          /*
                  <BC.GridColumn gridUnits={3} spacing="medium" textAlign="center">
                      <BC.GridColumn gridUnits={12} position="last" spacing="medium">
                        <BC.Image verticalAlign="baseline" source={iconImages[index]}> </BC.Image>
                      <BC.Paragraph  textSize='medium'>{headlineCopy[index]}</BC.Paragraph>
                        <BC.Paragraph >{descriptionCopy[index]}</BC.Paragraph>
                        <BC.Link textSize="small" >{linkCopy[index]}</BC.Link>
                      </BC.GridColumn>
                  </BC.GridColumn>
          
                  */};
      });
      return BenefitsRow;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement('displayAllImages', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            this.renderRow()
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              null,
              'Audible Member Benefits'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              null,
              'The best way to experience Audible is with a membership. Check out these great member benefits:'
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311706744_.svg', verticalAlign: 'baseline' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Audible Membership'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Take a quick look at the value and benefits of an Audible Membership.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Watch the video'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg', verticalAlign: 'baseline' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Any book just one credit'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Your plan gives you one or more credits to spend toward books every month.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Watch the video'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, gridPull: 1, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, position: 'last', spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'glg' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg._V311706744_.svg', verticalAlign: 'baseline' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Exchange any book'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'If a book doesn’t meet your expectations just return it, no questions asked'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Watch the video'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'medium', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-30-percent-off._V311720626_.svg', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Never pay full price'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Save 30% off regular price when you buy books without credits.'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-members-only-deals._V311706744_.svg', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Members-only deals'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Enjoy discounts and sales offered exclusively to members.'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, gridPull: 1, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, gridPush: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '72px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-free-audio-newspaper._V311706744_.svg', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini', textSize: 'medium' },
                    'Free audio subscription'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Get a daily subscription to',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'The Wall Street Journal'
                    ),
                    'or',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'The New York Times'
                    ),
                    ', also get a free digital issue of',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'AudioFile Magazine'
                    ),
                    '.'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'extra-large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { textColor: 'tertiary', textSize: 'small' },
              '*Audible’s ‘Great Listen Guarantee’ is an exclusive benefit available to AudibleListener plan members in good standing. A member in good standing who is not fully satisfied with his or her Audible audiobook may exchange that specific title for a different title within 365 days of the original date of purchase. Titles purchased with credits may be refunded with credits. Titles purchased with money will be refunded with money.Titles purchased using a combination of money and a coupon or promotional code will be refunded with money and a new coupon or promotional code. Audible reserves the right in its sole discretion to limit the number of exchanges and refunds allowed by each member, including, but not limited to, in cases where Audible suspects abuse of the spirit of the program. Audible may change these terms and conditions or may cancel the program with respect to any or all participants at any time. Void where prohibited.'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return GLG;
})(_react2['default'].Component);

exports['default'] = GLG;
module.exports = exports['default'];
/*Membership*/ /*Any Book*/ /*Exchange*/ /*Never Pay Full Price*/ /*Members-Only*/ /*Free Audio Subscription*/