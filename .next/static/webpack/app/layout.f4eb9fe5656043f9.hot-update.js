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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs\");\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n    brand: {\n        900: \"#2e1437\",\n        800: \"#51425f\",\n        700: \"#948e99\",\n        600: \"#cad1c3\",\n        500: \"#e7eed0\"\n    }\n};\nconst styles = {\n    global: {\n        // styles for the `body`\n        body: {\n            color: \"brand.700\"\n        }\n    }\n};\nconst components = {\n    Text: {\n        baseStyle: {\n            color: \"brand.700\"\n        },\n        variants: {\n            title: {\n                fontSize: \"2.4rem\",\n                fontWeight: \"bold\",\n                color: \"brand.800\"\n            }\n        }\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    styles,\n    colors,\n    components\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5QywyREFBMkQ7QUFDM0QsTUFBTUMsU0FBUztJQUNiQyxPQUFPO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFDUDtBQUNGO0FBRUEsTUFBTUMsU0FBUztJQUNiQyxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCQyxNQUFNO1lBQ0pDLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxhQUFhO0lBQ2pCQyxNQUFNO1FBQ0pDLFdBQVc7WUFDVEgsT0FBTztRQUNUO1FBQ0FJLFVBQVU7WUFDUkMsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWlAsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRU8sTUFBTVEsUUFBUWQsNkRBQVdBLENBQUM7SUFBRUc7SUFBUUY7SUFBUU07QUFBVyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS50cz9kYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuLy8gMi4gRXh0ZW5kIHRoZSB0aGVtZSB0byBpbmNsdWRlIGN1c3RvbSBjb2xvcnMsIGZvbnRzLCBldGNcbmNvbnN0IGNvbG9ycyA9IHtcbiAgYnJhbmQ6IHtcbiAgICA5MDA6IFwiIzJlMTQzN1wiLFxuICAgIDgwMDogXCIjNTE0MjVmXCIsXG4gICAgNzAwOiBcIiM5NDhlOTlcIixcbiAgICA2MDA6IFwiI2NhZDFjM1wiLFxuICAgIDUwMDogXCIjZTdlZWQwXCIsXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBnbG9iYWw6IHtcbiAgICAvLyBzdHlsZXMgZm9yIHRoZSBgYm9keWBcbiAgICBib2R5OiB7XG4gICAgICBjb2xvcjogXCJicmFuZC43MDBcIlxuICAgIH0sXG4gIH1cbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgVGV4dDoge1xuICAgIGJhc2VTdHlsZToge1xuICAgICAgY29sb3I6IFwiYnJhbmQuNzAwXCJcbiAgICB9LFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBmb250U2l6ZTogXCIyLjRyZW1cIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGNvbG9yOiBcImJyYW5kLjgwMFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgc3R5bGVzLCBjb2xvcnMsIGNvbXBvbmVudHMgfSkiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsInN0eWxlcyIsImdsb2JhbCIsImJvZHkiLCJjb2xvciIsImNvbXBvbmVudHMiLCJUZXh0IiwiYmFzZVN0eWxlIiwidmFyaWFudHMiLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/theme.ts\n"));

/***/ })

});