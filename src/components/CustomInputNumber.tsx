import React from 'react'
import InputNumber, { InputNumberProps } from 'antd/lib/input-number'

const CustomInputNumber: React.FunctionComponent<InputNumberProps> = ({
  ...props
}): React.ReactElement => <InputNumber {...props}>{props.children}</InputNumber>

export default CustomInputNumber
