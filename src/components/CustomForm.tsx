import React, { ComponentType } from 'react';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib/form';

type NamePath = string | number | (string | number)[];

interface FieldData {
  touched: boolean;
  validating: boolean;
  errors: string[];
  name: NamePath;
  value: any;
}

interface Props {
  component?: ComponentType | false;
  colon?: boolean;
  fields?: FieldData[];
  form?: FormInstance;
  hideRequiredMark?: boolean;
  initialValues?: object;
  labelAlign?: 'left' | 'right';
  labelCol?: object;
  layout?: 'horizontal' | 'vertical' | 'inline';
  name?: string;
  scrollToFirstError?: boolean;
  size?: 'small' | 'middle' | 'large';
  validateMessages?: any;
  wrapperCol?: object;
  onValuesChange?: (...args: any) => void;
  onFieldsChange?: (...args: any) => void;
  onFinish?: (...args: any) => void;
  onFinishFailed?: (...args: any) => void;
}

const CustomForm: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Form {...props}>{props.children}</Form>;

export default CustomForm;
