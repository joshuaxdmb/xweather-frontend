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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js\");\n/* harmony import */ var _screens_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/weather */ \"(app-pages-browser)/./src/app/screens/weather.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({\n        reducer: {\n            [_api__WEBPACK_IMPORTED_MODULE_2__.api.reducerPath]: _api__WEBPACK_IMPORTED_MODULE_2__.api.reducer\n        },\n        middleware: (getDefault)=>getDefault().concat(_api__WEBPACK_IMPORTED_MODULE_2__.api.middleware)\n    });\n    (0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_6__.setupListeners)(store.dispatch);\n    const fetchRate = 100;\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [getWeatherTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const handleGetWeather = ()=>{\n        getWeatherTrigger({\n            lat: 0,\n            lon: 0\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_screens_weather__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/page.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nmku127eiX8BJsm7DyI6f+JjlEs=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFDcUI7QUFDSDtBQUNYO0FBQ2lCO0FBQy9CO0FBQ2U7QUFHekIsU0FBU087O0lBRXRCLE1BQU1DLFFBQVFOLGdFQUFjQSxDQUFDO1FBQzNCTyxTQUFTO1lBQUMsQ0FBQ0oscUNBQUdBLENBQUNLLFdBQVcsQ0FBQyxFQUFDTCxxQ0FBR0EsQ0FBQ0ksT0FBTztRQUFBO1FBQ3ZDRSxZQUFZLENBQUNDLGFBQWVBLGFBQWFDLE1BQU0sQ0FBQ1IscUNBQUdBLENBQUNNLFVBQVU7SUFDaEU7SUFFQVAsc0VBQWNBLENBQUNJLE1BQU1NLFFBQVE7SUFFN0IsTUFBTUMsWUFBWTtJQUNsQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR2pCLCtDQUFRQTtJQUN2QyxNQUFNLENBQUNrQixnQkFBZ0JDLGtCQUFrQixHQUFHbkIsK0NBQVFBO0lBQ3BELE1BQU0sQ0FBQ29CLGtCQUFrQixHQUFHbkIsa0VBQTRCQTtJQUV4RCxNQUFNb0IsbUJBQW1CO1FBQ3ZCRCxrQkFBa0I7WUFDaEJFLEtBQUk7WUFDSkMsS0FBSTtRQUNOO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3BCLGlEQUFRQTtRQUFDSyxPQUFPQTtrQkFDZiw0RUFBQ0Ysd0RBQU9BOzs7Ozs7Ozs7O0FBR2Q7R0ExQndCQzs7UUFZTU4sOERBQTRCQTs7O0tBWmxDTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldHVwTGlzdGVuZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeSc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknXG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL3NjcmVlbnMvd2VhdGhlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7W2FwaS5yZWR1Y2VyUGF0aF06YXBpLnJlZHVjZXJ9LFxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0KSA9PiBnZXREZWZhdWx0KCkuY29uY2F0KGFwaS5taWRkbGV3YXJlKVxuICB9KTtcblxuICBzZXR1cExpc3RlbmVycyhzdG9yZS5kaXNwYXRjaClcblxuICBjb25zdCBmZXRjaFJhdGUgPSAxMDA7XG4gIGNvbnN0IFtsb2NhdGlvbixzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY3VycmVudFdlYXRoZXIsIHNldEN1cnJlbnRXZWF0aGVyXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2dldFdlYXRoZXJUcmlnZ2VyXSA9IHVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24oKVxuXG4gIGNvbnN0IGhhbmRsZUdldFdlYXRoZXIgPSAoKSA9PntcbiAgICBnZXRXZWF0aGVyVHJpZ2dlcih7XG4gICAgICBsYXQ6MCxcbiAgICAgIGxvbjowXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8V2VhdGhlci8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwiUHJvdmlkZXIiLCJzZXR1cExpc3RlbmVycyIsImFwaSIsIldlYXRoZXIiLCJIb21lIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdCIsImNvbmNhdCIsImRpc3BhdGNoIiwiZmV0Y2hSYXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImN1cnJlbnRXZWF0aGVyIiwic2V0Q3VycmVudFdlYXRoZXIiLCJnZXRXZWF0aGVyVHJpZ2dlciIsImhhbmRsZUdldFdlYXRoZXIiLCJsYXQiLCJsb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});