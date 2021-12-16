import { ErrorList } from '@m11y/factory';
import { AllClasses_Types } from '../utils/types';

export const logAllErrorsInConsole = (
  tag: string,
  errorToView: ErrorList,
  allCurrentClasses: AllClasses_Types
) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Col_Class,
    Input_Class,
    Button_Class,
    TextArea_Class,
  } = allCurrentClasses;
  switch (tag) {
    case 'a':
      return A_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'button':
      return Button_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'img':
      return Img_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'col':
      return Col_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'h1':
      return H_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'input':
      return Input_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'textarea':
      return TextArea_Class.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    default:
      break;
  }
};
