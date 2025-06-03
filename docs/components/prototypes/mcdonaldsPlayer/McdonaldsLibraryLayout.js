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

var _ubiquityCc = require('../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _dataPrototypesMcdonaldsLibraryJson = require('../../../data/prototypes/mcdonaldsLibrary.json');

var _dataPrototypesMcdonaldsLibraryJson2 = _interopRequireDefault(_dataPrototypesMcdonaldsLibraryJson);

var _RibbonPlayer = require('./RibbonPlayer');

var _RibbonPlayer2 = _interopRequireDefault(_RibbonPlayer);

var _McdonaldsPlayer = require('./McdonaldsPlayer');

var _McdonaldsPlayer2 = _interopRequireDefault(_McdonaldsPlayer);

var _AudioInterface = require('./AudioInterface');

var _AudioInterface2 = _interopRequireDefault(_AudioInterface);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var McdonaldsLibraryLayout = (function (_React$Component) {
  _inherits(McdonaldsLibraryLayout, _React$Component);

  function McdonaldsLibraryLayout(props) {
    _classCallCheck(this, McdonaldsLibraryLayout);

    _get(Object.getPrototypeOf(McdonaldsLibraryLayout.prototype), 'constructor', this).call(this, props);

    this.state = {
      activeBook: null,
      playerViewActive: false,
      isPlaying: false
    };
  }

  _createClass(McdonaldsLibraryLayout, [{
    key: 'handleBookSelect',
    value: function handleBookSelect(index) {
      this.setState({
        activeBook: index,
        isPlaying: true
      });

      this.handlePlayerOpen();
    }
  }, {
    key: 'handlePlayerOpen',
    value: function handlePlayerOpen() {
      this.setState({
        playerViewActive: true
      });
    }
  }, {
    key: 'handlePlayerClose',
    value: function handlePlayerClose() {
      this.setState({
        playerViewActive: false
      });
    }
  }, {
    key: 'playAudio',
    value: function playAudio() {
      this.setState({
        isPlaying: true
      });
    }
  }, {
    key: 'pauseAudio',
    value: function pauseAudio() {
      this.setState({
        isPlaying: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        { className: 'mobile bc-theme-dark' },
        _react2['default'].createElement(
          'div',
          { className: 'bc-color-background-base bc-color-base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'small', backgroundColor: 'secondary' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, {
                imageHeight: '26px',
                source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar.svg' })
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Box, { backgroundColor: 'active', heightCss: '2px', paddingSize: 'none' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, textSize: 'base' },
              'Mcdonalds Library'
            )
          ),
          _dataPrototypesMcdonaldsLibraryJson2['default'].map(function (product, index) {
            return _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { onClick: _this.handleBookSelect.bind(_this, index), key: index },
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', source: product.product_images[500] })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 9, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { textColor: 'base', headingLevel: 3, textNormal: true },
                      product.title
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { textSize: 'small', listType: 'nostyle', textColor: 'secondary' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        'By Author'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        'Narrated by Narrator'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        '22h 38m left'
                      )
                    )
                  )
                )
              )
            );
          }),
          _react2['default'].createElement(
            _reactAddonsCssTransitionGroup2['default'],
            { transitionName: 'slideUp', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
            this.state.playerViewActive ? _react2['default'].createElement(_McdonaldsPlayer2['default'], {
              onClickPause: this.pauseAudio.bind(this),
              onClickPlay: this.playAudio.bind(this),
              isPlaying: this.state.isPlaying,
              activeBook: this.state.activeBook,
              onClickClose: this.handlePlayerClose.bind(this) }) : null
          ),
          this.state.activeBook != null && this.state.playerViewActive === false ? _react2['default'].createElement(_RibbonPlayer2['default'], {
            onClickPause: this.pauseAudio.bind(this),
            onClickPlay: this.playAudio.bind(this),
            isPlaying: this.state.isPlaying,
            activeBook: this.state.activeBook,
            onClickAsin: this.handlePlayerOpen.bind(this) }) : null
        ),
        this.state.activeBook ? _react2['default'].createElement(_AudioInterface2['default'], {
          isPlaying: this.state.isPlaying,
          source: this.state.activeBook ? _dataPrototypesMcdonaldsLibraryJson2['default'][this.state.activeBook].sample_url : null }) : null
      );
    }
  }]);

  return McdonaldsLibraryLayout;
})(_react2['default'].Component);

exports['default'] = McdonaldsLibraryLayout;
module.exports = exports['default'];
/* Channels/AudioBooks Tabs
<BC.GridRow textAlign="center">
 <div style={{
   display: 'inline-block',
   width: '50%'
 }}>
   <BC.Link textColor="base" app={true} url={'/prototypes/mcdonalds-library'}>
     <BC.Box backgroundColor="secondary" paddingSize="small">
       AudioBooks
     </BC.Box>
     <BC.Box paddingSize="none" backgroundColor="active" heightCss="2px"></BC.Box>
   </BC.Link>          
 </div>
 <div style={{
   display: 'inline-block',
   width: '50%'
 }}>
   <BC.Link textColor="base" app={true} url={'/prototypes/mcdonalds-library/channels'}>
     <BC.Box backgroundColor="secondary" paddingSize="small">
       Channels
     </BC.Box>
     <BC.Box paddingSize="none" backgroundColor="secondary" heightCss="2px"></BC.Box>
   </BC.Link>          
 </div>
</BC.GridRow> 
*/