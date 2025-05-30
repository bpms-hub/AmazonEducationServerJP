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

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _dataPrototypesOrdersJson = require('../../../../data/prototypes/orders.json');

var _dataPrototypesOrdersJson2 = _interopRequireDefault(_dataPrototypesOrdersJson);

var PurchaseHistoryMobile = (function (_React$Component) {
		_inherits(PurchaseHistoryMobile, _React$Component);

		function PurchaseHistoryMobile(props) {
				_classCallCheck(this, PurchaseHistoryMobile);

				_get(Object.getPrototypeOf(PurchaseHistoryMobile.prototype), 'constructor', this).call(this, props);
				this.state = {
						showFilters: false,
						currentFilter: 'orders',
						currentSort: null
				};
		}

		_createClass(PurchaseHistoryMobile, [{
				key: 'componentWillMount',
				value: function componentWillMount() {
						if (!this.props.location.query.orderType) {
								this.props.history.push({
										pathname: '/prototypes/brickcity-mobile/account-details/purchase-history',
										search: '?orderType=orders'
								});
						}
				}
		}, {
				key: 'filterOrderType',
				value: function filterOrderType(event) {
						this.props.history.push({
								pathname: '/prototypes/brickcity-mobile/account-details/purchase-history',
								search: '?orderType=' + event.target.value
						});
						this.setState({
								currentFilter: event.target.value
						});
				}
		}, {
				key: 'setSort',
				value: function setSort(event) {
						this.setState({
								currentSort: event.target.value
						});
				}
		}, {
				key: 'showFilters',
				value: function showFilters() {
						this.setState({
								showFilters: true
						});
				}
		}, {
				key: 'hideFilters',
				value: function hideFilters() {
						this.setState({
								showFilters: false
						});
				}
		}, {
				key: 'render',
				value: function render() {
						return _react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement(
										_AudibleUITags2['default'].GridRow,
										{ spacing: 'base' },
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ gridUnits: 4 },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Heading,
														{ headingLevel: 2, spacing: 'micro' },
														'Orders'
												)
										),
										_react2['default'].createElement(
												_AudibleUITags2['default'].GridColumn,
												{ textAlign: 'right', gridUnits: 8, position: 'last' },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Link,
														{ textColor: 'primary', onClick: this.showFilters.bind(this) },
														'Refine'
												)
										)
								),
								_dataPrototypesOrdersJson2['default'][this.props.location.query.orderType ? this.props.location.query.orderType : 'orders'].map(function (order, index) {
										return _react2['default'].createElement(
												'div',
												null,
												_react2['default'].createElement(
														_AudibleUITags2['default'].GridRow,
														{ spacing: 'micro' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].GridColumn,
																{ gridUnits: 3 },
																_react2['default'].createElement(_AudibleUITags2['default'].Image, { source: order.product_image })
														),
														_react2['default'].createElement(
																_AudibleUITags2['default'].GridColumn,
																{ gridUnits: 9, position: 'last' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].List,
																		{ listType: 'nostyle' },
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].ListItem,
																				{ spacing: 'micro' },
																				'Order #: ',
																				_react2['default'].createElement(
																						_AudibleUITags2['default'].Link,
																						{ app: true, url: "/prototypes/brickcity-mobile/account-details/purchase-history/" + order.order_number },
																						order.order_number
																				)
																		),
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].ListItem,
																				{ spacing: 'micro' },
																				'Order Date: ',
																				order.order_date
																		),
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].ListItem,
																				null,
																				'Total: ',
																				order.credits ? order.credits + " Credits" : "$" + (order.price + order.price * 0.07).toFixed(2)
																		)
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].GridRow,
														{ spacing: 'small' },
														_react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 3 }),
														_react2['default'].createElement(
																_AudibleUITags2['default'].GridColumn,
																{ textAlign: 'right', gridUnits: 9, position: 'last' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].Link,
																		null,
																		'Return'
																)
														)
												),
												_react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
										);
								}),
								this.state.showFilters && _react2['default'].createElement(
										'div',
										{ style: {
														backgroundColor: 'rgba(0,0,0,0.8)',
														bottom: 0,
														left: 0,
														right: 0,
														top: 0,
														position: 'fixed',
														zIndex: 9999
												} },
										_react2['default'].createElement(
												'div',
												{ style: {
																bottom: 0,
																height: '426px',
																left: 0,
																right: 0,
																position: 'absolute'
														} },
												_react2['default'].createElement(
														_AudibleUITags2['default'].Box,
														{ backgroundColor: 'base', paddingSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].GridRow,
																null,
																_react2['default'].createElement(
																		_AudibleUITags2['default'].GridColumn,
																		{ gridUnits: 4 },
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].Link,
																				{ textColor: 'primary' },
																				'Clear'
																		)
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].GridColumn,
																		{ gridUnits: 4, textAlign: 'center' },
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].Text,
																				null,
																				'Refine'
																		)
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].GridColumn,
																		{ gridUnits: 4, position: 'last', textAlign: 'right' },
																		_react2['default'].createElement(
																				_AudibleUITags2['default'].Link,
																				{ onClick: this.hideFilters.bind(this), textColor: 'primary' },
																				'Done'
																		)
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Box,
														{ backgroundColor: 'base', paddingSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].Heading,
																{ headingLevel: 3 },
																'Order Types'
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Box,
														{ backgroundColor: 'secondary', paddingSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].List,
																{ listType: 'nostyle' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		{ spacing: 'mini' },
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.filterOrderType.bind(this), checked: this.state.currentFilter === 'orders', value: 'orders', label: 'Orders' })
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		{ spacing: 'mini' },
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.filterOrderType.bind(this), checked: this.state.currentFilter === 'memberships', value: 'memberships', label: 'Memberships' })
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		null,
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.filterOrderType.bind(this), checked: this.state.currentFilter === 'gifts', value: 'gifts', label: 'Gifts' })
																)
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Box,
														{ backgroundColor: 'base', paddingSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].Heading,
																{ headingLevel: 3 },
																'Order Types'
														)
												),
												_react2['default'].createElement(
														_AudibleUITags2['default'].Box,
														{ backgroundColor: 'secondary', paddingSize: 'small' },
														_react2['default'].createElement(
																_AudibleUITags2['default'].List,
																{ listType: 'nostyle' },
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		{ spacing: 'mini' },
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.setSort.bind(this), checked: this.state.currentSort === '1', value: '1', label: 'Last 90 Days' })
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		{ spacing: 'mini' },
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.setSort.bind(this), checked: this.state.currentSort === '2', value: '2', label: 'Last 180 Days' })
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		{ spacing: 'mini' },
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.setSort.bind(this), checked: this.state.currentSort === '3', value: '3', label: '2015' })
																),
																_react2['default'].createElement(
																		_AudibleUITags2['default'].ListItem,
																		null,
																		_react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.setSort.bind(this), checked: this.state.currentSort === '4', value: '4', label: '2014' })
																)
														)
												)
										)
								)
						);
				}
		}]);

		return PurchaseHistoryMobile;
})(_react2['default'].Component);

exports['default'] = PurchaseHistoryMobile;
module.exports = exports['default'];