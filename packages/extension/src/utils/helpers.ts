import { ErrorList } from '@m11y/factory';
import {
  ErrorType,
  ATagErrorEnum,
  HTagErrorEnum,
  MenuErrorEnum,
  ImgTagErrorEnum,
  ColTagErrorEnum,
  InputTagErrorEnum,
  DataViewErrorEnum,
  ButtonTagErrorEnum,
  ReturnErrorList,
  ENUM_CBTestTypes,
} from '../utils/types';

export const _compareErrorLength = (a: ReturnErrorList, b: ReturnErrorList) => {
  if ((a.errors as ErrorList[])?.length < (b.errors as ErrorList[])?.length) {
    return 1;
  }
  if ((a.errors as ErrorList[])?.length > (b.errors as ErrorList[])?.length) {
    return -1;
  }
  return 0;
};
export const _compareCount = (a: ReturnErrorList, b: ReturnErrorList) => {
  if ((a.count as number) < (b.count as number)) {
    return 1;
  }
  if ((a.count as number) > (b.count as number)) {
    return -1;
  }
  return 0;
};

export const removeDuplicates = (errorList: ErrorType[]) => {
  const uniq = errorList.filter(
    (thing, index, self) =>
      index === self.findIndex((t) => t.message === thing.message)
  );
  return uniq;
};
export const _getCorrespondingEnum = (tag: string) => {
  switch (tag) {
    case 'a':
      return ATagErrorEnum;
    case 'button':
      return ButtonTagErrorEnum;
    case 'img':
      return ImgTagErrorEnum;
    case 'col':
      return ColTagErrorEnum;
    case 'h1':
      return HTagErrorEnum;
    case 'h2':
      return HTagErrorEnum;
    case 'h3':
      return HTagErrorEnum;
    case 'h4':
      return HTagErrorEnum;
    case 'h5':
      return HTagErrorEnum;
    case 'h6':
      return HTagErrorEnum;
    case 'input':
      return InputTagErrorEnum;
    case 'textarea':
      return InputTagErrorEnum;
    case '[role="menu"]':
      return MenuErrorEnum;
    case 'mx-placeholder':
      return DataViewErrorEnum;
    default:
      break;
  }
};

export const cbTests = [
  {
    name: 'Achromatomaly',
    type: ENUM_CBTestTypes.achromatomaly,
    group: 'Monochromat',
    desc: '1 good cone, 2 blind/bad | almost no color',
  },
  {
    name: 'Achromatopsia',
    type: ENUM_CBTestTypes.achromatopsia,
    group: 'Monochromat',
    desc: '1 good cone, 2 blind/bad | no color',
  },
  {
    name: 'Deuteranomaly',
    type: ENUM_CBTestTypes.deuteranomaly,
    group: 'Anomalous Trichromat',
    desc: '2 good cones, 1 bad | low green',
  },
  {
    name: 'Deuteranopia',
    type: ENUM_CBTestTypes.deuteranopia,
    group: 'Dichromat',
    desc: '2 good cones, 1 blind | no green',
  },

  {
    name: 'Protanomaly',
    type: ENUM_CBTestTypes.protanomaly,
    group: ' Anomalous Trichromat',
    desc: '2 good cones, 1 bad | low red',
  },
  {
    name: 'Protanopia',
    type: ENUM_CBTestTypes.protanopia,
    group: 'Dichromat',
    desc: '2 good cones, 1 blind | no red',
  },
  {
    name: 'Tritanomaly',
    type: ENUM_CBTestTypes.tritanomaly,
    group: 'Anomalous Trichromat',
    desc: '2 good cones, 1 bad | low blue',
  },
  {
    name: 'Tritanopia',
    type: ENUM_CBTestTypes.tritanopia,
    group: 'Dichromat',
    desc: '2 good cones, 1 blind | no blue',
  },
];
