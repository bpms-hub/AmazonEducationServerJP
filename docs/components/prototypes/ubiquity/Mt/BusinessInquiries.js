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

var BusinessInquiries = (function (_React$Component) {
  _inherits(BusinessInquiries, _React$Component);

  function BusinessInquiries() {
    _classCallCheck(this, BusinessInquiries);

    _get(Object.getPrototypeOf(BusinessInquiries.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BusinessInquiries, [{
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
            _AudibleUITags2['default'].Heading,
            { spacing: 'medium' },
            'We\'re great listeners, too.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Customer Care Support'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity/contact" },
                  'Click here to Contact Us 24/7'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'none' },
                'For answers to technical problems, go to our ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Help Center'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'For Customer Care email inquiries, ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'ask us a question'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Mailing Address'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Audible Headquarters'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'One Washington Park',
                _react2['default'].createElement('br', null),
                ' Newark, NJ 07102'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Audible MA'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'medium' },
                '101 Main st.',
                _react2['default'].createElement('br', null),
                ' 5th floor, Audible',
                _react2['default'].createElement('br', null),
                ' Cambridge, MA 02142'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Press Relations'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Press Inquiries'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'medium' },
                'If you are a member of the press and would like to speak with Audible\'s press representative, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:publicrelations@audible.com' },
                  'publicrelations@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Business & Marketing '
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Business Development'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you are interested in discussing a possible business alliance or partnership with Audible, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:bizdev@audible.com' },
                  'bizdev@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Advertising or Marketing'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you are interested in featuring Audible advertisements on your site or other media properties, or if you would like to discuss co-marketing opportunities, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:marketing@audible.com' },
                  'marketing@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Domestic Content Partners'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you or your company publish audiobooks in the United States, and would like to sell through Audible\'s channels, please ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'click here'
                ),
                ' to learn how you can become an Audible partner. Please keep in mind that since Audible listeners pay for the titles they buy here, we prefer not to carry content (whether audiobooks or podcasts) offered free elsewhere on the Web.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'International Content Partners'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you or your company publishes audiobooks OUTSIDE of the United States, and you would like to sell through Audible\'s channels, please send an email to ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:internationalpartner@audible.com.' },
                  'internationalpartner@audible.com.'
                ),
                ' In your email, please describe the genre and length of your audiobooks, and let us know how many titles you currently have and how many you\'ll publish over the next six months. Please keep in mind that since Audible listeners pay for the titles they download here, we prefer not to carry content (whether audiobooks or podcasts) offered free elsewhere on the Web.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Current Content Partners'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you are a current Content Partner and have questions about payments and sales reports, please email us at: royalties@audible.com. For all other questions, please email us at:',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:partnerrelations@audible.com' },
                  'partnerrelations@audible.com'
                ),
                '.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Affiliates'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'medium' },
                'If you are interested in joining Audible\'s affiliate program, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:affiliate@audible.com' },
                  'affiliate@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Voice Talent'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you\'re interested in becoming an audiobook narrator, please email ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:readers@audible.com' },
                  'readers@audible.com'
                ),
                ' and include:'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Two-minute MP3 clip of your audiobook narration (i.e., not commercials or radio demos)'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'List of books you\'ve narrated, if any. Indicate which, if any, are being sold on Audible.com'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Link to your website, if available'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Contact information including the city and state where you\'re located'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Feedback'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Book Requests'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you\'re interested in a particular author or title, please let us know about it by sending an email to: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:content-requests@audible.com' },
                  'content-requests@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Great Ideas'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'If you have a great idea about how to improve Audible\'s website or service, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:greatideas@audible.com' },
                  'greatideas@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Testimonials'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'medium' },
                'If you would like to share your story about how and when you use Audible, email us at ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:whereilisten@audible.com' },
                  'whereilisten@audible.com'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Job Openings '
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'We\'re looking for bright, energetic, and creative people who like the idea of building for the future. Submit your resume to ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:jobs@audible.com' },
                  'jobs@audible.com'
                ),
                '.'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'View all job openings'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'small' },
                'Follow Us!'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Facebook'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Twitter'
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

  return BusinessInquiries;
})(_react2['default'].Component);

exports['default'] = BusinessInquiries;
module.exports = exports['default'];