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

var Accordion = (function (_React$Component) {
	_inherits(Accordion, _React$Component);

	function Accordion(props) {
		_classCallCheck(this, Accordion);

		_get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).call(this, props);
		this.state = {
			activeRows: [0]
		};
	}

	_createClass(Accordion, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.hideAllOnload) {
				this.setState({
					activeRows: []
				});
			};
			if (this.props.showAllOnload) {
				var activeRowList = [];

				for (var i = 0; i < this.props.children.length; i++) {
					activeRowList.push(i);
				};

				this.setState({
					activeRows: activeRowList
				});
			}
		}
	}, {
		key: 'handleClick',
		value: function handleClick(row) {
			if (this.props.isAccordion) {
				this.setState({
					activeRows: [row]
				});
			} else {
				var newActiveRows = this.state.activeRows.slice();

				console.log(newActiveRows, row, newActiveRows.indexOf(row) > -1);

				newActiveRows.indexOf(row) > -1 ? newActiveRows.splice(newActiveRows.indexOf(row), 1) : newActiveRows.push(row);

				console.log(newActiveRows);
				this.setState({
					activeRows: newActiveRows
				});
			}
		}
	}, {
		key: 'renderPanels',
		value: function renderPanels() {
			return _react2['default'].Children.map(this.props.children, (function (child, index) {
				return _react2['default'].cloneElement(child, {
					active: this.state.activeRows.indexOf(index) > -1,
					onSelect: this.handleClick.bind(this, index),
					rowIndex: index,
					titleSize: this.props.titleSize,
					titleBold: this.props.titleBold,
					titleCapitalize: this.props.titleCapitalize,
					key: index,
					accordionRadio: this.props.accordionRadio
				});
			}).bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-accordion'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.accordionRadio) {
				staticClasses.push('bc-accordion-radio', 'bc-color-border-base');
			}
			if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
			if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

			return _react2['default'].createElement(
				'div',
				{ className: (0, _classnames2['default'])(staticClasses) },
				this.renderPanels()
			);
		}
	}]);

	return Accordion;
})(_react2['default'].Component);

Accordion.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	spacing: _react.PropTypes.string,
	spacingTop: _react.PropTypes.string,
	collapseable: _react.PropTypes.bool,
	activeRow: _react.PropTypes.number,
	titleSize: _react.PropTypes.string,
	titleBold: _react.PropTypes.string,
	titleCapitalize: _react.PropTypes.string,
	accordionRadio: _react.PropTypes.bool,
	showAllOnload: _react.PropTypes.bool,
	hideAllOnload: _react.PropTypes.bool
};

Accordion.defaultProps = {
	titleBold: false,
	titleSize: "medium",
	titleCapitalize: false
};
exports['default'] = Accordion;
module.exports = exports['default'];