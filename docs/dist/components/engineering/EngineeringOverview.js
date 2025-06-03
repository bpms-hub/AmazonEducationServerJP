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

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var EngineeringOverview = (function (_React$Component) {
		_inherits(EngineeringOverview, _React$Component);

		function EngineeringOverview() {
				_classCallCheck(this, EngineeringOverview);

				_get(Object.getPrototypeOf(EngineeringOverview.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(EngineeringOverview, [{
				key: 'render',
				value: function render() {
						return _react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement(
										_AudibleUITags2['default'].Heading,
										{ spacing: 'base' },
										'Elements'
								),
								_react2['default'].createElement(
										_AudibleUITags2['default'].GridRow,
										null,
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ gridUnits: 3 },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Buttons'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Button" },
																		'Button'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Forms'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Checkbox" },
																		'Checkbox'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Dropdown" },
																		'Dropdown'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/DropdownOption" },
																		'Dropdown Option'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/RadioButton" },
																		'Radio Button'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/TextArea" },
																		'Text Area'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/TextInput" },
																		'Text Input'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/ToggleSwitch" },
																		'Toggle Switch'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Icons'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Icon" },
																		'Icon'
																)
														)
												)
										),
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ gridUnits: 3 },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Images'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Image" },
																		'Image'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Inline Alerts'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/InlineAlert" },
																		'Inline Alert'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Layout'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Box" },
																		'Box'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Divider" },
																		'Divider'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/FixedGridRow" },
																		'Fixed Grid Row'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/GrixedGridColumn" },
																		'Fixed Grid Column'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/GridRow" },
																		'Grid Row'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/GridColumn" },
																		'Grid Column'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Pipe" },
																		'Pipe'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Section" },
																		'Section'
																)
														)
												)
										),
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ gridUnits: 3 },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Lists'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/List" },
																		'List'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/ListItem" },
																		'ListItem'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Links'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Link" },
																		'Link'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Meters'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Meter" },
																		'Meter'
																)
														)
												)
										),
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ gridUnits: 3, position: 'last' },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Tables'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Table" },
																		'Table'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/TableColumn" },
																		'Table Column'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/TableColumnHeading" },
																		'Table Column Heading'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/TableRow" },
																		'Table Row'
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ spacing: 'micro', headingLevel: '3' },
														'Typography'
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].List,
														{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Heading" },
																		'Heading'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/LetterSpace" },
																		'Letterspace'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																{ spacing: 'micro' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Paragraph" },
																		'Paragraph'
																)
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].ListItem,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		{ app: true, textColor: 'base', url: "/engineering/elements/Text" },
																		'Text'
																)
														)
												)
										)
								)
						);
				}
		}]);

		return EngineeringOverview;
})(_react2['default'].Component);

EngineeringOverview.PropTypes = {};

exports['default'] = EngineeringOverview;
module.exports = exports['default'];