"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs\");\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n    brand: {\n        900: \"#2e1437\",\n        800: \"#51425f\",\n        700: \"#948e99\",\n        600: \"#cad1c3\",\n        500: \"#e7eed0\"\n    },\n    fonts: \"blackAlpha.800\"\n};\nconst components = {\n    text: {\n        baseStyle: {\n            color: \"fonts\"\n        }\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors,\n    components\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5QywyREFBMkQ7QUFDM0QsTUFBTUMsU0FBUztJQUNiQyxPQUFPO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFDUDtJQUNBQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxhQUFhO0lBQ2ZDLE1BQU07UUFDRkMsV0FBVztZQUNQQyxPQUFPO1FBQ1g7SUFDSjtBQUNKO0FBRU8sTUFBTUMsUUFBUVIsNkRBQVdBLENBQUM7SUFBRUM7SUFBUUc7QUFBVyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS50cz9kYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuLy8gMi4gRXh0ZW5kIHRoZSB0aGVtZSB0byBpbmNsdWRlIGN1c3RvbSBjb2xvcnMsIGZvbnRzLCBldGNcbmNvbnN0IGNvbG9ycyA9IHtcbiAgYnJhbmQ6IHtcbiAgICA5MDA6IFwiIzJlMTQzN1wiLFxuICAgIDgwMDogXCIjNTE0MjVmXCIsXG4gICAgNzAwOiBcIiM5NDhlOTlcIixcbiAgICA2MDA6IFwiI2NhZDFjM1wiLFxuICAgIDUwMDogXCIjZTdlZWQwXCIsXG4gIH0sXG4gIGZvbnRzOiBcImJsYWNrQWxwaGEuODAwXCJcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICB0ZXh0OiB7XG4gICAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IFwiZm9udHNcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbG9ycywgY29tcG9uZW50cyB9KSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImNvbG9ycyIsImJyYW5kIiwiZm9udHMiLCJjb21wb25lbnRzIiwidGV4dCIsImJhc2VTdHlsZSIsImNvbG9yIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/theme.ts\n"));

/***/ })

});