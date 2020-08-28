import React from 'react'
import DatePicker, { DatePickerProps } from 'antd/lib/date-picker'
import localeProp from 'antd/es/date-picker/locale/es_ES'
import 'moment/locale/es'

type CustomDatePickerProps = DatePickerProps & {
  locale?: object
}

const CustomDatePicker: React.FunctionComponent<CustomDatePickerProps> = ({
  locale = localeProp,
  ...props
}): React.ReactElement => {
  return (
    <DatePicker locale={locale} {...props}>
      {props.children}
    </DatePicker>
  )
}

export default CustomDatePicker
