"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* harmony import */ var _screens_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/weather */ \"(app-pages-browser)/./src/app/screens/weather.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction Home() {\n    const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n        reducer: {\n            [_api__WEBPACK_IMPORTED_MODULE_2__.api.reducerPath]: _api__WEBPACK_IMPORTED_MODULE_2__.api.reducer\n        },\n        middleware: (getDefault)=>getDefault().concat(_api__WEBPACK_IMPORTED_MODULE_2__.api.middleware)\n    });\n    (0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_5__.setupListeners)(store.dispatch);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_weather__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/page.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHa0Q7QUFDWDtBQUNpQjtBQUMvQjtBQUNlO0FBR3pCLFNBQVNLO0lBRXRCLE1BQU1DLFFBQVFOLGdFQUFjQSxDQUFDO1FBQzNCTyxTQUFTO1lBQUMsQ0FBQ0oscUNBQUdBLENBQUNLLFdBQVcsQ0FBQyxFQUFDTCxxQ0FBR0EsQ0FBQ0ksT0FBTztRQUFBO1FBQ3ZDRSxZQUFZLENBQUNDLGFBQWVBLGFBQWFDLE1BQU0sQ0FBQ1IscUNBQUdBLENBQUNNLFVBQVU7SUFDaEU7SUFFQVAsc0VBQWNBLENBQUNJLE1BQU1NLFFBQVE7SUFFN0IscUJBQ0UsOERBQUNYLGlEQUFRQTtRQUFDSyxPQUFPQTtrQkFDZiw0RUFBQ0Ysd0RBQU9BOzs7Ozs7Ozs7O0FBR2Q7S0Fkd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSdcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vc2NyZWVucy93ZWF0aGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtbYXBpLnJlZHVjZXJQYXRoXTphcGkucmVkdWNlcn0sXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHQpID0+IGdldERlZmF1bHQoKS5jb25jYXQoYXBpLm1pZGRsZXdhcmUpXG4gIH0pO1xuXG4gIHNldHVwTGlzdGVuZXJzKHN0b3JlLmRpc3BhdGNoKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8V2VhdGhlci8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiUHJvdmlkZXIiLCJzZXR1cExpc3RlbmVycyIsImFwaSIsIldlYXRoZXIiLCJIb21lIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdCIsImNvbmNhdCIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});