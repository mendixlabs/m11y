import {
  H_Tag,
  Col_Tag,
  Menu_Tag,
  CBFilter,
  Input_Tag,
  Button_Tag,
  ATagErrorList,
  Img_TagErrorList,
  DataView_MainContainer,
} from '@m11y/factory';
import {
  I_MX_WINDOW,
  AllClasses_Types,
  IContentScriptMessage,
  EnumContentScripMessages,
} from '../utils/types';
import { _compareCount, _compareErrorLength } from '../utils/helpers';
import { getAllErrors } from './getAllErrors';
import { runInPageContext } from './page-context';
import { navigateThroughErrors } from './navigateThroughErrors';
import { viewAError } from './viewAllErrors';
import { logAllErrorsInConsole } from './errorsInConsole';
import { injectCBTest } from '@m11y/factory';

let mxWidow: I_MX_WINDOW;

const H_Class = new H_Tag('h1');
const Col_Class = new Col_Tag('col');
const A_Class = new ATagErrorList('a');
const Input_Class = new Input_Tag('input');
const Button_Class = new Button_Tag('button');
const Img_Class = new Img_TagErrorList('img');
const TextArea_Class = new Input_Tag('textarea');
const Menu_Class = new Menu_Tag('[role="menu"]');
const DataView_Class = new DataView_MainContainer('mx-placeholder');
const CBFilter_Class = new CBFilter();

(async function () {
  // @ts-ignore
  mxWidow = await runInPageContext(() => mx);
})();

const allCurrentClasses: AllClasses_Types = {
  A_Class,
  H_Class,
  Img_Class,
  Col_Class,
  Menu_Class,
  Input_Class,
  Button_Class,
  TextArea_Class,
  DataView_Class,
};

injectCBTest();

chrome.runtime.onMessage.addListener(function (
  msg: IContentScriptMessage,
  sender,
  sendResponse
) {
  // Run All checks
  if (msg.message === EnumContentScripMessages.GET_ALL_ERRORS) {
    const allErrors = getAllErrors({ allCurrentClasses });
    sendResponse(allErrors);
  }
  if (msg.message === EnumContentScripMessages.STEP_ERROR) {
    const { errorToView, tag, step } = msg;
    if (errorToView && tag && step !== null && step !== undefined) {
      const stepError = navigateThroughErrors(
        tag,
        errorToView,
        step,
        allCurrentClasses
      );
    }
  }
  if (msg.message === EnumContentScripMessages.REMOVE_ALL_ERRORS) {
    // This Function can be called from any mounted Class
    A_Class.removeAllClassNames();
    A_Class.getAllErrorsAndScan;
  }
  if (msg.message === EnumContentScripMessages.GET_MX_WINDOW) {
    sendResponse(mxWidow);
  }
  if (msg.message === EnumContentScripMessages.SHOW_ALL_ERRORS) {
    const { errorToView, tag } = msg;
    if (errorToView && tag) {
      A_Class.removeAllClassNames();
      viewAError(tag, errorToView, allCurrentClasses);
    }
  }
  if (msg.message === EnumContentScripMessages.SHOW_ERROR_IN_CONSOLE) {
    const { errorToView, tag } = msg;
    if (errorToView && tag) {
      logAllErrorsInConsole(tag, errorToView, allCurrentClasses);
    }
  }
  if (msg.message === EnumContentScripMessages.SIMULATE_CB) {
    const { cbToSimulate } = msg;
    if (cbToSimulate) {
      CBFilter_Class.applyFilter(cbToSimulate);
    }
  }
  if (msg.message === EnumContentScripMessages.CLEAR_CB) {
    CBFilter_Class.clearFilter();
  }
});
