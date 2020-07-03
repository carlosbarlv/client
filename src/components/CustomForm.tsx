import React from 'react'
import { Form } from 'antd'
import { FormProps } from 'antd/lib/form'

type CustomFormProps = FormProps

const CustomForm: React.FunctionComponent<CustomFormProps> = (
  props
): React.ReactElement => <Form {...props}>{props.children}</Form>

export default CustomForm
