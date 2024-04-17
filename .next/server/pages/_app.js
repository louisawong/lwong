(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: external "use-dark-mode"
const external_use_dark_mode_namespaceObject = require("use-dark-mode");
var external_use_dark_mode_default = /*#__PURE__*/__webpack_require__.n(external_use_dark_mode_namespaceObject);
// EXTERNAL MODULE: ./components/index.ts + 10 modules
var components = __webpack_require__(416);
;// CONCATENATED MODULE: ./utils/themeConfig.ts

const lightTheme = {
    text: "#283618",
    background: "#fefdf3"
};
const darkTheme = {
    text: "#fefdf3",
    background: "#283618"
};
const GlobalStyles = external_styled_components_.createGlobalStyle`
  body {
    background: ${({ theme  })=>theme.background};
    color: ${({ theme  })=>theme.text};
  }
`;

;// CONCATENATED MODULE: ./utils/index.ts


// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.tsx







function App({ Component , pageProps  }) {
    const darkmode = external_use_dark_mode_default()(false);
    const theme = darkmode.value ? darkTheme : lightTheme;
    const [isMounted, setIsMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {}),
                isMounted && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "appBar",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* ResumeButton */.l2, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    checked: !darkmode.value,
                                    className: "toggle",
                                    onClick: darkmode.toggle
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 41:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,416], () => (__webpack_exec__(749)));
module.exports = __webpack_exports__;

})();