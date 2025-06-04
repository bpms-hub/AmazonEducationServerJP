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

var _layoutHeader = require('../layout/Header');

var _layoutHeader2 = _interopRequireDefault(_layoutHeader);

var _layoutFooter = require('../layout/Footer');

var _layoutFooter2 = _interopRequireDefault(_layoutFooter);

var _dataElements = require('../../data/elements');

var _dataElements2 = _interopRequireDefault(_dataElements);

var _reactRouter = require('react-router');

var ElementPlayground = (function (_React$Component) {
  _inherits(ElementPlayground, _React$Component);

  function ElementPlayground(props, context) {
    _classCallCheck(this, ElementPlayground);

    _get(Object.getPrototypeOf(ElementPlayground.prototype), 'constructor', this).call(this, props, context);
    this.state = {
      component: this.upperCaseWord(this.props.params.element),
      data: _dataElements2['default'][this.props.params.element],
      params: this.props.location.query,
      testContent: 'Example content'
    };
  }

  _createClass(ElementPlayground, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newParams = this.state.params;

      var defaults = this.state.data.defaultState;

      for (var key in defaults) {
        if (defaults.hasOwnProperty(key)) {
          newParams[key] = defaults[key];
        }
      }

      this.setState({
        params: newParams
      });

      this.context.history.pushState(null, '/engineering/elements/' + this.state.component, this.state.params);
    }
  }, {
    key: 'upperCaseWord',
    value: function upperCaseWord(Word) {
      var capitalized = Word[0].toUpperCase() + Word.substring(1);
      return capitalized;
    }
  }, {
    key: 'lowerCaseWord',
    value: function lowerCaseWord(Word) {
      var lowercase = Word[0].toLowerCase() + Word.substring(1);
      return lowercase;
    }
  }, {
    key: 'onChangeParams',
    value: function onChangeParams(param, event) {
      var newParams = this.state.params;

      if (event.target.value.length === 0) {
        delete newParams[param];
      } else {
        newParams[param] = event.target.value;
      }

      this.setState({
        params: newParams
      });

      this.context.history.pushState(null, '/engineering/elements/' + this.state.component, this.state.params);
    }
  }, {
    key: 'onChangeParamsCheckbox',
    value: function onChangeParamsCheckbox(param, event) {
      var newParams = this.state.params;

      if (event.target.checked) {
        newParams[param] = true;
      } else {
        delete newParams[param];
      }

      this.setState({
        params: newParams
      });

      this.context.history.pushState(null, '/engineering/elements/' + this.state.component, this.state.params);
    }
  }, {
    key: 'renderTableRow',
    value: function renderTableRow(cells) {
      return cells.map(function (item) {
        return _react2['default'].createElement(_AudibleUITags2['default'].TableColumn, null, item);
      });
    }
  }, {
    key: 'renderTable',
    value: function renderTable(rows) {
      var rTR = this.renderTableRow;
      return rows.map(function (row, line) {
        var type = row['type'];
        var options = 'Free Text';
        if (type == 'list') {
          options = row['opt'].join(', ');
        }
        if (type == 'checkbox') {
          options = 'True/False';
        }

        var formedRow = rTR([row['name'], options, row['description']]);

        return _react2['default'].createElement(_AudibleUITags2['default'].TableRow, null, formedRow);
      });
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions(list) {
      return list.map(function (item, index) {
        switch (item.type) {
          case 'list':
            return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  item.name + ': '
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  {
                    onChange: this.onChangeParams.bind(this, item.name),
                    spacing: 'mini',
                    spacingTop: 'micro' },
                  item.opt.map(function (item, index) {
                    return _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      item
                    );
                  })
                )
              )
            );
            break;

          case 'checkbox':
            return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  item.name + ': '
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, {
                  onChange: this.onChangeParamsCheckbox.bind(this, item.name),
                  spacing: 'mini',
                  spacingTop: 'micro',
                  value: item.name })
              )
            );
            break;

          default:
            return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  item.name + ': '
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, {
                  onChange: this.onChangeParams.bind(this, item.name),
                  spacing: 'mini',
                  spacingTop: 'micro' })
              )
            );
        }
      }, this);
    }
  }, {
    key: 'renderCodeVisual',
    value: function renderCodeVisual(prefix, component, params) {
      var keys = params;

      var showParams = '';
      for (var k in keys) {
        showParams += ' ' + k + '="' + keys[k] + '"';
      }
      var jsp = '<' + prefix + component + showParams + '></' + prefix + component + '>';

      return _react2['default'].createElement('div', null, jsp);
    }
  }, {
    key: 'renderHTMLVisual',
    value: function renderHTMLVisual(component, params) {
      var element = _AudibleUITags2['default'][component];
      var reactElement = _react2['default'].createElement(element, params, this.state.testContent);
      return _react2['default'].renderToStaticMarkup(reactElement);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_layoutHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'extra-large', spacingTop: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 240 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'left', fixedColumn: 'left', fixedColumnWidth: 240 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini' },
                  'Visual Parameters'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  this.renderOptions(this.state.data.params.visual)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacingTop: 'small', spacing: 'mini' },
                  'Other Parameters'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  this.renderOptions(this.state.data.params.other)
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'right', fixedColumn: 'left', fixedColumnWidth: 240, columnPadding: '20px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'small' },
                  this.state.component
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'mini' },
                    'Preview '
                  ),
                  _react2['default'].cloneElement(this.props.children, { content: this.state.testContent, name: this.state.component, att: this.state.params })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'mini' },
                    'How to Use'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Tabs,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TabPanel,
                      { title: 'JSP' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { backgroundColor: 'secondary' },
                        this.renderCodeVisual('bc:', this.lowerCaseWord(this.state.component), this.state.params)
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TabPanel,
                      { title: 'HTML' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { backgroundColor: 'secondary' },
                        this.renderHTMLVisual(this.state.component, this.state.params)
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TabPanel,
                      { title: 'React' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { backgroundColor: 'secondary' },
                        this.renderCodeVisual('BC.', this.state.component, this.state.params)
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'mini' },
                    'Source'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { url: '' },
                    'AudibleWebBaseTags'
                  ),
                  ', ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { url: '' },
                    'AudibleUIReactTags'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini' },
                  'Parameters'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Attribute'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Options'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Description'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    this.renderTable(this.state.data.params.visual),
                    this.renderTable(this.state.data.params.other)
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_layoutFooter2['default'], null)
      );
    }
  }]);

  return ElementPlayground;
})(_react2['default'].Component);

ElementPlayground.contextTypes = {
  history: _react2['default'].PropTypes.object,
  location: _react2['default'].PropTypes.object
};

exports['default'] = ElementPlayground;
module.exports = exports['default'];