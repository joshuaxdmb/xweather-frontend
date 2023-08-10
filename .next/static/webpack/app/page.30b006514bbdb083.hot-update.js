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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s();\n    const fetchRate = 10 //in seconds\n    ;\n    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fetchRate);\n    const [locationName, setLocationName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger, weatherResponse] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const handleStopFetching = ()=>{\n        setFetchStatus(!fetchStatus);\n    };\n    const handleGetWeather = ()=>{\n        console.log(location);\n        getWeatherTrigger({\n            locationName\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (weatherResponse.data) {\n            setCurrentWeather(weatherResponse.data);\n            setTimer(fetchRate);\n        }\n    }, [\n        weatherResponse.data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId = null;\n        // Exit early when the countdown reaches 0\n        if (fetchStatus && timer <= 0) {\n            var _currentWeather;\n            getWeatherTrigger({\n                locationName: (_currentWeather = currentWeather) === null || _currentWeather === void 0 ? void 0 : _currentWeather.name\n            });\n            setTimer(fetchRate);\n        }\n        // Set up the interval to decrease the timer every second\n        if (fetchStatus) {\n            const intervalId = setInterval(()=>{\n                setTimer(timer - 1);\n            }, 1000);\n        }\n        // Clean up the interval when the component unmounts or the countdown reaches 0\n        return ()=>{\n            if (intervalId) {\n                clearInterval(intervalId);\n            }\n        };\n    }, [\n        timer,\n        fetchStatus\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationName,\n                            onChange: (e)=>{\n                                setLocationName(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGetWeather,\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature: \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like: \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 30\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"border  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                onClick: handleStopFetching,\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    fetchStatus ? \"Stop\" : \"Rsume\",\n                                    \" Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Store Temperature\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Weather, \"ta7xZ/ku7qgcYeH5++PTut07pfI=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation\n    ];\n});\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzJDO0FBQ1c7QUFjdkMsU0FBU0c7UUFxRWNDLHNCQUNEQSx1QkFDRkE7O0lBdEUvQixNQUFNQyxZQUFZLEdBQUcsWUFBWTs7SUFDakMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ08sT0FBTUMsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQ0k7SUFDbEMsTUFBTSxDQUFDSyxjQUFhQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDaEQsTUFBTSxDQUFDRyxnQkFBZ0JRLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNZLG1CQUFtQkMsZ0JBQWdCLEdBQUdaLGtFQUE0QkE7SUFFdkUsTUFBTWEscUJBQXFCO1FBQ3ZCUixlQUFlLENBQUNEO0lBQ3BCO0lBRUYsTUFBTVUsbUJBQW1CO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNDO1FBQ1pOLGtCQUFrQjtZQUNoQkg7UUFDRjtJQUNGO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBR2MsZ0JBQWdCTSxJQUFJLEVBQUM7WUFDcEJSLGtCQUFrQkUsZ0JBQWdCTSxJQUFJO1lBQ3RDWCxTQUFTSjtRQUNiO0lBRUYsR0FBRTtRQUFDUyxnQkFBZ0JNLElBQUk7S0FBQztJQUV4QnBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXFCLGFBQW9DO1FBQ3hDLDBDQUEwQztRQUMxQyxJQUFJZixlQUFlRSxTQUFTLEdBQUc7Z0JBRVZKO1lBRGpCUyxrQkFBa0I7Z0JBQ2RILFlBQVksR0FBQ04sa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCa0IsSUFBSTtZQUNuQztZQUNGYixTQUFTSjtRQUFVO1FBRXZCLHlEQUF5RDtRQUN6RCxJQUFHQyxhQUFZO1lBQ1gsTUFBTWUsYUFBYUUsWUFBWTtnQkFDM0JkLFNBQVNELFFBQU07WUFDakIsR0FBRztRQUNUO1FBR0EsK0VBQStFO1FBQy9FLE9BQU87WUFDSCxJQUFHYSxZQUFXO2dCQUNWRyxjQUFjSDtZQUNsQjtRQUNKO0lBQ0YsR0FBRztRQUFDYjtRQUFNRjtLQUFZO0lBRXRCLHFCQUNFLDhEQUFDbUI7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFNRixXQUFVOzRCQUNqQkcsT0FBT25COzRCQUNQb0IsVUFBVSxDQUFDQztnQ0FBS3BCLGdCQUFnQm9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBQzs0QkFDL0NJLGFBQVk7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFBT0MsU0FBU25CO3dCQUFrQlUsV0FBVTtrQ0FBNEM7Ozs7Ozs7Ozs7OzswQkFJM0YsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNadEIsZUFBZWtCLElBQUksaUJBQUMsOERBQUNLO29CQUFJRCxXQUFVOztzQ0FDaEMsOERBQUNVO3NDQUFJNUI7Ozs7OztzQ0FDTCw4REFBQzRCOzRCQUFHVixXQUFVO3NDQUFZdEIsZUFBZWtCLElBQUk7Ozs7OztzQ0FDN0MsOERBQUNlOztnQ0FBRztnQ0FBZUMsQ0FBQUEsUUFBT2xDLHVCQUFBQSxlQUFlcUIsSUFBSSxjQUFuQnJCLDJDQUFBQSxxQkFBcUJtQyxJQUFJLElBQUUsTUFBSyxFQUFHQyxPQUFPLENBQUM7Z0NBQUc7Ozs7Ozs7c0NBQ3hFLDhEQUFDSDs7Z0NBQUc7Z0NBQWNDLENBQUFBLFFBQU9sQyx3QkFBQUEsZUFBZXFCLElBQUksY0FBbkJyQiw0Q0FBQUEsc0JBQXFCcUMsVUFBVSxJQUFFLE1BQUssRUFBR0QsT0FBTyxDQUFDO2dDQUFHOzs7Ozs7O3NDQUM3RSw4REFBQ0g7O2dDQUFHO2dDQUFZQyxRQUFPbEMsd0JBQUFBLGVBQWVxQixJQUFJLGNBQW5CckIsNENBQUFBLHNCQUFxQnNDLFFBQVE7Z0NBQUc7Ozs7Ozs7Ozs7Ozt5Q0FDcEQsOERBQUNmOzhCQUNKLDRFQUFDUzt3QkFBR1YsV0FBVTtrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHL0IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ2lCO3dCQUNDakIsV0FBVTs7MENBRVYsOERBQUNXO2dDQUFHRixTQUFTcEI7Z0NBQW9CVyxXQUFZOztvQ0FDMUNwQixjQUFZLFNBQU87b0NBQVE7b0NBQVU7Ozs7Ozs7MENBRXhDLDhEQUFDc0M7Z0NBQUVsQixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7O2tDQUt2RCw4REFBQ2lCO3dCQUNDRSxNQUFLO3dCQUNMbkIsV0FBVTt3QkFDVk0sUUFBTzt3QkFDUGMsS0FBSTs7MENBRUosOERBQUNUO2dDQUFHWCxXQUFZOztvQ0FBOEI7b0NBQzFCOzs7Ozs7OzBDQUdwQiw4REFBQ2tCO2dDQUFFbEIsV0FBWTswQ0FBc0M7Ozs7Ozs7Ozs7OztrQ0FLdkQsOERBQUNpQjt3QkFDQ0UsTUFBSzt3QkFDTG5CLFdBQVU7d0JBQ1ZNLFFBQU87d0JBQ1BjLEtBQUk7OzBDQUVKLDhEQUFDVDtnQ0FBR1gsV0FBWTs7b0NBQThCO29DQUN0Qjs7Ozs7OzswQ0FFeEIsOERBQUNrQjtnQ0FBRWxCLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0Q7R0F2SHdCdkI7O1FBTXVCRCw4REFBNEJBOzs7S0FObkRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeD84ZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiB9IGZyb20gJy4uL2FwaSc7XG5cbnR5cGUgd2VhdGhlck9iamVjdCA9IHtcbiAgICBuYW1lPzpzdHJpbmcsXG4gICAgbWFpbj86e1xuICAgICAgICB0ZW1wPzpzdHJpbmcsXG4gICAgICAgIGZlZWxzX2xpa2U/OiBzdHJpbmcsXG4gICAgICAgIHRlbXBfbWluPzogc3RyaW5nLFxuICAgICAgICB0ZW1wX21heD86IHN0cmluZyxcbiAgICAgICAgcHJlc3N1cmU6c3RyaW5nLFxuICAgICAgICBodW1pZGl0eT86IHN0cmluZ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlcigpIHtcbiAgICBjb25zdCBmZXRjaFJhdGUgPSAxMCAvL2luIHNlY29uZHNcbiAgICBjb25zdCBbZmV0Y2hTdGF0dXMsIHNldEZldGNoU3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFt0aW1lcixzZXRUaW1lcl0gPSB1c2VTdGF0ZShmZXRjaFJhdGUpO1xuICBjb25zdCBbbG9jYXRpb25OYW1lLHNldExvY2F0aW9uTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50V2VhdGhlciwgc2V0Q3VycmVudFdlYXRoZXJdID0gdXNlU3RhdGU8d2VhdGhlck9iamVjdD4oe30pXG4gIGNvbnN0IFtnZXRXZWF0aGVyVHJpZ2dlciwgd2VhdGhlclJlc3BvbnNlXSA9IHVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24oKVxuXG4gICAgY29uc3QgaGFuZGxlU3RvcEZldGNoaW5nID0gKCkgPT57XG4gICAgICAgIHNldEZldGNoU3RhdHVzKCFmZXRjaFN0YXR1cylcbiAgICB9XG5cbiAgY29uc3QgaGFuZGxlR2V0V2VhdGhlciA9ICgpID0+e1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIGdldFdlYXRoZXJUcmlnZ2VyKHtcbiAgICAgIGxvY2F0aW9uTmFtZVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih3ZWF0aGVyUmVzcG9uc2UuZGF0YSl7XG4gICAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHdlYXRoZXJSZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRUaW1lcihmZXRjaFJhdGUpXG4gICAgfVxuXG4gIH0sW3dlYXRoZXJSZXNwb25zZS5kYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbElkOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xuICAgIC8vIEV4aXQgZWFybHkgd2hlbiB0aGUgY291bnRkb3duIHJlYWNoZXMgMFxuICAgIGlmIChmZXRjaFN0YXR1cyAmJiB0aW1lciA8PSAwKSB7XG4gICAgICAgIGdldFdlYXRoZXJUcmlnZ2VyKHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZTpjdXJyZW50V2VhdGhlcj8ubmFtZVxuICAgICAgICAgIH0pXG4gICAgICAgIHNldFRpbWVyKGZldGNoUmF0ZSl9O1xuXG4gICAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbCB0byBkZWNyZWFzZSB0aGUgdGltZXIgZXZlcnkgc2Vjb25kXG4gICAgaWYoZmV0Y2hTdGF0dXMpe1xuICAgICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZXIodGltZXItMSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50cyBvciB0aGUgY291bnRkb3duIHJlYWNoZXMgMFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmKGludGVydmFsSWQpe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICAgICAgICB9XG4gICAgfTtcbiAgfSwgW3RpbWVyLGZldGNoU3RhdHVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB6LTEwIG1heC13LTV4bCB3LWZ1bGwgZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBzbTpmbGV4IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGxlZnQtMCB0b3AtMCBmbGV4ICB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS16aW5jLTIwMCBwYi02IHB0LTggYmFja2Ryb3AtYmx1ci0yeGwgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpiZy16aW5jLTgwMC8zMCBkYXJrOmZyb20taW5oZXJpdCBsZzpzdGF0aWMgIGxnOnJvdW5kZWQteGwgbGc6Ym9yZGVyIGxnOmJnLWdyYXktMjAwIGxnOnAtNCBsZzpkYXJrOmJnLXppbmMtODAwLzMwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgdy1mdWxsIHRleHQtY2VudGVyJ1xuICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbk5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldExvY2F0aW9uTmFtZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdXaGVyZSBkbyB5b3Ugd2FudCB0byBmaW5kIHRoZSB3ZWF0aGVyIGZvcj8nLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlR2V0V2VhdGhlcn0gY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB3LWZ1bGwgc206dy1hdXRvIG10LTIgc206bXQtMCc+XG4gICAgICAgICAgRmV0Y2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG4gICAgICAgIHtjdXJyZW50V2VhdGhlci5uYW1lPzxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgPGgxPnt0aW1lcn08L2gxPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPntjdXJyZW50V2VhdGhlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+VGVtcGVyYXR1cmU6IHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LnRlbXApLTI3My4xNikudG9GaXhlZCgyKX0gwrBDPC9oMj5cbiAgICAgICAgICAgIDxoMj5GZWVscyBMaWtlOiB7KE51bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5mZWVsc19saWtlKS0yNzMuMTYpLnRvRml4ZWQoMil9IMKwQzwvaDI+XG4gICAgICAgICAgICA8aDI+SHVtaWRpdHk6IHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/Lmh1bWlkaXR5KSl9JTwvaDI+XG4gICAgICAgIDwvZGl2Pjo8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwnPkZldGNoIHRoZSB3ZWF0aGVyIGZvciBhbnkgY2l0eSBpbiB0aGUgd29ybGQhPC9oMT48L2Rpdj59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBncmlkIHRleHQtY2VudGVyIGxnOm1heC13LTV4bCBsZzp3LWZ1bGwgbGc6bWItMCBsZzpncmlkLWNvbHMtMyBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgb25DbGljaz17aGFuZGxlU3RvcEZldGNoaW5nfSBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIHtmZXRjaFN0YXR1cz8nU3RvcCc6J1JzdW1lJ30gRmV0Y2hpbmd7JyAnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFN0b3AgZmV0Y2hpbmcgd2VhdGhlciBkYXRhIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUtdHcmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIFN0b3JlIFRlbXBlcmF0dXJleycgJ31cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFN0b3JlIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIHJlYWRpbmdcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBSZXRyaWV2ZSBUZW1wZXJhdHVyZXN7JyAnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFNob3cgdGhlIGZpdmUgbW9zdCByZWNlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiIsIldlYXRoZXIiLCJjdXJyZW50V2VhdGhlciIsImZldGNoUmF0ZSIsImZldGNoU3RhdHVzIiwic2V0RmV0Y2hTdGF0dXMiLCJ0aW1lciIsInNldFRpbWVyIiwibG9jYXRpb25OYW1lIiwic2V0TG9jYXRpb25OYW1lIiwic2V0Q3VycmVudFdlYXRoZXIiLCJnZXRXZWF0aGVyVHJpZ2dlciIsIndlYXRoZXJSZXNwb25zZSIsImhhbmRsZVN0b3BGZXRjaGluZyIsImhhbmRsZUdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJkYXRhIiwiaW50ZXJ2YWxJZCIsIm5hbWUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaDIiLCJOdW1iZXIiLCJ0ZW1wIiwidG9GaXhlZCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImEiLCJwIiwiaHJlZiIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});