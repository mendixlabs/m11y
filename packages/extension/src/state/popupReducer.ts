import { IInitialState, EnumStateTypes } from '../utils/types';

export const initialState: IInitialState = {
  loading: true,
  errorList: [],
  type: null,
  tag: '',
  step: null,
  iCantSee: false,
  error: undefined,
};
export const reducer = (state: IInitialState, action: IInitialState) => {
  switch (action.type) {
    case EnumStateTypes.fetchAllError:
      console.log(` action.errorList`, action.errorList);
      return {
        ...state,
        loading: false,
        errorList: action.errorList,
      };
    case EnumStateTypes.unMountAll:
      return {
        ...state,
        errorList: [],
        loading: true,
      };
    case EnumStateTypes.increaseStep:
      if (state.step == null) {
        return {
          ...state,
          step: 0,
        };
      } else {
        if (state.error?.errorCount == state.step) {
          return {
            ...state,
          };
        }
        return {
          ...state,
          step: state.step + 1,
        };
      }
    case EnumStateTypes.decreaseStep:
      return {
        ...state,
        step: state.step ? state.step-- : 0,
      };
    case EnumStateTypes.setStepTag:
      return {
        ...state,
        step: 0,
        tag: action.tag,
        error: action.error,
        iCantSee: false,
      };
    case EnumStateTypes.cantSeeErrors:
      return {
        ...state,
        tag: action.tag,
        error: action.error,
        iCantSee: action.iCantSee,
      };
    default:
      return state;
  }
};
