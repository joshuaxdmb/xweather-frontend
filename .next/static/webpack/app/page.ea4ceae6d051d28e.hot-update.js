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

/***/ "(app-pages-browser)/./src/app/api.tsx":
/*!*************************!*\
  !*** ./src/app/api.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; },\n/* harmony export */   useGetWatherLocationMutation: function() { return /* binding */ useGetWatherLocationMutation; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"(app-pages-browser)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({\n        baseUrl: process.env.API_BASE_URL\n    }),\n    reducerPath: \"main\",\n    tagTypes: [],\n    endpoints: (build)=>({\n            getWatherLocation: build.mutation({\n                query: (payload)=>({\n                        url: \"weather/location\",\n                        method: \"POST\",\n                        body: payload\n                    })\n            })\n        })\n});\nconst { useGetWatherLocationMutation } = api;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBQzNDO0FBRTNCRSxvREFBYTtBQUVOLE1BQU1FLE1BQU1KLHVFQUFTQSxDQUFDO0lBQ3pCSyxXQUFVSiw0RUFBY0EsQ0FBQztRQUFDSyxTQUFRQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLFlBQVk7SUFBQTtJQUMxREMsYUFBWTtJQUNaQyxVQUFTLEVBQUU7SUFDWEMsV0FBVSxDQUFDQyxRQUFhO1lBQ3BCQyxtQkFBbUJELE1BQU1FLFFBQVEsQ0FBQztnQkFDOUJDLE9BQU0sQ0FBQ0MsVUFBYzt3QkFDakJDLEtBQUk7d0JBQ0pDLFFBQU87d0JBQ1BDLE1BQUtIO29CQUNUO1lBQ0o7UUFDSjtBQUNKLEdBQUU7QUFFSyxNQUFNLEVBQ1RJLDRCQUE0QixFQUMvQixHQUFHakIsSUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FwaS50c3g/ZTgzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnl9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuZG90ZW52LmNvbmZpZygpXG5cbmV4cG9ydCBjb25zdCBhcGkgPSBjcmVhdGVBcGkoe1xuICAgIGJhc2VRdWVyeTpmZXRjaEJhc2VRdWVyeSh7YmFzZVVybDpwcm9jZXNzLmVudi5BUElfQkFTRV9VUkx9KSxcbiAgICByZWR1Y2VyUGF0aDonbWFpbicsXG4gICAgdGFnVHlwZXM6W10sXG4gICAgZW5kcG9pbnRzOihidWlsZDphbnkpPT4oe1xuICAgICAgICBnZXRXYXRoZXJMb2NhdGlvbjogYnVpbGQubXV0YXRpb24oe1xuICAgICAgICAgICAgcXVlcnk6KHBheWxvYWQ6e30pPT4oe1xuICAgICAgICAgICAgICAgIHVybDond2VhdGhlci9sb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OnBheWxvYWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgIH0pXG59KVxuXG5leHBvcnQgY29uc3Qge1xuICAgIHVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24sXG59ID0gYXBpIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiZG90ZW52IiwiY29uZmlnIiwiYXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJBUElfQkFTRV9VUkwiLCJyZWR1Y2VyUGF0aCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRXYXRoZXJMb2NhdGlvbiIsIm11dGF0aW9uIiwicXVlcnkiLCJwYXlsb2FkIiwidXJsIiwibWV0aG9kIiwiYm9keSIsInVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api.tsx\n"));

/***/ })

});