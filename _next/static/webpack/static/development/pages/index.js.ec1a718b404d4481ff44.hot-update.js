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

var _jsxFileName = "/Users/it/Documents/Amin/gh-pages-app/src/components/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function WorkItem(_ref) {
  var workPeriod = _ref.workPeriod,
      name = _ref.name,
      jobDesc = _ref.jobDesc;
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
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
      lineNumber: 17,
      columnNumber: 7
    }
  }, name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Roles: ", jobDesc.length > 0 ? jobDesc.join(', ') : '*Coming soon'));
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
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("h5", {
    style: {
      margin: '15px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 56,
      columnNumber: 11
    }
  }, _datas_workExperiences__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item) {
    return __jsx(WorkItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (WorkExperiences);

/***/ })

})
//# sourceMappingURL=index.js.ec1a718b404d4481ff44.hot-update.js.map