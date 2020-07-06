import React from 'react'
import { Tabs } from 'antd'
import { TabsProps } from 'antd/lib/tabs'

const CustomTabs: React.FunctionComponent<TabsProps> = ({
  hideAdd = false,
  size = 'default',
  tabPosition = 'top',
  type = 'line',
  keyboard = true,
  ...props
}): React.ReactElement => (
  <Tabs
    hideAdd={hideAdd}
    size={size}
    tabPosition={tabPosition}
    type={type}
    keyboard={keyboard}
    {...props}
  >
    {props.children}
  </Tabs>
)

export default CustomTabs
