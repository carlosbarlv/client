import React from 'react'
import { Col } from 'antd'
import { ColProps } from 'antd/lib/col'

type CustomColProps = ColProps

const CustomCol: React.FunctionComponent<CustomColProps> = ({
  flex = 0,
  lg = {},
  md = {},
  offset = 0,
  order = 0,
  pull = 0,
  push = 0,
  sm = {},
  span = 0,
  xl = {},
  xs = {},
  xxl = {},
  ...props
}): React.ReactElement => (
  <Col
    flex={flex}
    lg={lg}
    md={md}
    offset={offset}
    order={order}
    pull={pull}
    push={push}
    sm={sm}
    span={span}
    xl={xl}
    xs={xs}
    xxl={xxl}
    {...props}
  >
    {props.children}
  </Col>
)

export default CustomCol
