import React, { ReactNode } from 'react';
import { Menu } from 'antd';

const { Item } = Menu;

interface Props {
  disabled?: boolean;
  key?: string;
  title?: string | ReactNode;
  icon?: ReactNode;
  onClick?: (ev: any) => void;
}

const CustomMenuItem: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Item {...props}>{props.children}</Item>;

CustomMenuItem.defaultProps = {
  disabled: false,
};

export default CustomMenuItem;
