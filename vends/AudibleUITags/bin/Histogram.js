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

var _Meter = require('./Meter');

var _Meter2 = _interopRequireDefault(_Meter);

var _ReviewStars = require('./ReviewStars');

var _ReviewStars2 = _interopRequireDefault(_ReviewStars);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var Histogram = (function (_React$Component) {
	_inherits(Histogram, _React$Component);

	function Histogram(props) {
		_classCallCheck(this, Histogram);

		_get(Object.getPrototypeOf(Histogram.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Histogram, [{
		key: 'getRatingPercentage',
		value: function getRatingPercentage(rating) {
			var ratingPercentage = rating / this.props.numRatings * 100;

			return ratingPercentage;
		}
	}, {
		key: 'render',
		value: function render() {
			var staticClasses = ['bc-histogram'];
			if (this.props.cssClass) {
				staticClasses.push(this.props.cssClass);
			}

			return _react2['default'].createElement(
				'div',
				{ id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
				_react2['default'].createElement(
					_Heading2['default'],
					{ spacing: 'micro', headingLevel: 3 },
					'Overall'
				),
				_react2['default'].createElement(
					_GridRow2['default'],
					{ spacing: 'micro' },
					_react2['default'].createElement(_ReviewStars2['default'], { averageRating: this.props.averageRating, numRatings: this.props.numRatings })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'bc-histogram-row' },
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						'5 Star'
					),
					' ',
					_react2['default'].createElement(_Meter2['default'], { percentage: this.getRatingPercentage(this.props.numFiveStars) }),
					' ',
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						this.props.numFiveStars
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'bc-histogram-row' },
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						'4 Star'
					),
					' ',
					_react2['default'].createElement(_Meter2['default'], { percentage: this.getRatingPercentage(this.props.numFourStars) }),
					' ',
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						this.props.numFourStars
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'bc-histogram-row' },
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						'3 Star'
					),
					' ',
					_react2['default'].createElement(_Meter2['default'], { percentage: this.getRatingPercentage(this.props.numThreeStars) }),
					' ',
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						this.props.numThreeStars
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'bc-histogram-row' },
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						'2 Star'
					),
					' ',
					_react2['default'].createElement(_Meter2['default'], { percentage: this.getRatingPercentage(this.props.numTwoStars) }),
					' ',
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						this.props.numTwoStars
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'bc-histogram-row' },
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						'1 Star'
					),
					' ',
					_react2['default'].createElement(_Meter2['default'], { percentage: this.getRatingPercentage(this.props.numOneStars) }),
					' ',
					_react2['default'].createElement(
						_Text2['default'],
						{ textSize: 'mini' },
						this.props.numOneStars
					)
				)
			);
		}
	}]);

	return Histogram;
})(_react2['default'].Component);

Histogram.PropTypes = {
	id: _react.PropTypes.string,
	cssClass: _react.PropTypes.string,
	numFiveStars: _react.PropTypes.number,
	numFourStars: _react.PropTypes.number,
	numThreeStars: _react.PropTypes.number,
	numTwoStars: _react.PropTypes.number,
	numOneStars: _react.PropTypes.number,
	numRatings: _react.PropTypes.number,
	averageRating: _react.PropTypes.string
};

exports['default'] = Histogram;
module.exports = exports['default'];