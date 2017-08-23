'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kentorry/Server/CLIENT-SERVER/CLIENT-WORK/afrodesiamedia/SERVER/afrodesiamedia-next/pages/portfolio.js?entry';


var Portfolio = function (_Component) {
  (0, _inherits3.default)(Portfolio, _Component);

  function Portfolio(props) {
    (0, _classCallCheck3.default)(this, Portfolio);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Portfolio.__proto__ || (0, _getPrototypeOf2.default)(Portfolio)).call(this));

    _this.state = { portfolio: []

      // componentDidMount(){
      //     fetch('https://api.afrodesiamedia.com/wp-json/wp/v2/portfolio')
      //     .then(res => res.json())
      //     .then(portfolio => this.setState({ portfolio }))
      // }

    };
    return _this;
  }

  (0, _createClass3.default)(Portfolio, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'Portfolio container ', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Portfolio'), _react2.default.createElement('section', { className: 'grid paddingTop100', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    }
  }]);

  return Portfolio;
}(_react.Component);

exports.default = Portfolio;