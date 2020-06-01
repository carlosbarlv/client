import React from 'react';
import { Layout } from 'antd';
import { Props } from './CustomLayout';

const { Content } = Layout;

const CustomContent: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Content {...props}>{props.children}</Content>;

export default CustomContent;
