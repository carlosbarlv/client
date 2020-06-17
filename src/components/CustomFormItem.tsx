import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

const { Item } = Form;

type CustomFormItemProps = FormItemProps;

const CustomFormItem: React.FunctionComponent<CustomFormItemProps> = (
  props
): React.ReactElement => <Item {...props}>{props.children}</Item>;

CustomFormItem.defaultProps = {
  colon: true,
  hasFeedback: false,
  labelAlign: 'right' as CustomFormItemProps['labelAlign'],
  noStyle: false,
  required: false,
  trigger: 'onChange',
  validateFirst: false,
  validateTrigger: 'onChange',
  valuePropName: 'value',
};

export default CustomFormItem;
