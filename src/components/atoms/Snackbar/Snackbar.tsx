import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { View } from "react-native";
import { Icon, IconButton, Snackbar as PaperSnackbar, Portal } from "react-native-paper";
import { Text } from "react-native-paper";

import { styles } from "./Snackbar.styles";
import { SNACKBAR_DEFAULT_DURATION, SnackbarProps } from "./Snackbar.types";

export const Snackbar = ({ visible, children, onDismiss, type = SnackbarType.Success }: SnackbarProps) => {
  const snackbarIcon =
    type === SnackbarType.Success
      ? "check-circle-outline"
      : SnackbarType.Error
        ? "alert-circle-outline"
        : "information-outline";

  return visible ? (
    <Portal>
      <PaperSnackbar
        visible={visible}
        onDismiss={onDismiss}
        wrapperStyle={styles(type).container}
        duration={SNACKBAR_DEFAULT_DURATION}
        style={styles(type).color}
      >
        <View style={styles(type).content}>
          <Icon source={snackbarIcon} size={26} />
          <Text>{children}</Text>
          <IconButton icon="close" size={15} onPress={onDismiss} style={styles(type).closeIcon} />
        </View>
      </PaperSnackbar>
    </Portal>
  ) : (
    <></>
  );
};
