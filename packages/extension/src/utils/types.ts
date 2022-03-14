import {
  ATagErrorList,
  H_Tag,
  Img_TagErrorList,
  Col_Tag,
  Menu_Tag,
  Input_Tag,
  ErrorList,
  Button_Tag,
  DataView_MainContainer,
  Row_Tag,
} from '@m11y/factory';

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
  Success,
}
export interface RunAllChecks {
  show: boolean;
  sendResponse?: (x: AllChecksReturn) => void;
}

export interface AllChecksReturn {
  [x: string]: ErrorList;
}

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
}
export enum ATagErrorEnum {
  A_TOOL = 'A_TOOL',
  A_HREF = 'A_HREF',
  A_TAB_INDEX = 'A_TAB_INDEX',
}
export enum ButtonTagErrorEnum {
  BUTTON_TITLE = 'BUTTON_TITLE',
}
export enum ImgTagErrorEnum {
  ALT_TEXT = 'ALT_TEXT',
}
export enum DataViewErrorEnum {
  BASE_DATA_VIEW = 'BASE_DATA_VIEW',
}
export enum HTagErrorEnum {
  ONE_H1 = 'ONE_H1',
}
export enum InputTagErrorEnum {
  INPUT_LABEL = 'INPUT_LABEL',
}
export enum ColTagErrorEnum {
  COL_EMPTY = 'COL_EMPTY',
}
export enum MenuErrorEnum {
  LONG_MENU = 'LONG_MENU',
  USING_SKIP_LINK = 'USING_SKIP_LINK',
}
export enum EnumContentScripMessages {
  GET_ALL_ERRORS,
  STEP_ERROR,
  SHOW_ALL_ERRORS,
  REMOVE_ALL_ERRORS,
  SHOW_ERROR_IN_CONSOLE,
  GET_AXE_ERRORS,
  SIMULATE_CB,
  CLEAR_CB,
  GET_MX_WINDOW,
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
export interface I_MX_WINDOW {
  version: string;
  session: any;
}
export interface ReturnErrorList {
  tag?: string;
  count?: number;
  errors?: ErrorList[];
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
  showButtons?: boolean;
  onStepClick?: (error: ErrorList) => void;
  onViewClick?: (error: ErrorList) => void;
  onCantSeeErrorClick?: (error: ErrorList) => void;
}

type stepType = {
  tag: string;
  step: number;
};
export enum EnumStateTypes {
  fetchAllError = 'fetchAllError',
  unMountAll = 'unMountAll',
  setStepTag = 'setStepTag',
  increaseStep = 'increaseStep',
  decreaseStep = 'decreaseStep',
  cantSeeErrors = 'cantSeeErrors',
}
export enum ENUM_CBTestTypes {
  achromatomaly = 'achromatomaly',
  achromatopsia = 'achromatopsia',
  deuteranomaly = 'deuteranomaly',
  deuteranopia = 'deuteranopia',
  protanomaly = 'protanomaly',
  protanopia = 'protanopia',
  tritanomaly = 'tritanomaly',
  tritanopia = 'tritanopia',
}
export interface IRationalize {
  mendixName: string;
  technicalExplanation: string;
  showButtons: boolean;
  descriptions: descriptionsType;
}
export type descriptionsType = {
  technical: string;
  mendix: string;
};

export type AllClasses_Types = {
  A_Class?: ATagErrorList;
  H_Class?: H_Tag;
  Row_Class?: Row_Tag;
  Img_Class?: Img_TagErrorList;
  Col_Class?: Col_Tag;
  Menu_Class?: Menu_Tag;
  Input_Class?: Input_Tag;
  Button_Class?: Button_Tag;
  TextArea_Class?: Input_Tag;
  DataView_Class?: DataView_MainContainer;
};

export type GetAllErrors_TYPE = {
  allCurrentClasses: AllClasses_Types;
};

export enum ENUM_Developer_View {
  ALL_ISSUES,
  CLEAR_ALL_ISSUES,
  CONSOLE,
  STEP,
  CLOSE_STEP,
}
export type MAIN_VIEW_TYPE = {
  type: ENUM_VIEW_TYPE;
};

export enum ENUM_VIEW_TYPE {
  POPUP,
  PANEL,
}
