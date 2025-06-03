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

// import ProdHeader from '../Header/ProdHeader';
// import ProdFooter from '../Footer/ProdFooter'

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _layout_eduAEHeaderJs = require("../../layout_edu/AEHeader.js");

var _layout_eduAEHeaderJs2 = _interopRequireDefault(_layout_eduAEHeaderJs);

var _layout_eduAESidebarJs = require("../../layout_edu/AESidebar.js");

var _layout_eduAESidebarJs2 = _interopRequireDefault(_layout_eduAESidebarJs);

var _layout_eduAEFooterJs = require("../../layout_edu/AEFooter.js");

var _layout_eduAEFooterJs2 = _interopRequireDefault(_layout_eduAEFooterJs);

var UpdatesWaffle = (function (_React$Component) {
  _inherits(UpdatesWaffle, _React$Component);

  function UpdatesWaffle() {
    _classCallCheck(this, UpdatesWaffle);

    _get(Object.getPrototypeOf(UpdatesWaffle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(UpdatesWaffle, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { background: '#222222' },
        _react2['default'].createElement(_layout_eduAEHeaderJs2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: '' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'none', spacingTop: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(_layout_eduAESidebarJs2['default'], null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 9, cssClass: 'bc-edu-container' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { background: '#fff', hasBorder: false, paddingSize: 'none', spacingTop: 'extra-large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textSize: 'large', spacing: 'base' },
                      'Amazon English: ',
                      _react2['default'].createElement(
                        'i',
                        null,
                        'Updates'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Design Revisions'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9.3 Jan 22 2016'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Comprehensive review of all components and pages. Image updates and copy changes across the Pattern Library. Final versions designed, not yet implemented.'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement('hr', null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'General updates'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9.2.2 Jan 13 2016'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Styling updates including: Font sizes; Header styles; ',
                        _react2['default'].createElement('br', null),
                        'Footer color and alignment ',
                        _react2['default'].createElement('br', null),
                        'LH navigation scrolling enabled',
                        _react2['default'].createElement('br', null),
                        'Image updates for Buttons, Checkboxes ',
                        _react2['default'].createElement('br', null),
                        'UI bug fixes'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement('hr', null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Styling updates'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9.2.1 Jan 11 2016'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Site-wide styles updated including: Dual/Single Language, Do & Don’t ',
                        _react2['default'].createElement('br', null),
                        'UI bug fixes'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider-edu' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement('hr', null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Copy/Design changes'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9.2 Jan 8 2016'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Copy changes and updated images for numerous components'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement('hr', null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Component updates'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9.1 Jan 5 2016'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Content pushed for remaining components (replacing placeholder copy)'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement('hr', null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Initial release'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'tertiary', textSize: 'mini' },
                          'v0.9 Dec 30 2015'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Site launched ',
                        _react2['default'].createElement('br', null),
                        ' Content for Buttons and Menus pending; all others complete'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_layout_eduAEFooterJs2['default'], null)
      );
    }
  }]);

  return UpdatesWaffle;
})(_react2['default'].Component);

exports['default'] = UpdatesWaffle;
module.exports = exports['default'];
/* Content Section */