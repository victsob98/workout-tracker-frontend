import TextInput from "@atoms/TextInput";
import ErrorMessage from "@molecules/ErrorMessage";
import React from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { View } from "react-native";

import { ControlledTextInputProps } from "./ControlledTextInput.types";

const ControlledTextInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  isPassword = false,
  control,
  rules,
  name,
  errorText,
  placeholder,
  label,
  keyboardType,
  style,
  errorStyle,
}: ControlledTextInputProps<TFieldValues, TName>) => {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            error={!!errorText}
            secureTextEntry={isPassword}
            label={label ?? name}
            placeholder={placeholder}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value?.toString()}
            keyboardType={keyboardType}
          />
        )}
      />
      <ErrorMessage errorText={errorText} errorStyle={errorStyle} />
    </View>
  );
};

export default ControlledTextInput;
