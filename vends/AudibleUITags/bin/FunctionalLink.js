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

var _reactRouter = require('react-router');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var FunctionalLink = (function (_React$Component) {
	_inherits(FunctionalLink, _React$Component);

	function FunctionalLink(props) {
		_classCallCheck(this, FunctionalLink);

		_get(Object.getPrototypeOf(FunctionalLink.prototype), 'constructor', this).call(this, props);
	}

	_createClass(FunctionalLink, [{
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-link'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.textSize) {
				staticClasses.push('bc-size-' + this.props.textSize);
			}
			if (this.props.textColor) {
				staticClasses.push('bc-color-' + this.props.textColor);
			}
			if (this.props.textBold) {
				staticClasses.push('bc-text-bold');
			}
			if (this.props.textCapitalize) {
				staticClasses.push('bc-text-capitalize');
			}
			if (this.props.textEmphasis) {
				staticClasses.push('bc-text-emphasis');
			}
			if (this.props.textQuote) {
				staticClasses.push('bc-text-quote');
			}
			if (this.props.textStrike) {
				staticClasses.push('bc-text-strike');
			}
			if (this.props.textNormal) {
				staticClasses.push('bc-text-normal');
			}
			if (this.props.linkType) {
				staticClasses.push('bc-link-' + this.props.linkType);
			}

			if (this.props.app) {
				return _react2['default'].createElement(
					_reactRouter.Link,
					_extends({}, this.props, { id: this.props.id, className: (0, _classnames2['default'])(staticClasses), to: this.props.url, params: this.props.params, query: this.props.query, title: this.props.title, rel: this.props.rel }),
					_react2['default'].createElement(_Icon2['default'], { iconType: this.props.iconType }),
					'  ',
					this.props.children
				);
			} else {
				return _react2['default'].createElement(
					'a',
					_extends({}, this.props, { id: this.props.id, className: (0, _classnames2['default'])(staticClasses), href: this.props.url, title: this.props.title, target: this.props.target, rel: this.props.rel }),
					_react2['default'].createElement(_Icon2['default'], { iconType: this.props.iconType }),
					' ',
					this.props.children
				);
			}
		}
	}]);

	return FunctionalLink;
})(_react2['default'].Component);

FunctionalLink.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	textSize: _react.PropTypes.string,
	textColor: _react.PropTypes.string,
	textBold: _react.PropTypes.bool,
	textCapitalize: _react.PropTypes.bool,
	textEmphasis: _react.PropTypes.bool,
	textQuote: _react.PropTypes.bool,
	textStrike: _react.PropTypes.bool,
	textNormal: _react.PropTypes.bool,
	url: _react.PropTypes.string,
	title: _react.PropTypes.string,
	target: _react.PropTypes.string,
	rel: _react.PropTypes.string,
	linkType: _react.PropTypes.string,
	iconType: _react.PropTypes.string
};

exports['default'] = FunctionalLink;
module.exports = exports['default'];