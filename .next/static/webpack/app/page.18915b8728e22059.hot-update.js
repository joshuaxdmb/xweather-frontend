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

/***/ "(app-pages-browser)/./src/app/components/TemperatureChart.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/TemperatureChart.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\nconst TemperaturePlot = (param)=>{\n    let { time, temperature_2m } = param;\n    // Generate an array of equally spaced indices based on the length of the time array\n    const equallySpacedIndices = Array.from({\n        length: time.length\n    }, (_, index)=>index);\n    const data = {\n        labels: time,\n        datasets: [\n            {\n                label: \"Temperature at 2m\",\n                data: temperature_2m,\n                fill: false,\n                borderColor: \"blue\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n        data: data\n    }, void 0, false, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/components/TemperatureChart.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, undefined);\n};\n_c = TemperaturePlot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TemperaturePlot);\nvar _c;\n$RefreshReg$(_c, \"TemperaturePlot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UZW1wZXJhdHVyZUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDYTtBQVN2QyxNQUFNRSxrQkFBa0Q7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLGNBQWMsRUFBRTtJQUMvRSxvRkFBb0Y7SUFDcEYsTUFBTUMsdUJBQXVCQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUwsS0FBS0ssTUFBTTtJQUFDLEdBQUcsQ0FBQ0MsR0FBR0MsUUFBVUE7SUFFL0UsTUFBTUMsT0FBTztRQUNYQyxRQUFRVDtRQUNSVSxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BILE1BQU1QO2dCQUNOVyxNQUFNO2dCQUNOQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0lBR0EscUJBQU8sOERBQUNmLGlEQUFJQTtRQUFDVSxNQUFNQTs7Ozs7O0FBQ3JCO0tBbEJNVDtBQW9CTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydC50c3g/OTE1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQge0NhdGVnb3J5U2NhbGV9IGZyb20gJ2NoYXJ0LmpzJzsgXG5cbmludGVyZmFjZSBUZW1wZXJhdHVyZVBsb3RQcm9wcyB7XG4gIHRpbWU6IHN0cmluZ1tdOyAvLyBVc2Ugc3RyaW5nIGFycmF5IGZvciB0aW1lIGxhYmVsc1xuICB0ZW1wZXJhdHVyZV8ybTogbnVtYmVyW107IC8vIEFzc3VtaW5nIHRlbXBlcmF0dXJlXzJtIGlzIGFuIGFycmF5IG9mIG51bWJlcnNcbn1cblxuY29uc3QgVGVtcGVyYXR1cmVQbG90OiBSZWFjdC5GQzxUZW1wZXJhdHVyZVBsb3RQcm9wcz4gPSAoeyB0aW1lLCB0ZW1wZXJhdHVyZV8ybSB9KSA9PiB7XG4gIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGVxdWFsbHkgc3BhY2VkIGluZGljZXMgYmFzZWQgb24gdGhlIGxlbmd0aCBvZiB0aGUgdGltZSBhcnJheVxuICBjb25zdCBlcXVhbGx5U3BhY2VkSW5kaWNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRpbWUubGVuZ3RoIH0sIChfLCBpbmRleCkgPT4gaW5kZXgpO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiB0aW1lLCAvLyBVc2UgcHJvdmlkZWQgdGltZSBzdHJpbmdzIGFzIGxhYmVsc1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVGVtcGVyYXR1cmUgYXQgMm0nLFxuICAgICAgICBkYXRhOiB0ZW1wZXJhdHVyZV8ybSxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnYmx1ZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cblxuICByZXR1cm4gPExpbmUgZGF0YT17ZGF0YX0gIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVtcGVyYXR1cmVQbG90O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluZSIsIlRlbXBlcmF0dXJlUGxvdCIsInRpbWUiLCJ0ZW1wZXJhdHVyZV8ybSIsImVxdWFsbHlTcGFjZWRJbmRpY2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwiYm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TemperatureChart.tsx\n"));

/***/ })

});