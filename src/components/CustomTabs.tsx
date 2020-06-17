import React from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd/lib/tabs';

type CustomTabsProps = TabsProps;

const CustomTabs: React.FunctionComponent<CustomTabsProps> = (
  props
): React.ReactElement => <Tabs {...props}>{props.children}</Tabs>;

CustomTabs.defaultProps = {
  hideAdd: false,
  size: 'default',
  tabPosition: 'top',
  type: 'line',
  keyboard: true,
};

export default CustomTabs;
