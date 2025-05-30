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

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var AccordionRow = (function (_React$Component) {
	_inherits(AccordionRow, _React$Component);

	function AccordionRow(props) {
		_classCallCheck(this, AccordionRow);

		_get(Object.getPrototypeOf(AccordionRow.prototype), 'constructor', this).call(this, props);
	}

	_createClass(AccordionRow, [{
		key: 'handleClick',
		value: function handleClick() {
			this.props.onSelect(this);
		}
	}, {
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-accordion-row'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}

			if (this.props.accordionRadio) {
				return _react2['default'].createElement(
					'div',
					{ id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
					_react2['default'].createElement(
						_Box2['default'],
						{ paddingSize: 'mini', backgroundColor: !this.props.active ? "secondary" : "base", cssClass: 'bc-accordion-header', onClick: this.handleClick.bind(this) },
						_react2['default'].createElement(_RadioButton2['default'], { checked: this.props.active }),
						_react2['default'].createElement(_LetterSpace2['default'], null),
						_react2['default'].createElement(
							_Text2['default'],
							{ textSize: 'base', textColor: 'base', textBold: this.props.titleBold },
							this.props.title
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: (0, _classnames2['default'])(['bc-accordion-inner', this.props.active ? 'bc-active' : 'bc-hidden']) },
						_react2['default'].createElement(
							_Box2['default'],
							{ paddingSize: 'mini', backgroundColor: !this.props.active ? "secondary" : "base" },
							this.props.children
						)
					),
					_react2['default'].createElement(_Divider2['default'], { dividerType: 'regular' })
				);
			} else {
				return _react2['default'].createElement(
					'div',
					{ id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
					_react2['default'].createElement(
						_Link2['default'],
						{ cssClass: 'bc-accordion-header bc-pub-clearfix', textColor: 'base', onClick: this.handleClick.bind(this) },
						_react2['default'].createElement(
							_GridRow2['default'],
							{ spacing: 'mini', spacingTop: 'mini' },
							_react2['default'].createElement(
								_Text2['default'],
								{ textSize: this.props.titleSize, textBold: this.props.titleBold, textCapitalize: this.props.titleCapitalize },
								this.props.title
							),
							_react2['default'].createElement(_Icon2['default'], { iconType: this.props.active ? 'chevron-up' : 'chevron-down' })
						)
					),
					this.props.active && _react2['default'].createElement(
						'div',
						{ className: 'bc-accordion-inner' },
						_react2['default'].createElement(
							_GridRow2['default'],
							{ spacing: 'base' },
							this.props.children
						)
					),
					_react2['default'].createElement(_Divider2['default'], null)
				);
			}
		}
	}]);

	return AccordionRow;
})(_react2['default'].Component);

AccordionRow.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	title: _react.PropTypes.string,
	titleBold: _react.PropTypes.bool,
	titleCapitalize: _react.PropTypes.bool,
	titleSize: _react.PropTypes.string,
	active: _react.PropTypes.bool,
	rowIndex: _react.PropTypes.string,
	accordionRadio: _react.PropTypes.bool,
	onSelect: _react.PropTypes.func
};

exports['default'] = AccordionRow;
module.exports = exports['default'];