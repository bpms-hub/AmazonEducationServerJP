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

var _cc = require('./cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('./Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('./Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var WriteReview = (function (_React$Component) {
  _inherits(WriteReview, _React$Component);

  function WriteReview(props) {
    _classCallCheck(this, WriteReview);

    _get(Object.getPrototypeOf(WriteReview.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1",
      ratingClicks: 0
    };
  }

  _createClass(WriteReview, [{
    key: 'numClicks',
    value: function numClicks() {
      this.state.ratingClicks++;

      if (this.state.ratingClicks === 3) {
        this.setState({
          activeElement: "step2"
        });
      } else {
        this.setState({
          activeElement: "step1"
        });
      }
    }
  }, {
    key: 'changeOpacity',
    value: function changeOpacity(element) {

      if (this.state.activeElement === element && element != "step3a") {
        this.setState({
          activeElement: null
        });
      } else {
        this.setState({
          activeElement: element
        });
      }
    }
  }, {
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
            { spacingTop: 'medium' },
            _react2['default'].createElement(_cc2['default'].ProductListingColumn2, {
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 1 },
              _react2['default'].createElement(_cc2['default'].Step, { activeState: true, number: '1' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 7 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'micro' },
                'Please rate this title:'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Overall'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { onClick: this.numClicks.bind(this) },
                    _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Performance'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { onClick: this.numClicks.bind(this) },
                    _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Story'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { onClick: this.numClicks.bind(this) },
                    _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(this.state.activeElement === "step1" ? "bc-block" : "bc-hidden") },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { hasBorder: true, paddingSize: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Ratings'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'mini' },
                    'You can rate a Title\'s story and performance as well as the overall experience.'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])(this.state.activeElement != "step1" ? "bc-block" : "bc-faded") },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1 },
                _react2['default'].createElement(_cc2['default'].Step, { activeState: this.state.activeElement != "step1" ? true : false, number: '2' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 7 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true, spacing: 'micro' },
                    'Enter a headline for your review: '
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'small', textColor: 'tertiary' },
                    '(maximum 50 characters)'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'base', onKeyUp: this.changeOpacity.bind(this, "step3a") })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, position: 'last' },
                _react2['default'].createElement(
                  'div',
                  { className: (0, _classnames2['default'])(this.state.activeElement === "step2" ? "bc-block" : "bc-hidden") },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: true, paddingSize: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Stand out from the crowd!'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'mini' },
                      'Your opinion counts. Give readers an idea of what to expect with a descriptive headline.'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])(this.state.activeElement === "step3a" || this.state.activeElement === "step3b" ? "bc-block" : "bc-faded") },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1 },
                _react2['default'].createElement(_cc2['default'].Step, { activeState: this.state.activeElement === "step3a" || this.state.activeElement === "step3b" ? true : false, number: '3' })
              ),
              _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(this.state.activeElement === "step3a" ? "bc-block" : [this.state.activeElement === "step3b" ? "bc-hidden" : "bc-faded"]) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 7 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Write your review by answering the following questions: '
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small', textColor: 'tertiary' },
                      '(minimum 15 words and 25 characters)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'What did you like about this audiobook?'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'How has the book increase your interest in the subject matter?'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Does the author present information in a way that is interesting and insightful, and if so, how does he achieve this?'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'What did you find wrong about the narrato\'s performance?'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Do you have any additional comments?'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'micro' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, position: 'last' },
                  _react2['default'].createElement(
                    'div',
                    { className: (0, _classnames2['default'])(this.state.activeElement != "step3a" || this.state.activeElement === "step3b" ? "bc-hidden" : "bc-block") },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: true, paddingSize: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          'Guidend Review'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'mini' },
                          'Don\'t worry we\'ve saved the information from the last screen. If you decide to go back just click this button.'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { size: 'small', onClick: this.changeOpacity.bind(this, "step3b") },
                        'Switch to Freeform'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])(this.state.activeElement === "step3b" ? "bc-block" : "bc-hidden") },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 7 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Write your review in the space below: '
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small', textColor: 'tertiary' },
                      '(minimum 15 words and 25 characters)'
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, { spacing: 'micro', heightCss: '200px' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: true, paddingSize: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3 },
                        'Freeform Review'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'mini' },
                        'Would you prefer to write a guided review?'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { size: 'small', onClick: this.changeOpacity.bind(this, "step3a") },
                      'Switch to Guided'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'extra-large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, gridPush: 1 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textBold: true },
                  'Please note: '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'tertiary', textSize: 'small', spacing: 'base' },
                  'Audible posts reviews at its discretion. All the submitted reviews become the property of Audible.com as set forth in our ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Conditions of Use'
                  ),
                  '. In most cases, reviews will be processed for display in one or two days.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: '/prototypes/brickcity/write-review' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'secondary' },
                      'Cancel'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, gridPull: 8, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary' },
                    'Preview'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_FooterProdFooter2['default'], null)
        )
      );
    }
  }]);

  return WriteReview;
})(_react2['default'].Component);

exports['default'] = WriteReview;
module.exports = exports['default'];