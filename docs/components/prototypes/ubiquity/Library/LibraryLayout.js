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

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var LibraryLayout = (function (_React$Component) {
  _inherits(LibraryLayout, _React$Component);

  function LibraryLayout(props) {
    _classCallCheck(this, LibraryLayout);

    _get(Object.getPrototypeOf(LibraryLayout.prototype), 'constructor', this).call(this, props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      fixed: false,
      topPosition: null,
      bottomPosition: null,
      lastScrollPosition: null,
      currentDirection: null
    };
  }

  _createClass(LibraryLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      console.log('library mounted');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      console.log('library unmounted');
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var sideNav = this.refs.sideNav;
      var content = this.refs.content;
      var container = this.refs.container;

      // console.log(window.scrollY, this.state.lastScrollPosition);

      var isAboveComponent = window.scrollY < container.offsetTop;
      var isBelowComponent = window.scrollY + window.innerHeight > container.offsetTop + container.offsetHeight;

      if (isAboveComponent) {
        this.refs.sideNav.style.position = 'relative';
      } else if (isBelowComponent) {
        var distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
        this.refs.sideNav.style.position = 'relative';
        this.refs.sideNav.style.top = distanceFromTop + 'px';
      } else {
        if (this.state.lastScrollPosition > window.scrollY) {
          // console.log('scrolling up', sideNav.getBoundingClientRect().top);
          if (sideNav.getBoundingClientRect().top >= 0) {
            // console.log('hits top of nav');
            this.refs.sideNav.style.position = 'fixed';
            this.refs.sideNav.style.top = 0;
          } else {
            // console.log('not at top of nav');
            var distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
            this.refs.sideNav.style.position = 'relative';
            this.refs.sideNav.style.top = distanceFromTop + 'px';
          }
        } else {
          // console.log('scrolling down', window.innerHeight, sideNav.offsetHeight + sideNav.getBoundingClientRect().top);

          if (window.innerHeight >= sideNav.offsetHeight + sideNav.getBoundingClientRect().top) {
            // console.log('at sidenav bottom');
            this.refs.sideNav.style.position = 'fixed';

            if (window.innerHeight >= sideNav.offsetHeight) {
              this.refs.sideNav.style.top = 0;
              this.refs.sideNav.style.bottom = null;
            } else {
              this.refs.sideNav.style.top = null;
              this.refs.sideNav.style.bottom = 0;
            }
          } else {
            // console.log('not at sidenav bottom');
            var distanceFromTop = sideNav.getBoundingClientRect().top + window.scrollY - this.refs.container.offsetTop;
            this.refs.sideNav.style.position = 'relative';
            this.refs.sideNav.style.top = distanceFromTop + 'px';
          }
        }
      }

      this.setState({
        lastScrollPosition: window.scrollY
      });
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
          { className: 'bc-container bc-spacing-large' },
          _react2['default'].createElement(
            'div',
            {
              className: 'bc-pub-relative bc-pub-clearfix',
              ref: 'container',
              style: {
                paddingLeft: '200px'
              } },
            _react2['default'].createElement(
              'div',
              { ref: 'sideNav', style: {
                  float: 'left',
                  marginLeft: '-200px',
                  width: '200px'
                } },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', paddingSize: 'mini', spacingTop: 'small', spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, textSize: 'small', textCapitalize: true },
                    this.props.title
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textBold: !this.props.filter, url: this.props.type === 'library' ? '/prototypes/brickcity/library' : '/prototypes/brickcity/wishlist', textColor: 'base' },
                      'Everything'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', textBold: this.props.filter === '1', app: true, url: this.props.type === 'library' ? '/prototypes/brickcity/library?filter=1' : '/prototypes/brickcity/wishlist?filter=1' },
                      'Mystery & Thrillers'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', textBold: this.props.filter === '2', app: true, url: this.props.type === 'library' ? '/prototypes/brickcity/library?filter=2' : '/prototypes/brickcity/wishlist?filter=2' },
                      'Sci-Fi & Fantasy'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', paddingSize: 'mini', spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textSize: 'small', textCapitalize: true },
                      'Filter By'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { textAlign: 'right', gridUnits: 6, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textSize: 'mini', textColor: 'base' },
                      'Clear All'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Accordion,
                  { activeRows: 1, titleSize: 'small', titleCapitalize: true, showAllOnload: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Program Types' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Audiobooks'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Periodicals'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Progress' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Everything'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Finished'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Unfinished'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Length' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Under 1 Hour'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          '1-3 Hours'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          '3-6 Hours'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          '6-10 Hours'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          '10-20 Hours'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'base' },
                          'Over 20 Hours'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { ref: 'content', style: {
                  float: 'left',
                  paddingLeft: '20px',
                  width: '100%'
                } },
              this.props.children
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return LibraryLayout;
})(_react2['default'].Component);

exports['default'] = LibraryLayout;
module.exports = exports['default'];