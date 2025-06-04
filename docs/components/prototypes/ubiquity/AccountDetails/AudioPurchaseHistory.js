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

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var AudioPurchaseHistory = (function (_React$Component) {
  _inherits(AudioPurchaseHistory, _React$Component);

  function AudioPurchaseHistory() {
    _classCallCheck(this, AudioPurchaseHistory);

    _get(Object.getPrototypeOf(AudioPurchaseHistory.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AudioPurchaseHistory, [{
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
            { headingLevel: 2 },
            'Audio Purchase History'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Your books are grouped by order. AudibleListener® plan members are eligible to take advantage of our Great Listen Guarantee and make returns.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { background: 'primary', spacing: 'base', paddingSize: 'base', hasBorder: false },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Accordion,
                  { activeRow: 1 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Oct 4, 2015' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].TableColumnHeading, null),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Order: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'D01-2822099-3814634'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Total: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '$0.00'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                { textColor: 'base', textSize: 'base' },
                                'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'by C.S. Lewis'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'Narrated by Kenneth Branagh'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Button,
                            { buttonType: 'secondary' },
                            'Return'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(_cc2['default'].Product, { onAsin: true, asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                { textColor: 'base', textSize: 'base' },
                                'The Martian'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'by Andy Weir'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'Narrated by R. C. Bray'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Button,
                            { buttonType: 'secondary' },
                            'Return'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'August 10, 2015' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'August 10, 2015'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Order #: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'D22-2586091-10842859'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Total: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '$40.00'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(_cc2['default'].Product, { onAsin: true, asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                { textColor: 'base', textSize: 'base' },
                                'Off To Be The Wizard'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'by Scott Meyer'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'Narrated by Kenneth Branagh'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Button,
                            { buttonType: 'secondary' },
                            'Return'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'July 9, 2015' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'August 10, 2015'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Order #: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'D22-2586091-10842859'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Total: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '$40.00'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(_cc2['default'].Product, { onAsin: true, asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                { textColor: 'base', textSize: 'base' },
                                'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'by C.S. Lewis'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Text,
                                null,
                                'Narrated by Kenneth Branagh'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Button,
                            { buttonType: 'secondary' },
                            'Return'
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AudioPurchaseHistory;
})(_react2['default'].Component);

exports['default'] = AudioPurchaseHistory;
module.exports = exports['default'];