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

var AESidebar = (function (_React$Component) {
	_inherits(AESidebar, _React$Component);

	function AESidebar() {
		_classCallCheck(this, AESidebar);

		_get(Object.getPrototypeOf(AESidebar.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(AESidebar, [{
		key: 'render',
		value: function render() {

			return _react2['default'].createElement(
				_AudibleUITags2['default'].Box,
				{ background: '#f9f8f6', hasBorder: false, paddingSize: 'base' },
				_react2['default'].createElement(
					_AudibleUITags2['default'].GridRow,
					null,
					_react2['default'].createElement(
						_AudibleUITags2['default'].GridColumn,
						{ gridUnits: 12, gridPush: 2 },
						_react2['default'].createElement(
							_AudibleUITags2['default'].List,
							{ spacing: 'small', listType: 'nostyle', textSize: 'small' },
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'base' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].Heading,
									{ headingLevel: 3 },
									'Project Waffle'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].Heading,
									{ headingLevel: 3 },
									'Elements'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Buttons'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Back Arrow'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Tabs'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Tabs'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Inputs'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Menus'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Lists'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Snackbars & Toasts'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Cards'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Sliders'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Progression'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Text Fields'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Selection Controls'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'ASIN covers'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'base' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Information Tiles'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].Heading,
									{ headingLevel: 3 },
									'Components'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'3-up grid'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Chapters'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Bottom Sheet'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Dialogue'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Navigation'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Swipe to Delete'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Refine & Sort'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Search'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Settings'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Coach marks'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Progression circle'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Tour Screen'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Toolbar'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Empty / Zero States'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Errors'
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].ListItem,
								{ spacing: 'mini' },
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ textColor: 'base' },
									'Notifications'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return AESidebar;
})(_react2['default'].Component);

exports['default'] = AESidebar;
module.exports = exports['default'];