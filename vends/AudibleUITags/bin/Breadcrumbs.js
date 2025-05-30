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

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var Breadcrumbs = (function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    _get(Object.getPrototypeOf(Breadcrumbs.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Breadcrumbs, [{
    key: 'renderBreadcrumbs',
    value: function renderBreadcrumbs() {
      var routes = this.props.breadcrumbTrail;

      var routeMap = routes.map((function (route, index) {
        if (index + 1 < routes.length) {
          return _react2['default'].createElement(
            'span',
            { key: index },
            _react2['default'].createElement(
              _Link2['default'],
              { app: true, linkType: this.props.inverse ? "inverse" : "nav", url: route.url },
              route.name
            ),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
            _react2['default'].createElement(_Icon2['default'], { iconType: 'chevron-right', textColor: this.props.inverse ? "inverse" : null }),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' })
          );
        } else {
          return _react2['default'].createElement(
            _Text2['default'],
            { key: index, textColor: this.props.inverse ? "inactive" : "tertiary" },
            route.name
          );
        }
      }).bind(this));

      return routeMap;
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-breadcrumbs'];
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(staticClasses) },
        this.renderBreadcrumbs()
      );
    }
  }]);

  return Breadcrumbs;
})(_react2['default'].Component);

Breadcrumbs.propTypes = {
  includeHome: _react2['default'].PropTypes.bool,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  inverse: _react.PropTypes.bool,
  breadcrumbTrail: _react.PropTypes.array.isRequired

};

exports['default'] = Breadcrumbs;
module.exports = exports['default'];