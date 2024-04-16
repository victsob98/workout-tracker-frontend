import React, { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";
import { SnackbarContextProviderProps } from "./SnackbarContextProvider.types";
import {
  SnackbarContextValueType,
  SnackbarState,
} from "../SnackbarContext/SnackbarContext.types";
import { SnackbarType } from "../SnackbarContext/Snackbar.enum";
import { SnackbarContext } from "../SnackbarContext/SnackbarContext";
import { Snackbar } from "@atoms/Snackbar/Snackbar";

const SnackbarContextProvider = ({
  children,
}: SnackbarContextProviderProps) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    visible: false,
    type: SnackbarType.Success,
    text: "",
  });

  const handleOnDismiss = useCallback(
    () => setSnackbarState({ visible: !snackbarState.visible }),
    [snackbarState.visible]
  );

  useFocusEffect(
    useCallback(() => {
      return () => setSnackbarState({ visible: false });
    }, [])
  );

  const value: SnackbarContextValueType = {
    setSnackbarState,
  };

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar
        type={snackbarState.type}
        visible={snackbarState.visible}
        onDismiss={handleOnDismiss}
      >
        {snackbarState.text}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
