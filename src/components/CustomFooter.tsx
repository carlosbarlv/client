import React from 'react';
import { Layout } from 'antd';
import { Props } from './CustomLayout';

const { Footer } = Layout;

const CustomFooter: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Footer {...props}>{props.children}</Footer>;

export default CustomFooter;
