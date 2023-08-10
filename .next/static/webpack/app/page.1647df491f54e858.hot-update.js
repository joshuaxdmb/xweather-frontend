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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale);\nconst TemperaturePlot = (param)=>{\n    let { time, temperature_2m } = param;\n    _s();\n    // Generate an array of equally spaced indices based on the length of the time array\n    const equallySpacedIndices = Array.from({\n        length: time.length\n    }, (_, index)=>index);\n    const data = {\n        labels: time,\n        datasets: [\n            {\n                label: \"Temperature at 2m\",\n                data: temperature_2m,\n                fill: false,\n                borderColor: \"rgb(75, 192, 192)\"\n            }\n        ]\n    };\n    const [displayLabels, setDisplayLabels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth >= 768);\n    const updateDisplayLabels = ()=>{\n        setDisplayLabels(window.innerWidth >= 768);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setDisplayLabels(window.innerWidth >= 768); // Adjust the breakpoint as needed\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        window.innerWidth\n    ]);\n    const options = {\n        scales: {\n            x: {\n                ticks: {\n                    display: displayLabels\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n        data: data,\n        options: options\n    }, void 0, false, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/components/TemperatureChart.tsx\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, undefined);\n};\n_s(TemperaturePlot, \"RNUULIF0TCd4knppSyFX/LGapkw=\");\n_c = TemperaturePlot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TemperaturePlot);\nvar _c;\n$RefreshReg$(_c, \"TemperaturePlot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UZW1wZXJhdHVyZUNoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUNMO0FBQ087QUFFekNJLHFEQUFLQSxDQUFDRSxRQUFRLENBQUNELG1EQUFhQTtBQU81QixNQUFNRSxrQkFBa0Q7UUFBQyxFQUN2REMsSUFBSSxFQUNKQyxjQUFjLEVBQ2Y7O0lBQ0Msb0ZBQW9GO0lBQ3BGLE1BQU1DLHVCQUF1QkMsTUFBTUMsSUFBSSxDQUNyQztRQUFFQyxRQUFRTCxLQUFLSyxNQUFNO0lBQUMsR0FDdEIsQ0FBQ0MsR0FBR0MsUUFBVUE7SUFHaEIsTUFBTUMsT0FBTztRQUNYQyxRQUFRVDtRQUNSVSxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BILE1BQU1QO2dCQUNOVyxNQUFNO2dCQUNOQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0lBRUEsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR3JCLCtDQUFRQSxDQUFDc0IsT0FBT0MsVUFBVSxJQUFJO0lBQ3hFLE1BQU1DLHNCQUFzQjtRQUMxQkgsaUJBQWlCQyxPQUFPQyxVQUFVLElBQUk7SUFDeEM7SUFDQXhCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTBCLGVBQWU7WUFDbkJKLGlCQUFpQkMsT0FBT0MsVUFBVSxJQUFJLE1BQU0sa0NBQWtDO1FBQ2hGO1FBRUFELE9BQU9JLGdCQUFnQixDQUFDLFVBQVVEO1FBRWxDLE9BQU87WUFDTEgsT0FBT0ssbUJBQW1CLENBQUMsVUFBVUY7UUFDdkM7SUFDRixHQUFHO1FBQUNILE9BQU9DLFVBQVU7S0FBQztJQUV0QixNQUFNSyxVQUFVO1FBQ2RDLFFBQVE7WUFDTkMsR0FBRztnQkFDREMsT0FBTztvQkFDTEMsU0FBU1o7Z0JBQ1g7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ25CLGlEQUFJQTtRQUFFYSxNQUFNQTtRQUFNYyxTQUFTQTs7Ozs7O0FBQ3JDO0dBakRNdkI7S0FBQUE7QUFtRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RlbXBlcmF0dXJlQ2hhcnQudHN4PzkxNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcbmltcG9ydCB7IENhdGVnb3J5U2NhbGUgfSBmcm9tICdjaGFydC5qcyc7XG5cbkNoYXJ0LnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUpO1xuXG5pbnRlcmZhY2UgVGVtcGVyYXR1cmVQbG90UHJvcHMge1xuICB0aW1lOiBzdHJpbmdbXTsgLy8gVXNlIHN0cmluZyBhcnJheSBmb3IgdGltZSBsYWJlbHNcbiAgdGVtcGVyYXR1cmVfMm06IG51bWJlcltdOyAvLyBBc3N1bWluZyB0ZW1wZXJhdHVyZV8ybSBpcyBhbiBhcnJheSBvZiBudW1iZXJzXG59XG5cbmNvbnN0IFRlbXBlcmF0dXJlUGxvdDogUmVhY3QuRkM8VGVtcGVyYXR1cmVQbG90UHJvcHM+ID0gKHtcbiAgdGltZSxcbiAgdGVtcGVyYXR1cmVfMm0sXG59KSA9PiB7XG4gIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGVxdWFsbHkgc3BhY2VkIGluZGljZXMgYmFzZWQgb24gdGhlIGxlbmd0aCBvZiB0aGUgdGltZSBhcnJheVxuICBjb25zdCBlcXVhbGx5U3BhY2VkSW5kaWNlcyA9IEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGg6IHRpbWUubGVuZ3RoIH0sXG4gICAgKF8sIGluZGV4KSA9PiBpbmRleFxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiB0aW1lLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVGVtcGVyYXR1cmUgYXQgMm0nLFxuICAgICAgICBkYXRhOiB0ZW1wZXJhdHVyZV8ybSxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiKDc1LCAxOTIsIDE5MiknLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IFtkaXNwbGF5TGFiZWxzLCBzZXREaXNwbGF5TGFiZWxzXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCk7XG4gIGNvbnN0IHVwZGF0ZURpc3BsYXlMYWJlbHMgPSAoKSA9PiB7XG4gICAgc2V0RGlzcGxheUxhYmVscyh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldERpc3BsYXlMYWJlbHMod2luZG93LmlubmVyV2lkdGggPj0gNzY4KTsgLy8gQWRqdXN0IHRoZSBicmVha3BvaW50IGFzIG5lZWRlZFxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbd2luZG93LmlubmVyV2lkdGhdKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHNjYWxlczoge1xuICAgICAgeDoge1xuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXlMYWJlbHMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIDxMaW5lICBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfS8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVtcGVyYXR1cmVQbG90O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5lIiwiQ2hhcnQiLCJDYXRlZ29yeVNjYWxlIiwicmVnaXN0ZXIiLCJUZW1wZXJhdHVyZVBsb3QiLCJ0aW1lIiwidGVtcGVyYXR1cmVfMm0iLCJlcXVhbGx5U3BhY2VkSW5kaWNlcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJvcmRlckNvbG9yIiwiZGlzcGxheUxhYmVscyIsInNldERpc3BsYXlMYWJlbHMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidXBkYXRlRGlzcGxheUxhYmVscyIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3B0aW9ucyIsInNjYWxlcyIsIngiLCJ0aWNrcyIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TemperatureChart.tsx\n"));

/***/ })

});