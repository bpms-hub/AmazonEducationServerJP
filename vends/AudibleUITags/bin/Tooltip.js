'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var Tooltip = (function (_React$Component) {
	_inherits(Tooltip, _React$Component);

	function Tooltip(props) {
		_classCallCheck(this, Tooltip);

		_get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Tooltip, [{
		key: 'renderTooltip',
		value: function renderTooltip() {
			var staticClasses = ['bc-tooltip'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.side) {
				staticClasses.push('bc-tooltip-' + this.props.side);
			}

			var side = this.props.side;
			var inlineStyles = {
				left: this.props.offsetX,
				top: this.props.offsetY
			};

			return _react2['default'].createElement(
				'div',
				_extends({}, this.props, {
					id: this.props.id,
					className: (0, _classnames2['default'])(staticClasses),
					style: inlineStyles }),
				_react2['default'].createElement(
					'div',
					{ className: (0, _classnames2['default'])(["bc-tooltip-inner", "bc-color-background-inverse"]) },
					_react2['default'].createElement(
						_Text2['default'],
						{ textColor: 'inverse' },
						this.props.children
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.active) {
				return null;
			} else {
				return this.renderTooltip();
			}
		}
	}]);

	return Tooltip;
})(_react2['default'].Component);

Tooltip.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	side: _react.PropTypes.string,
	active: _react.PropTypes.bool,
	offsetY: _react.PropTypes.string,
	offsetX: _react.PropTypes.string
};

Tooltip.defaultProps = {
	side: "top"
};

exports['default'] = Tooltip;
module.exports = exports['default'];