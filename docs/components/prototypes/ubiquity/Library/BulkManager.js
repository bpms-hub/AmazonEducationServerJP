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

var _GridViewLibrary = require('./GridViewLibrary');

var _GridViewLibrary2 = _interopRequireDefault(_GridViewLibrary);

var _ListViewLibrary = require('./ListViewLibrary');

var _ListViewLibrary2 = _interopRequireDefault(_ListViewLibrary);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _dataPrototypesWishlistJson = require('../../../../data/prototypes/wishlist.json');

var _dataPrototypesWishlistJson2 = _interopRequireDefault(_dataPrototypesWishlistJson);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var BulkManager = (function (_React$Component) {
  _inherits(BulkManager, _React$Component);

  function BulkManager(props, context) {
    _classCallCheck(this, BulkManager);

    _get(Object.getPrototypeOf(BulkManager.prototype), 'constructor', this).call(this, props, context);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      activeBook: 0,
      currentView: 'grid',
      bulkSelectedItems: [],
      data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(0, 8) : _dataPrototypesWishlistJson2['default'].slice(0, 8),
      actionBarFixed: false,
      actionBarWidth: null,
      showSearchClear: false,
      activeAlert: false,
      filter: this.props.filter
    };
  }

  _createClass(BulkManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.debounce = debounce(function (e) {
        var currentSearch = e.target.value;
        var newData = _dataPrototypesProductsJson2['default'];

        var filteredData = newData.filter(function (value) {
          return value.title.indexOf(currentSearch) > -1;
        });

        this.setState({
          data: currentSearch ? filteredData : _dataPrototypesProductsJson2['default']
        });
      }, 500);

      // this.setState({
      //   filter: this.props.location.query.filter,
      // });

      console.log('bulk mounted');
      if (this.props.filter == "1") {
        this.setState({
          data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(0, 3) : _dataPrototypesWishlistJson2['default'].slice(0, 3)
        });
      } else if (this.props.filter == "2") {
        this.setState({
          data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(4, 7) : _dataPrototypesWishlistJson2['default'].slice(4, 7)
        });
      } else {
        this.setState({
          data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(0, 8) : _dataPrototypesWishlistJson2['default'].slice(0, 8)
        });
      }

      this.setState({
        actionBarWidth: this.refs.actionBarContainer.offsetWidth
      });

      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log(this.state.filter == this.props.filter, 'filter state');

      if (this.state.filter != this.props.filter) {
        if (this.props.filter == "1") {
          this.setState({
            data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(0, 3) : _dataPrototypesWishlistJson2['default'].slice(0, 3)
          });
        } else if (this.props.filter == "2") {
          this.setState({
            data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(4, 7) : _dataPrototypesWishlistJson2['default'].slice(4, 7)
          });
        } else {
          this.setState({
            data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'].slice(0, 8) : _dataPrototypesWishlistJson2['default'].slice(0, 8)
          });
        }
        this.setState({
          filter: this.props.filter
        });
      } else {
        return false;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'loadMore',
    value: function loadMore() {
      this.setState({
        data: this.props.ownershipState === 'owned' ? _dataPrototypesProductsJson2['default'] : _dataPrototypesWishlistJson2['default']
      });
    }
  }, {
    key: 'onChangeSearchFilter',
    value: function onChangeSearchFilter(e) {
      e.persist();
      this.debounce(e);

      this.setState({
        showSearchClear: e.target.value.length > 0 ? true : false
      });
    }
  }, {
    key: 'onClickSearchClear',
    value: function onClickSearchClear() {
      this.refs.searchFilter.value = null;

      this.setState({
        data: _dataPrototypesProductsJson2['default'],
        showSearchClear: false
      });
    }
  }, {
    key: 'setActiveBook',
    value: function setActiveBook(index) {
      this.setState({
        activeBook: index
      });
    }
  }, {
    key: 'toggleView',
    value: function toggleView(viewType) {
      this.setState({
        currentView: viewType
      });
    }
  }, {
    key: 'toggleBulkSelectAll',
    value: function toggleBulkSelectAll(e) {
      var isChecked = e.target.checked;

      var bulkSelectArray = [];

      for (var i = 0; i < this.state.data.length; i++) {
        bulkSelectArray.push(i);
      }

      this.setState({
        bulkSelectedItems: !isChecked ? [] : bulkSelectArray
      });
    }
  }, {
    key: 'toggleBulkSelectItem',
    value: function toggleBulkSelectItem(index, e) {
      var newBulkGroup = this.state.bulkSelectedItems;

      if (e.target.checked) {
        newBulkGroup.push(index);

        this.setState({
          bulkSelectedItems: newBulkGroup
        });
      } else {
        newBulkGroup.splice(newBulkGroup.indexOf(index), 1);

        this.setState({
          bulkSelectedItems: newBulkGroup
        });
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (this.refs.actionBarContainer.getBoundingClientRect().top < 0) {
        this.refs.actionBar.style.position === 'fixed' ? null : this.refs.actionBar.style.position = 'fixed';
        // this.state.actionBarFixed ? false : this.setState({ actionBarFixed: true });
      } else {
          this.refs.actionBar.style.position === 'absolute' ? null : this.refs.actionBar.style.position = 'absolute';
          // !this.state.actionBarFixed ? false : this.setState({ actionBarFixed: false });   
        }
    }
  }, {
    key: 'triggerToast',
    value: function triggerToast(alert) {
      var _this = this;

      this.setState({
        alertActive: alert
      });

      setTimeout(function () {
        _this.setState({
          alertActive: false
        });
      }, 8000, this);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            this.props.title
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'tertiary', textSize: 'base' },
            '(',
            this.state.data.length,
            ')'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'small' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3 },
            _react2['default'].createElement(
              'div',
              { className: 'bc-pub-relative bc-pub-inline-block' },
              _react2['default'].createElement(
                'span',
                { style: {
                    marginTop: '-11px',
                    position: 'absolute',
                    top: '50%',
                    left: 0
                  } },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'search' })
              ),
              _react2['default'].createElement('input', {
                onChange: this.onChangeSearchFilter.bind(this),
                ref: 'searchFilter',
                placeholder: this.props.ownershipState === "unowned" ? "Search Wishlist" : this.props.ownershipState === "preordered" ? "Search Pre-orders" : "Search Library",
                style: {
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  height: '36px',
                  outline: 'none',
                  padding: '0 20px'
                } }),
              this.state.showSearchClear && _react2['default'].createElement(
                'span',
                { style: {
                    marginTop: '-11px',
                    position: 'absolute',
                    top: '50%',
                    right: 0
                  } },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close', onClick: this.onClickSearchClear.bind(this) })
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, textAlign: 'right', position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { inline: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Most Recent'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Title'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Author'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Narrator'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Length'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Overall Rating'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'My Rating'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Downloaded'
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].PopoverTrigger,
              { tooltip: 'Grid View', tooltipSide: 'top' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { textColor: this.state.currentView === 'grid' ? 'active' : 'base', onClick: this.toggleView.bind(this, 'grid') },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 24, iconType: 'grid' })
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].PopoverTrigger,
              { tooltip: 'List View', tooltipSide: 'top' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { textColor: this.state.currentView === 'list' ? 'active' : 'base', onClick: this.toggleView.bind(this, 'list') },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 24, iconType: 'list' })
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          {
            ref: 'actionBarContainer',
            className: 'bc-pub-relative' },
          _react2['default'].createElement('div', { style: { height: '53px' } }),
          _react2['default'].createElement(
            'div',
            {
              ref: 'actionBar',
              style: {
                backgroundColor: 'rgba(255,255,255,0.95)',
                position: 'absolute',
                top: 0,
                width: this.state.actionBarWidth,
                zIndex: 4
              } },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { padding: 'small', paddingTop: 'small', backgroundColor: 'secondary', textColor: 'base' },
              this.state.bulkSelectedItems.length === 0 && _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2 },
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: this.state.bulkSelectedItems.length > 0, onChange: this.toggleBulkSelectAll.bind(this), label: this.state.currentView === 'grid' ? 'Select All' : null })
              ),
              this.state.bulkSelectedItems.length > 0 && _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: this.state.bulkSelectedItems.length > 0, onChange: this.toggleBulkSelectAll.bind(this), label: this.state.currentView === 'grid' ? 'Select All' : null }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
              ),
              this.state.bulkSelectedItems.length === 0 && this.state.currentView === 'list' && _react2['default'].createElement(
                'span',
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Title'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Author'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Narrator'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 1 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    this.props.ownershipState === 'owned' && 'Duration',
                    this.props.ownershipState === 'preordered' && 'Release',
                    this.props.ownershipState === 'unowned' && 'Price'
                  )
                )
              ),
              this.state.bulkSelectedItems.length > 0 && _react2['default'].createElement(
                'span',
                { className: this.state.bulkSelectedItems.length > 0 ? null : 'bc-disabled' },
                this.props.ownershipState === 'owned' && _react2['default'].createElement(
                  'span',
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'check', onClick: this.triggerToast.bind(this, 1), label: 'Mark as Finished' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
                ),
                this.props.ownershipState === 'preordered' && _react2['default'].createElement(
                  'span',
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'close', onClick: this.triggerToast.bind(this, 4), label: 'Cancel Pre-order' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
                ),
                this.props.ownershipState === 'unowned' && _react2['default'].createElement(
                  'span',
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'trash', onClick: this.triggerToast.bind(this, 2), label: 'Remove' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextButton, { iconType: 'cart', onClick: this.triggerToast.bind(this, 3), label: 'Add to Cart' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
                )
              )
            )
          )
        ),
        this.state.currentView === 'grid' && _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacingTop: 'small' },
          _react2['default'].createElement(_GridViewLibrary2['default'], {
            ownershipState: this.props.ownershipState,
            onChangeBulkSelector: this.toggleBulkSelectItem.bind(this),
            onClickTrayClose: this.setActiveBook.bind(this, null),
            onClickQuickview: this.setActiveBook.bind(this),
            activeBook: this.state.activeBook,
            bulkSelectedItems: this.state.bulkSelectedItems,
            products: this.state.data })
        ),
        this.state.currentView === 'list' && _react2['default'].createElement(_ListViewLibrary2['default'], {
          ownershipState: this.props.ownershipState,
          onChangeBulkSelector: this.toggleBulkSelectItem.bind(this),
          onClickTrayClose: this.setActiveBook.bind(this, null),
          onClickQuickview: this.setActiveBook.bind(this),
          activeBook: this.state.activeBook,
          bulkSelectedItems: this.state.bulkSelectedItems,
          products: this.state.data }),
        _react2['default'].createElement(_cc2['default'].InfiniteScroll, { onClick: this.loadMore.bind(this) }),
        this.state.alertActive === 1 && _react2['default'].createElement(_cc2['default'].ToastAlert, {
          actionText: 'Undo',
          message: 'X items marked as finished' }),
        this.state.alertActive === 2 && _react2['default'].createElement(_cc2['default'].ToastAlert, {
          actionText: 'Undo',
          message: 'X items removed from wishlist' }),
        this.state.alertActive === 3 && _react2['default'].createElement(_cc2['default'].ToastAlert, {
          actionText: 'Undo',
          message: 'X items added to the cart' }),
        this.state.alertActive === 4 && _react2['default'].createElement(_cc2['default'].ToastAlert, {
          actionText: 'Undo',
          message: 'X pre-orders have been cancelled' })
      );
    }
  }]);

  return BulkManager;
})(_react2['default'].Component);

BulkManager.PropTypes = {
  title: _react.PropTypes.string,
  filter: _react.PropTypes.number,
  ownershipState: _react.PropTypes.string
};

BulkManager.defaultProps = {
  ownershipState: 'unowned'
};

BulkManager.contextTypes = {
  location: _react2['default'].PropTypes.object
};

exports['default'] = BulkManager;
module.exports = exports['default'];