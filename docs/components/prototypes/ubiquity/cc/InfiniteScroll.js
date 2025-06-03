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

function scrollToTop(scrollDuration) {
  var scrollHeight = window.scrollY,
      scrollStep = Math.PI / (scrollDuration / 15),
      cosParameter = scrollHeight / 2;
  var scrollCount = 0,
      scrollMargin,
      scrollInterval = setInterval(function () {

    if (window.scrollY != 0) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, scrollHeight - scrollMargin);
    } else clearInterval(scrollInterval);
  }, 15);
}

var InfiniteScroll = (function (_React$Component) {
  _inherits(InfiniteScroll, _React$Component);

  function InfiniteScroll() {
    _classCallCheck(this, InfiniteScroll);

    _get(Object.getPrototypeOf(InfiniteScroll.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(InfiniteScroll, [{
    key: 'moveToTop',
    value: function moveToTop() {
      scrollToTop(300);
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-link-mobile'];

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacing: 'medium' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 11 },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { onClick: this.props.onClick },
            'Load More'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 1, position: 'last' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { onClick: this.moveToTop.bind(this) },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'move-to-top' })
          )
        )
      );
    }
  }]);

  return InfiniteScroll;
})(_react2['default'].Component);

InfiniteScroll.PropTypes = {
  onClick: _react.PropTypes.func
};

exports['default'] = InfiniteScroll;
module.exports = exports['default'];