import React, { ReactNode } from 'react';
import { Form } from 'antd';
import { Rule } from 'antd/lib/form';

const { Item } = Form;

type NamePath = string | number | (string | number)[];

interface Props {
  colon?: boolean;
  dependencies?: NamePath[];
  extra?: string | ReactNode;
  getValueFromEvents?: (...args: any[]) => any;
  getValueProps?: (value: any) => any;
  hasFeedback?: boolean;
  help?: string | ReactNode;
  htmlFor?: string;
  initialValue?: string;
  label?: string | ReactNode;
  labelAlign?: 'left' | 'right';
  labelCol?: object;
  name?: NamePath;
  normalize?: (value: any, prevValue: any, allValues: any) => any;
  noStyle?: boolean;
  required?: boolean;
  rules?: Rule[];
  shouldUpdate?: (prevValue: any, curValue: any) => boolean | boolean;
  trigger?: string;
  validateFirst?: boolean;
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
  validateTrigger?: string | string[];
  valuePropName?: string;
  wrapperCol?: object;
}

const CustomRow: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Item {...props}>{props.children}</Item>;

CustomRow.defaultProps = {
  colon: true,
  hasFeedback: false,
  labelAlign: 'right' as Props['labelAlign'],
  noStyle: false,
  required: false,
  trigger: 'onChange',
  validateFirst: false,
  validateTrigger: 'onChange',
  valuePropName: 'value',
};

export default CustomRow;
