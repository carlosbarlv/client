import React, { ReactNode } from 'react';
import { Button } from 'antd';

interface Props {
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: 'submit' | 'reset' | 'button';
  icon?: ReactNode;
  loading?: boolean | { delay: number };
  shape?: 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  target?: string;
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'default';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomButton: React.FunctionComponent<Props> = (
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
