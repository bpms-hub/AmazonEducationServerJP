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

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var _PopoverTrigger = require('./PopoverTrigger');

var _PopoverTrigger2 = _interopRequireDefault(_PopoverTrigger);

var RatingSelector = (function (_React$Component) {
  _inherits(RatingSelector, _React$Component);

  function RatingSelector(props) {
    _classCallCheck(this, RatingSelector);

    _get(Object.getPrototypeOf(RatingSelector.prototype), 'constructor', this).call(this, props);
    this.state = {
      hoverSelection: 0,
      ratingDesc: "It's ok",
      currentSelection: null,
      color: "inactive"
    };
  }

  _createClass(RatingSelector, [{
    key: 'setStarsShown',
    value: function setStarsShown(selection) {
      var tooltipText = undefined;

      switch (selection) {
        case 1:
          tooltipText = "I hate it";
          break;
        case 2:
          tooltipText = "I don't like it";
          break;
        case 3:
          tooltipText = "It's ok";
          break;
        case 4:
          tooltipText = "I like it";
          break;
        case 5:
          tooltipText = "I love it";
          break;
      }

      this.setState({
        hoverSelection: selection,
        ratingDesc: tooltipText,
        color: "base"
      });
    }
  }, {
    key: 'selectStar',
    value: function selectStar(indexPlusOne) {
      this.setState({
        currentSelection: indexPlusOne
      });
    }
  }, {
    key: 'leaveHover',
    value: function leaveHover(indexPlusOne) {
      var selection = this.state.currentSelection ? this.state.currentSelection : 0;
      this.setStarsShown(selection);
    }
  }, {
    key: 'renderStars',
    value: function renderStars() {
      var starArray = [];

      for (var i = 0; i < 5; i++) {
        starArray.push(_react2['default'].createElement(
          _Link2['default'],
          null,
          _react2['default'].createElement(_Icon2['default'], {
            onMouseEnter: this.setStarsShown.bind(this, i + 1),
            onClick: this.selectStar.bind(this, i + 1),
            verticalAlign: 'baseline',
            iconType: this.state.hoverSelection >= i + 1 ? 'star' : 'star-hollow',
            textColor: this.state.color })
        ));
      }

      return starArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-rating-selector'];

      return _react2['default'].createElement(
        _PopoverTrigger2['default'],
        { tooltip: this.state.ratingDesc, tooltipSide: 'right' },
        _react2['default'].createElement(
          'span',
          { className: (0, _classnames2['default'])(staticClasses), onMouseLeave: this.leaveHover.bind(this) },
          this.renderStars()
        )
      );
    }
  }]);

  return RatingSelector;
})(_react2['default'].Component);

RatingSelector.propTypes = {
  numRatings: _react.PropTypes.number,
  averageRating: _react.PropTypes.number
};

exports['default'] = RatingSelector;
module.exports = exports['default'];