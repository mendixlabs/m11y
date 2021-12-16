import { ErrorList } from '@m11y/factory';
import React, { FC } from 'react';
import { AllErrorEnumTypes, ENUM_Developer_View } from '../../utils/types';
type Developer_Provider_Props = {
  children: React.ReactNode;
};
type Action<T> = { type: T; data?: any };
type Dispatch = (action: Action<any>) => void;
type State = {
  step: AllErrorEnumTypes;
  allErrors: AllErrorEnumTypes;
  error: ErrorList;
};

const initialState = {
  step: undefined,
  error: undefined,
  allErrors: undefined,
};

const DeveloperContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);
// @ts-ignore
function authReducer(state, action) {
  switch (action.type) {
    case ENUM_Developer_View.STEP: {
      return {
        ...state,
        error: action.data,
        allErrors: undefined,
        step: action.data.errorEnumToTarget,
      };
    }
    case ENUM_Developer_View.CLOSE_STEP: {
      return {
        ...state,
        error: undefined,
        step: undefined,
        allErrors: undefined,
      };
    }
    case ENUM_Developer_View.CLEAR_ALL_ISSUES: {
      return {
        ...state,
        error: undefined,
        step: undefined,
        allErrors: undefined,
      };
    }
    case ENUM_Developer_View.ALL_ISSUES: {
      return {
        ...state,
        step: undefined,
        error: action.data,
        allErrors: action.data.errorEnumToTarget,
      };
    }

    default:
      return {
        ...state,
      };
  }
}

const DeveloperProvider: FC<Developer_Provider_Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  const value = { state, dispatch };
  return (
    <DeveloperContext.Provider value={value}>
      {children}
    </DeveloperContext.Provider>
  );
};

function useDeveloperState() {
  const context = React.useContext(DeveloperContext);
  if (context === undefined) {
    throw new Error('useDeveloperState must be used within a CountProvider');
  }
  return context;
}

export { DeveloperProvider, useDeveloperState };
