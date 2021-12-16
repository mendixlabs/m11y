import React from "react";
import { IInitialState } from "../utils/types";

type StepType = {
  state: IInitialState;
  dispatch: React.Dispatch<IInitialState>;
};

// @ts-ignore
export const AppStateContext = React.createContext<Partial<StepType>>();
