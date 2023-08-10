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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Weather; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/app/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Weather() {\n    var _currentWeather_main, _currentWeather_main1, _currentWeather_main2;\n    _s();\n    const fetchRate = 10; //in seconds\n    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(fetchRate);\n    const [prevSearch, setPrevSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [locationSearch, setLocationSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentWeather, setCurrentWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [getWeatherTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation)();\n    const [storeTrigger] = (0,_api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation)();\n    const handleStopFetching = ()=>{\n        setFetchStatus(!fetchStatus);\n    };\n    const handleStoreTemp = async ()=>{\n        if (currentWeather.name) {\n            const response = await storeTrigger({\n                currentWeather\n            });\n            console.log(response);\n        }\n    };\n    const handleGetWeather = async (location)=>{\n        if (location) {\n            var _response_data, _response_data1;\n            const response = await getWeatherTrigger({\n                locationName: location\n            });\n            setCurrentWeather({\n                name: (_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.name,\n                main: (_response_data1 = response.data) === null || _response_data1 === void 0 ? void 0 : _response_data1.main\n            });\n            console.log(response);\n        } else {\n            var _response_data2, _response_data3;\n            const response = await getWeatherTrigger({\n                locationName: locationSearch\n            });\n            setCurrentWeather({\n                name: (_response_data2 = response.data) === null || _response_data2 === void 0 ? void 0 : _response_data2.name,\n                main: (_response_data3 = response.data) === null || _response_data3 === void 0 ? void 0 : _response_data3.main\n            });\n            setPrevSearch(locationSearch);\n            console.log(response);\n        }\n        setFetchStatus(true);\n        setTimer(fetchRate);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let intervalId = null;\n        if (fetchStatus) {\n            intervalId = setInterval(()=>{\n                setTimer((prevTimer)=>prevTimer > 0 ? prevTimer - 1 : prevTimer);\n            }, 1000);\n        }\n        if (fetchStatus && timer <= 0 && prevSearch) {\n            console.log(currentWeather.name);\n            handleGetWeather(prevSearch);\n            setTimer(fetchRate);\n        }\n        return ()=>{\n            if (intervalId) {\n                clearInterval(intervalId);\n            }\n        };\n    }, [\n        timer,\n        fetchStatus\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-transparent w-full text-center\",\n                            value: locationSearch,\n                            onChange: (e)=>{\n                                setLocationSearch(e.target.value);\n                            },\n                            placeholder: \"Where do you want to find the weather for?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            handleGetWeather();\n                        },\n                        className: \"text-center w-full sm:w-auto mt-2 sm:mt-0\",\n                        children: \"Fetch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: currentWeather.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center sm:text-left z-30\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: timer\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl\",\n                            children: currentWeather.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Temperature:\",\n                                \" \",\n                                (Number((_currentWeather_main = currentWeather.main) === null || _currentWeather_main === void 0 ? void 0 : _currentWeather_main.temp) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Feels Like:\",\n                                \" \",\n                                (Number((_currentWeather_main1 = currentWeather.main) === null || _currentWeather_main1 === void 0 ? void 0 : _currentWeather_main1.feels_like) - 273.16).toFixed(2),\n                                \" \\xb0C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Humidity: \",\n                                Number((_currentWeather_main2 = currentWeather.main) === null || _currentWeather_main2 === void 0 ? void 0 : _currentWeather_main2.humidity),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl\",\n                        children: \"Fetch the weather for any city in the world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleStopFetching,\n                        className: \"border  cursor-pointer  group rounded-lg border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    fetchStatus ? \"Stop\" : \"Rsume\",\n                                    \" Fetching\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Stop fetching weather data automatically\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"group cursor-pointer rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        rel: \"noopener noreferrer\",\n                        onClick: handleStoreTemp,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: \"Store Temperature \"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Store the current temperature reading\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-3 text-2xl font-semibold\",\n                                children: [\n                                    \"Retrieve Temperatures\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"m-0 max-w-[30ch] text-sm opacity-50\",\n                                children: \"Show the five most recent temperature readings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuamadero/Documents/Projects/weather-app-nextjs/xweather/src/app/screens/weather.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(Weather, \"lx9AeHboKQduSSAMReIHok1P7Ow=\", false, function() {\n    return [\n        _api__WEBPACK_IMPORTED_MODULE_2__.useGetWatherLocationMutation,\n        _api__WEBPACK_IMPORTED_MODULE_2__.useStoreWeatherMutation\n    ];\n});\n_c = Weather;\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ21DO0FBY2hFLFNBQVNJO1FBbUdEQyxzQkFJQUEsdUJBRVdBOztJQXhHaEMsTUFBTUMsWUFBWSxJQUFJLFlBQVk7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQ0s7SUFDbkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSSxnQkFBZ0JVLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBZ0IsQ0FBQztJQUNyRSxNQUFNLENBQUNlLGtCQUFrQixHQUFHZCxrRUFBNEJBO0lBQ3hELE1BQU0sQ0FBQ2UsYUFBYSxHQUFHZCw2REFBdUJBO0lBRTlDLE1BQU1lLHFCQUFxQjtRQUN6QlYsZUFBZSxDQUFDRDtJQUNsQjtJQUVBLE1BQU1ZLGtCQUFrQjtRQUN0QixJQUFHZCxlQUFlZSxJQUFJLEVBQUM7WUFDbkIsTUFBTUMsV0FBVyxNQUFNSixhQUFhO2dCQUNoQ1o7WUFDSjtZQUVBaUIsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNGO0lBRUEsTUFBTUcsbUJBQW1CLE9BQU9DO1FBQzlCLElBQUlBLFVBQVU7Z0JBS0pKLGdCQUNBQTtZQUxSLE1BQU1BLFdBQWdCLE1BQU1MLGtCQUFrQjtnQkFDNUNVLGNBQWNEO1lBQ2hCO1lBQ0FWLGtCQUFrQjtnQkFDaEJLLElBQUksR0FBRUMsaUJBQUFBLFNBQVNNLElBQUksY0FBYk4scUNBQUFBLGVBQWVELElBQUk7Z0JBQ3pCUSxJQUFJLEdBQUVQLGtCQUFBQSxTQUFTTSxJQUFJLGNBQWJOLHNDQUFBQSxnQkFBZU8sSUFBSTtZQUMzQjtZ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S3ZELDhEQUFDaUI7d0JBQ0NHLE1BQUs7d0JBQ0xwQixXQUFVO3dCQUNWTSxRQUFPO3dCQUNQYSxLQUFJOzswQ0FFSiw4REFBQ1I7Z0NBQUdYLFdBQVk7O29DQUE4QjtvQ0FDdEI7Ozs7Ozs7MENBRXhCLDhEQUFDa0I7Z0NBQUVsQixXQUFZOzBDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0dBNUp3QjdCOztRQU9NRiw4REFBNEJBO1FBQ2pDQyx5REFBdUJBOzs7S0FSeEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyZWVucy93ZWF0aGVyLnRzeD84ZWUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZXRXYXRoZXJMb2NhdGlvbk11dGF0aW9uLCB1c2VTdG9yZVdlYXRoZXJNdXRhdGlvbiB9IGZyb20gJy4uL2FwaSc7XG5cbnR5cGUgd2VhdGhlck9iamVjdCA9IHtcbiAgbmFtZT86IHN0cmluZztcbiAgbWFpbj86IHtcbiAgICB0ZW1wPzogc3RyaW5nO1xuICAgIGZlZWxzX2xpa2U/OiBzdHJpbmc7XG4gICAgdGVtcF9taW4/OiBzdHJpbmc7XG4gICAgdGVtcF9tYXg/OiBzdHJpbmc7XG4gICAgcHJlc3N1cmU6IHN0cmluZztcbiAgICBodW1pZGl0eT86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYXRoZXIoKSB7XG4gIGNvbnN0IGZldGNoUmF0ZSA9IDEwOyAvL2luIHNlY29uZHNcbiAgY29uc3QgW2ZldGNoU3RhdHVzLCBzZXRGZXRjaFN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShmZXRjaFJhdGUpO1xuICBjb25zdCBbcHJldlNlYXJjaCwgc2V0UHJldlNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2NhdGlvblNlYXJjaCwgc2V0TG9jYXRpb25TZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudFdlYXRoZXIsIHNldEN1cnJlbnRXZWF0aGVyXSA9IHVzZVN0YXRlPHdlYXRoZXJPYmplY3Q+KHt9KTtcbiAgY29uc3QgW2dldFdlYXRoZXJUcmlnZ2VyXSA9IHVzZUdldFdhdGhlckxvY2F0aW9uTXV0YXRpb24oKTtcbiAgY29uc3QgW3N0b3JlVHJpZ2dlcl0gPSB1c2VTdG9yZVdlYXRoZXJNdXRhdGlvbigpO1xuXG4gIGNvbnN0IGhhbmRsZVN0b3BGZXRjaGluZyA9ICgpID0+IHtcbiAgICBzZXRGZXRjaFN0YXR1cyghZmV0Y2hTdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN0b3JlVGVtcCA9IGFzeW5jKCkgPT57XG4gICAgaWYoY3VycmVudFdlYXRoZXIubmFtZSl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmVUcmlnZ2VyKHtcbiAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSBhd2FpdCBnZXRXZWF0aGVyVHJpZ2dlcih7XG4gICAgICAgIGxvY2F0aW9uTmFtZTogbG9jYXRpb24sXG4gICAgICB9KTtcbiAgICAgIHNldEN1cnJlbnRXZWF0aGVyKHtcbiAgICAgICAgbmFtZTogcmVzcG9uc2UuZGF0YT8ubmFtZSxcbiAgICAgICAgbWFpbjogcmVzcG9uc2UuZGF0YT8ubWFpbixcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgZ2V0V2VhdGhlclRyaWdnZXIoe1xuICAgICAgICBsb2NhdGlvbk5hbWU6IGxvY2F0aW9uU2VhcmNoLFxuICAgICAgfSk7XG4gICAgICBzZXRDdXJyZW50V2VhdGhlcih7XG4gICAgICAgIG5hbWU6IHJlc3BvbnNlLmRhdGE/Lm5hbWUsXG4gICAgICAgIG1haW46IHJlc3BvbnNlLmRhdGE/Lm1haW4sXG4gICAgICB9KTtcbiAgICAgIHNldFByZXZTZWFyY2gobG9jYXRpb25TZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1cbiAgICBzZXRGZXRjaFN0YXR1cyh0cnVlKTtcbiAgICBzZXRUaW1lcihmZXRjaFJhdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsSWQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKGZldGNoU3RhdHVzKSB7XG4gICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lcigocHJldlRpbWVyKSA9PiAocHJldlRpbWVyID4gMCA/IHByZXZUaW1lciAtIDEgOiBwcmV2VGltZXIpKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGlmIChmZXRjaFN0YXR1cyAmJiB0aW1lciA8PSAwICYmIHByZXZTZWFyY2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyLm5hbWUpO1xuICAgICAgaGFuZGxlR2V0V2VhdGhlcihwcmV2U2VhcmNoKTtcbiAgICAgIHNldFRpbWVyKGZldGNoUmF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RpbWVyLCBmZXRjaFN0YXR1c10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgei0xMCBtYXgtdy01eGwgdy1mdWxsIGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gc206ZmxleCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBsZWZ0LTAgdG9wLTAgZmxleCAgdy1mdWxsIGp1c3RpZnktY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBiZy1ncmFkaWVudC10by1iIGZyb20temluYy0yMDAgcGItNiBwdC04IGJhY2tkcm9wLWJsdXItMnhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctemluYy04MDAvMzAgZGFyazpmcm9tLWluaGVyaXQgbGc6c3RhdGljICBsZzpyb3VuZGVkLXhsIGxnOmJvcmRlciBsZzpiZy1ncmF5LTIwMCBsZzpwLTQgbGc6ZGFyazpiZy16aW5jLTgwMC8zMFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdy1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvblNlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2NhdGlvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGVyZSBkbyB5b3Ugd2FudCB0byBmaW5kIHRoZSB3ZWF0aGVyIGZvcj9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlR2V0V2VhdGhlcigpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsIHNtOnctYXV0byBtdC0yIHNtOm10LTBcIlxuICAgICAgICA+XG4gICAgICAgICAgRmV0Y2hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XG4gICAgICAgIHtjdXJyZW50V2VhdGhlci5uYW1lID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0IHotMzBcIj5cbiAgICAgICAgICAgIDxoMT57dGltZXJ9PC9oMT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntjdXJyZW50V2VhdGhlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIFRlbXBlcmF0dXJlOnsnICd9XG4gICAgICAgICAgICAgIHsoTnVtYmVyKGN1cnJlbnRXZWF0aGVyLm1haW4/LnRlbXApIC0gMjczLjE2KS50b0ZpeGVkKDIpfSDCsENcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEZlZWxzIExpa2U6eycgJ31cbiAgICAgICAgICAgICAgeyhOdW1iZXIoY3VycmVudFdlYXRoZXIubWFpbj8uZmVlbHNfbGlrZSkgLSAyNzMuMTYpLnRvRml4ZWQoMil9IMKwQ1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMj5IdW1pZGl0eToge051bWJlcihjdXJyZW50V2VhdGhlci5tYWluPy5odW1pZGl0eSl9JTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICBGZXRjaCB0aGUgd2VhdGhlciBmb3IgYW55IGNpdHkgaW4gdGhlIHdvcmxkIVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIGdyaWQgdGV4dC1jZW50ZXIgbGc6bWF4LXctNXhsIGxnOnctZnVsbCBsZzptYi0wIGxnOmdyaWQtY29scy0zIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVTdG9wRmV0Y2hpbmd9IGNsYXNzTmFtZT1cImJvcmRlciAgY3Vyc29yLXBvaW50ZXIgIGdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmZXRjaFN0YXR1cyA/ICdTdG9wJyA6ICdSc3VtZSd9IEZldGNoaW5neycgJ31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBTdG9wIGZldGNoaW5nIHdlYXRoZXIgZGF0YSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdG9yZVRlbXB9XG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+U3RvcmUgVGVtcGVyYXR1cmUgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU3RvcmUgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgcmVhZGluZ1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS90ZW1wbGF0ZXM/ZnJhbWV3b3JrPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIFJldHJpZXZlIFRlbXBlcmF0dXJlc3snICd9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgU2hvdyB0aGUgZml2ZSBtb3N0IHJlY2VudCB0ZW1wZXJhdHVyZSByZWFkaW5nc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2V0V2F0aGVyTG9jYXRpb25NdXRhdGlvbiIsInVzZVN0b3JlV2VhdGhlck11dGF0aW9uIiwiV2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiZmV0Y2hSYXRlIiwiZmV0Y2hTdGF0dXMiLCJzZXRGZXRjaFN0YXR1cyIsInRpbWVyIiwic2V0VGltZXIiLCJwcmV2U2VhcmNoIiwic2V0UHJldlNlYXJjaCIsImxvY2F0aW9uU2VhcmNoIiwic2V0TG9jYXRpb25TZWFyY2giLCJzZXRDdXJyZW50V2VhdGhlciIsImdldFdlYXRoZXJUcmlnZ2VyIiwic3RvcmVUcmlnZ2VyIiwiaGFuZGxlU3RvcEZldGNoaW5nIiwiaGFuZGxlU3RvcmVUZW1wIiwibmFtZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdldFdlYXRoZXIiLCJsb2NhdGlvbiIsImxvY2F0aW9uTmFtZSIsImRhdGEiLCJtYWluIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsImgyIiwiTnVtYmVyIiwidGVtcCIsInRvRml4ZWQiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJhIiwicCIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/screens/weather.tsx\n"));

/***/ })

});