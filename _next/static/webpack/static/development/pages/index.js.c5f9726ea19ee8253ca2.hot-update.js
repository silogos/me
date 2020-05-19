webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _datas_workExperiences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datas/workExperiences */ "./src/datas/workExperiences.js");
/* harmony import */ var _datas_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datas/portfolio */ "./src/datas/portfolio.js");

var _jsxFileName = "/Users/it/Documents/Amin/gh-pages-app/src/components/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function WorkItem(_ref) {
  var id = _ref.id,
      title = _ref.title;
  return __jsx("div", {
    style: {
      width: '100%',
      flexDirection: 'column',
      padding: '20px 15px',
      marginBottom: '15px',
      borderRadius: '15px',
      backgroundColor: 'rgb(28, 44, 53);'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      margin: '10px 0',
      fontSize: '1.8rem',
      fontWeight: 700
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, title));
}

function WorkExperiences() {
  var _this = this;

  var RX = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["useResponsive"])({
    small: {
      min: 0,
      max: 489
    },
    medium: {
      min: 490,
      max: 699
    },
    large: {
      min: 700,
      max: Infinity
    }
  });
  return __jsx("article", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h5", {
    style: {
      margin: '15px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Portfolio: "), __jsx("div", {
    className: "flex",
    style: {
      width: '100%',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      flex: 0.65,
      width: '100%',
      flexDirection: 'column',
      padding: '20px 15px',
      marginBottom: '15px',
      borderRadius: '15px',
      backgroundColor: 'rgb(28, 44, 53);',
      marginRight: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      flex: 0.35,
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, _datas_portfolio__WEBPACK_IMPORTED_MODULE_4__["default"][0].projets.map(function (item) {
    return __jsx(WorkItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (WorkExperiences);

/***/ }),

/***/ "./src/datas/portfolio.js":
/*!********************************!*\
  !*** ./src/datas/portfolio.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var portfolio = [{
  id: 1,
  projets: [{
    id: 1,
    title: 'Website Pendidikan SECAPA AD',
    type: 'Website Application',
    role: 'Web Developer'
  }, {
    id: 2,
    title: 'Inventory Management',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }, {
    id: 3,
    title: 'Quran Kareem',
    type: 'Mobile Application',
    role: 'React Native and Web Service Developer'
  }, {
    id: 4,
    title: 'Islamic Mind',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }, {
    id: 5,
    title: 'Mindtrex',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }, {
    id: 6,
    title: 'My Samator',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }]
}, {
  id: 2,
  projets: [{
    id: 1,
    title: 'Bonian e-Commerce',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }]
}, {
  id: 3,
  projets: [{
    id: 1,
    title: 'iRectuit',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }, {
    id: 2,
    title: 'mConnect',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }, {
    id: 3,
    title: 'Gen-iClick',
    type: 'Mobile Application',
    role: 'React Native Developer'
  }]
}, {
  id: 4,
  projets: []
}];
/* harmony default export */ __webpack_exports__["default"] = (portfolio);

/***/ })

})
//# sourceMappingURL=index.js.c5f9726ea19ee8253ca2.hot-update.js.map