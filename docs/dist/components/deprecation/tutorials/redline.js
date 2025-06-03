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
          'Redlining in Brick City'
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'One of the benefits of Brickcity is the new redlining system that should bridge the delta between developer and design language.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          { spacing: 'large' },
          'The redlining system is based around the developer\'s implementation of tags and components.  Elements have a name and one or more parameters that define the appearance of the element along with it\'s semantics.  For redlining purposes the only concern are the visual parameters of the element.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'small', headingLevel: 2 },
          'Elements'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'When defining an element, you should first explicitly state that element, and then write out the necessary parameters along with the parameter\'s value.  So looking at the button in the image, you would write:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { buttonType: 'primary', inline: true, size: 'small' },
              'Add to Cart'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 10, position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'nostyle', textBold: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                'Button'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                'buttonType:primary'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                'inline:true'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                'size:small'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'These parameters can easily be accessed by going to the elements playground. You can see the ',
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { app: true, url: "/elements/Button/" },
            'button playground here'
          ),
          ' for reference. Below is redlined example of this system applied to a layout:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/articles/redlining_tags._V288474293_.jpg' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'small', headingLevel: 2 },
          'Spacing'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'The Brickcity system has a defined set of vertical spacing sizes to create consistency and reduce the complexity of development.  For the developer, the spacing can be applied to most block level elements and to the grid, so there are many ways to implement spacing.  However as a designer, your primary concern is the spacing between the elements and not what element receives the spacing.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'We have created a color-coded spacing system to make it easier for both designers and developers to identify:'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/articles/redlining_spacing._V288474293_.jpg' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'small', headingLevel: 2 },
          'Grids'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          { spacing: 'large' },
          'Giving the developers a page in the pdf with a semi transparent grid overlaid on the top will be very helpful for them to easily identify the grid structure.  Nested grids are more difficult to show without cluttering the redline, but make sure you are positioning your grids in the right place.  To better understand grids and grid usage see the ',
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            null,
            'article explaining the Brickcity grid'
          ),
          '.'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/articles/redlining_grid._V288474293_.jpg' })
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'small', headingLevel: 2 },
          'What if it isn\'t already developed?'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          null,
          'If a component or elements isn\'t already made, then the redlining system needs to revert back to a more detailed version.  See ',
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            null,
            'how to introduce a new element/component to platform'
          ),
          ' to see what should be handed off. But in a nutshell, the redlines should define the specific pixel sizes of the spacing, type, along with colors, and any other detailed redlines.  When it is created and introduced, it can then be referenced like the previous items in this article.'
        )
      );
    }
  }]);

  return article;
})(_react2['default'].Component);

exports['default'] = article;
module.exports = exports['default'];