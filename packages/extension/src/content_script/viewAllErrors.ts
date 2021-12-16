import { ErrorList } from '@m11y/factory';
import { AllClasses_Types } from '../utils/types';

export const viewAError = (
  tag: string,
  errorToView: ErrorList,
  allCurrentClasses: AllClasses_Types
) => {
  const {
    A_Class,
    H_Class,
    Img_Class,
    Col_Class,
    Menu_Class,
    Input_Class,
    Button_Class,
    TextArea_Class,
  } = allCurrentClasses;
  switch (tag) {
    case 'a':
      return A_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'button':
      return Button_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'img':
      return Img_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'col':
      return Col_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'h1':
      return H_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'input':
      return Input_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case 'textarea':
      return TextArea_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    case '[role="menu"]':
      return Menu_Class.seeErrorsOnType(errorToView?.errorEnumToTarget);
    default:
      break;
  }
};
