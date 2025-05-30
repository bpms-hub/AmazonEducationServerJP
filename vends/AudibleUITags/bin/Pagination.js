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

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

var _Pipe = require('./Pipe');

var _Pipe2 = _interopRequireDefault(_Pipe);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var Pagination = (function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-pagination'];

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(_Divider2['default'], { spacing: 'micro' }),
        _react2['default'].createElement(
          _GridRow2['default'],
          null,
          _react2['default'].createElement(
            _GridColumn2['default'],
            { gridUnits: 6 },
            '1-10 of 10 results'
          ),
          _react2['default'].createElement(
            _GridColumn2['default'],
            { gridUnits: 6, textAlign: 'right', last: true },
            _react2['default'].createElement(
              _Text2['default'],
              { textColor: 'inactive' },
              'Previous'
            ),
            _react2['default'].createElement(_Pipe2['default'], null),
            _react2['default'].createElement(
              _Text2['default'],
              null,
              '1'
            ),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
            _react2['default'].createElement(
              _Link2['default'],
              null,
              '2'
            ),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
            _react2['default'].createElement(
              _Link2['default'],
              null,
              '3'
            ),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
            _react2['default'].createElement(
              _Text2['default'],
              null,
              '...'
            ),
            _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
            _react2['default'].createElement(
              _Link2['default'],
              null,
              '10'
            ),
            _react2['default'].createElement(_Pipe2['default'], null),
            _react2['default'].createElement(
              _Link2['default'],
              { linkType: 'nav' },
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Pagination;
})(_react2['default'].Component);

Pagination.propTypes = {};

Pagination.defaultProps = {};

exports['default'] = Pagination;
module.exports = exports['default'];