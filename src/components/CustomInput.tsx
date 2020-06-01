import React, { ReactNode } from 'react';
import { Input } from 'antd';

export interface Props {
  addonAfter?: string | ReactNode;
  addonBefore?: string | ReactNode;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  prefix?: string | ReactNode;
  size?: 'large' | 'middle' | 'small';
  suffix?: string | ReactNode;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
  placeholder?: string;
}

const CustomInput: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Input {...props}>{props.children}</Input>;

CustomInput.defaultProps = {
  disabled: false,
  type: 'text',
};

export default CustomInput;
