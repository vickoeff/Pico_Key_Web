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

/***/ "(app-pages-browser)/./src/components/Keyboard.tsx":
/*!*************************************!*\
  !*** ./src/components/Keyboard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Keyboard: function() { return /* binding */ Keyboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./src/components/index.ts\");\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contants */ \"(app-pages-browser)/./src/contants/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n\n\n\n\nconst Keyboard = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        boxSizing: \"border-box\",\n        maxW: \"370px\",\n        padding: \"4\",\n        borderRadius: \"2xl\",\n        borderWidth: \"1px\",\n        borderColor: \"brand.600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n                mb: \"8\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        w: 28,\n                        h: 28,\n                        borderRadius: \"100%\",\n                        borderWidth: \"1px\",\n                        borderColor: \"brand.600\"\n                    }, void 0, false, {\n                        fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        w: \"128px\",\n                        h: \"64px\",\n                        borderWidth: \"1px\",\n                        borderColor: \"brand.600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            children: \"OLED 128x64\"\n                        }, void 0, false, {\n                            fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                direction: \"row\",\n                flexWrap: \"wrap\",\n                gap: \"4\",\n                children: _contants__WEBPACK_IMPORTED_MODULE_2__.KEY_INPUTS.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Switch, {\n                        switchKey: key.key,\n                        label: key.label,\n                        value: key.value\n                    }, key.key, false, {\n                        fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vicko/work/Pico_Key_Web/src/components/Keyboard.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Keyboard;\nvar _c;\n$RefreshReg$(_c, \"Keyboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0tleWJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDNEI7QUFFN0QsTUFBTU8sV0FBVztJQUN0QixxQkFDRSw4REFBQ0wsaURBQUdBO1FBQ0ZNLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsYUFBYTtRQUNiQyxhQUFhOzswQkFFYiw4REFBQ1Ysb0RBQU1BO2dCQUFDVyxJQUFJO2dCQUFLQyxnQkFBZ0I7O2tDQUMvQiw4REFBQ1Ysb0RBQU1BO3dCQUNMVyxHQUFHO3dCQUNIQyxHQUFHO3dCQUNITixjQUFjO3dCQUNkQyxhQUFhO3dCQUNiQyxhQUFhOzs7Ozs7a0NBRWYsOERBQUNYLGlEQUFHQTt3QkFDRmdCLFNBQVM7d0JBQ1RDLFlBQVk7d0JBQ1pKLGdCQUFnQjt3QkFDaEJDLEdBQUc7d0JBQ0hDLEdBQUc7d0JBQ0hMLGFBQWE7d0JBQ2JDLGFBQWE7a0NBRWIsNEVBQUNQLGtEQUFJQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1YsOERBQUNGLG1EQUFLQTtnQkFBQ2dCLFdBQVc7Z0JBQU9DLFVBQVU7Z0JBQVFDLEtBQUs7MEJBQzdDckIsaURBQVVBLENBQUNzQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ2YsOERBQUN4QiwrQ0FBTUE7d0JBRUx5QixXQUFXRCxJQUFJQSxHQUFHO3dCQUNsQkUsT0FBT0YsSUFBSUUsS0FBSzt3QkFDaEJDLE9BQU9ILElBQUlHLEtBQUs7dUJBSFhILElBQUlBLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEIsRUFBRTtLQTFDV2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0tleWJvYXJkLnRzeD81MjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IEtFWV9JTlBVVFMgfSBmcm9tIFwiQC9jb250YW50c1wiO1xuaW1wb3J0IHsgQm94LCBIU3RhY2ssIFN0YWNrLCBCdXR0b24sIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgS2V5Ym9hcmQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYm94U2l6aW5nPXtcImJvcmRlci1ib3hcIn1cbiAgICAgIG1heFc9e1wiMzcwcHhcIn1cbiAgICAgIHBhZGRpbmc9e1wiNFwifVxuICAgICAgYm9yZGVyUmFkaXVzPXtcIjJ4bFwifVxuICAgICAgYm9yZGVyV2lkdGg9e1wiMXB4XCJ9XG4gICAgICBib3JkZXJDb2xvcj17XCJicmFuZC42MDBcIn1cbiAgICA+XG4gICAgICA8SFN0YWNrIG1iPXtcIjhcIn0ganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHc9ezI4fVxuICAgICAgICAgIGg9ezI4fVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIxMDAlXCJ9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9e1wiMXB4XCJ9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e1wiYnJhbmQuNjAwXCJ9XG4gICAgICAgID48L0J1dHRvbj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgdz17XCIxMjhweFwifVxuICAgICAgICAgIGg9e1wiNjRweFwifVxuICAgICAgICAgIGJvcmRlcldpZHRoPXtcIjFweFwifVxuICAgICAgICAgIGJvcmRlckNvbG9yPXtcImJyYW5kLjYwMFwifVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQ+T0xFRCAxMjh4NjQ8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9IU3RhY2s+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBmbGV4V3JhcD17XCJ3cmFwXCJ9IGdhcD17XCI0XCJ9PlxuICAgICAgICB7S0VZX0lOUFVUUy5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIGtleT17a2V5LmtleX1cbiAgICAgICAgICAgIHN3aXRjaEtleT17a2V5LmtleX1cbiAgICAgICAgICAgIGxhYmVsPXtrZXkubGFiZWx9XG4gICAgICAgICAgICB2YWx1ZT17a2V5LnZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiU3dpdGNoIiwiS0VZX0lOUFVUUyIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiQnV0dG9uIiwiVGV4dCIsIktleWJvYXJkIiwiYm94U2l6aW5nIiwibWF4VyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwibWIiLCJqdXN0aWZ5Q29udGVudCIsInciLCJoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJkaXJlY3Rpb24iLCJmbGV4V3JhcCIsImdhcCIsIm1hcCIsImtleSIsInN3aXRjaEtleSIsImxhYmVsIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Keyboard.tsx\n"));

/***/ })

});