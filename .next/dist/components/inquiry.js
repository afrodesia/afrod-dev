'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kentorry/Server/CLIENT-SERVER/CLIENT-WORK/afrodesiamedia/SERVER/afrodesiamedia-next/components/inquiry.js';


var Inquiry = function (_Component) {
  (0, _inherits3.default)(Inquiry, _Component);

  function Inquiry() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Inquiry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Inquiry.__proto__ || (0, _getPrototypeOf2.default)(Inquiry)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      email: '',
      message: ''

    }, _this.change = function (e) {
      _this.props.onChange((0, _defineProperty3.default)({}, e.target.name, e.target.value));
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      _this.setState({});
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Inquiry, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('form', { className: 'Inquiry', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('input', {

        className: 'input-form',
        name: 'name',
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.change(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('label', { className: 'label-control', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Name'), _react2.default.createElement('input', {
        className: 'input-form',
        name: 'email',
        type: 'email',
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.change(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('label', { className: 'label-control', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'email'), _react2.default.createElement('label', { className: 'label-control', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Message'), _react2.default.createElement('textarea', { rows: '4', cols: '50',
        className: 'imput-text',
        name: 'message',
        type: 'text',
        value: this.state.message,
        onChange: function onChange(e) {
          return _this2.change(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }));
    }
  }]);

  return Inquiry;
}(_react.Component);

exports.default = Inquiry;