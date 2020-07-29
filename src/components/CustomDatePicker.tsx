import React from 'react'
import DatePicker, { DatePickerProps } from 'antd/lib/date-picker'

const CustomDatePicker: React.FunctionComponent<DatePickerProps> = ({
  ...props
}): React.ReactElement => {
  return <DatePicker {...props}>{props.children}</DatePicker>
}

export default CustomDatePicker
