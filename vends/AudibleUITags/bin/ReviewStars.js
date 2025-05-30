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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Pipe = require('./Pipe');

var _Pipe2 = _interopRequireDefault(_Pipe);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var ReviewStars = (function (_React$Component) {
  _inherits(ReviewStars, _React$Component);

  function ReviewStars(props) {
    _classCallCheck(this, ReviewStars);

    _get(Object.getPrototypeOf(ReviewStars.prototype), 'constructor', this).call(this, props);
  }

  _createClass(ReviewStars, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-review-stars'];

      return _react2['default'].createElement(
        'span',
        { className: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(_Icon2['default'], { iconType: 'star', verticalAlign: 'baseline', textColor: 'active' }),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'star', verticalAlign: 'baseline', textColor: 'active' }),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'star', verticalAlign: 'baseline', textColor: 'active' }),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'star', verticalAlign: 'baseline', textColor: 'active' }),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'star', textColor: 'tertiary', verticalAlign: 'baseline' }),
        this.props.showAverageRating || this.props.numRatings ? _react2['default'].createElement(_LetterSpace2['default'], null) : null,
        this.props.showAverageRating ? [_react2['default'].createElement(
          _Text2['default'],
          { textBold: true, textColor: this.props.inverse ? "inverse" : "null" },
          this.props.averageRating,
          ' '
        )] : null,
        this.props.showAverageRating && this.props.numRatings ? _react2['default'].createElement(_Pipe2['default'], { textColor: this.props.inverse ? "inverse" : "primary" }) : null,
        this.props.numRatings ? [_react2['default'].createElement(
          _Text2['default'],
          { textColor: this.props.inverse ? "inverse" : "null" },
          ' (',
          this.props.numRatings,
          ') '
        )] : null
      );
    }
  }]);

  return ReviewStars;
})(_react2['default'].Component);

ReviewStars.propTypes = {
  numRatings: _react.PropTypes.number,
  averageRating: _react.PropTypes.number,
  showAverageRating: _react.PropTypes.bool
};
exports['default'] = ReviewStars;
module.exports = exports['default'];