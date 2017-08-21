'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kentorry/Server/CLIENT-SERVER/CLIENT-WORK/afrodesiamedia/SERVER/afrodesiamedia-next/pages/index.js?entry';


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

var clipboard = function clipboard(props) {
    return _react2.default.createElement('svg', (0, _extends3.default)({
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        width: '76',
        height: '130',
        viewBox: '0 0 76 130'
    }, props), _react2.default.createElement('defs', null, _react2.default.createElement('path', {
        id: 'a',
        d: 'M75.118 129.44V.069H0V129.44h75.118z'
    }), _react2.default.createElement('path', {
        id: 'c',
        d: 'M0 129.65h75.118V.279H0z'
    })), _react2.default.createElement('g', {
        fill: 'none',
        fillRule: 'evenodd',
        transform: 'translate(.25 .19)'
    }, _react2.default.createElement('g', {
        transform: 'translate(0 .21)'
    }, _react2.default.createElement('mask', {
        id: 'b',
        fill: '#fff'
    }, _react2.default.createElement('use', {
        xlinkHref: '#a'
    })), _react2.default.createElement('path', {
        fill: '#000',
        d: 'M4.857 20.036h22.29l.265 1.513c.134.756.699 1.286 1.397 1.286h17.699c.666 0 1.264-.53 1.397-1.286l.267-1.513h22.29V124.07H4.856V20.036zm32.77-17.282c.93 0 1.73.87 1.73 1.967 0 1.06-.767 1.966-1.73 1.966-.966 0-1.731-.87-1.731-1.966.034-1.097.799-1.967 1.73-1.967zM2.228 129.44h70.76c1.165 0 2.13-1.059 2.13-2.42V17.087c0-1.323-.932-2.42-2.13-2.42H49.003l.367-2.23c.165-.984-.5-1.93-1.397-1.93h-6.687V4.305C41.286 1.96 39.622.07 37.56.07c-2.064 0-3.726 1.891-3.726 4.235v6.203h-6.687c-.9 0-1.564.908-1.398 1.928l.366 2.232H2.13C.965 14.667 0 15.726 0 17.087V127.02c.133 1.323 1.065 2.42 2.23 2.42z',
        mask: 'url(#b)'
    })), _react2.default.createElement('mask', {
        id: 'd',
        fill: '#fff'
    }, _react2.default.createElement('use', {
        xlinkHref: '#c'
    })), _react2.default.createElement('path', {
        fill: '#000',
        mask: 'url(#d)',
        d: 'M24.086 41.197H64.34v-2.761H24.086zM15.104 39.268l-2.429-2.723-1.763 2.043 4.192 4.726 8.317-9.454-1.797-2.004zM24.086 55H64.34v-2.761H24.086zM15.104 53.109l-2.429-2.723-1.763 2.004 4.192 4.765 8.317-9.454-1.797-2.042zM24.086 68.841H64.34V66.08H24.086zM15.104 66.95l-2.429-2.761-1.763 2.042 4.192 4.728 8.317-9.454-1.797-2.005zM24.086 82.644H64.34v-2.761H24.086zM15.104 80.753l-2.429-2.723-1.763 2.004 4.192 4.765 8.317-9.454-1.797-2.042zM24.086 96.485H64.34v-2.761H24.086zM15.104 94.594l-2.429-2.761-1.763 2.042 4.192 4.765 8.317-9.491-1.797-2.005zM24.086 110.289H64.34v-2.761H24.086zM15.104 108.397l-2.429-2.722-1.763 2.003 4.192 4.765 8.317-9.454-1.797-2.004z'
    })));
};

exports.default = function () {
    return _react2.default.createElement(_layout2.default, {
        headerType: 'interior',
        title: 'Intro | afrodesiamedia',
        description: '',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('div', { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('section', { id: '1', className: 'afrodesia-masthead', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('div', { className: 'container paddingTop100 grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('h1', { className: 'grid__col grid__col--3-of-5 grid__col--centered', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'We build unique web apps!'), _react2.default.createElement('h2', { className: 'grid__col grid__col--3-of-5 grid__col--centered', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Discover what good design and practical sense makes for a better user experience.'), _react2.default.createElement('a', { className: 'btn', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Check it out! '))), _react2.default.createElement('section', { id: '2', className: 'preamble', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('div', { className: 'container paddingTop100 grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('h2', { className: 'grid__col grid__col--3-of-5 grid__col--centered heading', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Inspiring results to communicate your design')), _react2.default.createElement('div', { className: 'grey-zone', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('div', { className: 'container paddingTop100 grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('article', { className: 'grid__col grid__col--1-of-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('div', { className: 'grid__col--centered icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('img', { className: 'img', src: '/../static/img/clipboard.svg', width: '100', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    })), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, 'Good design is crafting the User experience in simple path to get them to the things that matters most on your website.')), _react2.default.createElement('article', { className: 'grid__col grid__col--1-of-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement('div', { className: 'grid__col--centered icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('img', { className: 'img', src: '/../static/img/Pen.svg', width: '24', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    })), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, 'Good content enhances the direction you want to prioritize for your consumers to flow thru the website experience.')), _react2.default.createElement('article', { className: 'grid__col grid__col--1-of-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('div', { className: 'grid__col--centered icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('img', { className: 'img', src: '/../static/img/Tablet.svg', width: '48', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    })), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'There are things that good design can clear up and implement; are good visual communication and heigharchy.'))))), _react2.default.createElement('section', { id: '3', className: 'process', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement('article', { className: 'container grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, 'Design Process'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, 'Starts with crafting ideas that will help fuel the visual communication process.'))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement('article', { className: 'container grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, 'User Flow :'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, 'Understanding what experience the user could take on going to the relevant desired areas of the website.'))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement('article', { className: 'container grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'Content Shaping : '), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, 'This is where we begin the actual important communication mechanism towards guiding the user to desired locations and areas of interest.')))))));
};