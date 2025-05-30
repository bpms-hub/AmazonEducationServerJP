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

var _FixedGridRow = require('./FixedGridRow');

var _FixedGridRow2 = _interopRequireDefault(_FixedGridRow);

var _FixedGridColumn = require('./FixedGridColumn');

var _FixedGridColumn2 = _interopRequireDefault(_FixedGridColumn);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var Alert = (function (_React$Component) {
	_inherits(Alert, _React$Component);

	function Alert(props) {
		_classCallCheck(this, Alert);

		_get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, props);
		this.state = { alertActive: true };
	}

	_createClass(Alert, [{
		key: 'closeAlert',
		value: function closeAlert(e) {
			e.preventDefault();

			this.setState({
				alertActive: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-alert', 'bc-alert-normal'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.alertType) {
				staticClasses.push('bc-alert-' + this.props.alertType);
			}

			var alertTypeIcon = undefined;

			if (this.props.alertType === "info") alertTypeIcon = 'info-circle';else if (this.props.alertType === "success") alertTypeIcon = 'check';else alertTypeIcon = 'exclamation-triangle';

			return _react2['default'].createElement(
				'div',
				null,
				this.state.alertActive && _react2['default'].createElement(
					'div',
					{
						id: this.props.id,
						className: (0, _classnames2['default'])(staticClasses),
						role: 'alert' },
					_react2['default'].createElement(
						_Container2['default'],
						null,
						_react2['default'].createElement(
							'span',
							{ className: 'alert-content' },
							this.props.children
						),
						this.props.closeable && _react2['default'].createElement(
							'a',
							{ title: 'Close alert', href: '#', className: 'alert-close', onClick: this.closeAlert.bind(this) },
							_react2['default'].createElement(_Icon2['default'], { iconType: 'close' })
						)
					)
				)
			);
		}
	}]);

	return Alert;
})(_react2['default'].Component);

Alert.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	alertType: _react.PropTypes.string,
	closeable: _react.PropTypes.bool,
	alertActive: _react.PropTypes.bool
};

Alert.defaultProps = {
	alertType: 'error'
};

exports['default'] = Alert;
module.exports = exports['default'];