import React from 'react';
import { Layout } from 'antd';
import { SiderProps } from 'antd/lib/layout';

const { Sider } = Layout;

type CustomSiderProps = SiderProps;

const CustomSider: React.FunctionComponent<CustomSiderProps> = (
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
