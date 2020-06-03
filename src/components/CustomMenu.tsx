import React from 'react';
import { Menu } from 'antd';
import { ClickParam, SelectParam } from 'antd/lib/menu';

interface Props {
  defaultOpenKeys?: Array<string>;
  defaultSelectedKeys?: Array<string>;
  forceSubMenuRender?: boolean;
  inlineCollapsed?: boolean;
  inlineIndent?: number;
  mode?: 'vertical' | 'horizontal' | 'inline';
  multiple?: boolean;
  openKeys?: Array<string>;
  selectable?: boolean;
  selectedKeys?: Array<string>;
  style?: React.CSSProperties;
  subMenuCloseDelay?: number;
  subMenuOpenDelay?: number;
  theme?: 'dark' | 'light';
  onClick?: (param: ClickParam) => void;
  onDeselect?: (param: SelectParam) => void;
  onOpenChange?: (openKeys: string[]) => void;
  onSelect?: (param: SelectParam) => void;
  overflowedIndicator?: React.ReactNode;
}

const CustomMenu: React.FunctionComponent<Props> = (
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
