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

/***/ "(app-pages-browser)/./src/app/screens/weather.tsx":
/*!*************************************!*\
  !*** ./src/app/screens/weather.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction Timer() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startTimer = ()=>{\n        const intervalId = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n        }, 1000); // 1000ms = 1 second\n        // Clear the interval when the component unmounts\n        return ()=>clearInterval(intervalId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Timer: \",\n                    seconds,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startTimer,\n                children: \"Start Timer\"\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(Timer, \"kbELkP5hhP5J8b20TMaxeyLQLqs=\");\n_c = Timer;\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s1();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [locationName, setLocationName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger, weatherResponse] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const startTimer = ()=>{\n        const intervalId = setInterval(()=>{\n            setTimer((prevSeconds)=>prevSeconds + 1);\n        }, 1000); // 1000ms = 1 second\n        // Clear the interval when the component unmounts\n        return ()=>clearInterval(intervalId);\n    };\n    const handleGetWeather = ()=>{\n        console.log(location);\n        getWeatherTrigger({\n            locationName\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weatherResponse.data) {\n            setCurrentWeather(weatherResponse.data);\n        }\n        if (timer <= 0) {\n            startTimer();\n        }\n    }, [\n        weatherResponse,\n        timer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationName,\n                            onChange: (e)=>{\n                                setLocationName(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGetWeather,\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature: \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like: \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 30\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"border  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Stop Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Store Temperature\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s1(Weather, \"CXyUnEZh7bmbqlO002HbSMc+fLY=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation\n    ];\n});\n_c1 = Weather;\nvar _c, _c1;\n$RefreshReg$(_c, \"Timer\");\n$RefreshReg$(_c1, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzJDO0FBQ1c7QUFjdEQsU0FBU0c7O0lBQ0wsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1LLGFBQWE7UUFDakIsTUFBTUMsYUFBYUMsWUFBWTtZQUM3QkgsV0FBV0ksQ0FBQUEsY0FBZUEsY0FBYztRQUMxQyxHQUFHLE9BQU8sb0JBQW9CO1FBRTlCLGlEQUFpRDtRQUNqRCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7O29CQUFHO29CQUFRUjtvQkFBUTs7Ozs7OzswQkFDcEIsOERBQUNTO2dCQUFPQyxTQUFTUjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR25DO0dBbEJPSDtLQUFBQTtBQXFCTSxTQUFTWTtRQWdEY0Msc0JBQ0RBLHVCQUNGQTs7SUFoRGpDLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDa0IsY0FBYUMsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNlLGdCQUFnQkssa0JBQWtCLEdBQUdwQiwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNxQixtQkFBbUJDLGdCQUFnQixHQUFHckIsa0VBQTRCQTtJQUV6RSxNQUFNSSxhQUFhO1FBQ2pCLE1BQU1DLGFBQWFDLFlBQVk7WUFDN0JVLFNBQVNULENBQUFBLGNBQWVBLGNBQWM7UUFDeEMsR0FBRyxPQUFPLG9CQUFvQjtRQUU5QixpREFBaUQ7UUFDakQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QjtJQUVBLE1BQU1pQixtQkFBbUI7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWkwsa0JBQWtCO1lBQ2hCSDtRQUNGO0lBQ0Y7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1IsSUFBR3VCLGdCQUFnQkssSUFBSSxFQUFDO1lBQ3BCUCxrQkFBa0JFLGdCQUFnQkssSUFBSTtRQUMxQztRQUNBLElBQUdYLFNBQU8sR0FBRTtZQUNSWDtRQUNKO0lBQ0YsR0FBRTtRQUFDaUI7UUFBZ0JOO0tBQU07SUFFekIscUJBQ0UsOERBQUNZO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDbkI7Z0JBQUltQixXQUFVOztrQ0FDYiw4REFBQ25CO3dCQUFJbUIsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQU1ELFdBQVU7NEJBQ2pCRSxPQUFPYjs0QkFDUGMsVUFBVSxDQUFDQztnQ0FBS2QsZ0JBQWdCYyxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUM7NEJBQy9DSSxhQUFZOzs7Ozs7Ozs7OztrQ0FFZCw4REFBQ3ZCO3dCQUFPQyxTQUFTVTt3QkFBa0JNLFdBQVU7a0NBQTRDOzs7Ozs7Ozs7Ozs7MEJBSTNGLDhEQUFDbkI7Z0JBQUltQixXQUFVOzBCQUNaZCxlQUFlcUIsSUFBSSxpQkFBQyw4REFBQzFCOztzQ0FDbEIsOERBQUNDOzRCQUFHa0IsV0FBVTtzQ0FBWWQsZUFBZXFCLElBQUk7Ozs7OztzQ0FDN0MsOERBQUNDOztnQ0FBRztnQ0FBZUMsQ0FBQUEsUUFBT3ZCLHVCQUFBQSxlQUFlYSxJQUFJLGNBQW5CYiwyQ0FBQUEscUJBQXFCd0IsSUFBSSxJQUFFLE1BQUssRUFBR0MsT0FBTyxDQUFDOzs7Ozs7O3NDQUNyRSw4REFBQ0g7O2dDQUFHO2dDQUFjQyxDQUFBQSxRQUFPdkIsd0JBQUFBLGVBQWVhLElBQUksY0FBbkJiLDRDQUFBQSxzQkFBcUIwQixVQUFVLElBQUUsTUFBSyxFQUFHRCxPQUFPLENBQUM7Ozs7Ozs7c0NBQzFFLDhEQUFDSDs7Z0NBQUc7Z0NBQVlDLFFBQU92Qix3QkFBQUEsZUFBZWEsSUFBSSxjQUFuQmIsNENBQUFBLHNCQUFxQjJCLFFBQVE7Z0NBQUc7Ozs7Ozs7Ozs7Ozt5Q0FDcEQsOERBQUNoQzs4QkFDSiw0RUFBQ0M7d0JBQUdrQixXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ25CO2dCQUFJbUIsV0FBVTs7a0NBQ2IsOERBQUNjO3dCQUNDZCxXQUFVOzswQ0FFViw4REFBQ1E7Z0NBQUdSLFdBQVk7O29DQUE4QjtvQ0FDOUI7Ozs7Ozs7MENBRWhCLDhEQUFDZTtnQ0FBRWYsV0FBWTswQ0FBc0M7Ozs7Ozs7Ozs7OztrQ0FLdkQsOERBQUNjO3dCQUNDRSxNQUFLO3dCQUNMaEIsV0FBVTt3QkFDVkssUUFBTzt3QkFDUFksS0FBSTs7MENBRUosOERBQUNUO2dDQUFHUixXQUFZOztvQ0FBOEI7b0NBQzFCOzs7Ozs7OzBDQUdwQiw4REFBQ2U7Z0NBQUVmLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7a0NBS3ZELDhEQUFDYzt3QkFDQ0UsTUFBSzt3QkFDTGhCLFdBQVU7d0JBQ1ZLLFFBQU87d0JBQ1BZLEtBQUk7OzBDQUVKLDhEQUFDVDtnQ0FBR1IsV0FBWTs7b0NBQThCO29DQUN0Qjs7Ozs7OzswQ0FFeEIsOERBQUNlO2dDQUFFZixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0lBbEd3QmY7O1FBS3VCYiw4REFBNEJBOzs7TUFMbkRhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeD84ZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiB9IGZyb20gJy4uL2FwaSc7XG5cbnR5cGUgd2VhdGhlck9iamVjdCA9IHtcbiAgICBuYW1lPzpzdHJpbmcsXG4gICAgbWFpbj86e1xuICAgICAgICB0ZW1wPzpzdHJpbmcsXG4gICAgICAgIGZlZWxzX2xpa2U/OiBzdHJpbmcsXG4gICAgICAgIHRlbXBfbWluPzogc3RyaW5nLFxuICAgICAgICB0ZW1wX21heD86IHN0cmluZyxcbiAgICAgICAgcHJlc3N1cmU6c3RyaW5nLFxuICAgICAgICBodW1pZGl0eT86IHN0cmluZ1xuICAgIH1cbn1cblxuZnVuY3Rpb24gVGltZXIoKSB7XG4gICAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG4gIFxuICAgIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRTZWNvbmRzKHByZXZTZWNvbmRzID0+IHByZXZTZWNvbmRzICsgMSk7XG4gICAgICB9LCAxMDAwKTsgLy8gMTAwMG1zID0gMSBzZWNvbmRcbiAgXG4gICAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICB9O1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRpbWVyOiB7c2Vjb25kc30gc2Vjb25kczwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRUaW1lcn0+U3RhcnQgVGltZXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYXRoZXIoKSB7XG5cbiAgY29uc3QgW3RpbWVyLHNldFRpbWVyXSA9IHVzZVN0YXRlKDYwKTtcbiAgY29uc3QgW2xvY2F0aW9uTmFtZSxzZXRMb2NhdGlvbk5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudFdlYXRoZXIsIHNldEN1cnJlbnRXZWF0aGVyXSA9IHVzZVN0YXRlPHdlYXRoZXJPYmplY3Q+KHt9KVxuICBjb25zdCBbZ2V0V2VhdGhlclRyaWdnZXIsIHdlYXRoZXJSZXNwb25zZV0gPSB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uKClcblxuICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lcihwcmV2U2Vjb25kcyA9PiBwcmV2U2Vjb25kcyArIDEpO1xuICAgIH0sIDEwMDApOyAvLyAxMDAwbXMgPSAxIHNlY29uZFxuXG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdldFdlYXRoZXIgPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcbiAgICBnZXRXZWF0aGVyVHJpZ2dlcih7XG4gICAgICBsb2NhdGlvbk5hbWVcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYod2VhdGhlclJlc3BvbnNlLmRhdGEpe1xuICAgICAgICBzZXRDdXJyZW50V2VhdGhlcih3ZWF0aGVyUmVzcG9uc2UuZGF0YSlcbiAgICB9XG4gICAgaWYodGltZXI8PTApe1xuICAgICAgICBzdGFydFRpbWVyKClcbiAgICB9XG4gIH0sW3dlYXRoZXJSZXNwb25zZSx0aW1lcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBtYXgtdy01eGwgdy1mdWxsIGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gc206ZmxleCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBsZWZ0LTAgdG9wLTAgZmxleCAgdy1mdWxsIGp1c3RpZnktY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBiZy1ncmFkaWVudC10by1iIGZyb20temluYy0yMDAgcGItNiBwdC04IGJhY2tkcm9wLWJsdXItMnhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctemluYy04MDAvMzAgZGFyazpmcm9tLWluaGVyaXQgbGc6c3RhdGljICBsZzpyb3VuZGVkLXhsIGxnOmJvcmRlciBsZzpiZy1ncmF5LTIwMCBsZzpwLTQgbGc6ZGFyazpiZy16aW5jLTgwMC8zMFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IHctZnVsbCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICB2YWx1ZT17bG9jYXRpb25OYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRMb2NhdGlvbk5hbWUoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nV2hlcmUgZG8geW91IHdhbnQgdG8gZmluZCB0aGUgd2VhdGhlciBmb3I/Jy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUdldFdlYXRoZXJ9IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdy1mdWxsIHNtOnctYXV0byBtdC0yIHNtOm10LTAnPlxuICAgICAgICAgIEZldGNoXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggcGxhY2UtaXRlbXMtY2VudGVyIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6aC1bMzAwcHhdIGJlZm9yZTp3LVs0ODBweF0gYmVmb3JlOi10cmFuc2xhdGUteC0xLzIgYmVmb3JlOnJvdW5kZWQtZnVsbCBiZWZvcmU6YmctZ3JhZGllbnQtcmFkaWFsIGJlZm9yZTpmcm9tLXdoaXRlIGJlZm9yZTp0by10cmFuc3BhcmVudCBiZWZvcmU6Ymx1ci0yeGwgYmVmb3JlOmNvbnRlbnQtWycnXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjotei0yMCBhZnRlcjpoLVsxODBweF0gYWZ0ZXI6dy1bMjQwcHhdIGFmdGVyOnRyYW5zbGF0ZS14LTEvMyBhZnRlcjpiZy1ncmFkaWVudC1jb25pYyBhZnRlcjpmcm9tLXNreS0yMDAgYWZ0ZXI6dmlhLWJsdWUtMjAwIGFmdGVyOmJsdXItMnhsIGFmdGVyOmNvbnRlbnQtWycnXSBiZWZvcmU6ZGFyazpiZy1ncmFkaWVudC10by1iciBiZWZvcmU6ZGFyazpmcm9tLXRyYW5zcGFyZW50IGJlZm9yZTpkYXJrOnRvLWJsdWUtNzAwIGJlZm9yZTpkYXJrOm9wYWNpdHktMTAgYWZ0ZXI6ZGFyazpmcm9tLXNreS05MDAgYWZ0ZXI6ZGFyazp2aWEtWyMwMTQxZmZdIGFmdGVyOmRhcms6b3BhY2l0eS00MCBiZWZvcmU6bGc6aC1bMzYwcHhdIHotWy0xXVwiPlxuICAgICAgICB7Y3VycmVudFdlYXRoZXIubmFtZT88ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPntjdXJyZW50V2VhdGhlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+VGVtcGVyYXR1cmU6IHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LnRlbXApLTI3My4xNikudG9GaXhlZCgyKX08L2gyPlxuICAgICAgICAgICAgPGgyPkZlZWxzIExpa2U6IHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LmZlZWxzX2xpa2UpLTI3My4xNikudG9GaXhlZCgyKX08L2gyPlxuICAgICAgICAgICAgPGgyPkh1bWlkaXR5OiB7KE51bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5odW1pZGl0eSkpfSU8L2gyPlxuICAgICAgICA8L2Rpdj46PGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsJz5GZXRjaCB0aGUgd2VhdGhlciBmb3IgYW55IGNpdHkgaW4gdGhlIHdvcmxkITwvaDE+PC9kaXY+fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMzIgZ3JpZCB0ZXh0LWNlbnRlciBsZzptYXgtdy01eGwgbGc6dy1mdWxsIGxnOm1iLTAgbGc6Z3JpZC1jb2xzLTMgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyICBncm91cCByb3VuZGVkLWxnIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgU3RvcCBGZXRjaGluZ3snICd9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU3RvcCBmZXRjaGluZyB3ZWF0aGVyIGRhdGEgYXV0b21hdGljYWxseVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybj91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZS10dyZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgU3RvcmUgVGVtcGVyYXR1cmV7JyAnfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU3RvcmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS90ZW1wbGF0ZXM/ZnJhbWV3b3JrPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIFJldHJpZXZlIFRlbXBlcmF0dXJlc3snICd9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU2hvdyB0aGUgZml2ZSBtb3N0IHJlY2VudCB0ZW1wZXJhdHVyZSByZWFkaW5nc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uIiwiVGltZXIiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsInN0YXJ0VGltZXIiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2U2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJXZWF0aGVyIiwiY3VycmVudFdlYXRoZXIiLCJ0aW1lciIsInNldFRpbWVyIiwibG9jYXRpb25OYW1lIiwic2V0TG9jYXRpb25OYW1lIiwic2V0Q3VycmVudFdlYXRoZXIiLCJnZXRXZWF0aGVyVHJpZ2dlciIsIndlYXRoZXJSZXNwb25zZSIsImhhbmRsZUdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJkYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJoMiIsIk51bWJlciIsInRlbXAiLCJ0b0ZpeGVkIiwiZmVlbHNfbGlrZSIsImh1bWlkaXR5IiwiYSIsInAiLCJocmVmIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});