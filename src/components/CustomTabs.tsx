import React from 'react';
import { Tabs } from 'antd';
import {} from 'antd/lib/tabs';

interface IProps {
  activeKey?: string;
  animated?: boolean | { inkBar: boolean; tabPane: boolean };
  renderTabBar?: (
    props: any,
    DefaultTabBar: React.ComponentClass
  ) => React.ReactElement;
  defaultActiveKey?: string;
  hideAdd?: boolean;
  size?: 'large' | 'default' | 'small';
  tabBarExtraContent?: React.ReactNode;
  tabBarGutter?: number;
  tabBarStyle?: object;
  tabPosition?: 'top' | 'right' | 'bottom' | 'left';
  type?: 'line' | 'card' | 'editable-card';
  onChange?: (activeKey: any) => void;
  onEdit?: (targetKey: any, action: any) => void;
  onTabClick?: (key: string, event: MouseEvent) => void;
  onTabScroll?: { direction: 'left' | 'right' | 'top' | 'bottom' };
  keyboard?: boolean;
}

const CustomTabs: React.FunctionComponent<IProps> = (
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
