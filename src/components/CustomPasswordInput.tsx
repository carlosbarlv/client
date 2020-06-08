import React from 'react';
import { Input } from 'antd';
import { CustomInputProps } from './CustomInput';

const { Password } = Input;

type CustomPasswordInputProps = CustomInputProps & {
  visibilityToggle?: boolean;
};

const CustomPasswordInput: React.FunctionComponent<CustomPasswordInputProps> = (
  props
): React.ReactElement => <Password {...props}>{props.children}</Password>;

CustomPasswordInput.defaultProps = {
  disabled: false,
  type: 'text',
  visibilityToggle: true,
};

export default CustomPasswordInput;
