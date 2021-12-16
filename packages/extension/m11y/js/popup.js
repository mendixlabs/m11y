/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Index = void 0;
/// <reference types="chrome"/>
const react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_3 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const Developers_1 = __importDefault(__webpack_require__(/*! ../components/pages/Developers */ "./src/components/pages/Developers.tsx"));
const AppStateContext_1 = __webpack_require__(/*! ../state/AppStateContext */ "./src/state/AppStateContext.ts");
const popupReducer_1 = __webpack_require__(/*! ../state/popupReducer */ "./src/state/popupReducer.ts");
const Topbar_1 = __importDefault(__webpack_require__(/*! ../components/components/Topbar */ "./src/components/components/Topbar.tsx"));
const DeveloperProvider_1 = __webpack_require__(/*! ../components/context/DeveloperProvider */ "./src/components/context/DeveloperProvider.tsx");
const Designers_1 = __importDefault(__webpack_require__(/*! ../components/pages/Designers */ "./src/components/pages/Designers.tsx"));
const types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
const Popup = ({ type }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DeveloperProvider_1.DeveloperProvider, null,
            react_1.default.createElement(Topbar_1.default, { type: type }),
            react_1.default.createElement(react_3.Tabs, { variant: "enclosed", colorScheme: "teal", w: type === types_1.ENUM_VIEW_TYPE.POPUP ? '600px' : 'auto' },
                react_1.default.createElement(react_3.TabList, null,
                    react_1.default.createElement(react_3.Tab, null,
                        react_1.default.createElement(react_3.Text, { display: "flex" }, "Developers")),
                    react_1.default.createElement(react_3.Tab, null,
                        react_1.default.createElement(react_3.Text, { display: "flex" }, "Designers"))),
                react_1.default.createElement(react_3.TabPanels, null,
                    react_1.default.createElement(react_3.TabPanel, null,
                        react_1.default.createElement(Developers_1.default, null)),
                    react_1.default.createElement(react_3.TabPanel, null,
                        react_1.default.createElement(Designers_1.default, null)))))));
};
const config = {
    fonts: Object.assign(Object.assign({}, react_3.theme.fonts), { heading: 'Open Sans', body: 'Raleway' }),
    initialColorMode: 'light',
    useSystemColorMode: false,
};
const theme = (0, react_3.extendTheme)({ config });
const Index = ({ type }) => {
    const [state, dispatch] = (0, react_1.useReducer)(popupReducer_1.reducer, popupReducer_1.initialState);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AppStateContext_1.AppStateContext.Provider, { value: { state, dispatch } },
            react_1.default.createElement(react_2.ChakraProvider, { theme: theme },
                react_1.default.createElement(Popup, { type: type })))));
};
exports.Index = Index;


/***/ }),

/***/ "./src/components/components/CBTests.tsx":
/*!***********************************************!*\
  !*** ./src/components/components/CBTests.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const factory_1 = __webpack_require__(/*! @m11y/factory */ "../factory/dist/index.js");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const CBTests = () => {
    const [cbType, setCbType] = (0, react_2.useState)(undefined);
    const bg = (0, react_1.useColorModeValue)('gray.50', 'gray.700');
    const toggleCBTest = (cdTestEnum) => {
        if (cbType === cdTestEnum) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const tab = tabs[0];
                if (tab.id) {
                    chrome.tabs.sendMessage(tab.id, {
                        message: types_1.EnumContentScripMessages.CLEAR_CB,
                    }, (msg) => { });
                }
            });
            return setCbType(undefined);
        }
        setCbType(cdTestEnum);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.SIMULATE_CB,
                    cbToSimulate: cdTestEnum,
                }, (msg) => { });
            }
        });
    };
    return (react_2.default.createElement(react_1.Box, null, factory_1.cbTests.map((test) => {
        return (react_2.default.createElement(react_1.Box, { p: 4, borderWidth: 1, marginTop: 2, borderRadius: 10, bg: bg },
            react_2.default.createElement(react_1.Grid, { templateColumns: "auto 40px", gap: 6 },
                react_2.default.createElement(react_1.Box, null,
                    react_2.default.createElement(react_1.Heading, { size: "lg", fontWeight: "bold", textTransform: "uppercase", fontSize: "lg", letterSpacing: "wide" }, test.name),
                    react_2.default.createElement(react_1.Text, null, test.desc)),
                react_2.default.createElement(react_1.Box, null,
                    react_2.default.createElement(react_1.Switch, { id: test.type, colorScheme: "teal", value: test.type, onChange: () => toggleCBTest(test.type), isChecked: cbType === test.type })))));
    })));
};
exports["default"] = CBTests;


/***/ }),

/***/ "./src/components/components/DisplayWarnings.tsx":
/*!*******************************************************!*\
  !*** ./src/components/components/DisplayWarnings.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DisplayWarnings = void 0;
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const DeveloperProvider_1 = __webpack_require__(/*! ../context/DeveloperProvider */ "./src/components/context/DeveloperProvider.tsx");
const MarkdownDisplay_1 = __importDefault(__webpack_require__(/*! ./MarkdownDisplay */ "./src/components/components/MarkdownDisplay.tsx"));
const NavigateIssue_1 = __importDefault(__webpack_require__(/*! ./NavigateIssue */ "./src/components/components/NavigateIssue.tsx"));
const TechnicalExplanation_1 = __importDefault(__webpack_require__(/*! ./TechnicalExplanation */ "./src/components/components/TechnicalExplanation.tsx"));
const DisplayWarnings = ({ tag, error, showButtons }) => {
    const bg = (0, react_1.useColorModeValue)('gray.50', 'gray.700');
    const { dispatch, state } = (0, DeveloperProvider_1.useDeveloperState)();
    const clearErrors = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.REMOVE_ALL_ERRORS,
                }, (msg) => { });
            }
        });
    };
    const showAllErrors = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.SHOW_ALL_ERRORS,
                    errorToView: error,
                    tag,
                }, (msg) => { });
            }
        });
    };
    const showErrorsInConsole = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.SHOW_ERROR_IN_CONSOLE,
                    tag: tag,
                    errorToView: error,
                }, (msg) => { });
            }
        });
    };
    const ALL_ERROR_BUTTON_COLOR = error.errorType === types_1.ErrorEnum.Error
        ? 'red'
        : error.errorType === types_1.ErrorEnum.Warning
            ? 'orange'
            : 'teal';
    return (react_2.default.createElement(react_1.Box, { p: 4, borderWidth: 1, marginTop: 2, bg: bg, borderRadius: 10 },
        react_2.default.createElement(react_1.Grid, { templateColumns: "80px auto 40px", gap: 6 },
            react_2.default.createElement(react_1.Box, { w: "100%", display: "flex", alignItems: "center" },
                react_2.default.createElement(react_1.Badge, { colorScheme: "purple" },
                    error.errorCount,
                    " - Issues"),
                react_2.default.createElement(TechnicalExplanation_1.default, { title: 'Technical Explanation' },
                    react_2.default.createElement(MarkdownDisplay_1.default, null, error.errorDescription.technical))),
            react_2.default.createElement(react_1.Box, { w: "100%" },
                react_2.default.createElement(MarkdownDisplay_1.default, null, error.errorDescription.mendix),
                ' ')),
        showButtons && (react_2.default.createElement(react_1.Box, null,
            react_2.default.createElement(react_1.ButtonGroup, { size: "xs", isAttached: true, mt: "4" },
                state.allErrors === error.errorEnumToTarget ? (react_2.default.createElement(react_1.Button, { colorScheme: ALL_ERROR_BUTTON_COLOR, onClick: () => {
                        clearErrors();
                        dispatch({
                            type: types_1.ENUM_Developer_View.CLEAR_ALL_ISSUES,
                            data: error,
                        });
                    } }, "Clear Affected Elements")) : (react_2.default.createElement(react_1.Button, { variant: "outline", colorScheme: ALL_ERROR_BUTTON_COLOR, onClick: () => {
                        clearErrors();
                        dispatch({
                            type: types_1.ENUM_Developer_View.ALL_ISSUES,
                            data: error,
                        });
                        showAllErrors();
                    } }, "Highlight Affect Elements")),
                state.step === error.errorEnumToTarget ? (react_2.default.createElement(react_1.Button, { colorScheme: "orange", variant: "outline", onClick: () => {
                        clearErrors();
                        dispatch({
                            type: types_1.ENUM_Developer_View.CLOSE_STEP,
                        });
                    } }, "Close Issue Navigate")) : (react_2.default.createElement(react_1.Button, { colorScheme: "teal", variant: "outline", onClick: () => {
                        clearErrors();
                        dispatch({
                            type: types_1.ENUM_Developer_View.STEP,
                            data: error,
                        });
                    } }, "Step Through Issues")),
                react_2.default.createElement(react_1.Button, { colorScheme: "teal", variant: "outline", onClick: () => showErrorsInConsole() }, "Display Issues In Console")))),
        react_2.default.createElement(NavigateIssue_1.default, { tag: tag, error: error })));
};
exports.DisplayWarnings = DisplayWarnings;


/***/ }),

/***/ "./src/components/components/MarkdownDisplay.tsx":
/*!*******************************************************!*\
  !*** ./src/components/components/MarkdownDisplay.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_markdown_1 = __importDefault(__webpack_require__(/*! react-markdown */ "../../node_modules/react-markdown/index.js"));
const CustomButton = ({ children, href }) => {
    return (react_2.default.createElement(react_1.Button, { size: "sm", onClick: () => chrome.windows.create({ url: href }) }, children));
};
const MarkdownDisplay = ({ children, fontSize }) => {
    return (react_2.default.createElement(react_1.Text, { fontSize: fontSize ? fontSize : '16' },
        react_2.default.createElement(react_markdown_1.default, { components: {
                a: (props) => {
                    return CustomButton(props);
                },
            } }, children)));
};
exports["default"] = MarkdownDisplay;


/***/ }),

/***/ "./src/components/components/NavigateIssue.tsx":
/*!*****************************************************!*\
  !*** ./src/components/components/NavigateIssue.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const DeveloperProvider_1 = __webpack_require__(/*! ../context/DeveloperProvider */ "./src/components/context/DeveloperProvider.tsx");
const NavigateIssue = ({ tag, error }) => {
    const bg = (0, react_1.useColorModeValue)('gray.200', 'gray.600');
    const [step, setStep] = (0, react_2.useState)(undefined);
    const { state } = (0, DeveloperProvider_1.useDeveloperState)();
    (0, react_2.useEffect)(() => {
        if (step !== undefined) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const tab = tabs[0];
                if (tab.id) {
                    chrome.tabs.sendMessage(tab.id, {
                        message: types_1.EnumContentScripMessages.STEP_ERROR,
                        errorToView: error,
                        step: step,
                        tag: tag,
                    }, (msg) => { });
                }
            });
        }
    }, [step]);
    if (state.step === error.errorEnumToTarget) {
        return (react_2.default.createElement(react_1.Fade, { in: state.step === error.errorEnumToTarget },
            react_2.default.createElement(react_1.Box, { p: 4, borderWidth: 1, marginTop: 2, bg: bg, borderRadius: 10 },
                react_2.default.createElement(react_1.Heading, { size: "md" }, "Navigate Through Errors"),
                react_2.default.createElement(react_1.Text, null,
                    "Sometimes Issues can be hard do find as it is in the DOM but not visible. Use \"See Issues In Console\" to see it better",
                    ' '),
                react_2.default.createElement(react_1.ButtonGroup, { size: "xs", isAttached: true, mt: "4" },
                    react_2.default.createElement(react_1.Button, { disabled: !step, onClick: () => setStep(step ? step - 1 : 0) }, "Prev Issue"),
                    react_2.default.createElement(react_1.Button, { disabled: step === error.errorCount - 1, onClick: () => setStep(step !== undefined ? step + 1 : 0) }, "Next Issue")))));
    }
    else {
        return react_2.default.createElement("div", null);
    }
};
exports["default"] = NavigateIssue;


/***/ }),

/***/ "./src/components/components/TechnicalExplanation.tsx":
/*!************************************************************!*\
  !*** ./src/components/components/TechnicalExplanation.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const icons_1 = __webpack_require__(/*! @chakra-ui/icons */ "../../node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
const react_2 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const TechnicalExplanation = ({ children, title }) => {
    return (react_2.default.createElement(react_1.Popover, null,
        react_2.default.createElement(react_1.PopoverTrigger, null,
            react_2.default.createElement(icons_1.InfoIcon, { ml: "2", color: "orange" })),
        react_2.default.createElement(react_1.PopoverContent, null,
            react_2.default.createElement(react_1.PopoverArrow, null),
            react_2.default.createElement(react_1.PopoverCloseButton, null),
            react_2.default.createElement(react_1.PopoverHeader, null, title),
            react_2.default.createElement(react_1.PopoverBody, null, children))));
};
exports["default"] = TechnicalExplanation;


/***/ }),

/***/ "./src/components/components/Topbar.tsx":
/*!**********************************************!*\
  !*** ./src/components/components/Topbar.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(/*! @chakra-ui/icons */ "../../node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const MarkdownDisplay_1 = __importDefault(__webpack_require__(/*! ./MarkdownDisplay */ "./src/components/components/MarkdownDisplay.tsx"));
const displayOS = (os) => {
    switch (os) {
        case 'mac':
            return `We recommend you view the extension in the Dev tools **"Option + Command + J"** to open the Javascript Console. `;
        case 'win':
            return `We recommend you view the extension in the Dev tools **"Control + Shift + J"** to open the Javascript Console. `;
        default:
            return `Open your Javascript Console. `;
    }
};
const Topbar = ({ type }) => {
    const [mx, setMx] = (0, react_2.useState)();
    const { toggleColorMode, colorMode } = (0, react_1.useColorMode)();
    const [os, setOS] = (0, react_2.useState)();
    const reFreshAndRerun = () => {
        chrome.runtime.reload();
    };
    (0, react_2.useEffect)(() => {
        chrome.runtime.getPlatformInfo(function (info) {
            setOS(info.os);
        });
    }, []);
    (0, react_2.useEffect)(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.GET_MX_WINDOW,
                }, (msg) => {
                    setMx(msg);
                });
            }
        });
        return () => { };
    }, []);
    return (react_2.default.createElement(react_1.Flex, { justifyContent: "space-between", m: "6", ml: "4", mr: "4" },
        react_2.default.createElement(react_1.Box, { maxW: "60%" },
            react_2.default.createElement(react_1.Heading, { fontWeight: "bold", textTransform: "uppercase", letterSpacing: "wide" }, "M11y-Extension"),
            react_2.default.createElement(react_1.Text, { size: "xs" }, type === types_1.ENUM_VIEW_TYPE.POPUP && os && (react_2.default.createElement(MarkdownDisplay_1.default, { fontSize: '10' }, displayOS(os))))),
        react_2.default.createElement(react_1.Box, { display: "flex", alignItems: "center" },
            react_2.default.createElement(react_1.Box, { onClick: toggleColorMode, cursor: "pointer" },
                colorMode === 'dark' ? react_2.default.createElement(icons_1.SunIcon, null) : react_2.default.createElement(icons_1.MoonIcon, null),
                mx ? (react_2.default.createElement(react_1.Badge, { ml: "2", colorScheme: "teal" },
                    "Mendix Version: ", mx === null || mx === void 0 ? void 0 :
                    mx.version)) : (react_2.default.createElement(react_1.Badge, { ml: "2", colorScheme: "teal" }, "Possibly not a Mendix App"))),
            react_2.default.createElement(react_1.Tooltip, { label: "HAVE YOU TRIED TURNING IT OFF AND ON AGAIN?" },
                react_2.default.createElement(icons_1.RepeatIcon, { cursor: "pointer", onClick: reFreshAndRerun, variant: "outline", color: "red", ml: "2" })))));
};
exports["default"] = Topbar;


/***/ }),

/***/ "./src/components/context/DeveloperProvider.tsx":
/*!******************************************************!*\
  !*** ./src/components/context/DeveloperProvider.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useDeveloperState = exports.DeveloperProvider = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const initialState = {
    step: undefined,
    error: undefined,
    allErrors: undefined,
};
const DeveloperContext = react_1.default.createContext(undefined);
// @ts-ignore
function authReducer(state, action) {
    switch (action.type) {
        case types_1.ENUM_Developer_View.STEP: {
            return Object.assign(Object.assign({}, state), { error: action.data, allErrors: undefined, step: action.data.errorEnumToTarget });
        }
        case types_1.ENUM_Developer_View.CLOSE_STEP: {
            return Object.assign(Object.assign({}, state), { error: undefined, step: undefined, allErrors: undefined });
        }
        case types_1.ENUM_Developer_View.CLEAR_ALL_ISSUES: {
            return Object.assign(Object.assign({}, state), { error: undefined, step: undefined, allErrors: undefined });
        }
        case types_1.ENUM_Developer_View.ALL_ISSUES: {
            return Object.assign(Object.assign({}, state), { step: undefined, error: action.data, allErrors: action.data.errorEnumToTarget });
        }
        default:
            return Object.assign({}, state);
    }
}
const DeveloperProvider = ({ children }) => {
    const [state, dispatch] = react_1.default.useReducer(authReducer, initialState);
    const value = { state, dispatch };
    return (react_1.default.createElement(DeveloperContext.Provider, { value: value }, children));
};
exports.DeveloperProvider = DeveloperProvider;
function useDeveloperState() {
    const context = react_1.default.useContext(DeveloperContext);
    if (context === undefined) {
        throw new Error('useDeveloperState must be used within a CountProvider');
    }
    return context;
}
exports.useDeveloperState = useDeveloperState;


/***/ }),

/***/ "./src/components/pages/Designers.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/Designers.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const react_2 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const CBTests_1 = __importDefault(__webpack_require__(/*! ../components/CBTests */ "./src/components/components/CBTests.tsx"));
const MarkdownDisplay_1 = __importDefault(__webpack_require__(/*! ../components/MarkdownDisplay */ "./src/components/components/MarkdownDisplay.tsx"));
const DESC = `Simulate color impairment by converting current page to look like the selected color impairment`;
const Designers = () => {
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(react_1.Heading, { size: "md", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "wide" }, "Tests for Designers"),
        react_2.default.createElement(react_1.Box, { p: 4, borderWidth: 1, marginTop: 6, borderRadius: 10 },
            react_2.default.createElement(react_1.Heading, { size: "xl", fontWeight: "bold", textTransform: "uppercase", fontSize: "lg", letterSpacing: "wide", color: "teal.600" }, "Text Colours"),
            react_2.default.createElement(MarkdownDisplay_1.default, null, DESC),
            react_2.default.createElement(CBTests_1.default, null))));
};
exports["default"] = Designers;


/***/ }),

/***/ "./src/components/pages/Developers.tsx":
/*!*********************************************!*\
  !*** ./src/components/pages/Developers.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(/*! @chakra-ui/icons */ "../../node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
const layout_1 = __webpack_require__(/*! @chakra-ui/layout */ "../../node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
const react_1 = __webpack_require__(/*! @chakra-ui/react */ "../../node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
const factory_1 = __webpack_require__(/*! @m11y/factory */ "../factory/dist/index.js");
const react_2 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const popupReducer_1 = __webpack_require__(/*! ../../state/popupReducer */ "./src/state/popupReducer.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
const DisplayWarnings_1 = __webpack_require__(/*! ../components/DisplayWarnings */ "./src/components/components/DisplayWarnings.tsx");
const Developers = () => {
    var _a;
    const [state, dispatch] = (0, react_2.useReducer)(popupReducer_1.reducer, popupReducer_1.initialState);
    const getAllErrors = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tab = tabs[0];
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, {
                    message: types_1.EnumContentScripMessages.GET_ALL_ERRORS,
                }, (msg) => {
                    dispatch({
                        type: types_1.EnumStateTypes.fetchAllError,
                        errorList: msg,
                    });
                });
            }
        });
    };
    (0, react_2.useEffect)(() => {
        getAllErrors();
    }, []);
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(react_1.Flex, { justifyContent: "space-between", m: "6", ml: "4", mr: "4" },
            react_2.default.createElement(react_1.Box, null,
                react_2.default.createElement(layout_1.Heading, { size: "md", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "wide" }, "Warnings, Errors & Suggestions for Developers")),
            react_2.default.createElement(react_1.Box, null,
                react_2.default.createElement(react_1.Button, { size: "sm", colorScheme: "teal", onClick: getAllErrors },
                    react_2.default.createElement(icons_1.RepeatIcon, { size: "sm" })))),
        ((_a = state.errorList) === null || _a === void 0 ? void 0 : _a.length) ? (react_2.default.createElement(react_2.default.Fragment, null, state === null || state === void 0 ? void 0 : state.errorList.map((errorItem, i) => {
            console.log(`errorItem`, errorItem);
            return (react_2.default.createElement(react_1.Box, { p: 4, borderWidth: 1, marginTop: 6, borderRadius: 10, key: i },
                react_2.default.createElement(layout_1.Heading, { size: "lg", fontWeight: "bold", textTransform: "uppercase", fontSize: "lg", letterSpacing: "wide", color: "teal.600" },
                    "Issues with",
                    ' ',
                    (0, factory_1.rationalizeTagInformation)(errorItem.tag).mendixName),
                errorItem.errors.map((error, key) => {
                    return (react_2.default.createElement("div", { key: key },
                        react_2.default.createElement(DisplayWarnings_1.DisplayWarnings, { tag: errorItem.tag, error: error, showButtons: (0, factory_1.rationalizeTagInformation)(errorItem.tag).showButtons })));
                })));
        }))) : (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(layout_1.Stack, null,
                react_2.default.createElement(react_1.Skeleton, { height: "20px" }),
                react_2.default.createElement(react_1.Skeleton, { height: "20px" }),
                react_2.default.createElement(react_1.Skeleton, { height: "20px" }))))));
};
exports["default"] = Developers;


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/// <reference types="chrome"/>
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js"));
const app_1 = __webpack_require__(/*! ../app */ "./src/app/index.tsx");
const types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(app_1.Index, { type: types_1.ENUM_VIEW_TYPE.POPUP })), document.getElementById('root'));


/***/ }),

/***/ "./src/state/AppStateContext.ts":
/*!**************************************!*\
  !*** ./src/state/AppStateContext.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppStateContext = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
// @ts-ignore
exports.AppStateContext = react_1.default.createContext();


/***/ }),

/***/ "./src/state/popupReducer.ts":
/*!***********************************!*\
  !*** ./src/state/popupReducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reducer = exports.initialState = void 0;
const types_1 = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");
exports.initialState = {
    loading: true,
    errorList: [],
    type: null,
    tag: '',
    step: null,
    iCantSee: false,
    error: undefined,
};
const reducer = (state, action) => {
    var _a;
    switch (action.type) {
        case types_1.EnumStateTypes.fetchAllError:
            console.log(` action.errorList`, action.errorList);
            return Object.assign(Object.assign({}, state), { loading: false, errorList: action.errorList });
        case types_1.EnumStateTypes.unMountAll:
            return Object.assign(Object.assign({}, state), { errorList: [], loading: true });
        case types_1.EnumStateTypes.increaseStep:
            if (state.step == null) {
                return Object.assign(Object.assign({}, state), { step: 0 });
            }
            else {
                if (((_a = state.error) === null || _a === void 0 ? void 0 : _a.errorCount) == state.step) {
                    return Object.assign({}, state);
                }
                return Object.assign(Object.assign({}, state), { step: state.step + 1 });
            }
        case types_1.EnumStateTypes.decreaseStep:
            return Object.assign(Object.assign({}, state), { step: state.step ? state.step-- : 0 });
        case types_1.EnumStateTypes.setStepTag:
            return Object.assign(Object.assign({}, state), { step: 0, tag: action.tag, error: action.error, iCantSee: false });
        case types_1.EnumStateTypes.cantSeeErrors:
            return Object.assign(Object.assign({}, state), { tag: action.tag, error: action.error, iCantSee: action.iCantSee });
        default:
            return state;
    }
};
exports.reducer = reducer;


/***/ }),

/***/ "./src/utils/types.ts":
/*!****************************!*\
  !*** ./src/utils/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENUM_VIEW_TYPE = exports.ENUM_Developer_View = exports.ENUM_CBTestTypes = exports.EnumStateTypes = exports.EnumContentScripMessages = exports.MenuErrorEnum = exports.ColTagErrorEnum = exports.InputTagErrorEnum = exports.HTagErrorEnum = exports.DataViewErrorEnum = exports.ImgTagErrorEnum = exports.ButtonTagErrorEnum = exports.ATagErrorEnum = exports.ErrorEnum = void 0;
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["Error"] = 0] = "Error";
    ErrorEnum[ErrorEnum["Warning"] = 1] = "Warning";
    ErrorEnum[ErrorEnum["Success"] = 2] = "Success";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
var ATagErrorEnum;
(function (ATagErrorEnum) {
    ATagErrorEnum["A_TOOL"] = "A_TOOL";
    ATagErrorEnum["A_HREF"] = "A_HREF";
    ATagErrorEnum["A_TAB_INDEX"] = "A_TAB_INDEX";
})(ATagErrorEnum = exports.ATagErrorEnum || (exports.ATagErrorEnum = {}));
var ButtonTagErrorEnum;
(function (ButtonTagErrorEnum) {
    ButtonTagErrorEnum["BUTTON_TITLE"] = "BUTTON_TITLE";
})(ButtonTagErrorEnum = exports.ButtonTagErrorEnum || (exports.ButtonTagErrorEnum = {}));
var ImgTagErrorEnum;
(function (ImgTagErrorEnum) {
    ImgTagErrorEnum["ALT_TEXT"] = "ALT_TEXT";
})(ImgTagErrorEnum = exports.ImgTagErrorEnum || (exports.ImgTagErrorEnum = {}));
var DataViewErrorEnum;
(function (DataViewErrorEnum) {
    DataViewErrorEnum["BASE_DATA_VIEW"] = "BASE_DATA_VIEW";
})(DataViewErrorEnum = exports.DataViewErrorEnum || (exports.DataViewErrorEnum = {}));
var HTagErrorEnum;
(function (HTagErrorEnum) {
    HTagErrorEnum["ONE_H1"] = "ONE_H1";
})(HTagErrorEnum = exports.HTagErrorEnum || (exports.HTagErrorEnum = {}));
var InputTagErrorEnum;
(function (InputTagErrorEnum) {
    InputTagErrorEnum["INPUT_LABEL"] = "INPUT_LABEL";
})(InputTagErrorEnum = exports.InputTagErrorEnum || (exports.InputTagErrorEnum = {}));
var ColTagErrorEnum;
(function (ColTagErrorEnum) {
    ColTagErrorEnum["COL_EMPTY"] = "COL_EMPTY";
})(ColTagErrorEnum = exports.ColTagErrorEnum || (exports.ColTagErrorEnum = {}));
var MenuErrorEnum;
(function (MenuErrorEnum) {
    MenuErrorEnum["LONG_MENU"] = "LONG_MENU";
    MenuErrorEnum["USING_SKIP_LINK"] = "USING_SKIP_LINK";
})(MenuErrorEnum = exports.MenuErrorEnum || (exports.MenuErrorEnum = {}));
var EnumContentScripMessages;
(function (EnumContentScripMessages) {
    EnumContentScripMessages[EnumContentScripMessages["GET_ALL_ERRORS"] = 0] = "GET_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["STEP_ERROR"] = 1] = "STEP_ERROR";
    EnumContentScripMessages[EnumContentScripMessages["SHOW_ALL_ERRORS"] = 2] = "SHOW_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["REMOVE_ALL_ERRORS"] = 3] = "REMOVE_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["SHOW_ERROR_IN_CONSOLE"] = 4] = "SHOW_ERROR_IN_CONSOLE";
    EnumContentScripMessages[EnumContentScripMessages["GET_AXE_ERRORS"] = 5] = "GET_AXE_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["SIMULATE_CB"] = 6] = "SIMULATE_CB";
    EnumContentScripMessages[EnumContentScripMessages["CLEAR_CB"] = 7] = "CLEAR_CB";
    EnumContentScripMessages[EnumContentScripMessages["GET_MX_WINDOW"] = 8] = "GET_MX_WINDOW";
})(EnumContentScripMessages = exports.EnumContentScripMessages || (exports.EnumContentScripMessages = {}));
var EnumStateTypes;
(function (EnumStateTypes) {
    EnumStateTypes["fetchAllError"] = "fetchAllError";
    EnumStateTypes["unMountAll"] = "unMountAll";
    EnumStateTypes["setStepTag"] = "setStepTag";
    EnumStateTypes["increaseStep"] = "increaseStep";
    EnumStateTypes["decreaseStep"] = "decreaseStep";
    EnumStateTypes["cantSeeErrors"] = "cantSeeErrors";
})(EnumStateTypes = exports.EnumStateTypes || (exports.EnumStateTypes = {}));
var ENUM_CBTestTypes;
(function (ENUM_CBTestTypes) {
    ENUM_CBTestTypes["achromatomaly"] = "achromatomaly";
    ENUM_CBTestTypes["achromatopsia"] = "achromatopsia";
    ENUM_CBTestTypes["deuteranomaly"] = "deuteranomaly";
    ENUM_CBTestTypes["deuteranopia"] = "deuteranopia";
    ENUM_CBTestTypes["protanomaly"] = "protanomaly";
    ENUM_CBTestTypes["protanopia"] = "protanopia";
    ENUM_CBTestTypes["tritanomaly"] = "tritanomaly";
    ENUM_CBTestTypes["tritanopia"] = "tritanopia";
})(ENUM_CBTestTypes = exports.ENUM_CBTestTypes || (exports.ENUM_CBTestTypes = {}));
var ENUM_Developer_View;
(function (ENUM_Developer_View) {
    ENUM_Developer_View[ENUM_Developer_View["ALL_ISSUES"] = 0] = "ALL_ISSUES";
    ENUM_Developer_View[ENUM_Developer_View["CLEAR_ALL_ISSUES"] = 1] = "CLEAR_ALL_ISSUES";
    ENUM_Developer_View[ENUM_Developer_View["CONSOLE"] = 2] = "CONSOLE";
    ENUM_Developer_View[ENUM_Developer_View["STEP"] = 3] = "STEP";
    ENUM_Developer_View[ENUM_Developer_View["CLOSE_STEP"] = 4] = "CLOSE_STEP";
})(ENUM_Developer_View = exports.ENUM_Developer_View || (exports.ENUM_Developer_View = {}));
var ENUM_VIEW_TYPE;
(function (ENUM_VIEW_TYPE) {
    ENUM_VIEW_TYPE[ENUM_VIEW_TYPE["POPUP"] = 0] = "POPUP";
    ENUM_VIEW_TYPE[ENUM_VIEW_TYPE["PANEL"] = 1] = "PANEL";
})(ENUM_VIEW_TYPE = exports.ENUM_VIEW_TYPE || (exports.ENUM_VIEW_TYPE = {}));


/***/ }),

/***/ "../factory/dist/classes/A_Tag.js":
/*!****************************************!*\
  !*** ../factory/dist/classes/A_Tag.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATagErrorList = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class ATagErrorList extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (!tag.title && !tag.innerText) {
                    if (tag.tabIndex >= 0) {
                        this._pushErrorToErrorList({
                            tag,
                            errorType: types_1.ErrorEnum.Error,
                            errorEnumToTarget: types_1.ATagErrorEnum.A_TAB_INDEX,
                            errorDescription: (0, helpers_1._descriptions)(types_1.ATagErrorEnum.A_TAB_INDEX)
                        });
                    }
                    if (tag.children.length) {
                        console.log(`tag.children`, tag.children);
                        // A tag has children
                        if (!tag.children[0].hasOwnProperty("ariaLabel")) {
                            this._pushErrorToErrorList({
                                tag,
                                errorType: types_1.ErrorEnum.Error,
                                errorEnumToTarget: types_1.ATagErrorEnum.A_TOOL,
                                errorDescription: (0, helpers_1._descriptions)(types_1.ATagErrorEnum.A_TOOL)
                            });
                        }
                    }
                }
                /**
                 * I don't this this is a Error
                 */
                if (!tag.href) {
                    this._pushErrorToErrorList({
                        tag,
                        errorType: types_1.ErrorEnum.Warning,
                        errorEnumToTarget: types_1.ATagErrorEnum.A_HREF,
                        errorDescription: (0, helpers_1._descriptions)(types_1.ATagErrorEnum.A_HREF)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.ATagErrorList = ATagErrorList;
//# sourceMappingURL=A_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/Button_Tag.js":
/*!*********************************************!*\
  !*** ../factory/dist/classes/Button_Tag.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Button_Tag extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (!tag.title && !tag.innerText) {
                    this._pushErrorToErrorList({
                        tag,
                        errorType: types_1.ErrorEnum.Error,
                        errorEnumToTarget: types_1.ButtonTagErrorEnum.BUTTON_TITLE,
                        errorDescription: (0, helpers_1._descriptions)(types_1.ButtonTagErrorEnum.BUTTON_TITLE)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.Button_Tag = Button_Tag;
//# sourceMappingURL=Button_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/Col_Tag.js":
/*!******************************************!*\
  !*** ../factory/dist/classes/Col_Tag.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Col_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Col_Tag extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
        // this._scanAllErrors(); // Get all errors on creation of Class
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.getElementByClassName();
        this.allTags = allTags;
        return allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (!tag.childElementCount) {
                    //   Empty Col
                    this._pushErrorToErrorList({
                        tag,
                        errorType: types_1.ErrorEnum.Error,
                        errorEnumToTarget: types_1.ColTagErrorEnum.COL_EMPTY,
                        errorDescription: (0, helpers_1._descriptions)(types_1.ColTagErrorEnum.COL_EMPTY)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.Col_Tag = Col_Tag;
//# sourceMappingURL=Col_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/DataView_MainContainer.js":
/*!*********************************************************!*\
  !*** ../factory/dist/classes/DataView_MainContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataView_MainContainer = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class DataView_MainContainer extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.getElementByClassName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (tag.children.length) {
                    if (!tag.children[0].classList.contains("mx-dataview") &&
                        !tag.children[0].classList.contains("mx-scrollcontainer")) {
                        this._pushErrorToErrorList({
                            tag,
                            errorType: types_1.ErrorEnum.Warning,
                            errorEnumToTarget: types_1.DataViewErrorEnum.BASE_DATA_VIEW,
                            errorDescription: (0, helpers_1._descriptions)(types_1.DataViewErrorEnum.BASE_DATA_VIEW)
                        });
                    }
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.DataView_MainContainer = DataView_MainContainer;
//# sourceMappingURL=DataView_MainContainer.js.map

/***/ }),

/***/ "../factory/dist/classes/ErrorWarning.js":
/*!***********************************************!*\
  !*** ../factory/dist/classes/ErrorWarning.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorWarning = void 0;
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class ErrorWarning {
    constructor(tag) {
        this.tag = tag;
        this.errorList = {};
        this.countedErrorList = [];
        this.allTags = [];
    }
    build() {
        this.errorList = {};
        this.countedErrorList = [];
        this.allTags = [];
    }
    getElementByTagName() {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.getElementsByTagName(this.tag);
        return allATags;
    }
    querySelectorAll() {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.querySelectorAll(this.tag);
        return allATags;
    }
    getElementByClassName() {
        this.build(); // Re-create error lists when Tag names are re-gotten
        const allATags = document.getElementsByClassName(this.tag);
        return allATags;
    }
    // Toggles On And Off the class Names to Show Errors/warnings
    _toggleClassName(allATags) {
        for (let index = 0; index < allATags.length; index++) {
            const { tag, errorType } = allATags[index];
            if (tag && tag.classList) {
                let found = false;
                tag.classList.forEach((className) => {
                    if (errorType == types_1.ErrorEnum.Error &&
                        className == "mx-bp-a11y-extension-error") {
                        return (found = true);
                    }
                    if (errorType == types_1.ErrorEnum.Warning &&
                        className == "mx-bp-a11y-extension-warning") {
                        return (found = true);
                    }
                });
                if (found) {
                    if (errorType == types_1.ErrorEnum.Error) {
                        tag.classList.remove("mx-bp-a11y-extension-error");
                    }
                    if (errorType == types_1.ErrorEnum.Warning) {
                        tag.classList.remove("mx-bp-a11y-extension-warning");
                    }
                }
                if (!found) {
                    if (errorType == types_1.ErrorEnum.Error) {
                        tag.classList.add("mx-bp-a11y-extension-error");
                    }
                    if (errorType == types_1.ErrorEnum.Warning) {
                        tag.classList.add("mx-bp-a11y-extension-warning");
                    }
                }
            }
        }
    }
    _stepThroughErrors({ list, step }) {
        if (step === 0) {
            this.removeAllClassNames();
        }
        if (list.length) {
            const prevError = list[step - 1];
            const nextError = list[step + 1];
            const selectedError = list[step];
            if (prevError && prevError.tag) {
                prevError.tag.classList.remove("mx-bp-a11y-extension-step");
            }
            if (nextError && nextError.tag) {
                nextError.tag.classList.remove("mx-bp-a11y-extension-step");
            }
            if (selectedError.tag) {
                selectedError.tag.classList.add("mx-bp-a11y-extension-step");
                selectedError.tag.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }
        }
    }
    /**
     * function to construct the internally used Error List and All errorTags
     * @param { {}: tag: HTMLElement, errorType: ErrorEnum, errorDesc: string, errorList: AllChecksReturn, errorEnumToTarget: Enum, allErrorTags: CountedErrorList[]}
     */
    _pushErrorToErrorList({ tag, errorType, errorEnumToTarget, errorDescription }) {
        this.countedErrorList.push({ tag, errorType });
        if (this.errorList[errorEnumToTarget]) {
            this.errorList[errorEnumToTarget].tags.push({ tag, errorType });
            this.errorList[errorEnumToTarget].errorCount++;
            this.errorList[errorEnumToTarget].errorDescription =
                errorDescription;
            // this.errorList[errorEnumToTarget].errorDesc =  _descriptions(this.errorList[errorEnumToTarget])
        }
        if (!this.errorList[errorEnumToTarget]) {
            this.errorList[errorEnumToTarget] = {
                errorEnumToTarget,
                errorDescription,
                errorType,
                errorCount: 1,
                tags: [{ tag, errorType }]
            };
        }
    }
    _rationalizeData({ errorList, passedEnum }) {
        const rationalizeErrorList = [];
        const countAllTagErrors = [];
        for (let item in passedEnum) {
            if (errorList[item]) {
                countAllTagErrors.push(errorList[item].errorCount);
                rationalizeErrorList.push(errorList[item]);
            }
        }
        const totalError = eval(countAllTagErrors.join("+"));
        return { errors: rationalizeErrorList, totalError };
    }
    // ********************
    // ALL PUBLIC CLASSES
    // ********************
    /**
     * Toggles on an Off Class names that will show the error in the dom
     */
    seeErrorsOnType(errorEnumToTarget) {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this.removeAllClassNames();
                    setTimeout(() => {
                        this._toggleClassName(this.errorList[errorEnumToTarget].tags);
                    }, 100);
                }
            }
            else {
                throw new Error("Enum Not in Error List");
            }
        }
    }
    /**
     * Toggles on an Off Class names that will show the error in the dom
     */
    seeAllErrors() {
        // We do this so that we don't have to return something from _scanAllErrors
        if (this.countedErrorList.length) {
            this._toggleClassName(this.countedErrorList);
        }
    }
    /**
     * Removes All class Names M11Y Adds to Dom
     */
    async removeAllClassNames() {
        const allStepAddedClassNames = document.getElementsByClassName("mx-bp-a11y-extension-step");
        await this.removeClassNameFromArray(allStepAddedClassNames, "mx-bp-a11y-extension-step");
        const allErrorAddedClassNames = document.getElementsByClassName("mx-bp-a11y-extension-error");
        await this.removeClassNameFromArray(allErrorAddedClassNames, "mx-bp-a11y-extension-error");
        const allWarningAddedClassNames = document.getElementsByClassName("mx-bp-a11y-extension-warning");
        this.removeClassNameFromArray(allWarningAddedClassNames, "mx-bp-a11y-extension-warning");
    }
    /**
     * Removes All Classnames from HTMLCollection
     *  @param collectionClass: HTMLCollectionOfElement
     *  @param className: string
     */
    async removeClassNameFromArray(collectionClass, className) {
        for (let index = 0; index < collectionClass.length; index++) {
            const element = collectionClass[index];
            setTimeout(() => {
                element.classList.remove(className);
            }, 0);
        }
    }
    /**
     * Log Out All Errors
     * @param step:number
     */
    logOutAllErrors({ errorEnumToTarget }) {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this.errorList[errorEnumToTarget].tags.map((tag, i) => {
                        console.log(`--------------🔥 Error - ${i + 1} 👩🏽‍🚒 --------------`);
                        console.log(tag.tag);
                    });
                }
            }
            else {
                throw new Error("Enum Not in Error List");
            }
        }
    }
    /**
     * Steps through every error one-by-one
     * @param step:number
     */
    stepThrough({ step, errorEnumToTarget }) {
        if (this.errorList) {
            if (this.errorList[errorEnumToTarget]) {
                if (this.errorList[errorEnumToTarget].tags.length) {
                    this._stepThroughErrors({
                        list: this.errorList[errorEnumToTarget].tags,
                        step
                    });
                }
            }
            else {
                throw new Error("Enum Not in Error List");
            }
        }
    }
    /**
     * Returns a Array of All Errors/warning associated with that Tag
     * @returns IReturnRationalizedData
     */
    getAllErrors() {
        if (this.errorList) {
            const { totalError, errors } = this._rationalizeData({
                errorList: this.errorList,
                passedEnum: (0, helpers_1._getCorrespondingEnum)(this.tag)
            });
            return { totalError, errors };
        }
        else {
            return { totalError: 0, errors: [] };
        }
    }
}
exports.ErrorWarning = ErrorWarning;
//# sourceMappingURL=ErrorWarning.js.map

/***/ }),

/***/ "../factory/dist/classes/H_Tag.js":
/*!****************************************!*\
  !*** ../factory/dist/classes/H_Tag.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class H_Tag extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        switch (this.tag) {
            case "h1":
                this.multipleH1();
                break;
            default:
                break;
        }
    }
    multipleH1() {
        if (this.allTags.length > 1) {
            for (let index = 0; index < this.allTags.length; index++) {
                const tag = this.allTags[index];
                if (tag) {
                    this._pushErrorToErrorList({
                        tag: tag,
                        errorType: types_1.ErrorEnum.Error,
                        errorEnumToTarget: types_1.HTagErrorEnum.ONE_H1,
                        errorDescription: (0, helpers_1._descriptions)(types_1.HTagErrorEnum.ONE_H1)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.H_Tag = H_Tag;
//# sourceMappingURL=H_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/Img_Tag.js":
/*!******************************************!*\
  !*** ../factory/dist/classes/Img_Tag.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Img_TagErrorList = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Img_TagErrorList extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (tag.alt) {
                    this._pushErrorToErrorList({
                        tag,
                        errorType: types_1.ErrorEnum.Error,
                        errorEnumToTarget: types_1.ImgTagErrorEnum.ALT_TEXT,
                        errorDescription: (0, helpers_1._descriptions)(types_1.ImgTagErrorEnum.ALT_TEXT)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.Img_TagErrorList = Img_TagErrorList;
//# sourceMappingURL=Img_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/Input_Tag.js":
/*!********************************************!*\
  !*** ../factory/dist/classes/Input_Tag.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Input_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Input_Tag extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        const allTags = super.getElementByTagName();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        switch (this.tag) {
            case "input":
                this.mustHaveLabel("Input");
                break;
            case "textarea":
                this.mustHaveLabel("Text area");
                break;
            default:
                break;
        }
    }
    mustHaveLabel(input) {
        var _a;
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                const hasNativeLabel = (_a = tag.labels) === null || _a === void 0 ? void 0 : _a.length;
                const hasAriaLabel = tag.ariaLabel;
                const tagType = tag.type;
                const tagHidden = tag.hidden;
                if (!hasAriaLabel &&
                    !hasNativeLabel &&
                    tagType !== "hidden" &&
                    !tagHidden) {
                    this._pushErrorToErrorList({
                        tag: tag,
                        errorType: types_1.ErrorEnum.Error,
                        errorEnumToTarget: types_1.InputTagErrorEnum.INPUT_LABEL,
                        errorDescription: (0, helpers_1._descriptions)(types_1.InputTagErrorEnum.INPUT_LABEL)
                    });
                }
            }
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.Input_Tag = Input_Tag;
//# sourceMappingURL=Input_Tag.js.map

/***/ }),

/***/ "../factory/dist/classes/Menu_Tag.js":
/*!*******************************************!*\
  !*** ../factory/dist/classes/Menu_Tag.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menu_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Menu_Tag extends ErrorWarning_1.ErrorWarning {
    /**
     * Class For All A Tag Errors - Extends ErrorWarning
     *
     * @param tag -String of the Tag Name to Find
     * @param autoStart - Auto run Checks Default true
     * @returns Instance of ErrorsClass {allAErrorTags, allTags,errorList}
     */
    constructor(tag) {
        super(tag);
        // this._scanAllErrors(); // Get all errors on creation of Class
    }
    /**
     * Function to get all elements in dom
     * Either use super.getElementByClassName or super.getElementByTagName
     */
    _getAllATags() {
        super.getElementByClassName;
        const allTags = super.querySelectorAll();
        this.allTags = allTags;
    }
    /**
     * Scans DOM for All a Tags And List Errors (Add Checks for Errors here)
     */
    _scanAllErrors() {
        const skip_link = document.getElementById("skip_link");
        if (skip_link) {
            this._pushErrorToErrorList({
                errorType: types_1.ErrorEnum.Success,
                errorEnumToTarget: types_1.MenuErrorEnum.USING_SKIP_LINK,
                errorDescription: (0, helpers_1._descriptions)(types_1.MenuErrorEnum.USING_SKIP_LINK)
            });
            return;
        }
        let menuLength = [];
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            menuLength.push(tag.childElementCount);
            if (tag) {
            }
        }
        const totalMenuLength = menuLength.reduce((a, b) => a + b, 0);
        if (totalMenuLength > 14) {
            this._pushErrorToErrorList({
                errorType: types_1.ErrorEnum.Error,
                errorEnumToTarget: types_1.MenuErrorEnum.LONG_MENU,
                errorDescription: (0, helpers_1._descriptions)(types_1.MenuErrorEnum.LONG_MENU)
            });
        }
    }
    getAllErrorsAndScan() {
        this._getAllATags();
        this._scanAllErrors();
        return this.getAllErrors();
    }
}
exports.Menu_Tag = Menu_Tag;
//# sourceMappingURL=Menu_Tag.js.map

/***/ }),

/***/ "../factory/dist/colourTests/CBFilter.js":
/*!***********************************************!*\
  !*** ../factory/dist/colourTests/CBFilter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CBFilter = void 0;
class CBFilter {
    constructor() {
        this.documentBody = this.getBodyTag();
        this.injectStyleIDs();
    }
    getBodyTag() {
        const documentBody = document.body;
        return documentBody;
    }
    injectStyleIDs() {
        const div = document.createElement("div");
        div.innerHTML = `<svg height="0">
      <filter id="protanopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".56667 .43333 0      0 0
              .55833 .44167 0      0 0
              0      .24167 .75833 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="protanomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".81667 .18333 0    0 0
              .33333 .66667 0    0 0
              0      .125   .875 0 0
              0      0      0    1 0" />
      </filter>
      
      <filter id="deuteranopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".625 .375 0  0 0
              .7   .3   0  0 0
              0    .3   .7 0 0
              0    0    0  1 0" />
      </filter>
      
      <filter id="deuteranomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".8     .2     0      0 0
              .25833 .74167 0      0 0
              0      .14167 .85833 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="tritanopiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".95 .5     0      0 0
              0   .43333 .56667 0 0
              0   .475   .525   0 0
              0   0      0      1 0" />
      </filter>
      
      <filter id="tritanomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".96667 .3333  0      0 0
              0      .73333 .26667 0 0
              0      .18333 .81667 0 0
              0      0      0      1 0" />
      </filter>
      
      <filter id="achromatopsiaSVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".299 .587 .114 0 0
              .299 .587 .114 0 0
              .299 .587 .114 0 0
              0    0    0    1 0" />
      </filter>
      
      <filter id="achromatomalySVG_INJECTED_FILTER">
        <feColorMatrix
          type="matrix"
          values=".618 .32  .62  0 0
              .163 .775 .62  0 0
              .163 .320 .516 0 0
              0    0    0    1 0" />
      </filter>
      </svg>
      `;
        document.body.appendChild(div);
    }
    applyFilter(typeOfCBTest) {
        const uri = `url(#${typeOfCBTest}SVG_INJECTED_FILTER)`;
        this.documentBody.style.filter = uri;
    }
    clearFilter() {
        this.documentBody.style.filter = "";
    }
}
exports.CBFilter = CBFilter;
//# sourceMappingURL=CBFilter.js.map

/***/ }),

/***/ "../factory/dist/index.js":
/*!********************************!*\
  !*** ../factory/dist/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/// <reference types="chrome"/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENUM_CBTestTypes = exports.cbTests = exports.rationalizeTagInformation = exports.injectCBTest = exports.H_Tag = exports.Col_Tag = exports.Menu_Tag = exports.ATagErrorList = exports.Input_Tag = exports.CBFilter = exports.Button_Tag = exports.Img_TagErrorList = exports.DataView_MainContainer = void 0;
/**
 * Classes
 */
var DataView_MainContainer_1 = __webpack_require__(/*! ./classes/DataView_MainContainer */ "../factory/dist/classes/DataView_MainContainer.js");
Object.defineProperty(exports, "DataView_MainContainer", ({ enumerable: true, get: function () { return DataView_MainContainer_1.DataView_MainContainer; } }));
var Img_Tag_1 = __webpack_require__(/*! ./classes/Img_Tag */ "../factory/dist/classes/Img_Tag.js");
Object.defineProperty(exports, "Img_TagErrorList", ({ enumerable: true, get: function () { return Img_Tag_1.Img_TagErrorList; } }));
var Button_Tag_1 = __webpack_require__(/*! ./classes/Button_Tag */ "../factory/dist/classes/Button_Tag.js");
Object.defineProperty(exports, "Button_Tag", ({ enumerable: true, get: function () { return Button_Tag_1.Button_Tag; } }));
var CBFilter_1 = __webpack_require__(/*! ./colourTests/CBFilter */ "../factory/dist/colourTests/CBFilter.js");
Object.defineProperty(exports, "CBFilter", ({ enumerable: true, get: function () { return CBFilter_1.CBFilter; } }));
var Input_Tag_1 = __webpack_require__(/*! ./classes/Input_Tag */ "../factory/dist/classes/Input_Tag.js");
Object.defineProperty(exports, "Input_Tag", ({ enumerable: true, get: function () { return Input_Tag_1.Input_Tag; } }));
var A_Tag_1 = __webpack_require__(/*! ./classes/A_Tag */ "../factory/dist/classes/A_Tag.js");
Object.defineProperty(exports, "ATagErrorList", ({ enumerable: true, get: function () { return A_Tag_1.ATagErrorList; } }));
var Menu_Tag_1 = __webpack_require__(/*! ./classes/Menu_Tag */ "../factory/dist/classes/Menu_Tag.js");
Object.defineProperty(exports, "Menu_Tag", ({ enumerable: true, get: function () { return Menu_Tag_1.Menu_Tag; } }));
var Col_Tag_1 = __webpack_require__(/*! ./classes/Col_Tag */ "../factory/dist/classes/Col_Tag.js");
Object.defineProperty(exports, "Col_Tag", ({ enumerable: true, get: function () { return Col_Tag_1.Col_Tag; } }));
var H_Tag_1 = __webpack_require__(/*! ./classes/H_Tag */ "../factory/dist/classes/H_Tag.js");
Object.defineProperty(exports, "H_Tag", ({ enumerable: true, get: function () { return H_Tag_1.H_Tag; } }));
var injectHTML_1 = __webpack_require__(/*! ./utils/injectHTML */ "../factory/dist/utils/injectHTML.js");
Object.defineProperty(exports, "injectCBTest", ({ enumerable: true, get: function () { return injectHTML_1.injectCBTest; } }));
var helpers_1 = __webpack_require__(/*! ./utils/helpers */ "../factory/dist/utils/helpers.js");
Object.defineProperty(exports, "rationalizeTagInformation", ({ enumerable: true, get: function () { return helpers_1.rationalizeTagInformation; } }));
Object.defineProperty(exports, "cbTests", ({ enumerable: true, get: function () { return helpers_1.cbTests; } }));
var types_1 = __webpack_require__(/*! ./utils/types */ "../factory/dist/utils/types.js");
Object.defineProperty(exports, "ENUM_CBTestTypes", ({ enumerable: true, get: function () { return types_1.ENUM_CBTestTypes; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../factory/dist/utils/helpers.js":
/*!****************************************!*\
  !*** ../factory/dist/utils/helpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cbTests = exports._descriptions = exports.rationalizeTagInformation = exports._getCorrespondingEnum = exports.removeDuplicates = exports._compareCount = exports._compareErrorLength = void 0;
const types_1 = __webpack_require__(/*! ./types */ "../factory/dist/utils/types.js");
const _compareErrorLength = (a, b) => {
    if (a.errors.length < b.errors.length) {
        return 1;
    }
    if (a.errors.length > b.errors.length) {
        return -1;
    }
    return 0;
};
exports._compareErrorLength = _compareErrorLength;
const _compareCount = (a, b) => {
    if (a.count < b.count) {
        return 1;
    }
    if (a.count > b.count) {
        return -1;
    }
    return 0;
};
exports._compareCount = _compareCount;
const removeDuplicates = (errorList) => {
    const uniq = errorList.filter((thing, index, self) => index === self.findIndex((t) => t.message === thing.message));
    return uniq;
};
exports.removeDuplicates = removeDuplicates;
const _getCorrespondingEnum = (tag) => {
    switch (tag) {
        case "a":
            return types_1.ATagErrorEnum;
        case "button":
            return types_1.ButtonTagErrorEnum;
        case "img":
            return types_1.ImgTagErrorEnum;
        case "col":
            return types_1.ColTagErrorEnum;
        case "h1":
            return types_1.HTagErrorEnum;
        case "h2":
            return types_1.HTagErrorEnum;
        case "h3":
            return types_1.HTagErrorEnum;
        case "h4":
            return types_1.HTagErrorEnum;
        case "h5":
            return types_1.HTagErrorEnum;
        case "h6":
            return types_1.HTagErrorEnum;
        case "input":
            return types_1.InputTagErrorEnum;
        case "textarea":
            return types_1.InputTagErrorEnum;
        case '[role="menu"]':
            return types_1.MenuErrorEnum;
        case "mx-placeholder":
            return types_1.DataViewErrorEnum;
        default:
            break;
    }
};
exports._getCorrespondingEnum = _getCorrespondingEnum;
const rationalizeTagInformation = (tag) => {
    switch (tag) {
        case "a":
            return {
                mendixName: "Links",
                showButtons: true
            };
        case "button":
            return {
                mendixName: "Buttons",
                showButtons: true
            };
        case "img":
            return {
                mendixName: "Image",
                showButtons: true
            };
        case "col":
            return {
                mendixName: "Layout Grids",
                showButtons: true
            };
        case "h1":
            return {
                mendixName: "Page Title / Text Render Mode h1",
                showButtons: true
            };
        case "input":
            return {
                mendixName: "Text Box",
                showButtons: true
            };
        case "textarea":
            return {
                mendixName: "Text Area",
                showButtons: true
            };
        case '[role="menu"]':
            return {
                mendixName: "Top- & Side- Menu",
                showButtons: false
            };
        case "mx-placeholder":
            return {
                mendixName: "Dataview/Layoutgrid",
                showButtons: false
            };
        default:
            return {
                mendixName: "⚠️ No Corresponding Tag found",
                showButtons: false
            };
    }
};
exports.rationalizeTagInformation = rationalizeTagInformation;
const _descriptions = (r) => {
    switch (r) {
        case types_1.ATagErrorEnum.A_HREF:
            return {
                mendix: "All A tags must have HREF's",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ATagErrorEnum.A_TAB_INDEX:
            return {
                mendix: "Add Tooltips to Buttons/Links without captions. Usually buttons/links used for icons only",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ATagErrorEnum.A_TOOL:
            return {
                mendix: "A Tags without titles must have Aria Tags on itself or its first child element",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ButtonTagErrorEnum.BUTTON_TITLE:
            return {
                mendix: "If a button has no caption you must add a tooltip. Usually this error usually occurs when buttons/links have icons only",
                technical: "`<button>` tags are used in Menu items or buttons set to display as links"
            };
        case types_1.ColTagErrorEnum.COL_EMPTY:
            return {
                mendix: "ColTagErrorEnum.COL_EMPTY",
                technical: "`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"
            };
        case types_1.DataViewErrorEnum.BASE_DATA_VIEW:
            return {
                mendix: "Consider using a data view as the base for you page",
                technical: "Using a dataview as base for a page is considered pest practice, you can then place layout grids inside of that."
            };
        case types_1.HTagErrorEnum.ONE_H1:
            return {
                mendix: "You should only ever have one Page Title or Text set to display as heading 1 on the page",
                technical: "`<h1>` tags and Page titles are usually set as h1 to show describe what is on this set page. Heading tags are used for semantic html and not font size. Read More [here](https://www.w3.org/WAI/tutorials/page-structure/headings/)"
            };
        case types_1.ImgTagErrorEnum.ALT_TEXT:
            return {
                mendix: "An image must have an alternative text, This Alternative text must describe the photo provided",
                technical: "`<img>` tags are used to display Images in HTML, they must have alt tags for A11y and slow internet connections. Read More [here](https://www.w3.org/WAI/tutorials/images/)"
            };
        case types_1.InputTagErrorEnum.INPUT_LABEL:
            return {
                mendix: "Input/Textarea must have a Label. In your textbox/textarea properties select label to true",
                technical: "`<input>/<textarea>` Input used to submit short text  Read More [here](https://www.w3.org/WAI/tutorials/forms/labels/)"
            };
        case types_1.MenuErrorEnum.LONG_MENU:
            return {
                mendix: "Your menu seems very long consider using skip links. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)",
                technical: "`[role=menu]` is used to Identify Side- & Top-bar menu in Mendix for Accessability you should consider using [this](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget) widget"
            };
        case types_1.MenuErrorEnum.USING_SKIP_LINK:
            return {
                mendix: "🥳 You are using the Skip Link Widget",
                technical: "Your menu is very long. There are more than 14 items and subitems. See [here](https://mendixlabs.github.io/app-services-components/#/web-widgets/skip-link-widget)"
            };
        default:
            return {
                mendix: "⚠️ No Corresponding Tag found",
                technical: "⚠️ No Corresponding Tag found"
            };
    }
};
exports._descriptions = _descriptions;
exports.cbTests = [
    {
        name: "Achromatomaly",
        type: types_1.ENUM_CBTestTypes.achromatomaly,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | almost no color"
    },
    {
        name: "Achromatopsia",
        type: types_1.ENUM_CBTestTypes.achromatopsia,
        group: "Monochromat",
        desc: "1 good cone, 2 blind/bad | no color"
    },
    {
        name: "Deuteranomaly",
        type: types_1.ENUM_CBTestTypes.deuteranomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low green"
    },
    {
        name: "Deuteranopia",
        type: types_1.ENUM_CBTestTypes.deuteranopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no green"
    },
    {
        name: "Protanomaly",
        type: types_1.ENUM_CBTestTypes.protanomaly,
        group: " Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low red"
    },
    {
        name: "Protanopia",
        type: types_1.ENUM_CBTestTypes.protanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no red"
    },
    {
        name: "Tritanomaly",
        type: types_1.ENUM_CBTestTypes.tritanomaly,
        group: "Anomalous Trichromat",
        desc: "2 good cones, 1 bad | low blue"
    },
    {
        name: "Tritanopia",
        type: types_1.ENUM_CBTestTypes.tritanopia,
        group: "Dichromat",
        desc: "2 good cones, 1 blind | no blue"
    }
];
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../factory/dist/utils/injectHTML.js":
/*!*******************************************!*\
  !*** ../factory/dist/utils/injectHTML.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * https://www.ashleysheridan.co.uk/blog/Testing+Colour+Blindness+Effects+Online+with+SVG+Filters
 * deuteranomaly
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectCBTest = void 0;
function injectCBTest() {
    const div = document.createElement("div");
    div.innerHTML = `<svg height="0">
<filter id="protanopiaSVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".56667 .43333 0      0 0
        .55833 .44167 0      0 0
        0      .24167 .75833 0 0
        0      0      0      1 0" />
</filter>

<filter id="protanomalySVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".81667 .18333 0    0 0
        .33333 .66667 0    0 0
        0      .125   .875 0 0
        0      0      0    1 0" />
</filter>

<filter id="deuteranopiaSVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".625 .375 0  0 0
        .7   .3   0  0 0
        0    .3   .7 0 0
        0    0    0  1 0" />
</filter>

<filter id="deuteranomalySVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".8     .2     0      0 0
        .25833 .74167 0      0 0
        0      .14167 .85833 0 0
        0      0      0      1 0" />
</filter>

<filter id="tritanopiaSVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".95 .5     0      0 0
        0   .43333 .56667 0 0
        0   .475   .525   0 0
        0   0      0      1 0" />
</filter>

<filter id="tritanomalySVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".96667 .3333  0      0 0
        0      .73333 .26667 0 0
        0      .18333 .81667 0 0
        0      0      0      1 0" />
</filter>

<filter id="achromatopsiaSVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".299 .587 .114 0 0
        .299 .587 .114 0 0
        .299 .587 .114 0 0
        0    0    0    1 0" />
</filter>

<filter id="achromatomalySVG_INJECTED_FILTER">
  <feColorMatrix
    type="matrix"
    values=".618 .32  .62  0 0
        .163 .775 .62  0 0
        .163 .320 .516 0 0
        0    0    0    1 0" />
</filter>
</svg>
`;
    document.body.appendChild(div);
}
exports.injectCBTest = injectCBTest;
//# sourceMappingURL=injectHTML.js.map

/***/ }),

/***/ "../factory/dist/utils/types.js":
/*!**************************************!*\
  !*** ../factory/dist/utils/types.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENUM_CBTestTypes = exports.EnumStateTypes = exports.EnumContentScripMessages = exports.MenuErrorEnum = exports.ColTagErrorEnum = exports.InputTagErrorEnum = exports.HTagErrorEnum = exports.DataViewErrorEnum = exports.ImgTagErrorEnum = exports.ButtonTagErrorEnum = exports.ATagErrorEnum = exports.ErrorEnum = void 0;
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["Error"] = 0] = "Error";
    ErrorEnum[ErrorEnum["Warning"] = 1] = "Warning";
    ErrorEnum[ErrorEnum["Success"] = 2] = "Success";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
var ATagErrorEnum;
(function (ATagErrorEnum) {
    ATagErrorEnum["A_TOOL"] = "A_TOOL";
    ATagErrorEnum["A_HREF"] = "A_HREF";
    ATagErrorEnum["A_TAB_INDEX"] = "A_TAB_INDEX";
})(ATagErrorEnum = exports.ATagErrorEnum || (exports.ATagErrorEnum = {}));
var ButtonTagErrorEnum;
(function (ButtonTagErrorEnum) {
    ButtonTagErrorEnum["BUTTON_TITLE"] = "BUTTON_TITLE";
})(ButtonTagErrorEnum = exports.ButtonTagErrorEnum || (exports.ButtonTagErrorEnum = {}));
var ImgTagErrorEnum;
(function (ImgTagErrorEnum) {
    ImgTagErrorEnum["ALT_TEXT"] = "ALT_TEXT";
})(ImgTagErrorEnum = exports.ImgTagErrorEnum || (exports.ImgTagErrorEnum = {}));
var DataViewErrorEnum;
(function (DataViewErrorEnum) {
    DataViewErrorEnum["BASE_DATA_VIEW"] = "BASE_DATA_VIEW";
})(DataViewErrorEnum = exports.DataViewErrorEnum || (exports.DataViewErrorEnum = {}));
var HTagErrorEnum;
(function (HTagErrorEnum) {
    HTagErrorEnum["ONE_H1"] = "ONE_H1";
})(HTagErrorEnum = exports.HTagErrorEnum || (exports.HTagErrorEnum = {}));
var InputTagErrorEnum;
(function (InputTagErrorEnum) {
    InputTagErrorEnum["INPUT_LABEL"] = "INPUT_LABEL";
})(InputTagErrorEnum = exports.InputTagErrorEnum || (exports.InputTagErrorEnum = {}));
var ColTagErrorEnum;
(function (ColTagErrorEnum) {
    ColTagErrorEnum["COL_EMPTY"] = "COL_EMPTY";
})(ColTagErrorEnum = exports.ColTagErrorEnum || (exports.ColTagErrorEnum = {}));
var MenuErrorEnum;
(function (MenuErrorEnum) {
    MenuErrorEnum["LONG_MENU"] = "LONG_MENU";
    MenuErrorEnum["USING_SKIP_LINK"] = "USING_SKIP_LINK";
})(MenuErrorEnum = exports.MenuErrorEnum || (exports.MenuErrorEnum = {}));
var EnumContentScripMessages;
(function (EnumContentScripMessages) {
    EnumContentScripMessages[EnumContentScripMessages["GET_ALL_ERRORS"] = 0] = "GET_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["STEP_ERROR"] = 1] = "STEP_ERROR";
    EnumContentScripMessages[EnumContentScripMessages["SHOW_ALL_ERRORS"] = 2] = "SHOW_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["REMOVE_ALL_ERRORS"] = 3] = "REMOVE_ALL_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["SHOW_ERROR_IN_CONSOLE"] = 4] = "SHOW_ERROR_IN_CONSOLE";
    EnumContentScripMessages[EnumContentScripMessages["GET_AXE_ERRORS"] = 5] = "GET_AXE_ERRORS";
    EnumContentScripMessages[EnumContentScripMessages["SIMULATE_CB"] = 6] = "SIMULATE_CB";
})(EnumContentScripMessages = exports.EnumContentScripMessages || (exports.EnumContentScripMessages = {}));
var EnumStateTypes;
(function (EnumStateTypes) {
    EnumStateTypes["fetchAllError"] = "fetchAllError";
    EnumStateTypes["unMountAll"] = "unMountAll";
    EnumStateTypes["setStepTag"] = "setStepTag";
    EnumStateTypes["increaseStep"] = "increaseStep";
    EnumStateTypes["decreaseStep"] = "decreaseStep";
    EnumStateTypes["cantSeeErrors"] = "cantSeeErrors";
})(EnumStateTypes = exports.EnumStateTypes || (exports.EnumStateTypes = {}));
var ENUM_CBTestTypes;
(function (ENUM_CBTestTypes) {
    ENUM_CBTestTypes["achromatomaly"] = "achromatomaly";
    ENUM_CBTestTypes["achromatopsia"] = "achromatopsia";
    ENUM_CBTestTypes["deuteranomaly"] = "deuteranomaly";
    ENUM_CBTestTypes["deuteranopia"] = "deuteranopia";
    ENUM_CBTestTypes["protanomaly"] = "protanomaly";
    ENUM_CBTestTypes["protanopia"] = "protanopia";
    ENUM_CBTestTypes["tritanomaly"] = "tritanomaly";
    ENUM_CBTestTypes["tritanopia"] = "tritanopia";
})(ENUM_CBTestTypes = exports.ENUM_CBTestTypes || (exports.ENUM_CBTestTypes = {}));
//# sourceMappingURL=types.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_m11y_extension"] = self["webpackChunk_m11y_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map