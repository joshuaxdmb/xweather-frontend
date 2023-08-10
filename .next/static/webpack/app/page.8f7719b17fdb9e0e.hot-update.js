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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction Timer() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const startTimer = ()=>{\n        const intervalId = setInterval(()=>{\n            setSeconds((prevSeconds)=>prevSeconds + 1);\n        }, 1000); // 1000ms = 1 second\n        // Clear the interval when the component unmounts\n        return ()=>clearInterval(intervalId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Timer: \",\n                    seconds,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startTimer,\n                children: \"Start Timer\"\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(Timer, \"kbELkP5hhP5J8b20TMaxeyLQLqs=\");\n_c = Timer;\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s1();\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6000);\n    const [locationName, setLocationName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger, weatherResponse] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const handleGetWeather = ()=>{\n        console.log(location);\n        getWeatherTrigger({\n            locationName\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weatherResponse.data) {\n            setCurrentWeather(weatherResponse.data);\n        }\n        const startTimer = ()=>{\n            const intervalId = setInterval(()=>{\n                setTimer((prevSeconds)=>prevSeconds - 1);\n            }, 1000); // 1000ms = 1 second\n            // Clear the interval when the component unmounts\n            return ()=>clearInterval(intervalId);\n        };\n        //startTimer()\n        if (timer <= 0) {\n            setTimer(6000);\n        }\n    }, [\n        weatherResponse,\n        timer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationName,\n                            onChange: (e)=>{\n                                setLocationName(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGetWeather,\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature: \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like: \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 30\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"border  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Stop Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Store Temperature\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s1(Weather, \"wUJYtAM9Pl4PfE62WFYrX8aaTd8=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation\n    ];\n});\n_c1 = Weather;\nvar _c, _c1;\n$RefreshReg$(_c, \"Timer\");\n$RefreshReg$(_c1, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzJDO0FBQ1c7QUFjdEQsU0FBU0c7O0lBQ0wsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1LLGFBQWE7UUFDakIsTUFBTUMsYUFBYUMsWUFBWTtZQUM3QkgsV0FBV0ksQ0FBQUEsY0FBZUEsY0FBYztRQUMxQyxHQUFHLE9BQU8sb0JBQW9CO1FBRTlCLGlEQUFpRDtRQUNqRCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7O29CQUFHO29CQUFRUjtvQkFBUTs7Ozs7OzswQkFDcEIsOERBQUNTO2dCQUFPQyxTQUFTUjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR25DO0dBbEJPSDtLQUFBQTtBQXFCTSxTQUFTWTtRQXNEY0Msc0JBQ0RBLHVCQUNGQTs7SUF0RGpDLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDa0IsY0FBYUMsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNoRCxNQUFNLENBQUNlLGdCQUFnQkssa0JBQWtCLEdBQUdwQiwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNxQixtQkFBbUJDLGdCQUFnQixHQUFHckIsa0VBQTRCQTtJQUl6RSxNQUFNc0IsbUJBQW1CO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNDO1FBQ1pMLGtCQUFrQjtZQUNoQkg7UUFDRjtJQUNGO0lBRUFuQixnREFBU0EsQ0FBQztRQUNSLElBQUd1QixnQkFBZ0JLLElBQUksRUFBQztZQUNwQlAsa0JBQWtCRSxnQkFBZ0JLLElBQUk7UUFDMUM7UUFFQSxNQUFNdEIsYUFBYTtZQUNmLE1BQU1DLGFBQWFDLFlBQVk7Z0JBQzdCVSxTQUFTVCxDQUFBQSxjQUFlQSxjQUFjO1lBQ3hDLEdBQUcsT0FBTyxvQkFBb0I7WUFFOUIsaURBQWlEO1lBQ2pELE9BQU8sSUFBTUMsY0FBY0g7UUFDN0I7UUFFQSxjQUFjO1FBQ2hCLElBQUdVLFNBQU8sR0FBRTtZQUNSQyxTQUFTO1FBQ2I7SUFFRixHQUFFO1FBQUNLO1FBQWdCTjtLQUFNO0lBRXpCLHFCQUNFLDhEQUFDWTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ25CO2dCQUFJbUIsV0FBVTs7a0NBQ2IsOERBQUNuQjt3QkFBSW1CLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFNRCxXQUFVOzRCQUNqQkUsT0FBT2I7NEJBQ1BjLFVBQVUsQ0FBQ0M7Z0NBQUtkLGdCQUFnQmMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFDOzRCQUMvQ0ksYUFBWTs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUN2Qjt3QkFBT0MsU0FBU1U7d0JBQWtCTSxXQUFVO2tDQUE0Qzs7Ozs7Ozs7Ozs7OzBCQUkzRiw4REFBQ25CO2dCQUFJbUIsV0FBVTswQkFDWmQsZUFBZXFCLElBQUksaUJBQUMsOERBQUMxQjs7c0NBQ2xCLDhEQUFDQztzQ0FBSUs7Ozs7OztzQ0FDTCw4REFBQ0w7NEJBQUdrQixXQUFVO3NDQUFZZCxlQUFlcUIsSUFBSTs7Ozs7O3NDQUM3Qyw4REFBQ0M7O2dDQUFHO2dDQUFlQyxDQUFBQSxRQUFPdkIsdUJBQUFBLGVBQWVhLElBQUksY0FBbkJiLDJDQUFBQSxxQkFBcUJ3QixJQUFJLElBQUUsTUFBSyxFQUFHQyxPQUFPLENBQUM7Ozs7Ozs7c0NBQ3JFLDhEQUFDSDs7Z0NBQUc7Z0NBQWNDLENBQUFBLFFBQU92Qix3QkFBQUEsZUFBZWEsSUFBSSxjQUFuQmIsNENBQUFBLHNCQUFxQjBCLFVBQVUsSUFBRSxNQUFLLEVBQUdELE9BQU8sQ0FBQzs7Ozs7OztzQ0FDMUUsOERBQUNIOztnQ0FBRztnQ0FBWUMsUUFBT3ZCLHdCQUFBQSxlQUFlYSxJQUFJLGNBQW5CYiw0Q0FBQUEsc0JBQXFCMkIsUUFBUTtnQ0FBRzs7Ozs7Ozs7Ozs7O3lDQUNwRCw4REFBQ2hDOzhCQUNKLDRFQUFDQzt3QkFBR2tCLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9CLDhEQUFDbkI7Z0JBQUltQixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQ0NkLFdBQVU7OzBDQUVWLDhEQUFDUTtnQ0FBR1IsV0FBWTs7b0NBQThCO29DQUM5Qjs7Ozs7OzswQ0FFaEIsOERBQUNlO2dDQUFFZixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7O2tDQUt2RCw4REFBQ2M7d0JBQ0NFLE1BQUs7d0JBQ0xoQixXQUFVO3dCQUNWSyxRQUFPO3dCQUNQWSxLQUFJOzswQ0FFSiw4REFBQ1Q7Z0NBQUdSLFdBQVk7O29DQUE4QjtvQ0FDMUI7Ozs7Ozs7MENBR3BCLDhEQUFDZTtnQ0FBRWYsV0FBWTswQ0FBc0M7Ozs7Ozs7Ozs7OztrQ0FLdkQsOERBQUNjO3dCQUNDRSxNQUFLO3dCQUNMaEIsV0FBVTt3QkFDVkssUUFBTzt3QkFDUFksS0FBSTs7MENBRUosOERBQUNUO2dDQUFHUixXQUFZOztvQ0FBOEI7b0NBQ3RCOzs7Ozs7OzBDQUV4Qiw4REFBQ2U7Z0NBQUVmLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0Q7SUF4R3dCZjs7UUFLdUJiLDhEQUE0QkE7OztNQUxuRGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zY3JlZW5zL3dlYXRoZXIudHN4PzhlZTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uIH0gZnJvbSAnLi4vYXBpJztcblxudHlwZSB3ZWF0aGVyT2JqZWN0ID0ge1xuICAgIG5hbWU/OnN0cmluZyxcbiAgICBtYWluPzp7XG4gICAgICAgIHRlbXA/OnN0cmluZyxcbiAgICAgICAgZmVlbHNfbGlrZT86IHN0cmluZyxcbiAgICAgICAgdGVtcF9taW4/OiBzdHJpbmcsXG4gICAgICAgIHRlbXBfbWF4Pzogc3RyaW5nLFxuICAgICAgICBwcmVzc3VyZTpzdHJpbmcsXG4gICAgICAgIGh1bWlkaXR5Pzogc3RyaW5nXG4gICAgfVxufVxuXG5mdW5jdGlvbiBUaW1lcigpIHtcbiAgICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgwKTtcbiAgXG4gICAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFNlY29uZHMocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgKyAxKTtcbiAgICAgIH0sIDEwMDApOyAvLyAxMDAwbXMgPSAxIHNlY29uZFxuICBcbiAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIH07XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VGltZXI6IHtzZWNvbmRzfSBzZWNvbmRzPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydFRpbWVyfT5TdGFydCBUaW1lcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlcigpIHtcblxuICBjb25zdCBbdGltZXIsc2V0VGltZXJdID0gdXNlU3RhdGUoNjAwMCk7XG4gIGNvbnN0IFtsb2NhdGlvbk5hbWUsc2V0TG9jYXRpb25OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnRXZWF0aGVyLCBzZXRDdXJyZW50V2VhdGhlcl0gPSB1c2VTdGF0ZTx3ZWF0aGVyT2JqZWN0Pih7fSlcbiAgY29uc3QgW2dldFdlYXRoZXJUcmlnZ2VyLCB3ZWF0aGVyUmVzcG9uc2VdID0gdXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbigpXG5cbiAgXG5cbiAgY29uc3QgaGFuZGxlR2V0V2VhdGhlciA9ICgpID0+e1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIGdldFdlYXRoZXJUcmlnZ2VyKHtcbiAgICAgIGxvY2F0aW9uTmFtZVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih3ZWF0aGVyUmVzcG9uc2UuZGF0YSl7XG4gICAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHdlYXRoZXJSZXNwb25zZS5kYXRhKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0VGltZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZXIocHJldlNlY29uZHMgPT4gcHJldlNlY29uZHMgLSAxKTtcbiAgICAgICAgfSwgMTAwMCk7IC8vIDEwMDBtcyA9IDEgc2Vjb25kXG4gICAgXG4gICAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9O1xuXG4gICAgICAvL3N0YXJ0VGltZXIoKVxuICAgIGlmKHRpbWVyPD0wKXtcbiAgICAgICAgc2V0VGltZXIoNjAwMClcbiAgICB9XG5cbiAgfSxbd2VhdGhlclJlc3BvbnNlLHRpbWVyXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIG1heC13LTV4bCB3LWZ1bGwgZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBzbTpmbGV4IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGxlZnQtMCB0b3AtMCBmbGV4ICB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS16aW5jLTIwMCBwYi02IHB0LTggYmFja2Ryb3AtYmx1ci0yeGwgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpiZy16aW5jLTgwMC8zMCBkYXJrOmZyb20taW5oZXJpdCBsZzpzdGF0aWMgIGxnOnJvdW5kZWQteGwgbGc6Ym9yZGVyIGxnOmJnLWdyYXktMjAwIGxnOnAtNCBsZzpkYXJrOmJnLXppbmMtODAwLzMwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgdy1mdWxsIHRleHQtY2VudGVyJ1xuICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbk5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldExvY2F0aW9uTmFtZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdXaGVyZSBkbyB5b3Ugd2FudCB0byBmaW5kIHRoZSB3ZWF0aGVyIGZvcj8nLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlR2V0V2VhdGhlcn0gY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB3LWZ1bGwgc206dy1hdXRvIG10LTIgc206bXQtMCc+XG4gICAgICAgICAgRmV0Y2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG4gICAgICAgIHtjdXJyZW50V2VhdGhlci5uYW1lPzxkaXY+XG4gICAgICAgICAgICA8aDE+e3RpbWVyfTwvaDE+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCc+e2N1cnJlbnRXZWF0aGVyLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj5UZW1wZXJhdHVyZTogeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8udGVtcCktMjczLjE2KS50b0ZpeGVkKDIpfTwvaDI+XG4gICAgICAgICAgICA8aDI+RmVlbHMgTGlrZTogeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8uZmVlbHNfbGlrZSktMjczLjE2KS50b0ZpeGVkKDIpfTwvaDI+XG4gICAgICAgICAgICA8aDI+SHVtaWRpdHk6IHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/Lmh1bWlkaXR5KSl9JTwvaDI+XG4gICAgICAgIDwvZGl2Pjo8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPkZldGNoIHRoZSB3ZWF0aGVyIGZvciBhbnkgY2l0eSBpbiB0aGUgd29ybGQhPC9oMT48L2Rpdj59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBncmlkIHRleHQtY2VudGVyIGxnOm1heC13LTV4bCBsZzp3LWZ1bGwgbGc6bWItMCBsZzpncmlkLWNvbHMtMyBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBTdG9wIEZldGNoaW5neycgJ31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTdG9wIGZldGNoaW5nIHdlYXRoZXIgZGF0YSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlLXR3JnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBTdG9yZSBUZW1wZXJhdHVyZXsnICd9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTdG9yZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSByZWFkaW5nXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL3RlbXBsYXRlcz9mcmFtZXdvcms9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgUmV0cmlldmUgVGVtcGVyYXR1cmVzeycgJ31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTaG93IHRoZSBmaXZlIG1vc3QgcmVjZW50IHRlbXBlcmF0dXJlIHJlYWRpbmdzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24iLCJUaW1lciIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwic3RhcnRUaW1lciIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZTZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsIldlYXRoZXIiLCJjdXJyZW50V2VhdGhlciIsInRpbWVyIiwic2V0VGltZXIiLCJsb2NhdGlvbk5hbWUiLCJzZXRMb2NhdGlvbk5hbWUiLCJzZXRDdXJyZW50V2VhdGhlciIsImdldFdlYXRoZXJUcmlnZ2VyIiwid2VhdGhlclJlc3BvbnNlIiwiaGFuZGxlR2V0V2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImRhdGEiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwibmFtZSIsImgyIiwiTnVtYmVyIiwidGVtcCIsInRvRml4ZWQiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJhIiwicCIsImhyZWYiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});