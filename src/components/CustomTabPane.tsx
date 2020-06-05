import React from 'react';
import { Tabs } from 'antd';
import { TabPaneProps } from 'antd/lib/tabs';

const { TabPane } = Tabs;

type CustomTabPaneProps = TabPaneProps & {};

const CustomTabPane: React.FunctionComponent<CustomTabPaneProps> = (
  props
): React.ReactElement => <TabPane {...props}>{props.children}</TabPane>;

CustomTabPane.defaultProps = {
  forceRender: false,
};

export default CustomTabPane;
