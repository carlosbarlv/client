import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

export type CustomInputProps = InputProps;

const CustomInput: React.FunctionComponent<CustomInputProps> = (
  props
): React.ReactElement => <Input {...props}>{props.children}</Input>;

CustomInput.defaultProps = {
  disabled: false,
  type: 'text',
};

export default CustomInput;
