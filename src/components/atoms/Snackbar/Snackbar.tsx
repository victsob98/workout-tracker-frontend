import { Snackbar as PaperSnackbar, Portal } from "react-native-paper";
import { SNACKBAR_DEFAULT_DURATION, SnackbarProps } from "./Snackbar.types";
import { styles } from "./Snackbar.styles";
import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";

export const Snackbar = ({
  visible,
  children,
  onDismiss,
  type = SnackbarType.Success,
}: SnackbarProps) => {
  return visible ? (
    <Portal>
      <PaperSnackbar
        visible={visible}
        onDismiss={onDismiss}
        wrapperStyle={styles(type).container}
        duration={SNACKBAR_DEFAULT_DURATION}
        action={{
          label: "Undo",
          onPress: onDismiss,
        }}
        style={styles(type).color}
      >
        {children}
      </PaperSnackbar>
    </Portal>
  ) : (
    <></>
  );
};
