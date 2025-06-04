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

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var AllCategories = {
  title: ['Mysteries & Thrillers', 'Sci-Fi & Fantasy', 'History', 'Science & Technology', 'Classics', 'Bios & Memoirs', 'Business', 'Self Development', 'Romance', 'Fiction', 'Teens', 'Kids', 'Nonfiction', 'Comedy', 'Foreign Language', 'Kids', 'Erotica & Sexuality', 'Health & Fitness', 'Language Instruction', 'Live Events', 'Newspapers & Magazines', 'Radio & TV', 'Religion & Spirituality', 'Sports', 'Travel & Adventure']
};

var Categories = {
  SciFiFantasy: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Romance: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Fiction: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  Teens: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars'],
  MysteriesThrillers: ['Doctor Who', 'Dramatizations', 'Fantasy: Epic', 'Fantasy: Paranormal', 'Sci-Fi: Classic', 'Sci-Fi: Contemporary', 'Star Trek', 'Star Wars']
};

var filters = [['LANGUAGE', 'English (27697)', 'German (3266)', 'Spanish (800)', 'Italian (598)', 'French (455)', 'More Languages'], ['PROGRAM TYPE', 'Audiobook (27612)', 'Performance (3266)', 'Speech (800)', 'Periodical (598)', 'Lecture (455)', 'More Languages'], ['PROGRAM FORMAT', 'Unabridged (27697)', 'Abridged (3266)', 'Original (800)', 'Highlights (598)'], ['LENGTH', 'Under 1 Hour (4)', '1-3 Hours (3)', '3-6 Hours (1)', '6-10 Hours (6)', '10-20 Hours (5)', 'More Languages'], ['RELEASE DATE', 'Whispersync for Voice (6)']];

var BrowseSearch = (function (_React$Component) {
  _inherits(BrowseSearch, _React$Component);

  function BrowseSearch(props) {
    _classCallCheck(this, BrowseSearch);

    _get(Object.getPrototypeOf(BrowseSearch.prototype), 'constructor', this).call(this, props);
    this.state = {
      selected: null,
      height: null,
      lockBottom: false,
      lockTop: false,
      lastScrollPosition: null

    };
  }

  _createClass(BrowseSearch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {

      var menuHeight = _react2['default'].findDOMNode(this).scrollHeight;
      var marginTop = 160;
      var windowHeight = window.innerHeight;
      var hiddenMenu = menuHeight - windowHeight;
      var ScrollPos = window.scrollY;

      if (this.state.lastScrollPosition > ScrollPos && this.state.lockBottom == true) {
        if (ScrollPos <= marginTop + hiddenMenu) {
          this.setState({
            lockBottom: false
          });
        } else {
          this.setState({
            lockBottom: true
          });
        }
      } else {
        if (ScrollPos > marginTop && menuHeight < windowHeight) {
          this.setState({
            lockTop: true,
            lockBottom: true,
            height: menuHeight,
            lastScrollPosition: ScrollPos
          });
        }
        if (menuHeight > windowHeight && ScrollPos >= hiddenMenu + marginTop) {
          this.setState({
            lockTop: false,
            lockBottom: true,
            height: menuHeight,
            lastScrollPosition: ScrollPos
          });
        }
        if (ScrollPos < marginTop) {
          this.setState({
            lockBottom: false,
            lockTop: false,
            lastScrollPosition: ScrollPos
          });
        }
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(CategoryTitle) {
      this.setState({
        selected: CategoryTitle
      });
    }
  }, {
    key: 'renderAllCategories',
    value: function renderAllCategories() {
      var data = [];

      for (var x = 0; x <= AllCategories.title.length - 16; x++) {
        data.push(x);
      }

      var rowMap = data.map(function (index) {
        return _react2['default'].createElement(
          _AudibleUITags2['default'].ListItem,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            AllCategories.title[index]
          )
        );
      });
      return rowMap;
    }
  }, {
    key: 'renderAllCategoriesExpander',
    value: function renderAllCategoriesExpander() {
      var data = [];

      for (var x = 10; x <= AllCategories.title.length - 1; x++) {
        data.push(x);
      }

      var rowMap = data.map(function (index) {
        return _react2['default'].createElement(
          _AudibleUITags2['default'].ListItem,
          { spacing: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            AllCategories.title[index]
          )
        );
      });
      return rowMap;
    }
  }, {
    key: 'renderCategory',
    value: function renderCategory() {
      var _this = this;

      var Category = Categories.SciFiFantasy.map(function (Category) {
        return _react2['default'].createElement(
          _AudibleUITags2['default'].ListItem,
          { spacing: 'mini' },
          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            {
              onClick: _this.handleClick.bind(_this, Category),
              textColor: _this.state.selected === Category ? "active" : "base" },
            [Category]
          )
        );
      }, this);

      return Category;
    }
  }, {
    key: 'renderFilter',
    value: function renderFilter() {
      var data = [];
      for (var i = 0; i < filters.length; i++) {
        var filterTitle = filters[i];
        var j = 0;
        data.push(filterTitle[j]);
        console.log("filterTitle[" + i + "][" + j + "] = " + filterTitle[j]);
      }

      var rowFilterTitle = data.map(function (title, filter) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Expander,
            { spacing: 'mini', anchor: true, showText: [title], hideText: [title], textBold: true },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'nostyle', spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Audiobook (27612)'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Performance (3266)'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Speech (800)'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Periodical (598)'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'Lecture (455)'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add' }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary' },
                  'See More'
                )
              )
            )
          )
        );
      });
      return rowFilterTitle;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { style: {
            width: "220px",
            top: this.state.lockTop ? "0" : "auto",
            position: this.state.lockBottom ? "fixed" : "relative",
            bottom: this.state.lockBottom ? "0" : "auto",
            left: this.state.lockBottom ? "50%" : "auto",
            marginLeft: this.state.lockBottom ? "-500px" : "auto" } },
        this.props.allcategories ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'secondary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'small', textCapitalize: true, textBold: true },
                  'Categories'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                this.renderAllCategories()
              ),
              this.props.hasExpander ? _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { anchor: false, hideText: 'See Less', showText: 'See More' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  this.renderAllCategoriesExpander()
                )
              ) : null
            )
          )
        ) : null,
        this.props.categories ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'secondary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'small', textCapitalize: true, textBold: true },
                  'Categories'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { linkType: 'nav', app: true, url: this.props.categoryUrl },
                  'All Categories'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'small', textCapitalize: true },
                    AllCategories.title[1]
                  )
                ),
                this.renderCategory()
              )
            )
          )
        ) : null,
        this.props.filters ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini', textSize: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textCapitalize: true, textBold: true },
                  'Filter By'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last', textAlign: 'right', textSize: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Clear all'
                )
              )
            ),
            this.renderFilter()
          )
        ) : null
      );
    }
  }]);

  return BrowseSearch;
})(_react2['default'].Component);

BrowseSearch.PropTypes = {
  id: _react.PropTypes.string,
  allcategories: _react.PropTypes.bool,
  categories: _react.PropTypes.bool,
  subcategories: _react.PropTypes.bool,
  categoryUrl: _react.PropTypes.string,
  filters: _react.PropTypes.bool,
  hasExpander: _react.PropTypes.bool
};

exports['default'] = BrowseSearch;
module.exports = exports['default'];