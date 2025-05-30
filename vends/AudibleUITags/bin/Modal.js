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

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var Modal = (function (_React$Component) {
	_inherits(Modal, _React$Component);

	function Modal(props) {
		_classCallCheck(this, Modal);

		_get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Modal, [{
		key: 'preventClose',
		value: function preventClose(e) {
			e.stopPropagation();
		}
	}, {
		key: 'renderModal',
		value: function renderModal() {
			var staticClasses = ['bc-modal'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}

			return _react2['default'].createElement(
				'span',
				{ onClick: this.props.onClick },
				_react2['default'].createElement('div', { className: 'bc-modal-backdrop' }),
				_react2['default'].createElement(
					'div',
					{
						id: this.props.id,
						className: (0, _classnames2['default'])(staticClasses) },
					_react2['default'].createElement(
						'div',
						{ className: (0, _classnames2['default'])(["bc-modal-container"]), onClick: this.preventClose.bind(this) },
						_react2['default'].createElement(
							_Box2['default'],
							{ paddingSize: 'small', textAlign: 'left', backgroundColor: 'secondary' },
							_react2['default'].createElement(
								_GridRow2['default'],
								null,
								_react2['default'].createElement(
									_GridColumn2['default'],
									{ gridUnits: 11 },
									_react2['default'].createElement(
										_Heading2['default'],
										{ headingLevel: 3 },
										this.props.title
									)
								),
								_react2['default'].createElement(
									_GridColumn2['default'],
									{ textAlign: 'right', gridUnits: 1, position: 'last' },
									_react2['default'].createElement(
										_Link2['default'],
										{ textColor: 'base', onClick: this.props.onClick },
										_react2['default'].createElement(_Icon2['default'], { iconType: 'close' })
									)
								)
							)
						),
						_react2['default'].createElement(
							_Box2['default'],
							{ paddingSize: 'small', backgroundColor: 'base' },
							this.props.children
						)
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.active) {
				return null;
			} else {
				return this.renderModal();
			}
		}
	}]);

	return Modal;
})(_react2['default'].Component);

Modal.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	active: _react.PropTypes.bool,
	title: _react.PropTypes.string,
	onClick: _react.PropTypes.func
};

exports['default'] = Modal;
module.exports = exports['default'];