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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kentorry/Server/client-server/CLIENT-WORK/afrodesiamedia/SERVER/afrodesiamedia-next/components/nav.js';


var logo = function logo(props) {
  return _react2.default.createElement('svg', (0, _extends3.default)({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '288',
    height: '288'
  }, props), _react2.default.createElement('path', {
    fill: '#8A8C8E',
    d: 'M125.62 152.718c0 40.238 4.842 72.906-35.422 72.906s-72.906-32.668-72.906-72.906c0-40.27 32.643-72.919 72.906-72.919s35.422 32.649 35.422 72.919z'
  }), _react2.default.createElement('path', {
    fill: '#ADB0B2',
    d: 'M166.137 179.51c32.776-23.386 56.523-46.288 79.921-13.513 23.381 32.767 15.776 78.298-16.999 101.696-32.774 23.382-78.307 15.776-101.695-16.991-23.382-32.783 5.998-47.795 38.773-71.192z'
  }), _react2.default.createElement('path', {
    fill: '#F2F2F2',
    d: 'M168.268 120.462c-34.24-21.193-64.537-34.24-43.359-68.484 21.18-34.236 66.116-44.829 100.357-23.644 34.239 21.181 44.822 66.108 23.646 100.357-21.176 34.227-46.396 12.947-80.644-8.229z'
  }));
};

var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', { className: 'Nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'header-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('nav', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('img', { className: 'img', src: '/../static/img/afrodesiamedia.svg', width: '30', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('span', { className: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'afrodesia'), _react2.default.createElement('span', { className: 'gray', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'media'))))), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'home'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'about')), ' '), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_link2.default, { href: '/getting-started', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'getting started'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_link2.default, { href: '/portfolio', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'portfolio')), ' '), ' ', _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'contact')))))));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;