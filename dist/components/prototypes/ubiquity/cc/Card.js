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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var Card = (function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		_get(Object.getPrototypeOf(Card.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-box'];

			if (this.props.cssClass) staticClasses.push(this.props.cssClass);
			if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
			if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
			if (this.props.paddingSize) staticClasses.push('bc-box-padding-' + this.props.paddingSize);
			if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
			if (this.props.headerColor) staticClasses.push('bc-color-background-' + this.props.headerColor);
			if (this.props.hasBorder) staticClasses.push('bc-box-border');

			// if(this.props.boxColor) staticClasses.push('bc-box-colors-') + this.props.boxColor);

			var inlineStyles = {
				height: this.props.heightCss,
				background: this.props.background ? this.props.background : null

			};
			return _react2['default'].createElement(
				'div',
				{ className: (0, _classnames2['default'])(staticClasses), id: this.props.id, style: inlineStyles },
				_react2['default'].createElement(
					_AudibleUITags2['default'].GridRow,
					{ textAlign: 'center' },
					_react2['default'].createElement(
						_AudibleUITags2['default'].Box,
						{ background: this.props.headerColor, paddingSize: 'none', hasBorder: false },
						_react2['default'].createElement(
							_AudibleUITags2['default'].Heading,
							{ headingLevel: 3, textColor: 'inverse' },
							this.props.headerName
						)
					),
					_react2['default'].createElement(
						_AudibleUITags2['default'].Box,
						{ background: this.props.backgroundColor, hasBorder: false, paddingSize: 'base', spacing: 'none' },
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridRow,
							{ spacing: 'micro' },
							_react2['default'].createElement(
								_AudibleUITags2['default'].Text,
								{ spacing: 'small', textSize: 'large', textColor: 'inverse', textBold: true },
								this.props.cardName
							)
						)
					),
					_react2['default'].createElement(
						_AudibleUITags2['default'].Box,
						{ paddingSize: 'small', background: '#F9F9F9', hasBorder: false },
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridRow,
							{ spacing: 'none', spacingTop: 'none', textAlign: 'center' },
							_react2['default'].createElement(
								_AudibleUITags2['default'].Text,
								{ textBold: true, textSize: 'base', textColor: 'base' },
								this.props.primaryPrice
							),
							_react2['default'].createElement('br', null),
							_react2['default'].createElement(
								_AudibleUITags2['default'].Text,
								{ textBold: false, textSize: 'small', textColor: 'secondary' },
								this.props.secondaryPrice
							),
							this.props.children
						)
					)
				)
			);
		}
	}]);

	return Card;
})(_react2['default'].Component);

Card.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	spacing: _react.PropTypes.string,
	spacingTop: _react.PropTypes.string,
	paddingSize: _react.PropTypes.string,
	heightCss: _react.PropTypes.string,

	background: _react.PropTypes.string,
	hasBorder: _react.PropTypes.bool,

	headerName: _react.PropTypes.string.isRequired,
	backgroundColor: _react.PropTypes.string.isRequired,
	headerColor: _react.PropTypes.string,
	primaryPrice: _react.PropTypes.string,
	secondaryPrice: _react.PropTypes.string,
	logoType: _react.PropTypes.string,
	cardName: _react.PropTypes.string
};

Card.defaultProps = {
	paddingSize: "none",
	hasBorder: true,
	backgroundColor: "#197397"
};

// #1999cb
exports['default'] = Card;
module.exports = exports['default'];
/*<BC.Image imageHeight="48px" source={this.props.logoType}/>*/