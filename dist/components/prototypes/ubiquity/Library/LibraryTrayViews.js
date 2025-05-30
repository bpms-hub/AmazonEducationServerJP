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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _RecommendationsCarousel = require('./RecommendationsCarousel');

var _RecommendationsCarousel2 = _interopRequireDefault(_RecommendationsCarousel);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var LibraryTrayViews = (function (_React$Component) {
  _inherits(LibraryTrayViews, _React$Component);

  function LibraryTrayViews(props) {
    _classCallCheck(this, LibraryTrayViews);

    _get(Object.getPrototypeOf(LibraryTrayViews.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentTrayView: 1
    };
  }

  _createClass(LibraryTrayViews, [{
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { textColor: 'secondary' },
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example4' },
          this.state.currentTrayView === 1 && _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'medium', backgroundColor: 'base', heightCss: '285px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                this.props.showAsin && _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3 },
                  _react2['default'].createElement(_cc2['default'].Asin, { product: this.props.product })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: this.props.showAsin ? 9 : 12, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'micro' },
                    this.props.product.title,
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    this.props.product.complete ? _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', inline: 'true', size: 'small' },
                      'Marked as Finished'
                    ) : _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { inline: 'true', size: 'small' },
                      'Mark as Finished'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'by'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    this.props.product.authors.map(function (author, index, originalArr) {
                      return _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        index + 1 >= originalArr.length ? author.name : author.name + ', '
                      );
                    })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: this.props.showAsin ? 6 : 7 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Narrated by:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          this.props.product.narrators.map(function (narrator, index, originalArr) {
                            return _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              null,
                              index + 1 >= originalArr.length ? narrator.name : narrator.name + ', '
                            );
                          })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Duration:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          Math.floor(this.props.product.runtime_length_min / 60),
                          ' hrs ',
                          this.props.product.runtime_length_min % 60,
                          ' mins'
                        ),
                        this.props.product.publication_name && _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Series:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            this.props.product.publication_name
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 1 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: this.props.showAsin ? 5 : 4, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { cssClass: 'bc-inline-block', listType: 'nostyle', spacingTop: 'mini', spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'download', onClick: function () {
                              return _this.setState({ currentTrayView: 2 });
                            }, label: 'Download' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'star-hollow', onClick: function () {
                              return _this.setState({ currentTrayView: 3 });
                            }, label: 'Rate & Review' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'mini' },
                          _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'whispersync', onClick: function () {
                              return _this.setState({ currentTrayView: 4 });
                            }, label: 'Buy matching Kindle book' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'file', label: 'Download PDF' })
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(_RecommendationsCarousel2['default'], { product: this.props.product })
          )
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example3' },
          this.state.currentTrayView === 2 && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'medium', backgroundColor: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: function () {
                    return _this.setState({ currentTrayView: 1 });
                  }, textColor: 'base' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', iconSize: 'large', verticalAlign: 'top' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Download Options'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 7 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini' },
                  this.props.product.title
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 5, position: 'last', textAlign: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Audio Quality'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Enhanced'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'test'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'test'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'test'
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Table,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    this.props.product.title
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  '00h 00m'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Deliver to...'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'test'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'test'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'test'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { disabled: true },
                    'Deliver'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary' },
                    'Download'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Expander,
              { anchor: true, hideText: 'Hide', showText: 'Download in Parts' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Table,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Part 1'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    '00h 00m'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Deliver to...'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      null,
                      'Deliver'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary' },
                      'Download'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Part 2'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    '00h 00m'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Deliver to...'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      null,
                      'Deliver'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary' },
                      'Download'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Part 3'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    '00h 00m'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Deliver to...'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'test'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      null,
                      'Deliver'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary' },
                      'Download'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example3' },
          this.state.currentTrayView === 3 && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'medium', backgroundColor: 'base', heightCss: '480px' },
            _react2['default'].createElement(
              'div',
              { className: 'bc-pub-relative', style: {
                  height: '100%'
                } },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { onClick: function () {
                      return _this.setState({ currentTrayView: 1 });
                    }, textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', iconSize: 'large', verticalAlign: 'top' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Rate and Review'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'secondary', spacing: 'medium' },
                this.props.product.title
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textColor: 'secondary', spacing: 'base' },
                'Click to rate this title'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'mini' },
                    'Overall'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'mini' },
                    'Performance'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'mini' },
                    'Story'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].RatingSelector, null)
                )
              ),
              _react2['default'].createElement(
                'div',
                { style: {
                    bottom: 0,
                    position: 'absolute',
                    right: 0
                  } },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Write a Review'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example3' },
          this.state.currentTrayView === 4 && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'medium', backgroundColor: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: function () {
                    return _this.setState({ currentTrayView: 1 });
                  }, textColor: 'base' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', iconSize: 'large', verticalAlign: 'top' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Get the kindle companion'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'base' },
              'Whispersync for Voice lets you seamlessly switch back and forth between listening and reading without ever losing your place.'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', imageHeight: '170px', source: this.props.product.product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', textColor: 'secondary' },
                  'Kindle Edition'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'mini' },
                  this.props.product.title
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  this.props.product.authors.map(function (author, index, originalArr) {
                    return _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      index + 1 >= originalArr.length ? author.name : author.name + ', '
                    );
                  })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  'Sold and delivered by Amazon.com'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary' },
                  'Buy on Amazon.com'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _reactAddonsCssTransitionGroup2['default'],
          { transitionName: 'example3' },
          this.state.currentTrayView === 5 && _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'medium', backgroundColor: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { onClick: function () {
                  return _this.setState({ currentTrayView: 1 });
                } },
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', iconSize: 'large' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'base' },
              'The New Yorker, 12-Month Subscription'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', imageHeight: '100%', source: this.props.product.product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 11, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: 3 },
                  'Can the G.O.P. Deal with Inequality?'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'In Progress'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'George Packer'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    '00h 00m'
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', imageHeight: '100%', source: this.props.product.product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 11, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: 3 },
                  'Can the G.O.P. Deal with Inequality?'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'In Progress'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'George Packer'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    '00h 00m'
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', imageHeight: '100%', source: this.props.product.product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 11, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: 3 },
                  'Can the G.O.P. Deal with Inequality?'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'In Progress'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    'George Packer'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    '00h 00m'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LibraryTrayViews;
})(_react2['default'].Component);

LibraryTrayViews.PropTypes = {
  product: _react.PropTypes.object,
  showAsin: _react.PropTypes.bool
};

exports['default'] = LibraryTrayViews;
module.exports = exports['default'];