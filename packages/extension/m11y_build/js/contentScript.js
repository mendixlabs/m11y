/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/content_script/errorsInConsole.ts":
/*!*******************************************************!*\
  !*** ./src/scripts/content_script/errorsInConsole.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logAllErrorsInConsole": () => (/* binding */ logAllErrorsInConsole)
/* harmony export */ });
const logAllErrorsInConsole = (tag, errorToView, allCurrentClasses) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Row_Class,
    Col_Class,
    Input_Class,
    Button_Class,
    TextArea_Class
  } = allCurrentClasses;

  switch (tag) {
    case 'a':
      return A_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'row':
      return Row_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'button':
      return Button_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'img':
      return Img_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'col':
      return Col_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'h1':
      return H_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'input':
      return Input_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    case 'textarea':
      return TextArea_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget
      });

    default:
      break;
  }
};

/***/ }),

/***/ "./src/scripts/content_script/getAllErrors.ts":
/*!****************************************************!*\
  !*** ./src/scripts/content_script/getAllErrors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllErrors": () => (/* binding */ getAllErrors)
/* harmony export */ });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.ts");

const getAllErrors = ({
  allCurrentClasses
}) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Col_Class,
    Row_Class,
    Menu_Class,
    Input_Class,
    Button_Class,
    TextArea_Class,
    DataView_Class
  } = allCurrentClasses;
  const a_Errors = A_Class?.getAllErrorsAndScan();
  const h_Errors = H_Class?.getAllErrorsAndScan();
  const row_Errors = Row_Class?.getAllErrorsAndScan();
  const img_Errors = Img_Class?.getAllErrorsAndScan();
  const col_Errors = Col_Class?.getAllErrorsAndScan();
  const input_Errors = Input_Class?.getAllErrorsAndScan();
  const button_Errors = Button_Class?.getAllErrorsAndScan();
  const menuClass_Errors = Menu_Class?.getAllErrorsAndScan();
  const textArea_Errors = TextArea_Class?.getAllErrorsAndScan();
  const dataView_Errors = DataView_Class?.getAllErrorsAndScan();
  const response = [{
    tag: H_Class?.tag,
    errors: h_Errors?.errors,
    count: h_Errors?.totalError
  }, {
    tag: A_Class?.tag,
    errors: a_Errors?.errors,
    count: a_Errors?.totalError
  }, {
    tag: Row_Class?.tag,
    errors: row_Errors?.errors,
    count: row_Errors?.totalError
  }, {
    tag: Img_Class?.tag,
    errors: img_Errors?.errors,
    count: img_Errors?.totalError
  }, {
    tag: Col_Class?.tag,
    errors: col_Errors?.errors,
    count: col_Errors?.totalError
  }, {
    tag: Input_Class?.tag,
    errors: input_Errors?.errors,
    count: input_Errors?.totalError
  }, {
    tag: Button_Class?.tag,
    errors: button_Errors?.errors,
    count: button_Errors?.totalError
  }, {
    tag: Menu_Class?.tag,
    errors: menuClass_Errors?.errors,
    count: menuClass_Errors?.totalError
  }, {
    tag: TextArea_Class?.tag,
    errors: textArea_Errors?.errors,
    count: textArea_Errors?.totalError
  }, {
    tag: DataView_Class?.tag,
    errors: dataView_Errors?.errors,
    count: dataView_Errors?.totalError
  }];
  const sortListEmptyAtBottom = response.sort(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__._compareErrorLength);
  const sortListMostErrorsAtTop = sortListEmptyAtBottom.sort(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__._compareCount);
  return sortListMostErrorsAtTop;
};

/***/ }),

/***/ "./src/scripts/content_script/navigateThroughErrors.ts":
/*!*************************************************************!*\
  !*** ./src/scripts/content_script/navigateThroughErrors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigateThroughErrors": () => (/* binding */ navigateThroughErrors)
/* harmony export */ });
const navigateThroughErrors = (tag, errorToView, step, allCurrentClasses) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Row_Class,
    Col_Class,
    Input_Class,
    Button_Class,
    TextArea_Class
  } = allCurrentClasses;

  switch (tag) {
    case 'a':
      return A_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'button':
      return Button_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'img':
      return Img_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'col':
      return Col_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'row':
      return Row_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'h1':
      return H_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'input':
      return Input_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    case 'textarea':
      return TextArea_Class?.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step
      });

    default:
      break;
  }
};

/***/ }),

/***/ "./src/scripts/content_script/page-context.ts":
/*!****************************************************!*\
  !*** ./src/scripts/content_script/page-context.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runInPageContext": () => (/* binding */ runInPageContext)
/* harmony export */ });
// @ts-nocheck

/**
 * Runs a function in the page context by serializing it to a string and injecting it to the page
 * @param {(function|Object)} func - a function to serialize and run in the page context, or an arguments object
 * @param {function} func.func - a function to serialize and run in the page context
 * @param {Array} [func.args] - arguments array to be passed to `func`
 * @param {Document} [func.doc] - alternative `document` to inject the serialized function
 * @param {number} [func.timeout] - optional timeout (milliseconds)
 * @param {...any} [args] - arguments array to be passed to `func`
 * @returns {Promise} a promise that will be resolved with the return value of the serialized function
 */
async function runInPageContext(func, ...args) {
  const params = Object(func);
  const {
    doc = document,
    timeout
  } = params;

  if (typeof func !== 'function') {
    func = params.func;
    args = params.args;
  } // test that we are running with the allow-scripts permission


  try {
    window.sessionStorage;
  } catch (ignore) {
    return null;
  } // returned value container


  const resultMessageId = parseInt('' + Math.floor(Math.random() * 100 + 1) + new Date().getTime()); // prepare script container

  let scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'application/javascript');
  const code = `
        (
            async function () {
                    const response = {
                        id: ${resultMessageId}
                    };
                    try {
                        response.result = JSON.stringify(await (${func})(...${JSON.stringify(args || [])})); // run script
                    } catch(err) {
                        response.error = JSON.stringify(err);
                    }
            
                    window.postMessage(response, '*');
            }
        )();
    `; // inject the script

  scriptElm.textContent = code; // run the script

  doc.documentElement.appendChild(scriptElm); // clean up script element

  scriptElm.remove(); // create a "flat" promise

  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  }); // reject on timeout

  if (timeout !== undefined) {
    const timerId = setTimeout(() => {
      onResult({
        data: {
          id: resultMessageId,
          error: 'Script timeout'
        }
      });
    }, timeout); // clear the timeout handler

    promise.finally(() => timerId !== null ? clearTimeout(timerId) : null);
  } // resolve on result


  function onResult(event) {
    const data = Object(event.data);

    if (data.id === resultMessageId) {
      window.removeEventListener('message', onResult);

      if (data.error !== undefined) {
        return reject(JSON.parse(data.error));
      }

      return resolve(data.result !== undefined ? JSON.parse(data.result) : undefined);
    }
  }

  window.addEventListener('message', onResult);
  return promise;
}

/***/ }),

/***/ "./src/scripts/content_script/viewAllErrors.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content_script/viewAllErrors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewAError": () => (/* binding */ viewAError)
/* harmony export */ });
const viewAError = (tag, errorToView, allCurrentClasses) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Row_Class,
    Col_Class,
    Menu_Class,
    Input_Class,
    Button_Class,
    TextArea_Class
  } = allCurrentClasses;

  switch (tag) {
    case 'a':
      return A_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'row':
      return Row_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'button':
      return Button_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'img':
      return Img_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'col':
      return Col_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'h1':
      return H_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'input':
      return Input_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case 'textarea':
      return TextArea_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    case '[role="menu"]':
      return Menu_Class?.seeErrorsOnType(errorToView?.errorEnumToTarget);

    default:
      break;
  }
};

/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_compareCount": () => (/* binding */ _compareCount),
/* harmony export */   "_compareErrorLength": () => (/* binding */ _compareErrorLength),
/* harmony export */   "_getCorrespondingEnum": () => (/* binding */ _getCorrespondingEnum),
/* harmony export */   "cbTests": () => (/* binding */ cbTests),
/* harmony export */   "removeDuplicates": () => (/* binding */ removeDuplicates)
/* harmony export */ });
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/types */ "./src/utils/types.ts");

const _compareErrorLength = (a, b) => {
  if (a.errors?.length < b.errors?.length) {
    return 1;
  }

  if (a.errors?.length > b.errors?.length) {
    return -1;
  }

  return 0;
};
const _compareCount = (a, b) => {
  if (a.count < b.count) {
    return 1;
  }

  if (a.count > b.count) {
    return -1;
  }

  return 0;
};
const removeDuplicates = errorList => {
  const uniq = errorList.filter((thing, index, self) => index === self.findIndex(t => t.message === thing.message));
  return uniq;
};
const _getCorrespondingEnum = tag => {
  switch (tag) {
    case 'a':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.ATagErrorEnum;

    case 'button':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.ButtonTagErrorEnum;

    case 'img':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.ImgTagErrorEnum;

    case 'col':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.ColTagErrorEnum;

    case 'h1':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'h2':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'h3':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'h4':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'h5':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'h6':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.HTagErrorEnum;

    case 'input':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.InputTagErrorEnum;

    case 'textarea':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.InputTagErrorEnum;

    case '[role="menu"]':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.MenuErrorEnum;

    case 'mx-placeholder':
      return _utils_types__WEBPACK_IMPORTED_MODULE_0__.DataViewErrorEnum;

    default:
      break;
  }
};
const cbTests = [{
  name: 'Achromatomaly',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.achromatomaly,
  group: 'Monochromat',
  desc: '1 good cone, 2 blind/bad | almost no color'
}, {
  name: 'Achromatopsia',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.achromatopsia,
  group: 'Monochromat',
  desc: '1 good cone, 2 blind/bad | no color'
}, {
  name: 'Deuteranomaly',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.deuteranomaly,
  group: 'Anomalous Trichromat',
  desc: '2 good cones, 1 bad | low green'
}, {
  name: 'Deuteranopia',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.deuteranopia,
  group: 'Dichromat',
  desc: '2 good cones, 1 blind | no green'
}, {
  name: 'Protanomaly',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.protanomaly,
  group: ' Anomalous Trichromat',
  desc: '2 good cones, 1 bad | low red'
}, {
  name: 'Protanopia',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.protanopia,
  group: 'Dichromat',
  desc: '2 good cones, 1 blind | no red'
}, {
  name: 'Tritanomaly',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.tritanomaly,
  group: 'Anomalous Trichromat',
  desc: '2 good cones, 1 bad | low blue'
}, {
  name: 'Tritanopia',
  type: _utils_types__WEBPACK_IMPORTED_MODULE_0__.ENUM_CBTestTypes.tritanopia,
  group: 'Dichromat',
  desc: '2 good cones, 1 blind | no blue'
}];

/***/ }),

/***/ "./src/utils/types.ts":
/*!****************************!*\
  !*** ./src/utils/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATagErrorEnum": () => (/* binding */ ATagErrorEnum),
/* harmony export */   "ButtonTagErrorEnum": () => (/* binding */ ButtonTagErrorEnum),
/* harmony export */   "ColTagErrorEnum": () => (/* binding */ ColTagErrorEnum),
/* harmony export */   "DataViewErrorEnum": () => (/* binding */ DataViewErrorEnum),
/* harmony export */   "ENUM_CBTestTypes": () => (/* binding */ ENUM_CBTestTypes),
/* harmony export */   "ENUM_Developer_View": () => (/* binding */ ENUM_Developer_View),
/* harmony export */   "ENUM_VIEW_TYPE": () => (/* binding */ ENUM_VIEW_TYPE),
/* harmony export */   "EnumContentScripMessages": () => (/* binding */ EnumContentScripMessages),
/* harmony export */   "EnumStateTypes": () => (/* binding */ EnumStateTypes),
/* harmony export */   "ErrorEnum": () => (/* binding */ ErrorEnum),
/* harmony export */   "HTagErrorEnum": () => (/* binding */ HTagErrorEnum),
/* harmony export */   "ImgTagErrorEnum": () => (/* binding */ ImgTagErrorEnum),
/* harmony export */   "InputTagErrorEnum": () => (/* binding */ InputTagErrorEnum),
/* harmony export */   "MenuErrorEnum": () => (/* binding */ MenuErrorEnum)
/* harmony export */ });
let ErrorEnum;

(function (ErrorEnum) {
  ErrorEnum[ErrorEnum["Error"] = 0] = "Error";
  ErrorEnum[ErrorEnum["Warning"] = 1] = "Warning";
  ErrorEnum[ErrorEnum["Success"] = 2] = "Success";
})(ErrorEnum || (ErrorEnum = {}));

let ATagErrorEnum;

(function (ATagErrorEnum) {
  ATagErrorEnum["A_TOOL"] = "A_TOOL";
  ATagErrorEnum["A_HREF"] = "A_HREF";
  ATagErrorEnum["A_TAB_INDEX"] = "A_TAB_INDEX";
})(ATagErrorEnum || (ATagErrorEnum = {}));

let ButtonTagErrorEnum;

(function (ButtonTagErrorEnum) {
  ButtonTagErrorEnum["BUTTON_TITLE"] = "BUTTON_TITLE";
})(ButtonTagErrorEnum || (ButtonTagErrorEnum = {}));

let ImgTagErrorEnum;

(function (ImgTagErrorEnum) {
  ImgTagErrorEnum["ALT_TEXT"] = "ALT_TEXT";
})(ImgTagErrorEnum || (ImgTagErrorEnum = {}));

let DataViewErrorEnum;

(function (DataViewErrorEnum) {
  DataViewErrorEnum["BASE_DATA_VIEW"] = "BASE_DATA_VIEW";
})(DataViewErrorEnum || (DataViewErrorEnum = {}));

let HTagErrorEnum;

(function (HTagErrorEnum) {
  HTagErrorEnum["ONE_H1"] = "ONE_H1";
})(HTagErrorEnum || (HTagErrorEnum = {}));

let InputTagErrorEnum;

(function (InputTagErrorEnum) {
  InputTagErrorEnum["INPUT_LABEL"] = "INPUT_LABEL";
})(InputTagErrorEnum || (InputTagErrorEnum = {}));

let ColTagErrorEnum;

(function (ColTagErrorEnum) {
  ColTagErrorEnum["COL_EMPTY"] = "COL_EMPTY";
})(ColTagErrorEnum || (ColTagErrorEnum = {}));

let MenuErrorEnum;

(function (MenuErrorEnum) {
  MenuErrorEnum["LONG_MENU"] = "LONG_MENU";
  MenuErrorEnum["USING_SKIP_LINK"] = "USING_SKIP_LINK";
})(MenuErrorEnum || (MenuErrorEnum = {}));

let EnumContentScripMessages;

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
})(EnumContentScripMessages || (EnumContentScripMessages = {}));

let EnumStateTypes;

(function (EnumStateTypes) {
  EnumStateTypes["fetchAllError"] = "fetchAllError";
  EnumStateTypes["unMountAll"] = "unMountAll";
  EnumStateTypes["setStepTag"] = "setStepTag";
  EnumStateTypes["increaseStep"] = "increaseStep";
  EnumStateTypes["decreaseStep"] = "decreaseStep";
  EnumStateTypes["cantSeeErrors"] = "cantSeeErrors";
})(EnumStateTypes || (EnumStateTypes = {}));

let ENUM_CBTestTypes;

(function (ENUM_CBTestTypes) {
  ENUM_CBTestTypes["achromatomaly"] = "achromatomaly";
  ENUM_CBTestTypes["achromatopsia"] = "achromatopsia";
  ENUM_CBTestTypes["deuteranomaly"] = "deuteranomaly";
  ENUM_CBTestTypes["deuteranopia"] = "deuteranopia";
  ENUM_CBTestTypes["protanomaly"] = "protanomaly";
  ENUM_CBTestTypes["protanopia"] = "protanopia";
  ENUM_CBTestTypes["tritanomaly"] = "tritanomaly";
  ENUM_CBTestTypes["tritanopia"] = "tritanopia";
})(ENUM_CBTestTypes || (ENUM_CBTestTypes = {}));

let ENUM_Developer_View;

(function (ENUM_Developer_View) {
  ENUM_Developer_View[ENUM_Developer_View["ALL_ISSUES"] = 0] = "ALL_ISSUES";
  ENUM_Developer_View[ENUM_Developer_View["CLEAR_ALL_ISSUES"] = 1] = "CLEAR_ALL_ISSUES";
  ENUM_Developer_View[ENUM_Developer_View["CONSOLE"] = 2] = "CONSOLE";
  ENUM_Developer_View[ENUM_Developer_View["STEP"] = 3] = "STEP";
  ENUM_Developer_View[ENUM_Developer_View["CLOSE_STEP"] = 4] = "CLOSE_STEP";
})(ENUM_Developer_View || (ENUM_Developer_View = {}));

let ENUM_VIEW_TYPE;

(function (ENUM_VIEW_TYPE) {
  ENUM_VIEW_TYPE[ENUM_VIEW_TYPE["POPUP"] = 0] = "POPUP";
  ENUM_VIEW_TYPE[ENUM_VIEW_TYPE["PANEL"] = 1] = "PANEL";
})(ENUM_VIEW_TYPE || (ENUM_VIEW_TYPE = {}));

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
                if (!tag.title && !tag.innerText && !tag.ariaLabel) {
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
            let found = false;
            if (tag && tag.classList) {
                // console.log("allATags", tag.classList);
                tag.classList.forEach((className) => {
                    if (errorType == types_1.ErrorEnum.Error &&
                        className == "mx-bp-a11y-extension-error") {
                        // console.log("Error", tag);
                        return (found = true);
                    }
                    if (errorType == types_1.ErrorEnum.Warning && className == "≈") {
                        // console.log("Warning", tag);
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
        // const totalError = eval(countAllTagErrors.join("+"));
        return { errors: rationalizeErrorList, totalError: 0 };
    }
    // ********************
    // ALL PUBLIC CLASSES
    // ********************
    /**
     * Toggles on an Off Class names that will show the error in the dom
     */
    seeErrorsOnType(errorEnumToTarget) {
        // console.log("this.errorList", this.errorList, errorEnumToTarget);
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
                        console.log(`--------------🔥 Error (Hover Over Me)- ${i + 1} 👩🏽‍🚒 --------------`);
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

/***/ "../factory/dist/classes/Row_Tag.js":
/*!******************************************!*\
  !*** ../factory/dist/classes/Row_Tag.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Row_Tag = void 0;
const ErrorWarning_1 = __webpack_require__(/*! ./ErrorWarning */ "../factory/dist/classes/ErrorWarning.js");
const types_1 = __webpack_require__(/*! ../utils/types */ "../factory/dist/utils/types.js");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "../factory/dist/utils/helpers.js");
class Row_Tag extends ErrorWarning_1.ErrorWarning {
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
        const clientViewPortHeight = window.innerHeight;
        for (let index = 0; index < this.allTags.length; index++) {
            const tag = this.allTags[index];
            if (tag) {
                if (tag.children.length >= 2) {
                    for (let childIndex = 0; childIndex < tag.children.length; childIndex++) {
                        const child = tag.children[childIndex];
                        if (child.clientHeight >= clientViewPortHeight * 1.5) {
                            this._pushErrorToErrorList({
                                tag,
                                errorType: types_1.ErrorEnum.Warning,
                                errorEnumToTarget: types_1.ColTagErrorEnum.LONG_COLS,
                                errorDescription: (0, helpers_1._descriptions)(types_1.ColTagErrorEnum.LONG_COLS)
                            });
                        }
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
exports.Row_Tag = Row_Tag;
//# sourceMappingURL=Row_Tag.js.map

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
exports.ENUM_CBTestTypes = exports.cbTests = exports.rationalizeTagInformation = exports.injectCBTest = exports.H_Tag = exports.Row_Tag = exports.Col_Tag = exports.Menu_Tag = exports.ATagErrorList = exports.Input_Tag = exports.CBFilter = exports.Button_Tag = exports.Img_TagErrorList = exports.DataView_MainContainer = void 0;
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
var Row_Tag_1 = __webpack_require__(/*! ./classes/Row_Tag */ "../factory/dist/classes/Row_Tag.js");
Object.defineProperty(exports, "Row_Tag", ({ enumerable: true, get: function () { return Row_Tag_1.Row_Tag; } }));
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
    var _a, _b, _c, _d;
    if (((_a = a === null || a === void 0 ? void 0 : a.errors) === null || _a === void 0 ? void 0 : _a.length) < ((_b = b === null || b === void 0 ? void 0 : b.errors) === null || _b === void 0 ? void 0 : _b.length)) {
        return 1;
    }
    if (((_c = a === null || a === void 0 ? void 0 : a.errors) === null || _c === void 0 ? void 0 : _c.length) > ((_d = b === null || b === void 0 ? void 0 : b.errors) === null || _d === void 0 ? void 0 : _d.length)) {
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
        case "row":
            return types_1.ColTagErrorEnum;
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
        case "row":
            return {
                mendixName: "Dataview/Layoutgrid (Row)",
                showButtons: true
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
                technical: "`<a>` tags are used in Menu items or buttons set to display as links. Consider using [this](https://marketplace.mendix.com/link/component/114803) widget if it is not possible to make the changes directly in Mendix"
            };
        case types_1.ATagErrorEnum.A_TOOL:
            return {
                mendix: "A Tags without titles must have Aria Tags on itself or its first child element",
                technical: "`<a>` tags are used in Menu items or buttons set to display as links.  Consider using [this](https://marketplace.mendix.com/link/component/114803) widget if it is not possible to make the changes directly in Mendix"
            };
        case types_1.ButtonTagErrorEnum.BUTTON_TITLE:
            return {
                mendix: "Usually this error usually occurs when buttons/links have icons only",
                technical: `
                \n &nbsp;
                &#9830; Add a Caption or Tooltip to your button.
                \n &nbsp;
                &#9830; Consider using [this](https://marketplace.mendix.com/link/component/114803) widget is it is not possible to make the changes directly in Mendix
                `
            };
        case types_1.ColTagErrorEnum.COL_EMPTY:
            return {
                mendix: "Empty Columns should be avoided as Layout helper",
                technical: "`.col` class names are added to layout grids to help with layout and responsiveness - Usually follows Bootstrap 4"
            };
        case types_1.ColTagErrorEnum.LONG_COLS:
            return {
                mendix: "Usage of Very long columns are to be avoided for help with Keyboard interactions",
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
                mendix: "⚠️ No Corresponding Tag found (DESC)",
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
    ColTagErrorEnum["LONG_COLS"] = "LONG_COLS";
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/scripts/content_script/index.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _m11y_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @m11y/factory */ "../factory/dist/index.js");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/types */ "./src/utils/types.ts");
/* harmony import */ var _getAllErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAllErrors */ "./src/scripts/content_script/getAllErrors.ts");
/* harmony import */ var _page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-context */ "./src/scripts/content_script/page-context.ts");
/* harmony import */ var _navigateThroughErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigateThroughErrors */ "./src/scripts/content_script/navigateThroughErrors.ts");
/* harmony import */ var _viewAllErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewAllErrors */ "./src/scripts/content_script/viewAllErrors.ts");
/* harmony import */ var _errorsInConsole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorsInConsole */ "./src/scripts/content_script/errorsInConsole.ts");








let mxWidow;
let H_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.H_Tag('h1');
let Col_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Col_Tag('col');
let A_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.ATagErrorList('a');
let Input_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Input_Tag('input');
let Button_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Button_Tag('button');
let Img_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Img_TagErrorList('img');
let TextArea_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Input_Tag('textarea');
let Menu_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Menu_Tag('[role="menu"]');
let Row_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Row_Tag('row');
let DataView_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.DataView_MainContainer('mx-placeholder');
let CBFilter_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.CBFilter(); // This is overkill - Doing it prop is causing issues - Quick Fix

function main() {
  H_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.H_Tag('h1');
  Col_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Col_Tag('col');
  A_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.ATagErrorList('a');
  Input_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Input_Tag('input');
  Button_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Button_Tag('button');
  Img_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Img_TagErrorList('img');
  TextArea_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Input_Tag('textarea');
  Menu_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Menu_Tag('[role="menu"]');
  Row_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.Row_Tag('row');
  DataView_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.DataView_MainContainer('mx-placeholder');
  CBFilter_Class = new _m11y_factory__WEBPACK_IMPORTED_MODULE_0__.CBFilter();
}

(async function () {
  console.log('FIRE'); // @ts-ignore

  mxWidow = await (0,_page_context__WEBPACK_IMPORTED_MODULE_3__.runInPageContext)(() => mx);
  console.log('mxWidow', mxWidow);
})();

const allCurrentClasses = {
  A_Class,
  H_Class,
  Row_Class,
  Img_Class,
  Col_Class,
  Menu_Class,
  Input_Class,
  Button_Class,
  TextArea_Class,
  DataView_Class
};
(0,_m11y_factory__WEBPACK_IMPORTED_MODULE_0__.injectCBTest)();
chrome.runtime.onMessage.addListener(function (msg, _sender, sendResponse) {
  // Run All checks
  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.GET_ALL_ERRORS) {
    main();
    const allErrors = (0,_getAllErrors__WEBPACK_IMPORTED_MODULE_2__.getAllErrors)({
      allCurrentClasses
    });
    sendResponse(allErrors);
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.STEP_ERROR) {
    const {
      errorToView,
      tag,
      step
    } = msg;

    if (errorToView && tag && step !== null && step !== undefined) {
      const stepError = (0,_navigateThroughErrors__WEBPACK_IMPORTED_MODULE_4__.navigateThroughErrors)(tag, errorToView, step, allCurrentClasses);
    }
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.REMOVE_ALL_ERRORS) {
    // This Function can be called from any mounted Class
    A_Class.removeAllClassNames();
    A_Class.getAllErrorsAndScan;
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.GET_MX_WINDOW) {
    sendResponse(mxWidow);
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.SHOW_ALL_ERRORS) {
    const {
      errorToView,
      tag
    } = msg;

    if (errorToView && tag) {
      A_Class.removeAllClassNames();
      (0,_viewAllErrors__WEBPACK_IMPORTED_MODULE_5__.viewAError)(tag, errorToView, allCurrentClasses);
    }
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.SHOW_ERROR_IN_CONSOLE) {
    const {
      errorToView,
      tag
    } = msg;

    if (errorToView && tag) {
      (0,_errorsInConsole__WEBPACK_IMPORTED_MODULE_6__.logAllErrorsInConsole)(tag, errorToView, allCurrentClasses);
    }
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.SIMULATE_CB) {
    const {
      cbToSimulate
    } = msg;

    if (cbToSimulate) {
      CBFilter_Class.applyFilter(cbToSimulate);
    }
  }

  if (msg.message === _utils_types__WEBPACK_IMPORTED_MODULE_1__.EnumContentScripMessages.CLEAR_CB) {
    CBFilter_Class.clearFilter();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map