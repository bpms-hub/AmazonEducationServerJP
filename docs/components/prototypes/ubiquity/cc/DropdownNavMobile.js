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

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var DropdownNavMobile = (function (_React$Component) {
  _inherits(DropdownNavMobile, _React$Component);

  function DropdownNavMobile(props) {
    _classCallCheck(this, DropdownNavMobile);

    _get(Object.getPrototypeOf(DropdownNavMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      isNavShown: this.props.active
    };
  }

  _createClass(DropdownNavMobile, [{
    key: 'toggleContent',
    value: function toggleContent() {
      this.setState({
        isNavShown: !this.state.isNavShown
      });
    }
  }, {
    key: 'renderRegular',
    value: function renderRegular() {
      return _react2['default'].createElement(
        'span',
        null,
        this.renderContent(),
        _react2['default'].createElement(
          'a',
          { 'aria-expanded': 'false', className: 'bc-drodown-nav', onClick: this.toggleContent.bind(this) },
          this.state.isNavShown ? [_react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.hideNavs
          ), _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-down' })] : [_react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.showNavs
          ), _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-up' })]
        )
      );
    }
  }, {
    key: 'renderAnchor',
    value: function renderAnchor() {
      return _react2['default'].createElement(
        'span',
        null,
        _react2['default'].createElement(
          'a',
          { 'aria-expanded': 'false', className: 'bc-dropdown-nav', onClick: this.toggleContent.bind(this) },
          this.state.isNavShown ? [_react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.hideNavs
          ), _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-up' })] : [_react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.showNavs
          ), _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-down' })]
        ),
        this.renderContent()
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2['default'].createElement(
        'div',
        { className: this.state.isNavShown ? null : 'bc-dropdown-nav-inactive' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-dropdown-nav'];
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }

      return _react2['default'].createElement(
        'div',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
        !this.props.anchor ? this.renderRegular() : this.renderAnchor()
      );
    }
  }]);

  return DropdownNavMobile;
})(_react2['default'].Component);

DropdownNavMobile.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  showNavs: _react.PropTypes.string,
  hideNavs: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  anchor: _react.PropTypes.bool
};

exports['default'] = DropdownNavMobile;
module.exports = exports['default'];