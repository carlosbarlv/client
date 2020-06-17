import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

type CustomButtonProps = ButtonProps;

const CustomButton: React.FunctionComponent<CustomButtonProps> = (
  props
): React.ReactElement => <Button {...props}>{props.children}</Button>;

CustomButton.defaultProps = {
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  loading: false,
  type: 'default',
};

export default CustomButton;
