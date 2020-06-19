import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

type CustomButtonProps = ButtonProps;

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  loading = false,
  type = 'default',
  ...props
}): React.ReactElement => (
  <Button
    block={block}
    danger={danger}
    disabled={disabled}
    ghost={ghost}
    loading={loading}
    type={type}
    {...props}
  >
    {props.children}
  </Button>
);

export default CustomButton;
