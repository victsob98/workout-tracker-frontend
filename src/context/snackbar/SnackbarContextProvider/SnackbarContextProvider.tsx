import { Snackbar } from "@atoms/Snackbar/Snackbar";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";

import { SnackbarType } from "../SnackbarContext/Snackbar.enum";
import { SnackbarContext } from "../SnackbarContext/SnackbarContext";
import { SnackbarContextValueType, SnackbarState } from "../SnackbarContext/SnackbarContext.types";

import { SnackbarContextProviderProps } from "./SnackbarContextProvider.types";

const SnackbarContextProvider = ({ children }: SnackbarContextProviderProps) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    visible: false,
    type: SnackbarType.Success,
    text: "",
  });

  const showSnackbar = useCallback(
    (text: string, type?: SnackbarType) =>
      setSnackbarState({ visible: true, text, type: type ?? SnackbarType.Success }),
    [],
  );

  const handleOnDismiss = useCallback(
    () => setSnackbarState({ visible: !snackbarState.visible }),
    [snackbarState.visible],
  );

  useFocusEffect(
    useCallback(() => {
      return () => setSnackbarState({ visible: false });
    }, []),
  );

  const value: SnackbarContextValueType = {
    showSnackbar,
  };

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar type={snackbarState.type} visible={snackbarState.visible} onDismiss={handleOnDismiss}>
        {snackbarState.text}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
