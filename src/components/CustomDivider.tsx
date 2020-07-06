import React from 'react'
import { Divider } from 'antd'
import { DividerProps } from 'antd/lib/divider'

const CustomDivider: React.FunctionComponent<DividerProps> = ({
  dashed = false,
  orientation = 'center',
  type = 'horizontal',
  plain = true,
  ...props
}): React.ReactElement => (
  <Divider
    dashed={dashed}
    orientation={orientation}
    type={type}
    plain={plain}
    {...props}
  >
    {props.children}
  </Divider>
)

CustomDivider.defaultProps = {
  dashed: false,
  orientation: 'center',
  type: 'horizontal',
  plain: true,
}

export default CustomDivider
