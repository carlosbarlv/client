import React, { ReactNode } from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

type CollapseType = 'clickTrigger' | 'responsive';

interface Props {
  breakpoints?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  collapsed?: boolean;
  collapsedWidth?: number;
  collapsible?: boolean;
  reverseArrow?: boolean;
  style?: React.CSSProperties;
  theme?: 'light' | 'dark';
  trigger?: string | ReactNode;
  width?: number | string;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  onBreakpoint?: (broken: boolean) => void;
  zeroWidthTriggerStyle?: object;
}

const CustomSider: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Sider {...props}>{props.children}</Sider>;

CustomSider.defaultProps = {
  collapsedWidth: 80,
  collapsible: false,
  reverseArrow: false,
  theme: 'dark',
  width: 200,
};

export default CustomSider;
