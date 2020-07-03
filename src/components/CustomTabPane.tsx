import React from 'react'
import { Tabs } from 'antd'
import { TabPaneProps } from 'antd/lib/tabs'

const { TabPane } = Tabs

type CustomTabPaneProps = TabPaneProps

const CustomTabPane: React.FunctionComponent<CustomTabPaneProps> = ({
  forceRender = false,
  ...props
}): React.ReactElement => (
  <TabPane forceRender={forceRender} {...props}>
    {props.children}
  </TabPane>
)

export default CustomTabPane
