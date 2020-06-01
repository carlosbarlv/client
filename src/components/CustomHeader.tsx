import React from 'react';
import { Layout } from 'antd';
import { Props } from './CustomLayout';

const { Header } = Layout;

const CustomHeader: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Header {...props}>{props.children}</Header>;

export default CustomHeader;
