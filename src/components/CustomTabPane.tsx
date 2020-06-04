import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IProps {
  forceRender?: boolean;
  key?: string;
  tab?: string | React.ReactNode;
  closeIcon?: React.ReactNode;
}

const CustomTabPane: React.FunctionComponent<IProps> = (
  props
): React.ReactElement => <TabPane {...props}>{props.children}</TabPane>;

CustomTabPane.defaultProps = {
  forceRender: false,
};

export default CustomTabPane;
