import { ErrorList } from '@m11y/factory';
import { AllClasses_Types } from '../utils/types';

export const navigateThroughErrors = (
  tag: string,
  errorToView: ErrorList,
  step: number,
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
      return A_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'button':
      return Button_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'img':
      return Img_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'col':
      return Col_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'h1':
      return H_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'input':
      return Input_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    case 'textarea':
      return TextArea_Class.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
      });
    default:
      break;
  }
};
