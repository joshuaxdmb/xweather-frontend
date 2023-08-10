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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s();\n    const fetchRate = 10; //in seconds\n    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fetchRate);\n    const [prevSearch, setPrevSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [locationSearch, setLocationSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const [storeTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation)();\n    const [retrieveTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useRetrieveWeatherMutation)();\n    const handleStopFetching = ()=>{\n        setFetchStatus(!fetchStatus);\n    };\n    const handleStoreTemp = async ()=>{\n        if (currentWeather.name) {\n            const response = await storeTrigger({\n                currentWeather\n            });\n            console.log(response);\n        }\n    };\n    const handleRetrieveTemp = async ()=>{\n        const response = await retrieveTrigger({});\n    };\n    const handleGetWeather = async (location)=>{\n        if (location) {\n            var _response_data, _response_data1;\n            const response = await getWeatherTrigger({\n                locationName: location\n            });\n            setCurrentWeather({\n                name: (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.name,\n                main: (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : _response_data1.main\n            });\n            console.log(response);\n        } else {\n            var _response_data2, _response_data3;\n            const response = await getWeatherTrigger({\n                locationName: locationSearch\n            });\n            setCurrentWeather({\n                name: (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : _response_data2.name,\n                main: (_response_data3 = response.data) === null || _response_data3 === void 0 ? void 0 : _response_data3.main\n            });\n            setPrevSearch(locationSearch);\n            console.log(response);\n        }\n        setFetchStatus(true);\n        setTimer(fetchRate);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId = null;\n        if (fetchStatus) {\n            intervalId = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer > 0 ? prevTimer - 1 : prevTimer);\n            }, 1000);\n        }\n        if (fetchStatus && timer <= 0 && prevSearch) {\n            console.log(currentWeather.name);\n            handleGetWeather(prevSearch);\n            setTimer(fetchRate);\n        }\n        return ()=>{\n            if (intervalId) {\n                clearInterval(intervalId);\n            }\n        };\n    }, [\n        timer,\n        fetchStatus\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationSearch,\n                            onChange: (e)=>{\n                                setLocationSearch(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleGetWeather();\n                        },\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left z-30\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature:\",\n                                \" \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like:\",\n                                \" \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleStopFetching,\n                        className: \"border  cursor-pointer  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    fetchStatus ? \"Stop\" : \"Rsume\",\n                                    \" Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        rel: \"noopener noreferrer\",\n                        onClick: handleStoreTemp,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: \"Store Temperature \"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleRetrieveTemp,\n                        className: \"cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Weather, \"9XMgApgBNE/BBrAaVn7dyPZHyMY=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useRetrieveWeatherMutation\n    ];\n});\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQytEO0FBYzVGLFNBQVNLO1FBMEdEQyxzQkFJQUEsdUJBRVdBOztJQS9HaEMsTUFBTUMsWUFBWSxJQUFJLFlBQVk7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQ007SUFDbkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxnQkFBZ0JVLGtCQUFrQixHQUFHZiwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNnQixrQkFBa0IsR0FBR2Ysa0VBQTRCQTtJQUN4RCxNQUFNLENBQUNnQixhQUFhLEdBQUdkLDZEQUF1QkE7SUFDOUMsTUFBTSxDQUFDZSxnQkFBZ0IsR0FBR2hCLGdFQUEwQkE7SUFFcEQsTUFBTWlCLHFCQUFxQjtRQUN6QlgsZUFBZSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1hLGtCQUFrQjtRQUN0QixJQUFHZixlQUFlZ0IsSUFBSSxFQUFDO1lBQ25CLE1BQU1DLFdBQVcsTUFBTUwsYUFBYTtnQkFDaENaO1lBQ0o7WUFFQWtCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDRjtJQUVBLE1BQU1HLHFCQUFxQjtRQUN6QixNQUFNSCxXQUFXLE1BQU1KLGdCQUFnQixDQUV2QztJQUNGO0lBRUEsTUFBTVEsbUJBQW1CLE9BQU9DO1FBQzlCLElBQUlBLFVBQVU7Z0JBS0pMLGdCQUNBQTtZQUxSLE1BQU1BLFdBQWdCLE1BQU1OLGtCQUFrQjtnQkFDNUNZLGNBQWNEO1lBQ2hCO1lBQ0FaLGtCQUFrQjtnQkFDaEJNLElBQUksR0FBRUMsaUJBQUFBLFNB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QUFJO3dCQUNKVixTQUFTeEI7OzBDQUVULDhEQUFDMEI7Z0NBQUdYLFdBQVk7MENBQThCOzs7Ozs7MENBQzlDLDhEQUFDa0I7Z0NBQUVsQixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7O2tDQUt2RCw4REFBQ2lCO3dCQUNHUixTQUFTbkI7d0JBQ1hVLFdBQVU7d0JBQ1ZtQixLQUFJOzswQ0FFSiw4REFBQ1I7Z0NBQUdYLFdBQVk7O29DQUE4QjtvQ0FDdEI7Ozs7Ozs7MENBRXhCLDhEQUFDa0I7Z0NBQUVsQixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0dBbEt3Qi9COztRQU9NSCw4REFBNEJBO1FBQ2pDRSx5REFBdUJBO1FBQ3BCRCw0REFBMEJBOzs7S0FUOUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeD84ZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uLCB1c2VSZXRyaWV2ZVdlYXRoZXJNdXRhdGlvbiwgdXNlU3RvcmVXZWF0aGVyTXV0YXRpb24gfSBmcm9tICcuLi9hcGknO1xuXG50eXBlIHdlYXRoZXJPYmplY3QgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG1haW4/OiB7XG4gICAgdGVtcD86IHN0cmluZztcbiAgICBmZWVsc19saWtlPzogc3RyaW5nO1xuICAgIHRlbXBfbWluPzogc3RyaW5nO1xuICAgIHRlbXBfbWF4Pzogc3RyaW5nO1xuICAgIHByZXNzdXJlOiBzdHJpbmc7XG4gICAgaHVtaWRpdHk/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWF0aGVyKCkge1xuICBjb25zdCBmZXRjaFJhdGUgPSAxMDsgLy9pbiBzZWNvbmRzXG4gIGNvbnN0IFtmZXRjaFN0YXR1cywgc2V0RmV0Y2hTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoZmV0Y2hSYXRlKTtcbiAgY29uc3QgW3ByZXZTZWFyY2gsIHNldFByZXZTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9jYXRpb25TZWFyY2gsIHNldExvY2F0aW9uU2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnRXZWF0aGVyLCBzZXRDdXJyZW50V2VhdGhlcl0gPSB1c2VTdGF0ZTx3ZWF0aGVyT2JqZWN0Pih7fSk7XG4gIGNvbnN0IFtnZXRXZWF0aGVyVHJpZ2dlcl0gPSB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uKCk7XG4gIGNvbnN0IFtzdG9yZVRyaWdnZXJdID0gdXNlU3RvcmVXZWF0aGVyTXV0YXRpb24oKTtcbiAgY29uc3QgW3JldHJpZXZlVHJpZ2dlcl0gPSB1c2VSZXRyaWV2ZVdlYXRoZXJNdXRhdGlvbigpXG5cbiAgY29uc3QgaGFuZGxlU3RvcEZldGNoaW5nID0gKCkgPT4ge1xuICAgIHNldEZldGNoU3RhdHVzKCFmZXRjaFN0YXR1cyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3RvcmVUZW1wID0gYXN5bmMoKSA9PntcbiAgICBpZihjdXJyZW50V2VhdGhlci5uYW1lKXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yZVRyaWdnZXIoe1xuICAgICAgICAgICAgY3VycmVudFdlYXRoZXJcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUmV0cmlldmVUZW1wID0gYXN5bmMoKSA9PntcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJpZXZlVHJpZ2dlcih7XG5cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlR2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbj86IHN0cmluZykgPT4ge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IGdldFdlYXRoZXJUcmlnZ2VyKHtcbiAgICAgICAgbG9jYXRpb25OYW1lOiBsb2NhdGlvbixcbiAgICAgIH0pO1xuICAgICAgc2V0Q3VycmVudFdlYXRoZXIoe1xuICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhPy5uYW1lLFxuICAgICAgICBtYWluOiByZXNwb25zZS5kYXRhPy5tYWluLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCBnZXRXZWF0aGVyVHJpZ2dlcih7XG4gICAgICAgIGxvY2F0aW9uTmFtZTogbG9jYXRpb25TZWFyY2gsXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHtcbiAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YT8ubmFtZSxcbiAgICAgICAgbWFpbjogcmVzcG9uc2UuZGF0YT8ubWFpbixcbiAgICAgIH0pO1xuICAgICAgc2V0UHJldlNlYXJjaChsb2NhdGlvblNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfVxuICAgIHNldEZldGNoU3RhdHVzKHRydWUpO1xuICAgIHNldFRpbWVyKGZldGNoUmF0ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcbiAgICBpZiAoZmV0Y2hTdGF0dXMpIHtcbiAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVyKChwcmV2VGltZXIpID0+IChwcmV2VGltZXIgPiAwID8gcHJldlRpbWVyIC0gMSA6IHByZXZUaW1lcikpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgaWYgKGZldGNoU3RhdHVzICYmIHRpbWVyIDw9IDAgJiYgcHJldlNlYXJjaCkge1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIubmFtZSk7XG4gICAgICBoYW5kbGVHZXRXZWF0aGVyKHByZXZTZWFyY2gpO1xuICAgICAgc2V0VGltZXIoZmV0Y2hSYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGludGVydmFsSWQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbdGltZXIsIGZldGNoU3RhdHVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB6LTEwIG1heC13LTV4bCB3LWZ1bGwgZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBmb250LW1vbm8gdGV4dC1zbSBzbTpmbGV4IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGxlZnQtMCB0b3AtMCBmbGV4ICB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS16aW5jLTIwMCBwYi02IHB0LTggYmFja2Ryb3AtYmx1ci0yeGwgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpiZy16aW5jLTgwMC8zMCBkYXJrOmZyb20taW5oZXJpdCBsZzpzdGF0aWMgIGxnOnJvdW5kZWQteGwgbGc6Ym9yZGVyIGxnOmJnLWdyYXktMjAwIGxnOnAtNCBsZzpkYXJrOmJnLXppbmMtODAwLzMwXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB3LWZ1bGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9uU2VhcmNofVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldExvY2F0aW9uU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoZXJlIGRvIHlvdSB3YW50IHRvIGZpbmQgdGhlIHdlYXRoZXIgZm9yP1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVHZXRXZWF0aGVyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgc206dy1hdXRvIG10LTIgc206bXQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICBGZXRjaFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzMwMHB4XSBiZWZvcmU6dy1bNDgwcHhdIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLWdyYWRpZW50LXJhZGlhbCBiZWZvcmU6ZnJvbS13aGl0ZSBiZWZvcmU6dG8tdHJhbnNwYXJlbnQgYmVmb3JlOmJsdXItMnhsIGJlZm9yZTpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LXotMjAgYWZ0ZXI6aC1bMTgwcHhdIGFmdGVyOnctWzI0MHB4XSBhZnRlcjp0cmFuc2xhdGUteC0xLzMgYWZ0ZXI6YmctZ3JhZGllbnQtY29uaWMgYWZ0ZXI6ZnJvbS1za3ktMjAwIGFmdGVyOnZpYS1ibHVlLTIwMCBhZnRlcjpibHVyLTJ4bCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmRhcms6YmctZ3JhZGllbnQtdG8tYnIgYmVmb3JlOmRhcms6ZnJvbS10cmFuc3BhcmVudCBiZWZvcmU6ZGFyazp0by1ibHVlLTcwMCBiZWZvcmU6ZGFyazpvcGFjaXR5LTEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXSBhZnRlcjpkYXJrOm9wYWNpdHktNDAgYmVmb3JlOmxnOmgtWzM2MHB4XSB6LVstMV1cIj5cbiAgICAgICAge2N1cnJlbnRXZWF0aGVyLm5hbWUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQgei0zMFwiPlxuICAgICAgICAgICAgPGgxPnt0aW1lcn08L2gxPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e2N1cnJlbnRXZWF0aGVyLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgVGVtcGVyYXR1cmU6eycgJ31cbiAgICAgICAgICAgICAgeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8udGVtcCkgLSAyNzMuMTYpLnRvRml4ZWQoMil9IMKwQ1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgRmVlbHMgTGlrZTp7JyAnfVxuICAgICAgICAgICAgICB7KE51bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5mZWVsc19saWtlKSAtIDI3My4xNikudG9GaXhlZCgyKX0gwrBDXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgyPkh1bWlkaXR5OiB7TnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/Lmh1bWlkaXR5KX0lPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XG4gICAgICAgICAgICAgIEZldGNoIHRoZSB3ZWF0aGVyIGZvciBhbnkgY2l0eSBpbiB0aGUgd29ybGQhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMzIgZ3JpZCB0ZXh0LWNlbnRlciBsZzptYXgtdy01eGwgbGc6dy1mdWxsIGxnOm1iLTAgbGc6Z3JpZC1jb2xzLTMgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZVN0b3BGZXRjaGluZ30gY2xhc3NOYW1lPVwiYm9yZGVyICBjdXJzb3ItcG9pbnRlciAgZ3JvdXAgcm91bmRlZC1sZyBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCI+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZldGNoU3RhdHVzID8gJ1N0b3AnIDogJ1JzdW1lJ30gRmV0Y2hpbmd7JyAnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIFN0b3AgZmV0Y2hpbmcgd2VhdGhlciBkYXRhIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0b3JlVGVtcH1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5TdG9yZSBUZW1wZXJhdHVyZSA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTdG9yZSB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSByZWFkaW5nXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldHJpZXZlVGVtcH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIFJldHJpZXZlIFRlbXBlcmF0dXJlc3snICd9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU2hvdyB0aGUgZml2ZSBtb3N0IHJlY2VudCB0ZW1wZXJhdHVyZSByZWFkaW5nc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiIsInVzZVJldHJpZXZlV2VhdGhlck11dGF0aW9uIiwidXNlU3RvcmVXZWF0aGVyTXV0YXRpb24iLCJXZWF0aGVyIiwiY3VycmVudFdlYXRoZXIiLCJmZXRjaFJhdGUiLCJmZXRjaFN0YXR1cyIsInNldEZldGNoU3RhdHVzIiwidGltZXIiLCJzZXRUaW1lciIsInByZXZTZWFyY2giLCJzZXRQcmV2U2VhcmNoIiwibG9jYXRpb25TZWFyY2giLCJzZXRMb2NhdGlvblNlYXJjaCIsInNldEN1cnJlbnRXZWF0aGVyIiwiZ2V0V2VhdGhlclRyaWdnZXIiLCJzdG9yZVRyaWdnZXIiLCJyZXRyaWV2ZVRyaWdnZXIiLCJoYW5kbGVTdG9wRmV0Y2hpbmciLCJoYW5kbGVTdG9yZVRlbXAiLCJuYW1lIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUmV0cmlldmVUZW1wIiwiaGFuZGxlR2V0V2VhdGhlciIsImxvY2F0aW9uIiwibG9jYXRpb25OYW1lIiwiZGF0YSIsIm1haW4iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZXIiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiaDIiLCJOdW1iZXIiLCJ0ZW1wIiwidG9GaXhlZCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImEiLCJwIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});