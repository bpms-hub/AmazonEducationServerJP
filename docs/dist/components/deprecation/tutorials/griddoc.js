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

var _higHigLayout = require('../hig/HigLayout');

var _higHigLayout2 = _interopRequireDefault(_higHigLayout);

var article = (function (_React$Component) {
  _inherits(article, _React$Component);

  function article() {
    _classCallCheck(this, article);

    _get(Object.getPrototypeOf(article.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(article, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _higHigLayout2['default'],
        { activeRow: 1 },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'mini', textBold: true },
          'The Brick City Grid'
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          { spacingTop: 'base' },
          'A 12-column, nest-able grid structure. Fixed Grid properties are also included for a fully adaptive experience.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Tabs,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].TabPanel,
            { title: 'Designers' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: '2', spacingTop: 'base' },
              'GridRow & GridColumn Setup'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'Take a look at the PDP view to get a sense of how these grids are formed -'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'base', spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'base', headingLevel: '2' },
              'PDP FixedGridColumns'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'The PDP row is comprised of a FixedGridRow wrapper, with two FixedGridColumns. The left column is 320px, and is where the Product and Sample tags are placed.'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 320 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { textAlign: 'center', side: 'left', fixedColumn: 'left', fixedColumnWidth: 320 },
                _react2['default'].createElement(
                  'div',
                  { style: { height: '320px', backgroundColor: '#ccc' } },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { spacing: 'extra-large', spacingTop: 'extra-large', gridUnits: 12, position: 'last' },
                    _react2['default'].createElement(
                      'div',
                      { style: { padding: '80px', color: '#fff' } },
                      'Fixed Grid @ 320px'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { style: { height: '320', backgroundColor: '#eee' } },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { side: 'right', fixedColumn: 'left', textAlign: 'center', columnPadding: '0px', fixedColumnWidth: 455 },
                  _react2['default'].createElement('div', { style: { height: '320', backgroundColor: '#eee' } })
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'base', spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'base', headingLevel: '2' },
              'FixedGridColumn Detail'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'The right aligned',
              _react2['default'].createElement(
                'code',
                null,
                'FixedGridColumn'
              ),
              'is divided into two',
              _react2['default'].createElement(
                'code',
                null,
                'FixedGridColumns'
              ),
              ', with a',
              _react2['default'].createElement(
                'code',
                null,
                'FixedGridRow'
              ),
              'wrapper. Note how the',
              _react2['default'].createElement(
                'code',
                null,
                'side:"left/right"'
              ),
              'property.'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 320 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { textAlign: 'center', side: 'left', fixedColumn: 'left', fixedColumnWidth: 320 },
                _react2['default'].createElement(
                  'div',
                  { style: { height: '320px', backgroundColor: '#ccc' } },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { spacing: 'extra-large', spacingTop: 'extra-large', gridUnits: 12, position: 'last' },
                    _react2['default'].createElement(
                      'div',
                      { style: { padding: '80px', color: '#fff' } },
                      'Fixed Grid @ 320px'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'right', fixedColumn: 'left', textAlign: 'center', columnPadding: '0px', fixedColumnWidth: 455 },
                _react2['default'].createElement(
                  'div',
                  { style: { height: '320', backgroundColor: '#eee' } },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { side: 'right', fixedColumn: 'left', columnPadding: '20px' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridRow,
                      { fixedColumn: 'right', fixedColumnWidth: 215 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].FixedGridColumn,
                        { side: 'left', fixedColumn: 'right', textAlign: 'center', columnPadding: '20px' },
                        _react2['default'].createElement(
                          'div',
                          { style: { height: '320', backgroundColor: '#ddd' } },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1 },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 1, position: 'last' },
                            _react2['default'].createElement(
                              'div',
                              { style: { backgroundColor: '#ccc', height: '320px', opacity: '.6' } },
                              '1'
                            )
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].FixedGridColumn,
                        { side: 'right', fixedColumn: 'right', fixedColumnWidth: 215 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 12 },
                          _react2['default'].createElement(
                            'div',
                            { style: { padding: '80px', color: '#fff' } },
                            'Fixed Grid @ 215px'
                          )
                        ),
                        _react2['default'].createElement('div', { style: { height: '215', backgroundColor: '#ccc' } })
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'base', spacing: 'base' }),
            _react2['default'].createElement(
              'div',
              { className: 'bc-container' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'base', headingLevel: '2' },
                'FixedGridColumn Detail'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacingTop: 'base', spacing: 'base' },
                'The right aligned',
                _react2['default'].createElement(
                  'code',
                  null,
                  'FixedGridColumn'
                ),
                'is divided into two',
                _react2['default'].createElement(
                  'code',
                  null,
                  'FixedGridColumns'
                ),
                ', with a',
                _react2['default'].createElement(
                  'code',
                  null,
                  'FixedGridRow'
                ),
                'wrapper. Note how the',
                _react2['default'].createElement(
                  'code',
                  null,
                  'side:"left/right"'
                ),
                'property.'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 320 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { textAlign: 'center', side: 'left', fixedColumn: 'left', fixedColumnWidth: 320 },
                _react2['default'].createElement(
                  'div',
                  { style: { height: '320px', backgroundColor: '#ccc' } },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { spacing: 'extra-large', spacingTop: 'extra-large', gridUnits: 12, position: 'last' },
                    _react2['default'].createElement(
                      'div',
                      { style: { padding: '80px', color: '#fff' } },
                      'Fixed Grid @ 320px'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'right', fixedColumn: 'left', columnPadding: '20px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'right', fixedColumnWidth: 215 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { side: 'left', fixedColumn: 'right', textAlign: 'center', columnPadding: '20px' },
                    _react2['default'].createElement(
                      'div',
                      { style: { height: '320', backgroundColor: '#eee' } },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { spacing: 'base', gridUnits: 12, position: 'last' },
                        _react2['default'].createElement(
                          'div',
                          { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                          '12'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 6 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '6'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 6, position: 'last' },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '6'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 4 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '4'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 4 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '4'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 4, position: 'last' },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '4'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 3 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '3'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 3 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '3'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 3 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '3'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 3, position: 'last' },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '3'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1, position: 'last' },
                          _react2['default'].createElement(
                            'div',
                            { style: { backgroundColor: '#ccc', height: '32px', opacity: '.6' } },
                            '1'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { side: 'right', fixedColumn: 'right', fixedColumnWidth: 215 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { side: 'right', fixedColumn: 'right', fixedColumnWidth: 215 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 12 },
                        _react2['default'].createElement(
                          'div',
                          { style: { padding: '80px', color: '#fff' } },
                          'Fixed Grid @ 215px'
                        )
                      ),
                      _react2['default'].createElement('div', { style: { height: '215', backgroundColor: '#ccc' } })
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacingTop: 'base', spacing: 'base' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].TabPanel,
            { title: 'Developers' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '2', spacingTop: 'base' },
                  'GridRow & GridColumn Setup'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'The Brick City grid is an adaptive grid system that appropriately scales up to 12 columns per row.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'large', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={12} last={true}'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: '2', spacingTop: 'base' },
              'gridUnits'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              _react2['default'].createElement(
                'code',
                null,
                'gridUnits=',
                "number"
              ),
              'is the first way to manipulate separation of GridColumn sections. NOTE: always use',
              _react2['default'].createElement(
                'code',
                null,
                'last=',
                "true"
              ),
              'within the final GridColumn to complete the GridRow.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'large', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={6}'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last' },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={6}  last={true}'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'large', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  '2'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  '2'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  '2'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  '2'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  '2'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, position: 'last' },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    '2  last={true}'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: '2', spacingTop: 'base' },
              'FixedGridRow & FixedGridColumn'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'fixed dimensions are for manipulate the grid with',
              _react2['default'].createElement(
                'code',
                null,
                'BC.FixedGridRow'
              ),
              'and',
              _react2['default'].createElement(
                'code',
                null,
                'BC.FixedGridColumn'
              ),
              'properties, respectively. Choose a',
              _react2['default'].createElement(
                'code',
                null,
                'fixedColumn="left/right"'
              ),
              'and',
              _react2['default'].createElement(
                'code',
                null,
                'fixedColumnWidth="number in px"'
              ),
              'for both properties.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 280 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'left', fixedColumn: 'left', fixedColumnWidth: 280 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '64' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'Fixed left 280px BC.FixedGridColumn side=left  fixedColumn=left fixedColumnWidth={280}'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { style: { backgroundColor: '#eee', height: '64' } },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { side: 'right', fixedColumn: 'left', columnPadding: '20px' },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'Fixed Grid Right Column Padding 20px BC.FixedGridColumn side=right  fixedColumn=left columnPadding="20px"'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: '2', spacingTop: 'base' },
              'gridPush & gridPull'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacingTop: 'base', spacing: 'base' },
              'If design calls for components to fit outside of the grid, use the',
              _react2['default'].createElement(
                'code',
                null,
                'gridPush=number'
              ),
              'and',
              _react2['default'].createElement(
                'code',
                null,
                'gridPull=number'
              ),
              'properties in your',
              _react2['default'].createElement(
                'code',
                null,
                'BC.GridColumn'
              ),
              '. Best practices to execute are to still divise up the row by 12, and add/subtract the difference with either property.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'grid 4'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8, gridPush: 1, position: 'last' },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#eee', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={8} gridPush={1} last={true}'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8, gridPull: 1 },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#eee', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={8} gridPull={1}'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  'div',
                  { style: { backgroundColor: '#ccc', height: '32' } },
                  _react2['default'].createElement(
                    'code',
                    null,
                    'BC.GridColumn gridUnits={4} last={true}'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return article;
})(_react2['default'].Component);

exports['default'] = article;
module.exports = exports['default'];
/* PDP FRAMEWORK ONE - Left FIXED GRID */