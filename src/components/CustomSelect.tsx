import React from 'react'
import Select, { SelectProps } from 'antd/lib/select'

const CustomSelect: React.FunctionComponent<SelectProps<string | number>> = ({
  ...props
}): React.ReactElement => {
  return <Select {...props}>{props.children}</Select>
}

export default CustomSelect
