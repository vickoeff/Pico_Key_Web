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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs\");\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n    brand: {\n        900: \"#2e1437\",\n        800: \"#51425f\",\n        700: \"#948e99\",\n        600: \"#cad1c3\",\n        500: \"#e7eed0\"\n    }\n};\nconst styles = {\n    global: {\n        // styles for the `body`\n        body: {\n            color: \"brand.700\"\n        }\n    }\n};\nconst components = {\n    FormLabel: {\n        baseStyle: {\n            color: \"brand.700\"\n        }\n    },\n    Text: {\n        baseStyle: {\n            color: \"brand.700\"\n        },\n        variants: {\n            title: {\n                fontSize: \"2.4rem\",\n                fontWeight: \"bold\",\n                color: \"brand.800\"\n            }\n        }\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    styles,\n    colors,\n    components\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5QywyREFBMkQ7QUFDM0QsTUFBTUMsU0FBUztJQUNiQyxPQUFPO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFDUDtBQUNGO0FBRUEsTUFBTUMsU0FBUztJQUNiQyxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCQyxNQUFNO1lBQ0pDLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxhQUFhO0lBQ2pCQyxXQUFXO1FBQ1RDLFdBQVc7WUFDVEgsT0FBTztRQUNUO0lBQ0Y7SUFDQUksTUFBTTtRQUNKRCxXQUFXO1lBQ1RILE9BQU87UUFDVDtRQUNBSyxVQUFVO1lBQ1JDLE9BQU87Z0JBQ0xDLFVBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pSLE9BQU87WUFDVDtRQUNGO0lBQ0Y7QUFDRjtBQUVPLE1BQU1TLFFBQVFmLDZEQUFXQSxDQUFDO0lBQUVHO0lBQVFGO0lBQVFNO0FBQVcsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdGhlbWUudHM/ZGM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbi8vIDIuIEV4dGVuZCB0aGUgdGhlbWUgdG8gaW5jbHVkZSBjdXN0b20gY29sb3JzLCBmb250cywgZXRjXG5jb25zdCBjb2xvcnMgPSB7XG4gIGJyYW5kOiB7XG4gICAgOTAwOiBcIiMyZTE0MzdcIixcbiAgICA4MDA6IFwiIzUxNDI1ZlwiLFxuICAgIDcwMDogXCIjOTQ4ZTk5XCIsXG4gICAgNjAwOiBcIiNjYWQxYzNcIixcbiAgICA1MDA6IFwiI2U3ZWVkMFwiLFxuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiB7XG4gICAgLy8gc3R5bGVzIGZvciB0aGUgYGJvZHlgXG4gICAgYm9keToge1xuICAgICAgY29sb3I6IFwiYnJhbmQuNzAwXCJcbiAgICB9LFxuICB9XG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIEZvcm1MYWJlbDoge1xuICAgIGJhc2VTdHlsZToge1xuICAgICAgY29sb3I6IFwiYnJhbmQuNzAwXCJcbiAgICB9XG4gIH0sXG4gIFRleHQ6IHtcbiAgICBiYXNlU3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcImJyYW5kLjcwMFwiXG4gICAgfSxcbiAgICB2YXJpYW50czoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMi40cmVtXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBjb2xvcjogXCJicmFuZC44MDBcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IHN0eWxlcywgY29sb3JzLCBjb21wb25lbnRzIH0pIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiYnJhbmQiLCJzdHlsZXMiLCJnbG9iYWwiLCJib2R5IiwiY29sb3IiLCJjb21wb25lbnRzIiwiRm9ybUxhYmVsIiwiYmFzZVN0eWxlIiwiVGV4dCIsInZhcmlhbnRzIiwidGl0bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/theme.ts\n"));

/***/ })

});