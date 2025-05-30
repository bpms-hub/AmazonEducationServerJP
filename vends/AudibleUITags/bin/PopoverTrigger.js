'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// eslint-disable-line no-unused-vars

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Flyout = require('./Flyout');

var _Flyout2 = _interopRequireDefault(_Flyout);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var PopoverTrigger = (function (_React$Component) {
  _inherits(PopoverTrigger, _React$Component);

  function PopoverTrigger(props) {
    _classCallCheck(this, PopoverTrigger);

    _get(Object.getPrototypeOf(PopoverTrigger.prototype), 'constructor', this).call(this, props);
    this.state = {
      isFlyoutShown: true,
      tooltipOffsetX: null,
      tooltipOffsetY: null,
      flyoutOffsetX: null,
      flyoutOffsetY: null
    };
  }

  _createClass(PopoverTrigger, [{
    key: 'showFlyout',
    value: function showFlyout() {
      this.setState({
        isFlyoutShown: true
      });
    }
  }, {
    key: 'hideFlyout',
    value: function hideFlyout() {
      this.setState({
        isFlyoutShown: false
      });
    }
  }, {
    key: 'centerOffsets',
    value: function centerOffsets() {
      var triggerWidth = _react2['default'].findDOMNode(this).clientWidth;
      var popoverWidth = _react2['default'].findDOMNode(this.refs['flyout']).clientWidth;
      var popoverLocation = _react2['default'].findDOMNode(this).offsetLeft;
      var documentWidth = document.body.clientWidth;
      this.setState({ 'flyoutOffsetX': -1 * popoverLocation + (documentWidth - popoverWidth) / 2, 'flyoutTriggerOfSetX': popoverLocation });
    }
  }, {
    key: 'getOffsets',
    value: function getOffsets(target, offsetYState, offsetXState) {
      var triggerWidth = _react2['default'].findDOMNode(this).clientWidth;
      var triggerHeight = _react2['default'].findDOMNode(this).clientHeight;
      var popoverWidth = _react2['default'].findDOMNode(this.refs[target]).clientWidth;
      var popoverHeight = _react2['default'].findDOMNode(this.refs[target]).clientHeight;
      var offsetX = undefined;
      var offsetY = undefined;
      var popoverSide = this.refs[target].props.side;

      if (popoverSide === "left" || popoverSide === "right") {
        offsetY = (triggerHeight - popoverHeight) / 2;
        popoverSide === "right" ? offsetX = triggerWidth : offsetX = "-" + popoverWidth;
      } else {
        offsetX = (triggerWidth - popoverWidth) / 2;
        popoverSide === "bottom" ? offsetY = triggerHeight : offsetY = "-" + popoverHeight;
      }

      var stateObject = {};
      stateObject[offsetYState] = offsetY + "px";
      stateObject[offsetXState] = offsetX + "px";
      this.setState(stateObject);
    }
  }, {
    key: 'renderFlyout',
    value: function renderFlyout() {
      return _react2['default'].createElement(
        _Flyout2['default'],
        {
          ref: 'flyout',
          side: this.props.flyoutSide,
          width: this.props.flyoutWidth,
          active: this.state.isFlyoutShown,
          offsetY: this.state.flyoutOffsetY,
          cssClass: this.props.cssClass,
          offsetX: this.state.flyoutOffsetX },
        this.props.flyout
      );
    }
  }, {
    key: 'renderTooltip',
    value: function renderTooltip() {
      return _react2['default'].createElement(
        _Tooltip2['default'],
        {
          ref: 'tooltip',
          side: this.props.tooltipSide,
          active: this.state.isFlyoutShown,
          offsetY: this.state.tooltipOffsetY,
          offsetX: this.state.tooltipOffsetX },
        this.props.tooltip
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.tooltip ? this.getOffsets('tooltip', 'tooltipOffsetY', 'tooltipOffsetX') : null;
      this.props.flyout ? this.getOffsets('flyout', 'flyoutOffsetY', 'flyoutOffsetX') : null;
      this.props.center ? this.centerOffsets() : null;

      this.setState({
        isFlyoutShown: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        {
          className: 'bc-popover-trigger',
          onMouseEnter: this.showFlyout.bind(this),
          onMouseLeave: this.hideFlyout.bind(this) },
        _react2['default'].createElement(
          'span',
          { ref: 'trigger' },
          this.props.children
        ),
        this.props.flyout ? this.renderFlyout() : null,
        this.props.tooltip ? this.renderTooltip() : null
      );
    }
  }]);

  return PopoverTrigger;
})(_react2['default'].Component);

PopoverTrigger.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  tooltip: _react.PropTypes.string,
  tooltipSide: _react.PropTypes.string,
  flyout: _react.PropTypes.node,
  flyoutWidth: _react.PropTypes.string,
  flyoutSide: _react.PropTypes.string,
  center: _react.PropTypes.boolean
};

PopoverTrigger.defaultProps = {};

exports['default'] = PopoverTrigger;
module.exports = exports['default'];