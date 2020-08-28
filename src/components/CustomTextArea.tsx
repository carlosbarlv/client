import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'

const { TextArea } = Input

const CustomTextArea: React.FunctionComponent<TextAreaProps> = ({
  rows = 4,
  ...props
}): React.ReactElement => <TextArea rows={rows} {...props}></TextArea>

export default CustomTextArea
