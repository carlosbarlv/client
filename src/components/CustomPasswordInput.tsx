import React from 'react';
import { Input } from 'antd';
import { Props as InputProps } from './CustomInput';

const { Password } = Input;

interface Props extends InputProps {
  visibilityToggle?: boolean;
}

const CustomPasswordInput: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Password {...props}>{props.children}</Password>;

CustomPasswordInput.defaultProps = {
  disabled: false,
  type: 'text',
  visibilityToggle: true,
};

export default CustomPasswordInput;
