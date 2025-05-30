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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var Expander = (function (_React$Component) {
  _inherits(Expander, _React$Component);

  function Expander(props) {
    _classCallCheck(this, Expander);

    _get(Object.getPrototypeOf(Expander.prototype), 'constructor', this).call(this, props);
    this.state = {
      isExpanderShown: this.props.active
    };
  }

  _createClass(Expander, [{
    key: 'toggleContent',
    value: function toggleContent() {
      this.setState({
        isExpanderShown: !this.state.isExpanderShown
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
          { 'aria-expanded': 'false', className: 'bc-expander-link', onClick: this.toggleContent.bind(this) },
          this.state.isExpanderShown ? [_react2['default'].createElement(
            _Text2['default'],
            { textColor: 'secondary' },
            this.props.hideText
          ), _react2['default'].createElement(_Icon2['default'], { iconType: 'caret-up' })] : [_react2['default'].createElement(
            _Text2['default'],
            { textColor: 'secondary' },
            this.props.showText
          ), _react2['default'].createElement(_Icon2['default'], { iconType: 'caret-down' })]
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
          { 'aria-expanded': 'false', className: 'bc-expander-link', onClick: this.toggleContent.bind(this) },
          this.state.isExpanderShown ? [_react2['default'].createElement(_Icon2['default'], { iconType: 'caret-down' }), _react2['default'].createElement(
            _Text2['default'],
            { textColor: 'secondary' },
            this.props.hideText
          )] : [_react2['default'].createElement(_Icon2['default'], { iconType: 'caret-right' }), _react2['default'].createElement(
            _Text2['default'],
            { textColor: 'secondary' },
            this.props.showText
          )]
        ),
        this.renderContent()
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2['default'].createElement(
        'div',
        { className: this.state.isExpanderShown ? null : 'bc-expander-inactive' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-expander'];
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

  return Expander;
})(_react2['default'].Component);

Expander.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  showText: _react.PropTypes.string,
  hideText: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  anchor: _react.PropTypes.bool
};

Expander.defaultProps = {
  hideText: 'hide',
  showText: 'more'
};

exports['default'] = Expander;
module.exports = exports['default'];