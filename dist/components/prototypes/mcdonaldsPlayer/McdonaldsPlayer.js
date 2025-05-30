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

var McdonaldsPlayer = (function (_React$Component) {
  _inherits(McdonaldsPlayer, _React$Component);

  function McdonaldsPlayer(props) {
    _classCallCheck(this, McdonaldsPlayer);

    _get(Object.getPrototypeOf(McdonaldsPlayer.prototype), 'constructor', this).call(this, props);
  }

  _createClass(McdonaldsPlayer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        {
          className: 'mcdonalds-player',
          style: {
            backgroundImage: 'url(' + _dataPrototypesMcdonaldsLibraryJson2['default'][this.props.activeBook].product_images[500].replace('.jpg', 'BL60.jpg') + ')',
            backgroundColor: '#2D2D2D',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            bottom: 0,
            left: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1
          } },
        _react2['default'].createElement(
          'div',
          { className: 'bc-theme-dark' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-color-base' },
            _react2['default'].createElement(
              'div',
              { style: {
                  top: 0,
                  bottom: '44%',
                  width: '100%',
                  position: 'absolute',
                  zIndex: 2
                } },
              _react2['default'].createElement(
                'div',
                { className: 'bc-container' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'mini', spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { onClick: this.props.onClickClose, textColor: 'base' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'medium', iconType: 'chevron-down' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textAlign: 'center' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '240px', source: _dataPrototypesMcdonaldsLibraryJson2['default'][this.props.activeBook].product_images[500] })
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { style: {
                  bottom: 0,
                  top: '56%',
                  width: '100%',
                  position: 'absolute',
                  zIndex: 2
                } },
              _react2['default'].createElement(
                'div',
                { className: 'bc-container' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textAlign: 'center', spacingTop: 'large', spacing: 'large' },
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 2 }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, textalign: 'center', spacingTop: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '32px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_bk._V288162041_.svg' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textalign: 'center' },
                    this.props.isPlaying ? _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { onClick: this.props.onClickPause, textColor: 'link' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'pause', iconSize: 'large' })
                    ) : _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { onClick: this.props.onClickPlay },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '64px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play._V288168872_.svg' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, textalign: 'center', spacingTop: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '32px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_fwd._V288163336_.svg' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro', textAlign: 'center' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'base' },
                    _dataPrototypesMcdonaldsLibraryJson2['default'][this.props.activeBook].title
                  )
                )
              )
            )
          ),
          _react2['default'].createElement('div', { style: {
              backgroundColor: 'rgba(0,0,0,0.35)',
              height: '100%',
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: '-1'
            } })
        )
      );
    }
  }]);

  return McdonaldsPlayer;
})(_react2['default'].Component);

McdonaldsPlayer.PropTypes = {
  onClickPause: _react.PropTypes.func,
  onClickPlay: _react.PropTypes.func,
  activeBook: _react.PropTypes.number,
  onClickClose: _react.PropTypes.func
};

exports['default'] = McdonaldsPlayer;
module.exports = exports['default'];
/* Artwork Half */ /*
                   <BC.GridColumn gridUnits={6} textAlign="right" position="last">
                    <BC.Image imageHeight="24px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/overflow._V288120370_.svg" />
                   </BC.GridColumn>
                   */ /*
                      <BC.GridRow spacing="large">
                       <BC.Meter meterHeight={7} />
                      </BC.GridRow>
                      */ /* Footer Button Controls
                         <BC.GridRow cssClass="media-player-footer" spacing="small" textAlign="center" >
                          <BC.GridColumn gridUnits={3}>
                            <BC.Image imageHeight="24px" source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play-speed._V288162803_.svg" />
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={3}>
                            <BC.Image imageHeight="24px" source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/timer._V288120370_.svg" />
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={3}>
                            <BC.Image imageHeight="24px" source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/bookmark._V288120370_.svg" />
                          </BC.GridColumn>
                          <BC.GridColumn gridUnits={3} position="last">
                            <BC.Image imageHeight="24px" source="        http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/volume._V288120370_.svg" />
                          </BC.GridColumn>
                         </BC.GridRow>
                         */