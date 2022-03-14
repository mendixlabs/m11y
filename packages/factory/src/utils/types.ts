export interface IContentScriptMessage {
    tag?: string;
    show?: boolean;
    index?: number;
    turnOff?: number;
    step?: number;
    errorToView?: ErrorList;
    cbToSimulate?: ENUM_CBTestTypes;
    message: EnumContentScripMessages;
}
export type ErrorType = {
    message: string;
    warningType: ErrorEnum;
};
export enum ErrorEnum {
    Error,
    Warning,
    Success
}
export interface ErrorDescription {
    mendix: string;
    technical: string;
}
export interface RunAllChecks {
    show: boolean;
    sendResponse?: (x: AllChecksReturn) => void;
}

export interface AllChecksReturn {
    [x: string]: ErrorList;
}
export type ErrorList = {
    errorEnumToTarget: AllErrorEnumTypes;
    errorType: ErrorEnum;
    /** @deprecated  This has been moved to helper functions*/
    errorDesc?: string;
    errorDescription: ErrorDescription;
    errorCount: number;
    tags: CountedErrorList[];
};
export type CountedErrorList = {
    tag?: Element;
    errorType: ErrorEnum;
};
export interface IStepFunction {
    list: CountedErrorList[];
    step: number;
}
export interface IReturnRationalizedData {
    errors: ErrorList[];
    totalError: number;
}
export interface IRationalizeDataInput {
    errorList: AllChecksReturn;
    passedEnum: any;
}
export interface IPushErrorToErrorFunctionInput {
    tag?: HTMLElement;
    errorType: ErrorEnum;
    errorEnumToTarget: AllErrorEnumTypes;
    errorDescription?: any;
}
export enum ATagErrorEnum {
    A_TOOL = "A_TOOL",
    A_HREF = "A_HREF",
    A_TAB_INDEX = "A_TAB_INDEX"
}
export enum ButtonTagErrorEnum {
    BUTTON_TITLE = "BUTTON_TITLE"
}
export enum ImgTagErrorEnum {
    ALT_TEXT = "ALT_TEXT"
}
export enum DataViewErrorEnum {
    BASE_DATA_VIEW = "BASE_DATA_VIEW"
}
export enum HTagErrorEnum {
    ONE_H1 = "ONE_H1"
}
export enum InputTagErrorEnum {
    INPUT_LABEL = "INPUT_LABEL"
}
export enum ColTagErrorEnum {
    COL_EMPTY = "COL_EMPTY",
    LONG_COLS = "LONG_COLS"
}
export enum MenuErrorEnum {
    LONG_MENU = "LONG_MENU",
    USING_SKIP_LINK = "USING_SKIP_LINK"
}
export enum EnumContentScripMessages {
    GET_ALL_ERRORS,
    STEP_ERROR,
    SHOW_ALL_ERRORS,
    REMOVE_ALL_ERRORS,
    SHOW_ERROR_IN_CONSOLE,
    GET_AXE_ERRORS,
    SIMULATE_CB
}

export type AllErrorEnumTypes =
    | InputTagErrorEnum
    | DataViewErrorEnum
    | ColTagErrorEnum
    | ImgTagErrorEnum
    | ATagErrorEnum
    | ButtonTagErrorEnum
    | MenuErrorEnum
    | HTagErrorEnum;

export interface IInitialState {
    loading?: boolean;
    errorList?: ReturnErrorList[];
    type: string | null;
    tag?: string;
    iCantSee?: boolean;
    step?: number | null;
    error?: ErrorList | undefined;
}
export interface ReturnErrorList {
    tag: string;
    count: number;
    errors: ErrorList[];
}
export interface IStateList {
    errorList?: ReturnErrorList[];
}
export interface IErrorItem {
    errorItem: ErrorList[];
    tag: string;
}
export interface IError {
    tag: string;
    error: ErrorList;
    onStepClick: (error: ErrorList) => void;
    onViewClick: (error: ErrorList) => void;
    onCantSeeErrorClick: (error: ErrorList) => void;
}

type stepType = {
    tag: string;
    step: number;
};
export enum EnumStateTypes {
    fetchAllError = "fetchAllError",
    unMountAll = "unMountAll",
    setStepTag = "setStepTag",
    increaseStep = "increaseStep",
    decreaseStep = "decreaseStep",
    cantSeeErrors = "cantSeeErrors"
}
export enum ENUM_CBTestTypes {
    achromatomaly = "achromatomaly",
    achromatopsia = "achromatopsia",
    deuteranomaly = "deuteranomaly",
    deuteranopia = "deuteranopia",
    protanomaly = "protanomaly",
    protanopia = "protanopia",
    tritanomaly = "tritanomaly",
    tritanopia = "tritanopia"
}
export interface IRationalize {
    mendixName: string;
    showButtons: boolean;
}
export type descriptionsType = {
    technical: string;
    mendix: string;
};

export type CB_TEST_TYPE = {
    name: string;
    type: ENUM_CBTestTypes;
    group: string;
    desc: string;
};
