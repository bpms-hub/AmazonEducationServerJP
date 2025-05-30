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

var _SearchItems = require('./SearchItems');

var _SearchItems2 = _interopRequireDefault(_SearchItems);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Search = (function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
    this.state = {
      lockBottom: false
    };
  }

  _createClass(Search, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.isScrolling.bind(this));
      console.log("mounted");
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.isScrolling.bind(this));
      console.log("unmounted");
    }
  }, {
    key: 'isScrolling',
    value: function isScrolling() {
      var menuHeight = _react2['default'].findDOMNode(this.refs.menu).scrollHeight;
      var contentHeight = _react2['default'].findDOMNode(this.refs.content).scrollHeight;
      var marginTop = 160;
      var windowHeight = window.innerHeight;
      var hiddenContent = contentHeight - windowHeight;
      var ScrollPos = window.scrollY;

      var reachedFooter = this.state.lockBottom == true && contentHeight > windowHeight && ScrollPos >= hiddenContent + marginTop;

      if (reachedFooter) {
        console.log('reached footer');
        this.setState({
          lockBottom: false
        });
      }
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
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 220, spacingTop: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 220, side: 'left' },
              _react2['default'].createElement(
                'div',
                {
                  ref: 'menu',
                  style: {
                    width: "220px",
                    position: this.state.lockBottom ? "fixed" : "relative",
                    bottom: this.state.lockBottom ? "0" : "auto",
                    left: this.state.lockBottom ? "50%" : "auto",
                    marginLeft: this.state.lockBottom ? "-500px" : "auto" }
                },
                _react2['default'].createElement(_cc2['default'].BrowseSearch, { allcategories: true, filters: true, openFilter: true })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', columnPadding: '20px' },
              _react2['default'].createElement(
                'div',
                { ref: 'content' },
                _react2['default'].createElement(_SearchItems2['default'], null)
              )
            )
          ),
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselTitle: 'You Might Also Like ...' })
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Search;
})(_react2['default'].Component);

exports['default'] = Search;
module.exports = exports['default'];
/* Left Side - Nav */ /* Right Side - Search Result */