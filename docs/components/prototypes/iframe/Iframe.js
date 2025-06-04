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

var _RangeSlider = require('./RangeSlider');

var _RangeSlider2 = _interopRequireDefault(_RangeSlider);

var Iframe = (function (_React$Component) {
	_inherits(Iframe, _React$Component);

	function Iframe(props) {
		_classCallCheck(this, Iframe);

		_get(Object.getPrototypeOf(Iframe.prototype), 'constructor', this).call(this, props);
		this.state = {
			isPlaying: false,
			currentTime: 0,
			trackDuration: 0,
			isHoveringAsin: false
		};
	}

	_createClass(Iframe, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var player = this.refs.player;

			player.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
		}
	}, {
		key: 'componentWillUnMount',
		value: function componentWillUnMount() {
			var player = this.refs.player;

			player.removeEventListener('timeupdate', this.handleTimeUpdate);
		}
	}, {
		key: 'handleTimeUpdate',
		value: function handleTimeUpdate() {
			var player = this.refs.player,
			    currentTime = player.currentTime,
			    trackDuration = player.duration;

			this.setState({
				currentTime: currentTime,
				trackDuration: trackDuration
			});
		}
	}, {
		key: 'onAsinHover',
		value: function onAsinHover() {
			this.setState({
				isHoveringAsin: !this.state.isHoveringAsin
			});
		}
	}, {
		key: 'rangeTest',
		value: function rangeTest(event) {
			console.log(event.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				'div',
				{ style: {
						width: '100%'
					} },
				this.props.hasAsin && _react2['default'].createElement(
					'div',
					{
						onMouseOver: this.onAsinHover.bind(this),
						onMouseOut: this.onAsinHover.bind(this),
						className: 'bc-theme-dark',
						style: {
							overflow: 'hidden',
							position: 'relative'
						} },
					_react2['default'].createElement(
						'div',
						{ style: {
								transition: 'opacity .5s ease-in-out',
								opacity: this.state.isHoveringAsin ? 0 : 1,
								position: 'relative',
								zIndex: 1
							} },
						_react2['default'].createElement(_AudibleUITags2['default'].Image, {
							block: true,
							imageWidth: '100%',
							source: 'http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_.jpg' })
					),
					_react2['default'].createElement(
						'div',
						{ style: {
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
								position: 'absolute',
								zIndex: 0
							} },
						_react2['default'].createElement(
							_AudibleUITags2['default'].Box,
							{ textAlign: 'left', paddingSize: 'medium' },
							_react2['default'].createElement(
								_AudibleUITags2['default'].Heading,
								{ spacing: 'micro', textColor: 'base' },
								'Harry Potter and the Chamber of Secrets, Book 2'
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridRow,
								{ textColor: 'secondary', spacing: 'small' },
								'by J.K. Rowling'
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridRow,
								{ textColor: 'secondary', spacing: 'micro' },
								'Narrated by Jim Dale'
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridRow,
								{ textColor: 'secondary', spacing: 'micro' },
								'9 hrs and 24 mins'
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridRow,
								{ spacing: 'medium' },
								_react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].Button,
								{ buttonType: 'primary' },
								'Buy Now'
							)
						),
						_react2['default'].createElement('div', { style: {
								background: "url(http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_BL60_.jpg)",
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
								position: 'absolute',
								zIndex: '-2'
							} }),
						_react2['default'].createElement('div', { style: {
								background: 'rgba(0,0,0,0.35)',
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
								position: 'absolute',
								zIndex: '-1'
							} })
					)
				),
				this.props.hasUpsell && _react2['default'].createElement(
					_AudibleUITags2['default'].Box,
					{ backgroundColor: 'secondary', paddingSize: 'mini' },
					_react2['default'].createElement(
						_AudibleUITags2['default'].GridRow,
						null,
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridColumn,
							{ gridUnits: 2 },
							_react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', source: 'http://ecx.images-amazon.com/images/I/61kqENa2G0L._SL500_.jpg' })
						),
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridColumn,
							{ gridUnits: 7 },
							_react2['default'].createElement(
								_AudibleUITags2['default'].List,
								{ listType: 'nostyle', textSize: 'mini' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									{ textSize: 'small', textColor: 'base' },
									'Harry Potter and the Chamber of Secrets, Book 2'
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									null,
									'Author: J.K. Rowling'
								),
								_react2['default'].createElement(
									_AudibleUITags2['default'].ListItem,
									null,
									'Narrator: Jim Dale'
								)
							)
						),
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridColumn,
							{ gridUnits: 3, position: 'last', textAlign: 'right' },
							_react2['default'].createElement(
								_AudibleUITags2['default'].Button,
								{ inline: true, size: 'small', buttonType: 'primary' },
								'Get Book'
							)
						)
					)
				),
				_react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 3, percentage: this.state.currentTime / this.state.trackDuration * 100 }),
				_react2['default'].createElement(
					'span',
					{ className: 'bc-theme-dark' },
					_react2['default'].createElement(
						_AudibleUITags2['default'].Box,
						{ backgroundColor: 'base', paddingSize: 'mini' },
						_react2['default'].createElement(
							_AudibleUITags2['default'].GridRow,
							null,
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridColumn,
								{ gridUnits: 10, spacingTop: 'micro' },
								!this.state.isPlaying ? _react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ onClick: function () {
											_this.setState({
												isPlaying: true
											});
											_this.refs.player.play();
										} },
									_react2['default'].createElement(_AudibleUITags2['default'].Image, {
										verticalAlign: 'middle',
										imageHeight: 24,
										source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/play._V299526713_.svg' })
								) : _react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ onClick: function () {
											_this.setState({
												isPlaying: false
											});
											_this.refs.player.pause();
										} },
									_react2['default'].createElement(_AudibleUITags2['default'].Image, {
										verticalAlign: 'middle',
										imageHeight: 24,
										source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/pause._V299505455_.svg' })
								),
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									null,
									_react2['default'].createElement(_AudibleUITags2['default'].Image, {
										verticalAlign: 'middle',
										imageHeight: 24,
										source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/volume._V299526713_.svg' })
								),
								_react2['default'].createElement(_RangeSlider2['default'], null),
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Text,
									{ textSize: 'small', textColor: 'base' },
									Math.floor(this.state.currentTime / 60),
									':',
									Math.floor(this.state.currentTime % 60) < 10 ? "0" + Math.floor(this.state.currentTime % 60) : Math.floor(this.state.currentTime % 60)
								),
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Text,
									{ textSize: 'small', textColor: 'base' },
									'/'
								),
								_react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
								_react2['default'].createElement(
									_AudibleUITags2['default'].Text,
									{ textSize: 'small', textColor: 'base' },
									Math.floor(this.state.trackDuration / 60),
									':',
									Math.ceil(this.state.trackDuration % 60) < 10 ? "0" + Math.floor(this.state.trackDuration % 60) : Math.floor(this.state.trackDuration % 60)
								)
							),
							_react2['default'].createElement(
								_AudibleUITags2['default'].GridColumn,
								{ gridUnits: 2, position: 'last' },
								_react2['default'].createElement(
									_AudibleUITags2['default'].Link,
									{ url: 'http://www.audible.com' },
									_react2['default'].createElement(_AudibleUITags2['default'].Image, {
										block: true,
										source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/platform/iframe/audible_logo._V299526713_.svg' })
								)
							)
						)
					)
				),
				_react2['default'].createElement('audio', { ref: 'player', src: 'http://samples.audible.com/bk/potr/000002/bk_potr_000002_sample.mp3' })
			);
		}
	}]);

	return Iframe;
})(_react2['default'].Component);

Iframe.propTypes = {
	hasAsin: _react.PropTypes.bool,
	hasUpsell: _react.PropTypes.bool
};

exports['default'] = Iframe;
module.exports = exports['default'];