import { createContext } from "react";

import { SnackbarContextValueType } from "./SnackbarContext.types";

export const SnackbarContext = createContext<SnackbarContextValueType | undefined>(undefined);
