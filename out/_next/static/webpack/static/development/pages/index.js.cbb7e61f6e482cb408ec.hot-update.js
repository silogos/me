webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Layout */ "./src/templates/Layout.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _jsxFileName = "/Users/it/Documents/Amin/gh-pages-app/src/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function ArticleItem(_ref) {
  var workPeriod = _ref.workPeriod,
      name = _ref.name,
      jobDesc = _ref.jobDesc;
  return __jsx("div", {
    style: {
      padding: '20px 15px',
      marginTop: '15px',
      borderRadius: '15px',
      backgroundColor: 'rgb(28, 44, 53);'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, workPeriod), __jsx("p", {
    style: {
      margin: '10px 0',
      fontSize: '1.8rem',
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Roles: ", jobDesc.join(', ')));
}

function Home() {
  var _this = this;

  var workExperiences = [{
    workPeriod: 'Sep 2016 - Jul 2019',
    name: 'PT Aegis Ultima Teknologi, Software Engineer',
    role: 'Junior Programmer',
    jobDesc: ['Development Application', 'Testing', 'Maintenance', 'User Interface Design', 'Preparation of Technical Documentation and User Guides', 'Training and Customer Support'],
    projets: ['Website Pendidikan SECAPA AD (Website CodeIgniter)', 'Inventory Management Apps (React Native)', 'Quran Kareem (React Native)', 'Islamic Mind (React Native)', 'My Samator (React Native)', 'Bonian e-commerce (React Native)']
  }, {
    workPeriod: 'Aug 2019 - Now',
    name: 'PT Asuransi Jiwa Generali Indonesia',
    role: 'React Native Consultant',
    jobDesc: ['Development Application', 'Testing', 'Maintenance', 'User Interface Design', 'Preparation of Technical Documentation and User Guides'],
    projets: ['Website Pendidikan SECAPA AD (Website CodeIgniter)', 'Inventory Management Apps (React Native)', 'Quran Kareem (React Native)', 'Islamic Mind (React Native)', 'My Samator (React Native)', 'Bonian e-commerce (React Native)']
  }];
  return __jsx("div", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Ways To Geek"), __jsx("link", {
    rel: "icon",
    href: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getImages"])('favicon.ico'),
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx(_templates_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3089188807" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3089188807" + " " + "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgb(28, 44, 53);',
      padding: '15px',
      flexDirection: 'row',
      borderRadius: '15px'
    },
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      flexDirection: 'row'
    },
    className: "jsx-3089188807" + " " + "header-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getImages"])('logo.png'),
    alt: "",
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "jsx-3089188807" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "Ways to Geek"))), __jsx("nav", {
    className: "jsx-3089188807" + " " + "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Articles"), __jsx("li", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, "Notes"), __jsx("li", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, "About"), __jsx("li", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "Ebook"))))), __jsx("article", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      flexDirection: 'row'
    },
    className: "jsx-3089188807" + " " + "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      flex: 1,
      borderRadius: 15,
      background: '#1c2c35',
      marginRight: 15
    },
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      width: 290
    },
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("h5", {
    style: {
      margin: 0
    },
    className: "jsx-3089188807",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Work Experiences: "), workExperiences.map(function (item) {
    return __jsx(ArticleItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }));
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3089188807",
    __self: this
  }, ".container.jsx-3089188807{min-height:100vh;}header.jsx-3089188807{padding:45px 0;}header.jsx-3089188807 .wrapper.jsx-3089188807{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}header.jsx-3089188807 .header-logo.jsx-3089188807{width:50px;height:50px;margin-right:30px;}header.jsx-3089188807 .header-logo.jsx-3089188807>img.jsx-3089188807{max-width:100%;}header.jsx-3089188807 .title.jsx-3089188807 span.jsx-3089188807{color:rgb(236,248,255);font-size:18px;font-weight:700;}header.jsx-3089188807 .nav.jsx-3089188807 ul.jsx-3089188807{-webkit-flex:1;-ms-flex:1;flex:1;margin:0;list-style:none;}header.jsx-3089188807 .nav.jsx-3089188807 ul.jsx-3089188807 li.jsx-3089188807{float:left;margin-left:15px;padding:10px;background-color:transparent;border-radius:4px;color:rgb(236,248,255);font-size:16px;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdC9Eb2N1bWVudHMvQW1pbi9naC1wYWdlcy1hcHAvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJa0IsQUFHNEIsQUFLRixBQU9lLEFBS25CLEFBS0ksQUFRVSxBQU1sQixBQU1JLFdBeEJDLEFBeUJLLElBbENuQixBQWNBLEVBdEJBLE1Ba0JvQixBQVlILEtBYUYsS0FQSixLQUxPLEdBWmxCLEFBeUIrQixDQVBiLFlBTGxCLElBTUEsWUFPb0Isa0JBQ08sdUJBQ1YsSUFuQ0ksV0FvQ0gsZ0JBQ2xCLGtFQXBDQSIsImZpbGUiOiIvVXNlcnMvaXQvRG9jdW1lbnRzL0FtaW4vZ2gtcGFnZXMtYXBwL3NyYy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3RlbXBsYXRlcy9MYXlvdXQnO1xuaW1wb3J0IHsgZ2V0SW1hZ2VzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5mdW5jdGlvbiBBcnRpY2xlSXRlbSh7IHdvcmtQZXJpb2QsIG5hbWUsIGpvYkRlc2MgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDE1cHgnLFxuICAgICAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyOCwgNDQsIDUzKTsnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3Bhbj57d29ya1BlcmlvZH08L3NwYW4+XG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnLCBmb250U2l6ZTogJzEuOHJlbScsIGZvbnRXZWlnaHQ6IDcwMCB9fT57bmFtZX08L3A+XG4gICAgICA8c3Bhbj5Sb2xlczoge2pvYkRlc2Muam9pbignLCAnKX08L3NwYW4+XG4gICAgICB7LyogPHAgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlByb2pldHM6PC9wPiAqL31cbiAgICAgIHsvKiA8dWw+XG5cdFx0XHRcdDxsaT5XZWJzaXRlIFBlbmRpZGlrYW4gU0VDQVBBIEFEIChXZWJzaXRlIENvZGVJZ25pdGVyKTwvbGk+XG5cdFx0XHRcdDxsaT5JbnZlbnRvcnkgTWFuYWdlbWVudCBBcHBzIChSZWFjdCBOYXRpdmUpPC9saT5cblx0XHRcdFx0PGxpPlF1cmFuIEthcmVlbSAoUmVhY3QgTmF0aXZlKTwvbGk+XG5cdFx0XHRcdDxsaT5Jc2xhbWljIE1pbmQgKFJlYWN0IE5hdGl2ZSk8L2xpPlxuXHRcdFx0XHQ8bGk+TXkgU2FtYXRvciAoUmVhY3QgTmF0aXZlKTwvbGk+XG5cdFx0XHRcdDxsaT5Cb25pYW4gZS1jb21tZXJjZSAoUmVhY3QgTmF0aXZlKTwvbGk+XG5cdFx0XHQ8L3VsPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgd29ya0V4cGVyaWVuY2VzID0gW1xuICAgIHtcbiAgICAgIHdvcmtQZXJpb2Q6ICdTZXAgMjAxNiAtIEp1bCAyMDE5JyxcbiAgICAgIG5hbWU6ICdQVCBBZWdpcyBVbHRpbWEgVGVrbm9sb2dpLCBTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICByb2xlOiAnSnVuaW9yIFByb2dyYW1tZXInLFxuICAgICAgam9iRGVzYzogW1xuICAgICAgICAnRGV2ZWxvcG1lbnQgQXBwbGljYXRpb24nLFxuICAgICAgICAnVGVzdGluZycsXG4gICAgICAgICdNYWludGVuYW5jZScsXG4gICAgICAgICdVc2VyIEludGVyZmFjZSBEZXNpZ24nLFxuICAgICAgICAnUHJlcGFyYXRpb24gb2YgVGVjaG5pY2FsIERvY3VtZW50YXRpb24gYW5kIFVzZXIgR3VpZGVzJyxcbiAgICAgICAgJ1RyYWluaW5nIGFuZCBDdXN0b21lciBTdXBwb3J0JyxcbiAgICAgIF0sXG4gICAgICBwcm9qZXRzOiBbXG4gICAgICAgICdXZWJzaXRlIFBlbmRpZGlrYW4gU0VDQVBBIEFEIChXZWJzaXRlIENvZGVJZ25pdGVyKScsXG4gICAgICAgICdJbnZlbnRvcnkgTWFuYWdlbWVudCBBcHBzIChSZWFjdCBOYXRpdmUpJyxcbiAgICAgICAgJ1F1cmFuIEthcmVlbSAoUmVhY3QgTmF0aXZlKScsXG4gICAgICAgICdJc2xhbWljIE1pbmQgKFJlYWN0IE5hdGl2ZSknLFxuICAgICAgICAnTXkgU2FtYXRvciAoUmVhY3QgTmF0aXZlKScsXG4gICAgICAgICdCb25pYW4gZS1jb21tZXJjZSAoUmVhY3QgTmF0aXZlKScsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgd29ya1BlcmlvZDogJ0F1ZyAyMDE5IC0gTm93JyxcbiAgICAgIG5hbWU6ICdQVCBBc3VyYW5zaSBKaXdhIEdlbmVyYWxpIEluZG9uZXNpYScsXG4gICAgICByb2xlOiAnUmVhY3QgTmF0aXZlIENvbnN1bHRhbnQnLFxuICAgICAgam9iRGVzYzogW1xuICAgICAgICAnRGV2ZWxvcG1lbnQgQXBwbGljYXRpb24nLFxuICAgICAgICAnVGVzdGluZycsXG4gICAgICAgICdNYWludGVuYW5jZScsXG4gICAgICAgICdVc2VyIEludGVyZmFjZSBEZXNpZ24nLFxuICAgICAgICAnUHJlcGFyYXRpb24gb2YgVGVjaG5pY2FsIERvY3VtZW50YXRpb24gYW5kIFVzZXIgR3VpZGVzJyxcbiAgICAgIF0sXG4gICAgICBwcm9qZXRzOiBbXG4gICAgICAgICdXZWJzaXRlIFBlbmRpZGlrYW4gU0VDQVBBIEFEIChXZWJzaXRlIENvZGVJZ25pdGVyKScsXG4gICAgICAgICdJbnZlbnRvcnkgTWFuYWdlbWVudCBBcHBzIChSZWFjdCBOYXRpdmUpJyxcbiAgICAgICAgJ1F1cmFuIEthcmVlbSAoUmVhY3QgTmF0aXZlKScsXG4gICAgICAgICdJc2xhbWljIE1pbmQgKFJlYWN0IE5hdGl2ZSknLFxuICAgICAgICAnTXkgU2FtYXRvciAoUmVhY3QgTmF0aXZlKScsXG4gICAgICAgICdCb25pYW4gZS1jb21tZXJjZSAoUmVhY3QgTmF0aXZlKScsXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYXlzIFRvIEdlZWs8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17Z2V0SW1hZ2VzKCdmYXZpY29uLmljbycpfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjgsIDQ0LCA1Myk7JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJbWFnZXMoJ2xvZ28ucG5nJyl9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+V2F5cyB0byBHZWVrPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+QXJ0aWNsZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPk5vdGVzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5BYm91dDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+RWJvb2s8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMxYzJjMzUnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDE1LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8aDI+SGVsbG8sIEknbSBBbWluIFl1c3VmPC9oMj4gKi99XG4gICAgICAgICAgICAgICAgICB7LyogPGgyPkhpLi4hPC9oMj4gKi99XG4gICAgICAgICAgICAgICAgICB7LyogPGgyPk15IG5hbWUgaXMgQW1pbiBZdXN1ZiwgSSdtIFNvZnR3YXJlIGVuZ2luZWVyLCB3b3JrIGF0ICBzdGFydHVwIGJ5IG5hbWUgTGVtb25pbG88L2gyPiAqL31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyOTAgfX0+XG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpbjogMCB9fT5Xb3JrIEV4cGVyaWVuY2VzOiA8L2g1PlxuICAgICAgICAgICAgICAgIHt3b3JrRXhwZXJpZW5jZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgPEFydGljbGVJdGVtIHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBwYWRkaW5nOiA0NXB4IDA7XG4gICAgICAgICAgLy8gbGVmdDogMDtcbiAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAvLyB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgLndyYXBwZXIge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIC5oZWFkZXItbG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIgLmhlYWRlci1sb2dvID4gaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgLnRpdGxlIHtcbiAgICAgICAgICAvLyBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIC50aXRsZSBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDIzNiwgMjQ4LCAyNTUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIC5uYXYgdWwge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgLm5hdiB1bCBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHJnYigyMzYsIDI0OCwgMjU1KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/it/Documents/Amin/gh-pages-app/src/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/utils/getImages.js":
/*!********************************!*\
  !*** ./src/utils/getImages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (path) {
  return "".concat("", "/").concat(path);
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImages */ "./src/utils/getImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImages", function() { return _getImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=index.js.cbb7e61f6e482cb408ec.hot-update.js.map