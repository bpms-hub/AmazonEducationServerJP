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

var AESidebar = (function (_React$Component) {
	_inherits(AESidebar, _React$Component);

	function AESidebar(props) {
		_classCallCheck(this, AESidebar);

		_get(Object.getPrototypeOf(AESidebar.prototype), 'constructor', this).call(this, props);
		this.state = {
			activeElement: "step1"
		};
	}

	_createClass(AESidebar, [{
		key: 'handleClick',
		value: function handleClick(element) {
			this.setState({
				activeElement: element
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: '' },
				_react2['default'].createElement(
					_AudibleUITags2['default'].Box,
					{ background: '#F9F9F9', cssClass: 'fixed-sidebar', hasBorder: true, paddingSize: 'large' },
					_react2['default'].createElement(
						_AudibleUITags2['default'].GridRow,
						null,
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridColumn,
							{ gridUnits: 12 },
							_react2['default'].createElement(
								_AudibleUITags2['default'].List,
								{ spacing: 'none', listType: 'nostyle', textSize: 'base' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(
										'div',
										{ onClick: this.handleClick.bind(this, "step1") },
										'    ',
										_react2['default'].createElement(
											_AudibleUITags2['default'].Link,
											{ textColor: 'base', textBold: true, textSize: 'base', linkType: 'nav', url: "/education/waffle/updates" },
											'Updates'
										),
										' '
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ textColor: 'base', textBold: true, linkType: 'nav', textSize: 'base', url: "/education/waffle/principles" },
										'Principles'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'small' },
									_react2['default'].createElement(
										_AudibleUITags2['default'].Text,
										{ textColor: 'base', textBold: true, textSize: 'base', linkType: 'nav', disabled: true },
										'Components'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/back-arrow" },
										'Back Arrow'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/bottom-sheet" },
										'Bottom Sheet'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ textColor: 'base', textSize: 'base', linkType: 'nav', url: "/education/waffle/buttons" },
										'Buttons'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/cards" },
										'Cards'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/checkbox" },
										'Check Boxes'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/dialogues" },
										'Dialogues'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/lists" },
										'Lists'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/menus" },
										'Menus'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', url: "/education/waffle/dots", textSize: 'base' },
										'Progression Dots'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ textColor: 'base', linkType: 'nav', textSize: 'base', url: "/education/waffle/radio-buttons" },
										'Radio Buttons'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/range-sliders" },
										'Range Sliders'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/scrubbers" },
										'Scrubbers'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/snackbars" },
										'Snackbars'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/tabs" },
										'Tabs'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/tiles" },
										'Tiles'
									)
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ spacing: 'mini' },
									_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
									_react2['default'].createElement(
										_AudibleUITags2['default'].Link,
										{ linkType: 'nav', textColor: 'base', textSize: 'base', url: "/education/waffle/toggle" },
										'Toggle'
									)
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