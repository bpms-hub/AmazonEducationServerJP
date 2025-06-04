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

var _reactJsx = require('react-jsx');

var _reactJsx2 = _interopRequireDefault(_reactJsx);

var SandBox = (function (_React$Component) {
  _inherits(SandBox, _React$Component);

  function SandBox(props, context) {
    _classCallCheck(this, SandBox);

    _get(Object.getPrototypeOf(SandBox.prototype), 'constructor', this).call(this, props, context);
    global.React = _react2['default'];
    global.BC = _AudibleUITags2['default'];
  }

  _createClass(SandBox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ code: '', renderContent: '', jsp: '', renderType: '', html: '' });
    }
  }, {
    key: 'renderMyCode',
    value: function renderMyCode(myCode) {
      if (myCode !== '') {
        try {
          var render = _reactJsx2['default'].transform(myCode);
          return render();
        } catch (x) {
          console.error(x);
          // let message = 'Error in the parsing code: '+x;
          return _react2['default'].createElement(_AudibleUITags2['default'].InlineAlert, null, x.toString());
        }
      } else {
        return '';
      }
    }
  }, {
    key: 'openMe',
    value: function openMe() {
      var code = this.state.code;
      this.setState({ renderContent: code, renderType: 'element' });
    }
  }, {
    key: 'updateCode',
    value: function updateCode(input) {
      this.setState({ code: input.nativeEvent.target.value });
    }
  }, {
    key: 'convertToJSP',
    value: function convertToJSP() {

      var reactTags = /(<([A-Z])\w\.{1}([A-Z])|<\/([A-Z])\w\.{1}([A-Z]))/g;
      var reactTagsWithParams = /(<([A-Z])\w+\.(.)*?>|<\/([A-Z])\w+\.([A-Z][a-z])\w+>)/g;
      var rawCode = this.state.code;

      var transformCode = rawCode.replace(reactTagsWithParams, function replacer(match) {
        return match.replace(/({\"|{|\"}|})/g, '"');
      });
      transformCode = transformCode.replace(reactTags, function replacer(match) {
        return match.replace(/\./g, ':').toLowerCase();
      });
      this.setState({ jsp: transformCode, renderType: 'jsp' });
    }
  }, {
    key: 'renderHTML',
    value: function renderHTML() {
      this.setState({ renderType: 'html' });
      try {
        var renderJSX = _reactJsx2['default'].transform(this.state.code);
        var htmlMarkup = _react2['default'].renderToStaticMarkup(renderJSX());
        this.setState({ html: htmlMarkup });
      } catch (x) {
        this.setState({ html: x.toString() });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        { className: 'bc-container' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacingTop: 'medium', spacing: 'base' },
            'Sandbox ',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'secondary', textSize: 'base' },
              '(Beta)'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Paste the code and click Render to preview your layout.',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Expander,
              { showText: 'Example', hideText: 'Hide' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: 'true', spacing: 'base', backgroundColor: 'base' },
                '<BC.Heading textAlign="center" textBold="true" textStrike="true" >This is an example</BC.Heading>'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { onChange: this.updateCode.bind(this), spacingTop: 'base', spacing: 'base', placeholder: 'Placeholder code here',
            cssClass: 'bc-heigh-200px' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: '6' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: 'true', buttonType: 'primary', onClick: this.openMe.bind(this) },
                'Render'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, textAlign: 'right' },
              'Comming Soon:'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: 'true', onClick: this.convertToJSP.bind(this) },
                'Generate JSP'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: 'true', onClick: this.renderHTML.bind(this) },
                'Generate HTML'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium', spacingTop: 'medium' }),
            (function () {
              switch (_this.state.renderType) {
                case 'element':
                  return _react2['default'].createElement(
                    'div',
                    null,
                    _this.renderMyCode(_this.state.renderContent)
                  );
                  break;
                case 'jsp':
                  return _react2['default'].createElement('textarea', { className: 'bc-input bc-textarea bc-heigh-200px bc-spacing-base bc-spacing-top-base', value: _this.state.jsp, placeholder: 'generated code.', readOnly: true });
                  break;
                case 'html':
                  return _react2['default'].createElement('textarea', { className: 'bc-input bc-textarea bc-heigh-200px bc-spacing-base bc-spacing-top-base', value: _this.state.html, placeholder: 'generated code.', readOnly: true });
                  break;
                default:
                  return '';
              }
            })(),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium', spacingTop: 'medium' })
          )
        )
      );
    }
  }]);

  return SandBox;
})(_react2['default'].Component);

exports['default'] = SandBox;
module.exports = exports['default'];