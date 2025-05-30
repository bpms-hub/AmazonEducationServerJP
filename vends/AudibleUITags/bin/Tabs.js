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

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var Tabs = (function (_React$Component) {
	_inherits(Tabs, _React$Component);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		_get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, props);
		this.state = {
			tabActive: this.props.tabActive
		};
	}

	_createClass(Tabs, [{
		key: 'setActiveTab',
		value: function setActiveTab(index, e) {
			this.setState({
				tabActive: index
			});

			e.preventDefault();
		}
	}, {
		key: 'getTabs',
		value: function getTabs() {
			var _this = this;

			var tabList = this.props.children.map(function (tab, index) {
				return _react2['default'].createElement(
					_AudibleUITags2['default'].ListItem,
					{ key: index, cssClass: 'bc-tab-heading' },
					_react2['default'].createElement(
						_AudibleUITags2['default'].Link,
						{ textColor: 'base', textBold: _this.state.tabActive === index + 1, onClick: _this.setActiveTab.bind(_this, index + 1) },
						_react2['default'].createElement(
							_AudibleUITags2['default'].Box,
							{ cssClass: 'bc-relative', paddingSize: 'small' },
							tab.props.title,
							_react2['default'].createElement('span', { className: (0, _classnames2['default'])([_this.state.tabActive === index + 1 && 'bc-tab-heading-active', 'bc-color-background-active']) })
						)
					)
				);
			});

			return tabList;
		}
	}, {
		key: 'getPanels',
		value: function getPanels() {
			var _this2 = this;

			var currentTab = this.state.tabActive - 1;

			var panelList = this.props.children.map(function (tab, index) {
				return _react2['default'].createElement(
					'div',
					{ key: index, className: (0, _classnames2['default'])([currentTab === index ? "bc-active" : "bc-hidden", "bc-clearfix"]) },
					_this2.props.children[index]
				);
			});

			return panelList;
		}
	}, {
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-tabs'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}
			if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
			if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

			return _react2['default'].createElement(
				'div',
				{ className: (0, _classnames2['default'])(staticClasses) },
				_react2['default'].createElement(
					_AudibleUITags2['default'].List,
					{ listDirection: 'horizontal', id: this.props.id, cssClass: 'bc-tab-set' },
					this.getTabs()
				),
				_react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
				this.getPanels()
			);
		}
	}]);

	return Tabs;
})(_react2['default'].Component);

Tabs.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	spacing: _react.PropTypes.string,
	spacingTop: _react.PropTypes.string,
	tabActive: _react.PropTypes.number
};

Tabs.defaultProps = {
	tabActive: 1
};

exports['default'] = Tabs;
module.exports = exports['default'];