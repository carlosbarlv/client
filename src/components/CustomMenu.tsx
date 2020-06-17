import React from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';

type CustomMenuProps = MenuProps;

const CustomMenu: React.FunctionComponent<CustomMenuProps> = (
  props
): React.ReactElement => <Menu {...props}>{props.children}</Menu>;

CustomMenu.defaultProps = {
  forceSubMenuRender: false,
  inlineIndent: 24,
  mode: 'vertical',
  multiple: false,
  selectable: true,
  subMenuCloseDelay: 0.1,
  subMenuOpenDelay: 0,
  theme: 'light',
};

export default CustomMenu;
