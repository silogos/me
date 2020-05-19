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
      lineNumber: 5,
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
  }, "Roles: ", jobDesc.length > 0 ? jobDesc.join(', ') : '*Coming soon'));
}

function Portfolio() {
  var _this = this;

  var workExperiences = [{
    workPeriod: 'Sep 2016 - Jul 2019',
    name: 'PT. Aegis Ultima Teknologi (Aegislabs)',
    role: 'Junior Programmer',
    jobDesc: ['Development Application', 'Testing', 'Maintenance', 'User Interface Design', 'Preparation of Technical Documentation and User Guides', 'Training and Customer Support'],
    projets: ['Website Pendidikan SECAPA AD (Website CodeIgniter)', 'Inventory Management Apps (React Native)', 'Quran Kareem (React Native)', 'Islamic Mind (React Native)', 'Mindtrex (React Native)', 'My Samator (React Native)']
  }, {
    workPeriod: 'Sep 2016 - Jul 2019',
    name: 'PT. Aegis Ultima Teknologi (Aegislabs)',
    role: 'Junior Programmer',
    jobDesc: ['Development Application', 'Testing', 'Maintenance', 'User Interface Design', 'Preparation of Technical Documentation and User Guides', 'Training and Customer Support'],
    projets: ['Bonian e-commerce (React Native)']
  }, {
    workPeriod: 'Jul - Oct 2019',
    name: 'PT. Nevsky Prospekt Indonesia',
    role: 'Lead Programmer',
    jobDesc: ['Development Application', 'Testing', 'Maintenance'],
    projets: ['Bonian e-Commerce (React Native)']
  }, {
    workPeriod: 'Aug 2019 - Jun 2019',
    name: 'PT Asuransi Jiwa Generali Indonesia',
    role: 'React Native Consultant',
    jobDesc: ['Development Application', 'Testing', 'Maintenance', 'User Interface Design', 'Preparation of Technical Documentation and User Guides'],
    projets: ['iRectuit (React Native)', 'mConnect (React Native)', 'Gen-iClick (React Native)']
  }, {
    workPeriod: 'Jun 2019 - Now',
    name: 'PT Lemonilo Indonesia Sehat',
    role: 'Software Engineer',
    jobDesc: [],
    projets: []
  }];
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
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("h5", {
    style: {
      margin: '15px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Portfolio: "), __jsx("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: RX.select({
        small: 'auto',
        medium: 'auto auto',
        other: 'auto auto auto'
      }),
      gridGap: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, workExperiences.map(function (item) {
    return __jsx(WorkItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=index.js.ebff9fab291a704082a5.hot-update.js.map