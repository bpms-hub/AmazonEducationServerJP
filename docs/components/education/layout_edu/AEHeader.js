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

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var AEHeader = (function (_React$Component) {
  _inherits(AEHeader, _React$Component);

  function AEHeader(props, context) {
    _classCallCheck(this, AEHeader);

    _get(Object.getPrototypeOf(AEHeader.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(AEHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.props.location.pathname)
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'header',
          { className: 'guidelines-header' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { cssClass: 'bc-pub-clearfix', backgroundColor: 'secondary', hasBorder: true },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: "/education", app: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacingTop: 'small' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { verticalAlign: 'bottom', cssClass: 'logo-margin', imageHeight: '21px', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_mark_solar._V314169480_.svg' })
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, textAlign: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'menu', listType: 'menu' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textColor: 'base', linkType: 'nav', url: "/education/waffle/updates" },
                        'Amazon English'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, textAlign: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'menu', listType: 'menu' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textColor: 'base', linkType: 'nav', url: "/education/cupcake/coming-soon" },
                        'Project Cupcake'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, textAlign: 'left', position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'menu', listType: 'menu' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, linkType: 'nav', textColor: 'base', url: "/education/resources/resource-index" },
                        'Resources'
                      )
                    )
                  )
                )
              )
            )
          ),
          this.props.children,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
        )
      );
    }
  }]);

  return AEHeader;
})(_react2['default'].Component);

AEHeader.contextTypes = {
  location: _react2['default'].PropTypes.object
};

exports['default'] = AEHeader;
module.exports = exports['default'];