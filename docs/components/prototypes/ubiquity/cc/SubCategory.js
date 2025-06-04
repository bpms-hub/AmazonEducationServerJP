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

var SubCategory = (function (_React$Component) {
  _inherits(SubCategory, _React$Component);

  function SubCategory(props) {
    _classCallCheck(this, SubCategory);

    _get(Object.getPrototypeOf(SubCategory.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "category"
    };
  }

  _createClass(SubCategory, [{
    key: 'toggleElement',
    value: function toggleElement(element) {
      this.setState({
        activeElement: element
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.activeElement === "category") {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'mini', className: this.state.activeElement === "category" ? 'bc-block' : 'bc-hidden' },
            _react2['default'].createElement(
              'a',
              { onClick: this.toggleElement.bind(this, "subcategory") },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                this.props.category
              )
            )
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { className: this.state.activeElement === "subcategory" ? 'bc-block' : 'bc-hidden' },
            _react2['default'].createElement(
              'a',
              { onClick: this.toggleElement.bind(this, "category") },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'secondary' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'small' },
                  'Back to Categories'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 3, spacing: 'mini', textColor: 'secondary' },
              this.props.category
            ),
            _react2['default'].createElement(
              'div',
              null,
              this.props.children
            )
          )
        );
      }
    }
  }]);

  return SubCategory;
})(_react2['default'].Component);

SubCategory.PropTypes = {
  id: _react.PropTypes.string,
  category: _react.PropTypes.string
};

exports['default'] = SubCategory;
module.exports = exports['default'];