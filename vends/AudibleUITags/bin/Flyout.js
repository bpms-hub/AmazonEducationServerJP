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

var Flyout = (function (_React$Component) {
	_inherits(Flyout, _React$Component);

	function Flyout(props) {
		_classCallCheck(this, Flyout);

		_get(Object.getPrototypeOf(Flyout.prototype), 'constructor', this).call(this, props);
		this.state = {
			height: null
		};
	}

	_createClass(Flyout, [{
		key: 'calculateHeight',
		value: function calculateHeight() {
			if (!this.state.height) {
				var flyoutHeight = this.props.active ? _react2['default'].findDOMNode(this).scrollHeight : null;

				this.setState({
					height: flyoutHeight
				});
			} else {
				return;
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.calculateHeight();
		}
	}, {
		key: 'renderFlyout',
		value: function renderFlyout() {
			var staticClasses = ['bc-flyout'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.side) {
				staticClasses.push('bc-flyout-' + this.props.side);
			}

			var side = this.props.side;
			var width = this.props.width;

			var inlineStyles = {
				left: this.props.offsetX,
				top: this.props.offsetY,
				height: this.state.height,
				width: this.props.width
			};

			return _react2['default'].createElement(
				'div',
				{
					id: this.props.id,
					className: (0, _classnames2['default'])(staticClasses),
					style: inlineStyles },
				_react2['default'].createElement(
					'div',
					{ className: 'bc-flyout-inner' },
					this.props.children
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.active) {
				return null;
			} else {
				return this.renderFlyout();
			}
		}
	}]);

	return Flyout;
})(_react2['default'].Component);

Flyout.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	height: _react.PropTypes.number,
	width: _react.PropTypes.number,
	side: _react.PropTypes.string,
	active: _react.PropTypes.bool,
	offsetY: _react.PropTypes.string,
	offsetX: _react.PropTypes.string
};

Flyout.defaultProps = {
	side: "bottom"
};

exports['default'] = Flyout;
module.exports = exports['default'];