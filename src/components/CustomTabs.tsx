import React from 'react'
import { Tabs } from 'antd'
import { TabsProps } from 'antd/lib/tabs'

type CustomTabsProps = TabsProps

const CustomTabs: React.FunctionComponent<CustomTabsProps> = ({
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
