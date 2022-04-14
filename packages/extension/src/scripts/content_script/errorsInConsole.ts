import {
  ATagErrorList,
  Button_Tag,
  Col_Tag,
  ErrorList,
  Img_TagErrorList,
  Row_Tag,
} from '@m11y/factory';
import { AllClasses_Types } from '../../utils/types';

export const logAllErrorsInConsole = (
  tag: string,
  errorToView: ErrorList,
  allCurrentClasses: AllClasses_Types
) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Row_Class,
    Col_Class,
    List_Class,
    Input_Class,
    Button_Class,
    TextArea_Class,
  } = allCurrentClasses;
  switch (tag) {
    case 'a':
      return (A_Class as ATagErrorList).logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'row':
      return (Row_Class as Row_Tag).logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'button':
      return (Button_Class as Button_Tag).logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'img':
      return (Img_Class as Img_TagErrorList).logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'col':
      return (Col_Class as Col_Tag).logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'h1':
      return H_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'input':
      return Input_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'textarea':
      return TextArea_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    case 'li[role="button"]':
      return List_Class?.logOutAllErrors({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
      });
    default:
      break;
  }
};
