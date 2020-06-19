import React, { ReactNode } from 'react';
import { Menu } from 'antd';

const { Item } = Menu;

interface CustomMenuItemProps {
  disabled?: boolean;
  key?: string;
  title?: string | ReactNode;
  icon?: ReactNode;
  onClick?: (ev: any) => void;
}

const CustomMenuItem: React.FunctionComponent<CustomMenuItemProps> = ({
  disabled = false,
  ...props
}): React.ReactElement => (
  <Item disabled={disabled} {...props}>
    {props.children}
  </Item>
);

CustomMenuItem.defaultProps = {
  disabled: false,
};

export default CustomMenuItem;
