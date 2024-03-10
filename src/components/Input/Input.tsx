import React, {forwardRef, useState} from 'react';
import {useController, useFormContext} from 'react-hook-form';
import {useTheme} from '@rneui/themed';
import {Input as RNEInput} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {useStyles} from './Input.useStyles';

const Input = forwardRef<IInputProps, IInputProps>(
  (
    {
      icon,
      name = '',
      value = '',
      onChangeText,
      defaultValue = '',
      autoCapitalize = 'none',
      type = 'normal',
      size = 'medium',
      inputContainerStyle,
      ...inputProps
    },
    ref?: any,
  ) => {
    const {theme} = useTheme();
    const {control} = useFormContext();

    const {styleSet, sizeStyleSet} = useStyles();
    const {field} = useController({name, control, defaultValue});

    const [colorCases, setColorCases] = useState<ColorCases>({
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.grey4,
    });

    const onBlur = () => {
      field.onBlur();
      setColorCases({
        backgroundColor: theme.colors.grey5,
        borderColor: theme.colors.grey0,
      });
    };
    const onFocus = () => {
      setColorCases({
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.greyOutline,
      });
    };

    return (
      <RNEInput
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        cursorColor={colorCases.backgroundColor}
        defaultValue={defaultValue}
        label={field.name}
        // leftIcon={icon}
        placeholder={field.name}
        placeholderTextColor={theme.colors.grey4}
        ref={ref}
        rightIcon={icon}
        value={value || field.value}
        inputContainerStyle={StyleSheet.flatten([
          styleSet[type].inputContainerStyle,
          sizeStyleSet[size].inputContainerStyle,
          inputContainerStyle,
        ])}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={(evt: any) => {
          onChangeText?.(evt);
          field.onChange(evt);
        }}
        {...inputProps}
      />
    );
  },
);

import {StyleProp, ViewStyle} from 'react-native';
import {InputProps} from '@rneui/themed';
import {IconNode} from '@rneui/base/dist/Icon';

export interface IInputProps extends InputProps {
  name: string;
  phoneInput?: boolean;
  showStrengthMeter?: boolean;
  icon?: IconNode;

  type?: 'normal' | 'borderless' | 'underlined';
  size?: 'medium' | 'small';
  required?: boolean;
  focusStyle?: ViewStyle;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export type ColorCases = {
  borderColor?: string;
  backgroundColor?: string | undefined;
};

export default Input;
