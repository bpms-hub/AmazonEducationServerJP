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

var _HigLayout = require('./HigLayout');

var _HigLayout2 = _interopRequireDefault(_HigLayout);

var alertPatterns = (function (_React$Component) {
  _inherits(alertPatterns, _React$Component);

  function alertPatterns() {
    _classCallCheck(this, alertPatterns);

    _get(Object.getPrototypeOf(alertPatterns.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(alertPatterns, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _HigLayout2['default'],
        { activeRow: 2 },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'mini', textBold: true },
          'Colors'
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'base' },
          'Typographic & element colors'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textColor: 'secondary' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#F7991C", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Primary & Active'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#F7991C'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 247-153-28'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#333333", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Base'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#333333'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 51-51-51'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#666666", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Secondary'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#666666'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 102-102-102'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3, position: 'last' },
            _react2['default'].createElement('div', { style: { backgroundColor: "#999999", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Tertiary'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#999999'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 153-153-153'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textColor: 'secondary' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#CCCCCC", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Inactive'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#CCCCCC'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 204-204-204'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#199ACC", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Link'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#199ACC'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 25-151-204'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#E14E4E", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Error'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#E14E4E'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 225-78-78'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3, position: 'last' },
            _react2['default'].createElement('div', { style: { backgroundColor: "#FFFFFF", height: "100px", border: "1px solid #ccc" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Inverse'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#FFFFFF'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 255-255-255'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Table,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumnHeading,
              null,
              'Name'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumnHeading,
              null,
              'Value'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'primary' },
                'Primary & Active'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#F7991C'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'base' },
                'Base'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#333333'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'Secondary'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#666666'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'tertiary' },
                'Tertiary'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#999999'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'inactive' },
                'Inactive'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#CCCCCC'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'link' },
                'Link'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#199ACC'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'error' },
                'Error'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#E14E4E'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                'div',
                { style: { backgroundColor: "#000" } },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'inverse' },
                  'Inverse'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#FFFFFF'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'small' },
          'Background Colors'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textColor: 'secondary' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#FFFFFF", height: "100px", border: "1px solid #ccc" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Base'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#FFFFFF'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 255-255-255'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#F9F9F9", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Secondary'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#F9F9F9'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 249-249-249'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement('div', { style: { backgroundColor: "#2D2D2D", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Inverse'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#2D2D2D'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 45-45-45'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3, position: 'last' },
            _react2['default'].createElement('div', { style: { backgroundColor: "#CCCCCC", height: "100px" } }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'micro' },
              'Border'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              '#CCCCCC'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              'RGB 204-204-204'
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Table,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumnHeading,
              null,
              'Name'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumnHeading,
              null,
              'Value'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                null,
                'Box with Base Background'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#FFFFFF'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary' },
                'Box with Base Background'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#F9F9F9'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'inverse' },
                  'Box with Base Background'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#2D2D2D'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true },
                'Box with Base Background and border'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              '#CCCCCC'
            )
          )
        )
      );
    }
  }]);

  return alertPatterns;
})(_react2['default'].Component);

exports['default'] = alertPatterns;
module.exports = exports['default'];
/*
<BC.GridRow textSize="small" textColor="secondary" spacing="mini">
 See the <BC.Link>typography article</BC.Link> for usage guidelines.
</BC.GridRow>
*/ /*
   <BC.Heading headingLevel={2} spacing="small">Do's and Don'ts</BC.Heading>
   <BC.GridRow>
    <BC.GridColumn gridUnits={6}>
      <BC.Heading headingLevel={2} spacing="small">Use color to add meaning</BC.Heading>
       <BC.Paragraph>
        Do not use color simply for decoration, or even to simply grab attention. Color CAN (and does) grab 
        attention of course - but it should do so only when it's a by-product of adding meaning.
      </BC.Paragraph>
    </BC.GridColumn>
     <BC.GridColumn gridUnits={6} position="last">
      <BC.Table spacing="large">
        <BC.TableRow>
          <BC.TableColumnHeading>Name</BC.TableColumnHeading>
        </BC.TableRow>
         <BC.TableRow>
          <BC.TableColumn></BC.TableColumn>
        </BC.TableRow>
      </BC.Table>            
    </BC.GridColumn>
   </BC.GridRow>
   */