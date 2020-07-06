import React from 'react'
import { Form } from 'antd'
import { FormItemProps } from 'antd/lib/form'

const { Item } = Form

const CustomFormItem: React.FunctionComponent<FormItemProps> = ({
  colon = true,
  hasFeedback = false,
  labelAlign = 'right' as FormItemProps['labelAlign'],
  noStyle = false,
  required = false,
  trigger = 'onChange',
  validateFirst = false,
  validateTrigger = 'onChange',
  valuePropName = 'value',
  ...props
}): React.ReactElement => (
  <Item
    colon={colon}
    hasFeedback={hasFeedback}
    labelAlign={labelAlign}
    noStyle={noStyle}
    required={required}
    trigger={trigger}
    validateFirst={validateFirst}
    validateTrigger={validateTrigger}
    valuePropName={valuePropName}
    {...props}
  >
    {props.children}
  </Item>
)

export default CustomFormItem
