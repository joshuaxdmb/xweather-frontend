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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s();\n    const fetchRate = 10; //in seconds\n    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fetchRate);\n    const [prevSearch, setPrevSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [locationSearch, setLocationSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [storedTemepratures, setStoredTemperatures] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [getWeatherTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const [storeTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation)();\n    const [retrieveTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useRetrieveWeatherMutation)();\n    const [showStoredTemps, setShowStoredTemps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleStopFetching = ()=>{\n        setFetchStatus(!fetchStatus);\n    };\n    const handleStoreTemp = async ()=>{\n        if (currentWeather.name) {\n            const response = await storeTrigger({\n                currentWeather\n            });\n        }\n    };\n    const handleRetrieveTemp = async ()=>{\n        const response = await retrieveTrigger({});\n        setStoredTemperatures(response.data);\n    };\n    const handleGetWeather = async (location)=>{\n        if (location) {\n            var _response_data, _response_data1;\n            const response = await getWeatherTrigger({\n                locationName: location\n            });\n            setCurrentWeather({\n                name: (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.name,\n                main: (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : _response_data1.main\n            });\n            console.log(response);\n        } else {\n            var _response_data2, _response_data3;\n            const response = await getWeatherTrigger({\n                locationName: locationSearch\n            });\n            setCurrentWeather({\n                name: (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : _response_data2.name,\n                main: (_response_data3 = response.data) === null || _response_data3 === void 0 ? void 0 : _response_data3.main\n            });\n            setPrevSearch(locationSearch);\n            console.log(response);\n        }\n        setFetchStatus(true);\n        setTimer(fetchRate);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId = null;\n        if (fetchStatus) {\n            intervalId = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer > 0 ? prevTimer - 1 : prevTimer);\n            }, 1000);\n        }\n        if (fetchStatus && timer <= 0 && prevSearch) {\n            console.log(currentWeather.name);\n            handleGetWeather(prevSearch);\n            setTimer(fetchRate);\n        }\n        return ()=>{\n            if (intervalId) {\n                clearInterval(intervalId);\n            }\n        };\n    }, [\n        timer,\n        fetchStatus\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationSearch,\n                            onChange: (e)=>{\n                                setLocationSearch(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleGetWeather();\n                        },\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left z-30\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature:\",\n                                \" \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like:\",\n                                \" \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleStopFetching,\n                        className: \"border  cursor-pointer  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    fetchStatus ? \"Stop\" : \"Rsume\",\n                                    \" Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        rel: \"noopener noreferrer\",\n                        onClick: handleStoreTemp,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: \"Store Temperature \"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleRetrieveTemp,\n                        className: \"cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    showStoredTemps ? \"Retrieve\" : \"Hide\",\n                                    \" Stored Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(Weather, \"f/9VVdolINhIrTvpXiqi8ZqCmr0=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useRetrieveWeatherMutation\n    ];\n});\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQytEO0FBYzVGLFNBQVNLO1FBMkdEQyxzQkFJQUEsdUJBRVdBOztJQWhIaEMsTUFBTUMsWUFBWSxJQUFJLFlBQVk7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQ007SUFDbkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxnQkFBZ0JVLGtCQUFrQixHQUFHZiwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNnQixvQkFBb0JDLHNCQUFzQixHQUFHakIsK0NBQVFBLENBQUMsRUFBRTtJQUMvRCxNQUFNLENBQUNrQixrQkFBa0IsR0FBR2pCLGtFQUE0QkE7SUFDeEQsTUFBTSxDQUFDa0IsYUFBYSxHQUFHaEIsNkRBQXVCQTtJQUM5QyxNQUFNLENBQUNpQixnQkFBZ0IsR0FBR2xCLGdFQUEwQkE7SUFDcEQsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU11QixxQkFBcUI7UUFDekJmLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxNQUFNaUIsa0JBQWtCO1FBQ3RCLElBQUduQixlQUFlb0IsSUFBSSxFQUFDO1lBQ25CLE1BQU1DLFdBQWUsTUFBTVAsYUFBYTtnQkFDcENkO1lBQ0o7UUFDSjtJQUNGO0lBRUEsTUFBTXNCLHFCQUFxQjtRQUN6QixNQUFNRCxXQUFlLE1BQU1OLGdCQUFnQixDQUUzQztRQUNBSCxzQkFBc0JTLFNBQVNFLElBQUk7SUFDckM7SUFFQSxNQUFNQyxtQkFBbUIsT0FBT0M7UUFDOUIs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OztvQ0FFWGhDLGNBQWMsU0FBUztvQ0FBUTtvQ0FBVTs7Ozs7OzswQ0FFNUMsOERBQUNrRDtnQ0FBRWxCLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7a0NBS3ZELDhEQUFDaUI7d0JBQ0NqQixXQUFVO3dCQUNWbUIsS0FBSTt3QkFDSlYsU0FBU3hCOzswQ0FFVCw4REFBQzBCO2dDQUFHWCxXQUFZOzBDQUE4Qjs7Ozs7OzBDQUM5Qyw4REFBQ2tCO2dDQUFFbEIsV0FBWTswQ0FBc0M7Ozs7Ozs7Ozs7OztrQ0FLdkQsOERBQUNpQjt3QkFDR1IsU0FBU3JCO3dCQUNYWSxXQUFVO3dCQUNWbUIsS0FBSTs7MENBRUosOERBQUNSO2dDQUFHWCxXQUFZOztvQ0FDYmxCLGtCQUFpQixhQUFXO29DQUFPO29DQUFxQjs7Ozs7OzswQ0FFM0QsOERBQUNvQztnQ0FBRWxCLFdBQVk7MENBQXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0Q7R0FuS3dCbkM7O1FBUU1ILDhEQUE0QkE7UUFDakNFLHlEQUF1QkE7UUFDcEJELDREQUEwQkE7OztLQVY5QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zY3JlZW5zL3dlYXRoZXIudHN4PzhlZTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24sIHVzZVJldHJpZXZlV2VhdGhlck11dGF0aW9uLCB1c2VTdG9yZVdlYXRoZXJNdXRhdGlvbiB9IGZyb20gJy4uL2FwaSc7XG5cbnR5cGUgd2VhdGhlck9iamVjdCA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgbWFpbj86IHtcbiAgICB0ZW1wPzogc3RyaW5nO1xuICAgIGZlZWxzX2xpa2U/OiBzdHJpbmc7XG4gICAgdGVtcF9taW4/OiBzdHJpbmc7XG4gICAgdGVtcF9tYXg/OiBzdHJpbmc7XG4gICAgcHJlc3N1cmU6IHN0cmluZztcbiAgICBodW1pZGl0eT86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYXRoZXIoKSB7XG4gIGNvbnN0IGZldGNoUmF0ZSA9IDEwOyAvL2luIHNlY29uZHNcbiAgY29uc3QgW2ZldGNoU3RhdHVzLCBzZXRGZXRjaFN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmZXRjaFJhdGUpO1xuICBjb25zdCBbcHJldlNlYXJjaCwgc2V0UHJldlNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2NhdGlvblNlYXJjaCwgc2V0TG9jYXRpb25TZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudFdlYXRoZXIsIHNldEN1cnJlbnRXZWF0aGVyXSA9IHVzZVN0YXRlPHdlYXRoZXJPYmplY3Q+KHt9KTtcbiAgY29uc3QgW3N0b3JlZFRlbWVwcmF0dXJlcywgc2V0U3RvcmVkVGVtcGVyYXR1cmVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZ2V0V2VhdGhlclRyaWdnZXJdID0gdXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbigpO1xuICBjb25zdCBbc3RvcmVUcmlnZ2VyXSA9IHVzZVN0b3JlV2VhdGhlck11dGF0aW9uKCk7XG4gIGNvbnN0IFtyZXRyaWV2ZVRyaWdnZXJdID0gdXNlUmV0cmlldmVXZWF0aGVyTXV0YXRpb24oKVxuICBjb25zdCBbc2hvd1N0b3JlZFRlbXBzLCBzZXRTaG93U3RvcmVkVGVtcHNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlU3RvcEZldGNoaW5nID0gKCkgPT4ge1xuICAgIHNldEZldGNoU3RhdHVzKCFmZXRjaFN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3RvcmVUZW1wID0gYXN5bmMoKSA9PntcbiAgICBpZihjdXJyZW50V2VhdGhlci5uYW1lKXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6YW55ID0gYXdhaXQgc3RvcmVUcmlnZ2VyKHtcbiAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmV0cmlldmVUZW1wID0gYXN5bmMoKSA9PntcbiAgICBjb25zdCByZXNwb25zZTphbnkgPSBhd2FpdCByZXRyaWV2ZVRyaWdnZXIoe1xuXG4gICAgfSlcbiAgICBzZXRTdG9yZWRUZW1wZXJhdHVyZXMocmVzcG9uc2UuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCBnZXRXZWF0aGVyVHJpZ2dlcih7XG4gICAgICAgIGxvY2F0aW9uTmFtZTogbG9jYXRpb24sXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHtcbiAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YT8ubmFtZSxcbiAgICAgICAgbWFpbjogcmVzcG9uc2UuZGF0YT8ubWFpbixcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgZ2V0V2VhdGhlclRyaWdnZXIoe1xuICAgICAgICBsb2NhdGlvbk5hbWU6IGxvY2F0aW9uU2VhcmNoLFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50V2VhdGhlcih7XG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmRhdGE/Lm5hbWUsXG4gICAgICAgIG1haW46IHJlc3BvbnNlLmRhdGE/Lm1haW4sXG4gICAgICB9KTtcbiAgICAgIHNldFByZXZTZWFyY2gobG9jYXRpb25TZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1cbiAgICBzZXRGZXRjaFN0YXR1cyh0cnVlKTtcbiAgICBzZXRUaW1lcihmZXRjaFJhdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKGZldGNoU3RhdHVzKSB7XG4gICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lcigocHJldlRpbWVyKSA9PiAocHJldlRpbWVyID4gMCA/IHByZXZUaW1lciAtIDEgOiBwcmV2VGltZXIpKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGlmIChmZXRjaFN0YXR1cyAmJiB0aW1lciA8PSAwICYmIHByZXZTZWFyY2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyLm5hbWUpO1xuICAgICAgaGFuZGxlR2V0V2VhdGhlcihwcmV2U2VhcmNoKTtcbiAgICAgIHNldFRpbWVyKGZldGNoUmF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RpbWVyLCBmZXRjaFN0YXR1c10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgei0xMCBtYXgtdy01eGwgdy1mdWxsIGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gc206ZmxleCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBsZWZ0LTAgdG9wLTAgZmxleCAgdy1mdWxsIGp1c3RpZnktY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBiZy1ncmFkaWVudC10by1iIGZyb20temluYy0yMDAgcGItNiBwdC04IGJhY2tkcm9wLWJsdXItMnhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctemluYy04MDAvMzAgZGFyazpmcm9tLWluaGVyaXQgbGc6c3RhdGljICBsZzpyb3VuZGVkLXhsIGxnOmJvcmRlciBsZzpiZy1ncmF5LTIwMCBsZzpwLTQgbGc6ZGFyazpiZy16aW5jLTgwMC8zMFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdy1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvblNlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2NhdGlvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGVyZSBkbyB5b3Ugd2FudCB0byBmaW5kIHRoZSB3ZWF0aGVyIGZvcj9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlR2V0V2VhdGhlcigpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHNtOnctYXV0byBtdC0yIHNtOm10LTBcIlxuICAgICAgICA+XG4gICAgICAgICAgRmV0Y2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG4gICAgICAgIHtjdXJyZW50V2VhdGhlci5uYW1lID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0IHotMzBcIj5cbiAgICAgICAgICAgIDxoMT57dGltZXJ9PC9oMT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntjdXJyZW50V2VhdGhlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIFRlbXBlcmF0dXJlOnsnICd9XG4gICAgICAgICAgICAgIHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LnRlbXApIC0gMjczLjE2KS50b0ZpeGVkKDIpfSDCsENcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEZlZWxzIExpa2U6eycgJ31cbiAgICAgICAgICAgICAgeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8uZmVlbHNfbGlrZSkgLSAyNzMuMTYpLnRvRml4ZWQoMil9IMKwQ1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMj5IdW1pZGl0eToge051bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5odW1pZGl0eSl9JTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICBGZXRjaCB0aGUgd2VhdGhlciBmb3IgYW55IGNpdHkgaW4gdGhlIHdvcmxkIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIGdyaWQgdGV4dC1jZW50ZXIgbGc6bWF4LXctNXhsIGxnOnctZnVsbCBsZzptYi0wIGxnOmdyaWQtY29scy0zIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVTdG9wRmV0Y2hpbmd9IGNsYXNzTmFtZT1cImJvcmRlciAgY3Vyc29yLXBvaW50ZXIgIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmZXRjaFN0YXR1cyA/ICdTdG9wJyA6ICdSc3VtZSd9IEZldGNoaW5neycgJ31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTdG9wIGZldGNoaW5nIHdlYXRoZXIgZGF0YSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdG9yZVRlbXB9XG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+U3RvcmUgVGVtcGVyYXR1cmUgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU3RvcmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXRyaWV2ZVRlbXB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICB7c2hvd1N0b3JlZFRlbXBzPyBcIlJldHJpZXZlXCI6XCJIaWRlXCJ9IFN0b3JlZCBUZW1wZXJhdHVyZXN7JyAnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFNob3cgdGhlIGZpdmUgbW9zdCByZWNlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24iLCJ1c2VSZXRyaWV2ZVdlYXRoZXJNdXRhdGlvbiIsInVzZVN0b3JlV2VhdGhlck11dGF0aW9uIiwiV2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiZmV0Y2hSYXRlIiwiZmV0Y2hTdGF0dXMiLCJzZXRGZXRjaFN0YXR1cyIsInRpbWVyIiwic2V0VGltZXIiLCJwcmV2U2VhcmNoIiwic2V0UHJldlNlYXJjaCIsImxvY2F0aW9uU2VhcmNoIiwic2V0TG9jYXRpb25TZWFyY2giLCJzZXRDdXJyZW50V2VhdGhlciIsInN0b3JlZFRlbWVwcmF0dXJlcyIsInNldFN0b3JlZFRlbXBlcmF0dXJlcyIsImdldFdlYXRoZXJUcmlnZ2VyIiwic3RvcmVUcmlnZ2VyIiwicmV0cmlldmVUcmlnZ2VyIiwic2hvd1N0b3JlZFRlbXBzIiwic2V0U2hvd1N0b3JlZFRlbXBzIiwiaGFuZGxlU3RvcEZldGNoaW5nIiwiaGFuZGxlU3RvcmVUZW1wIiwibmFtZSIsInJlc3BvbnNlIiwiaGFuZGxlUmV0cmlldmVUZW1wIiwiZGF0YSIsImhhbmRsZUdldFdlYXRoZXIiLCJsb2NhdGlvbiIsImxvY2F0aW9uTmFtZSIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsImgyIiwiTnVtYmVyIiwidGVtcCIsInRvRml4ZWQiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJhIiwicCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});