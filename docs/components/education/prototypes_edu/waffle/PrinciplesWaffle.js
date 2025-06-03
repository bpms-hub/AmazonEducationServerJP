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

var PrinciplesWaffle = (function (_React$Component) {
  _inherits(PrinciplesWaffle, _React$Component);

  function PrinciplesWaffle() {
    _classCallCheck(this, PrinciplesWaffle);

    _get(Object.getPrototypeOf(PrinciplesWaffle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PrinciplesWaffle, [{
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
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'large', textColor: 'base' },
                      'Project Waffle - ',
                      _react2['default'].createElement(
                        'i',
                        null,
                        'Principles'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'base', textColor: 'edu_base' },
                      'English is the entertaining and effective way to improve English communication skills with interesting, real world content. Unlike traditional EFL methods, Amazon English provides instant access to thousands of enjoyable real-world English titles that can improve communication fluency through “extensive” reading and listening.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', linkType: 'nav', app: false, url: '#overview' },
                          'Guiding Principles'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', app: false, url: '#primary-button' },
                          'UI Voice / Tone Principles'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', linkType: 'nav', app: false, url: '#small-button' },
                          'UI Copy Basics'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'large' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', linkType: 'nav', app: false, url: '#text-button' },
                          'Guidelines for Dual Language'
                        )
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
                        _AudibleUITags2['default'].Text,
                        { textBold: true, textColor: 'base' },
                        'Guiding Principles'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            '1. Guide Me: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'English is the entertaining and effective way to improve English communication skills with interesting.'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            '2. Guide Me: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'English is the entertaining and effective way to improve English communication skills with interesting.'
                          )
                        )
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
                        _AudibleUITags2['default'].Text,
                        { textBold: true, textColor: 'base' },
                        'UI Voice / Tone Principles'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'Based on the following sources:'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Amazon English Sell Sheet'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Amazon and Audible branding guides'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Meetings with Midori & Maki, Mark, discussions with the team as a whole'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'Who is Amazon English?'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'Think of the Amazon English personality as a kind, wise uncle or cousin. We want to reduce the fear and anxiety around English language learning, helping our users to expand their horizons in a supportive environment.'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'How would we describe Amazon English\' tone or voice?'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Friendly - NOT super-hip and zany'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Encouraging - NOT condescending, as if the user were a child'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Capable - NOT detached and aloof'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'NOT'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '“Hooray, you finished this title!”'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '“Wow, you finished this title! Way to go!”'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '“Select your most recent test score so we can set your beginning level”'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '“Enter test score here.”'
                          )
                        )
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
                        _AudibleUITags2['default'].Text,
                        { textBold: true, textColor: 'base' },
                        'UI Copy Basics'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Context: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'understand the time and place for marketing language (emotionally driven, appealing, more voice-y) and UI copy (strictly navigational/instructional, less-voicey).'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Clarity: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'be direct and specific about what the user needs to do or understand; start with the verb/action wherever possible ("Enter your test score so we can set your level"; "Tap here to get help choosing").'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Brevity: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'no superfluous words—balance brand voice with very clear, concise instructions; use a “!" rarely and only if there’s a good reason for it.'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Universality: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'this should be globally intuitive - no buzzwords, puns, slang.'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Consistency: '
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'refer to features, actions (swipe, drag, tap, click, etc.), and the user the same way every time (if a button is in 1st person point of view, i.e. “Get My Free Book”, then don’t have another button say “Start Your Free Trial”).'
                          )
                        )
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
                        _AudibleUITags2['default'].Text,
                        { textBold: true, textColor: 'base' },
                        'Guidelines for Dual Language'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'Elements with Japanese Only'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'ordered', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Long sentences on toasts, widgets and panels (To reduce the cognitive load of reading sentences/questions in two languages and then try to make relationships among words and phrases)'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'ASIN Metadata on “Categories” page'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'ASIN Metadata inside a category'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Metadata and Learners\' Summary on PDP'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: true },
                          'Elements with Dual Language'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'ordered', spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'UI labels where 1-3 words are being used (i.e. “Categories”/"Start Listening")'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'All Menus items'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'All primary and secondary action buttons'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'All action buttons on toasts'
                          )
                        )
                      )
                    )
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

  return PrinciplesWaffle;
})(_react2['default'].Component);

exports['default'] = PrinciplesWaffle;
module.exports = exports['default'];
/* Content Section */ /* Guiding Principles */ /* UI VOICE/TONE PRINCIPLES */ /* UI COPY BASICS */ /* UI COPY BASICS */