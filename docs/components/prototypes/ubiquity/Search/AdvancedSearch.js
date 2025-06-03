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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var AdvancedSearch = (function (_React$Component) {
  _inherits(AdvancedSearch, _React$Component);

  function AdvancedSearch() {
    _classCallCheck(this, AdvancedSearch);

    _get(Object.getPrototypeOf(AdvancedSearch.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AdvancedSearch, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium', spacingTop: 'medium', textAlign: 'left' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              null,
              'Advanced Search Options'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Form,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Keyword', spacing: 'mini' }),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Title', spacing: 'mini' }),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Author', spacing: 'mini' }),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Narrator or Host', spacing: 'mini' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Provider/Publisher'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All Categories'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Arts & Entertainment'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Bios & Memoirs'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Business'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Classics'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Comedy'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Drama & Poetry'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Erotica & Sexuality'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Fiction'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Health & Fitness'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Any Length'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All Ratings'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All Release Dates'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All Program Types'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Narrated in English'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: false, spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Abridged / Unabridged'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Whispersync for Voice'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Unlimited Title'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Audio Formats',
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large', spacingTop: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Pre-orders'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, gridPush: 4, spacingTop: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'tertiary' },
                      'Clear all'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, gridPull: 2, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', inline: true, app: true, url: "/prototypes/brickcity/search" },
                      'Search'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return AdvancedSearch;
})(_react2['default'].Component);

exports['default'] = AdvancedSearch;
module.exports = exports['default'];