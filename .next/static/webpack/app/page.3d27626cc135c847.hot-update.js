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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s();\n    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60);\n    const [locationName, setLocationName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger, weatherResponse] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const handleStopFetching = ()=>{\n        setFetchStatus(!fetchStatus);\n    };\n    const handleGetWeather = ()=>{\n        console.log(location);\n        getWeatherTrigger({\n            locationName\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weatherResponse.data) {\n            setCurrentWeather(weatherResponse.data);\n            setTimer(59);\n        }\n    }, [\n        weatherResponse,\n        timer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Exit early when the countdown reaches 0\n        if (fetchStatus && timer <= 0) {\n            var _currentWeather;\n            getWeatherTrigger({\n                locationName: (_currentWeather = currentWeather) === null || _currentWeather === void 0 ? void 0 : _currentWeather.name\n            });\n            setTimer(60);\n        }\n        let intervalId = null;\n        // Set up the interval to decrease the timer every second\n        if (fetchStatus && timer > 0) {\n            const intervalId = setInterval(()=>{\n                setTimer((prevSeconds)=>prevSeconds - 1);\n            }, 1000);\n        }\n        // Clean up the interval when the component unmounts or the countdown reaches 0\n        return ()=>{\n            if (intervalId) {\n                clearInterval(intervalId);\n            }\n        };\n    }, [\n        timer,\n        fetchStatus,\n        currentWeather\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationName,\n                            onChange: (e)=>{\n                                setLocationName(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGetWeather,\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature:\",\n                                \" \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like:\",\n                                \" \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"border  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                onClick: handleStopFetching,\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    fetchStatus ? \"Stop\" : \"Rsume\",\n                                    \" Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: \"Store Temperature \"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Weather, \"2RhEXNwc2Lt5maWH6IuS33E5pyM=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation\n    ];\n});\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ1U7QUFjdkMsU0FBU0c7UUE4RURDLHNCQUlBQSx1QkFFV0E7O0lBbkZoQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0csZ0JBQWdCTyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQWdCLENBQUM7SUFDckUsTUFBTSxDQUFDVyxtQkFBbUJDLGdCQUFnQixHQUFHWCxrRUFBNEJBO0lBRXpFLE1BQU1ZLHFCQUFxQjtRQUN6QlIsZUFBZSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1VLG1CQUFtQjtRQUN2QkMsUUFBUUMsR0FBRyxDQUFDQztRQUNaTixrQkFBa0I7WUFDaEJIO1FBQ0Y7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLElBQUlhLGdCQUFnQk0sSUFBSSxFQUFFO1lBQ3hCUixrQkFBa0JFLGdCQUFnQk0sSUFBSTtZQUN0Q1gsU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDSztRQUFpQk47S0FBTTtJQUUzQlAsZ0RBQVNBLENBQUM7UUFDUiwwQ0FBMEM7UUFDMUMsSUFBSUssZUFBZUUsU0FBUyxHQUFHO2dCQUViSDtZQURoQlEsa0JBQWtCO2dCQUNoQkgsWUFBWSxHQUFFTCxrQkFBQUEsNEJBQUFBLHNDQUFBQSxnQkFBZ0JnQixJQUFJO1lBQ3BDO1lBQ0FaLFNBQVM7UUFDWDtRQUVBLElBQUlhLGFBQW9DO1FBRXhDLHlEQUF5RDtRQUN6RCxJQUFJaEIsZUFBZUUsUUFBUSxHQUFHO1lBQzVCLE1BQU1jLGFBQWFDLFlBQVk7Z0JBQzdCZCxTQUFTLENBQUNlLGNBQWdCQSxjQUFjO1lBQzFDLEdBQUc7UUFDTDtRQUVBLCtFQUErRTtRQUMvRSxPQUFPO1lBQ0gsSUFBSUYsWUFBWTtnQkFDZEcsY0FBY0g7WUFDaEI7UUFDRjtJQUNKLEdBQUc7UUFBQ2Q7UUFBT0Y7UUFBYUQ7S0FBZTtJQUV2QyxxQkFDRSw4REFBQ3FCO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRTs0QkFDQ0YsV0FBVTs0QkFDVkcsT0FBT3BCOzRCQUNQcUIsVUFBVSxDQUFDQztnQ0FDVHJCLGdCQUFnQnFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDaEM7NEJBQ0FJLGFBQVk7Ozs7Ozs7Ozs7O2tDQUdoQiw4REFBQ0M7d0JBQ0NDLFNBQVNwQjt3QkFDVFcsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWnRCLGVBQWVnQixJQUFJLGlCQUNsQiw4REFBQ087b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDVTtzQ0FBSTdCOzs7Ozs7c0NBQ0wsOERBQUM2Qjs0QkFBR1YsV0FBVTtzQ0FBWXRCLGVBQWVnQixJQUFJOzs7Ozs7c0NBQzdDLDhEQUFDaUI7O2dDQUFHO2dDQUNXO2dDQUNYQyxDQUFBQSxRQUFPbEMsdUJBQUFBLGVBQWVxQixJQUFJLGNBQW5CckIsMkNBQUFBLHFCQUFxQm1DLElBQUksSUFBSSxNQUFLLEVBQUdDLE9BQU8sQ0FBQztnQ0FBRzs7Ozs7OztzQ0FFM0QsOERBQUNIOztnQ0FBRztnQ0FDVTtnQ0FDVkMsQ0FBQUEsUUFBT2xDLHdCQUFBQSxlQUFlcUIsSUFBSSxjQUFuQnJCLDRDQUFBQSxzQkFBcUJxQyxVQUFVLElBQUksTUFBSyxFQUFHRCxPQUFPLENBQUM7Z0NBQUc7Ozs7Ozs7c0NBRWpFLDhEQUFDSDs7Z0NBQUc7Z0NBQVdDLFFBQU9sQyx3QkFBQUEsZUFBZXFCLElBQUksY0FBbkJyQiw0Q0FBQUEsc0JBQXFCc0MsUUFBUTtnQ0FBRTs7Ozs7Ozs7Ozs7O3lDQUd2RCw4REFBQ2Y7OEJBQ0MsNEVBQUNTO3dCQUFHVixXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU8vQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDaUI7d0JBQUVqQixXQUFVOzswQ0FDWCw4REFBQ1c7Z0NBQ0NGLFNBQVNyQjtnQ0FDVFksV0FBWTs7b0NBRVhyQixjQUFjLFNBQVM7b0NBQVE7b0NBQVU7Ozs7Ozs7MENBRTVDLDhEQUFDdUM7Z0NBQUVsQixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7O2tDQUt2RCw4REFBQ2lCO3dCQUNDRSxNQUFLO3dCQUNMbkIsV0FBVTt3QkFDVk0sUUFBTzt3QkFDUGMsS0FBSTs7MENBRUosOERBQUNUO2dDQUFHWCxXQUFZOzBDQUE4Qjs7Ozs7OzBDQUM5Qyw4REFBQ2tCO2dDQUFFbEIsV0FBWTswQ0FBc0M7Ozs7Ozs7Ozs7OztrQ0FLdkQsOERBQUNpQjt3QkFDQ0UsTUFBSzt3QkFDTG5CLFdBQVU7d0JBQ1ZNLFFBQU87d0JBQ1BjLEtBQUk7OzBDQUVKLDhEQUFDVDtnQ0FBR1gsV0FBWTs7b0NBQThCO29DQUN0Qjs7Ozs7OzswQ0FFeEIsOERBQUNrQjtnQ0FBRWxCLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0Q7R0F4SXdCdkI7O1FBS3VCRCw4REFBNEJBOzs7S0FMbkRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeD84ZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uIH0gZnJvbSAnLi4vYXBpJztcblxudHlwZSB3ZWF0aGVyT2JqZWN0ID0ge1xuICBuYW1lPzogc3RyaW5nO1xuICBtYWluPzoge1xuICAgIHRlbXA/OiBzdHJpbmc7XG4gICAgZmVlbHNfbGlrZT86IHN0cmluZztcbiAgICB0ZW1wX21pbj86IHN0cmluZztcbiAgICB0ZW1wX21heD86IHN0cmluZztcbiAgICBwcmVzc3VyZTogc3RyaW5nO1xuICAgIGh1bWlkaXR5Pzogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlcigpIHtcbiAgY29uc3QgW2ZldGNoU3RhdHVzLCBzZXRGZXRjaFN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFtsb2NhdGlvbk5hbWUsIHNldExvY2F0aW9uTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50V2VhdGhlciwgc2V0Q3VycmVudFdlYXRoZXJdID0gdXNlU3RhdGU8d2VhdGhlck9iamVjdD4oe30pO1xuICBjb25zdCBbZ2V0V2VhdGhlclRyaWdnZXIsIHdlYXRoZXJSZXNwb25zZV0gPSB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uKCk7XG5cbiAgY29uc3QgaGFuZGxlU3RvcEZldGNoaW5nID0gKCkgPT4ge1xuICAgIHNldEZldGNoU3RhdHVzKCFmZXRjaFN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR2V0V2VhdGhlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgZ2V0V2VhdGhlclRyaWdnZXIoe1xuICAgICAgbG9jYXRpb25OYW1lLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdlYXRoZXJSZXNwb25zZS5kYXRhKSB7XG4gICAgICBzZXRDdXJyZW50V2VhdGhlcih3ZWF0aGVyUmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRUaW1lcig1OSk7XG4gICAgfVxuICB9LCBbd2VhdGhlclJlc3BvbnNlLCB0aW1lcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRXhpdCBlYXJseSB3aGVuIHRoZSBjb3VudGRvd24gcmVhY2hlcyAwXG4gICAgaWYgKGZldGNoU3RhdHVzICYmIHRpbWVyIDw9IDApIHtcbiAgICAgIGdldFdlYXRoZXJUcmlnZ2VyKHtcbiAgICAgICAgbG9jYXRpb25OYW1lOiBjdXJyZW50V2VhdGhlcj8ubmFtZSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZXIoNjApO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbElkOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbCB0byBkZWNyZWFzZSB0aGUgdGltZXIgZXZlcnkgc2Vjb25kXG4gICAgaWYgKGZldGNoU3RhdHVzICYmIHRpbWVyID4gMCkge1xuICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZXIoKHByZXZTZWNvbmRzKSA9PiBwcmV2U2Vjb25kcyAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50cyBvciB0aGUgY291bnRkb3duIHJlYWNoZXMgMFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfSwgW3RpbWVyLCBmZXRjaFN0YXR1cywgY3VycmVudFdlYXRoZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHotMTAgbWF4LXctNXhsIHctZnVsbCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIHNtOmZsZXggZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbGVmdC0wIHRvcC0wIGZsZXggIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXppbmMtMjAwIHBiLTYgcHQtOCBiYWNrZHJvcC1ibHVyLTJ4bCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBkYXJrOmJnLXppbmMtODAwLzMwIGRhcms6ZnJvbS1pbmhlcml0IGxnOnN0YXRpYyAgbGc6cm91bmRlZC14bCBsZzpib3JkZXIgbGc6YmctZ3JheS0yMDAgbGc6cC00IGxnOmRhcms6YmctemluYy04MDAvMzBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHctZnVsbCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICB2YWx1ZT17bG9jYXRpb25OYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldExvY2F0aW9uTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGVyZSBkbyB5b3Ugd2FudCB0byBmaW5kIHRoZSB3ZWF0aGVyIGZvcj9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlR2V0V2VhdGhlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgc206dy1hdXRvIG10LTIgc206bXQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICBGZXRjaFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzMwMHB4XSBiZWZvcmU6dy1bNDgwcHhdIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLWdyYWRpZW50LXJhZGlhbCBiZWZvcmU6ZnJvbS13aGl0ZSBiZWZvcmU6dG8tdHJhbnNwYXJlbnQgYmVmb3JlOmJsdXItMnhsIGJlZm9yZTpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LXotMjAgYWZ0ZXI6aC1bMTgwcHhdIGFmdGVyOnctWzI0MHB4XSBhZnRlcjp0cmFuc2xhdGUteC0xLzMgYWZ0ZXI6YmctZ3JhZGllbnQtY29uaWMgYWZ0ZXI6ZnJvbS1za3ktMjAwIGFmdGVyOnZpYS1ibHVlLTIwMCBhZnRlcjpibHVyLTJ4bCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmRhcms6YmctZ3JhZGllbnQtdG8tYnIgYmVmb3JlOmRhcms6ZnJvbS10cmFuc3BhcmVudCBiZWZvcmU6ZGFyazp0by1ibHVlLTcwMCBiZWZvcmU6ZGFyazpvcGFjaXR5LTEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXSBhZnRlcjpkYXJrOm9wYWNpdHktNDAgYmVmb3JlOmxnOmgtWzM2MHB4XSB6LVstMV1cIj5cbiAgICAgICAge2N1cnJlbnRXZWF0aGVyLm5hbWUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxoMT57dGltZXJ9PC9oMT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntjdXJyZW50V2VhdGhlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIFRlbXBlcmF0dXJlOnsnICd9XG4gICAgICAgICAgICAgIHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LnRlbXApIC0gMjczLjE2KS50b0ZpeGVkKDIpfSDCsENcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEZlZWxzIExpa2U6eycgJ31cbiAgICAgICAgICAgICAgeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8uZmVlbHNfbGlrZSkgLSAyNzMuMTYpLnRvRml4ZWQoMil9IMKwQ1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMj5IdW1pZGl0eToge051bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5odW1pZGl0eSl9JTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICBGZXRjaCB0aGUgd2VhdGhlciBmb3IgYW55IGNpdHkgaW4gdGhlIHdvcmxkIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIGdyaWQgdGV4dC1jZW50ZXIgbGc6bWF4LXctNXhsIGxnOnctZnVsbCBsZzptYi0wIGxnOmdyaWQtY29scy0zIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJib3JkZXIgIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3RvcEZldGNoaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZmV0Y2hTdGF0dXMgPyAnU3RvcCcgOiAnUnN1bWUnfSBGZXRjaGluZ3snICd9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU3RvcCBmZXRjaGluZyB3ZWF0aGVyIGRhdGEgYXV0b21hdGljYWxseVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybj91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZS10dyZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlN0b3JlIFRlbXBlcmF0dXJlIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFN0b3JlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIHJlYWRpbmdcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBSZXRyaWV2ZSBUZW1wZXJhdHVyZXN7JyAnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFNob3cgdGhlIGZpdmUgbW9zdCByZWNlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24iLCJXZWF0aGVyIiwiY3VycmVudFdlYXRoZXIiLCJmZXRjaFN0YXR1cyIsInNldEZldGNoU3RhdHVzIiwidGltZXIiLCJzZXRUaW1lciIsImxvY2F0aW9uTmFtZSIsInNldExvY2F0aW9uTmFtZSIsInNldEN1cnJlbnRXZWF0aGVyIiwiZ2V0V2VhdGhlclRyaWdnZXIiLCJ3ZWF0aGVyUmVzcG9uc2UiLCJoYW5kbGVTdG9wRmV0Y2hpbmciLCJoYW5kbGVHZXRXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwiZGF0YSIsIm5hbWUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2U2Vjb25kcyIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaDIiLCJOdW1iZXIiLCJ0ZW1wIiwidG9GaXhlZCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImEiLCJwIiwiaHJlZiIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});