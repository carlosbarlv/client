import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

export type CustomInputProps = InputProps

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  disabled = false,
  type = 'text',
  ...props
}): React.ReactElement => (
  <Input disabled={disabled} type={type} {...props}>
    {props.children}
  </Input>
)

export default CustomInput
