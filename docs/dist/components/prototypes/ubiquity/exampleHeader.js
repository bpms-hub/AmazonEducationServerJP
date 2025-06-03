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

var _HeaderProdHeader = require('./Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var ExampleHeader = (function (_React$Component) {
  _inherits(ExampleHeader, _React$Component);

  function ExampleHeader() {
    _classCallCheck(this, ExampleHeader);

    _get(Object.getPrototypeOf(ExampleHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ExampleHeader, [{
    key: 'render',
    value: function render() {
      var conf = {
        color: {
          primary: 'inverse', //base
          secondary: 'inverse', //secondary
          pipe: 'base', //none
          link: 'inverse', //base
          icon: 'white' //none
        },
        style: {
          container: {
            background: "url(https://images-na.ssl-images-amazon.com/images/G/08/AudibleFR/fr_FR/img/site/anonhp/hero_shot2.jpg) top center no-repeat",
            height: '300px'
          }
        },
        flyer: 'bc-library-element-39',
        logo: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg',
        menu: {
          top: {
            user: "Hallo User",
            credits: "0 Credits Verfügba",
            balance: "Coupon Abgleich: $5.00",
            contact: "Kostenlose Hotline  0800 58900 73"
          },

          main: {
            library: "Library",
            whishlist: "Wish List",
            browse: "Browse",
            lp: "Listener Page"
          }
        }
      };

      var conf1 = {
        color: {
          primary: 'base', //base
          secondary: 'secondary', //secondary
          pipe: null, //none
          link: null, //base
          icon: null //none
        },
        style: {
          container: {
            background: 'none'
          }
        },
        flyer: 'bc-library-element-39',
        logo: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg',
        menu: {
          top: {
            user: "Hi User",
            credits: "0 Credits Available",
            balance: "Coupon Balance: $5.00",
            contact: "Contact Us 24/7"
          },

          main: {
            library: "Library",
            whishlist: "Wish List",
            browse: "Browse",
            lp: "Listener Page"
          }
        }
      };

      var conf2 = {
        color: {
          primary: 'inverse', //base
          secondary: 'inverse', //secondary
          pipe: 'base', //none
          link: 'inverse', //base
          icon: 'white' //none
        },
        style: {
          container: {
            background: 'url(https://images-na.ssl-images-amazon.com/images/G/03/AudibleDE/de_DE/img2/site/anon-hp/WOW_2_junge_hoert_hoerbuch.jpg) top center no-repeat ',
            height: '300px'
          }
        },
        flyer: 'bc-library-element-42',
        logo: 'https://images-na.ssl-images-amazon.com//images/G/01/audibleweb/brickcity/1.0/logos/audible_logo_knockout.svg',
        menu: {
          top: {
            user: "Hi User",
            credits: "0 Credits Available",
            balance: "Coupon Balance: $5.00",
            contact: "Contact Us 24/7"
          },

          main: {
            library: "Bibilothek",
            whishlist: "Startseite",
            browse: "Hörbücher",
            lp: ""
          }
        }
      };

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], { config: conf1 }),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { dividerType: 'dotted', spacing: 'micro', spacingTop: 'micro' }),
        _react2['default'].createElement(_HeaderProdHeader2['default'], { config: conf }),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { dividerType: 'dotted', spacing: 'micro', spacingTop: 'micro' }),
        _react2['default'].createElement(_HeaderProdHeader2['default'], { config: conf2 }),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { dividerType: 'dotted', spacing: 'large', spacingTop: 'micro' })
      );
    }
  }]);

  return ExampleHeader;
})(_react2['default'].Component);

exports['default'] = ExampleHeader;
module.exports = exports['default'];