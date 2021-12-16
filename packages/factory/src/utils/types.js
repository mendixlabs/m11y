"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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