import React from 'react';
import { Layout } from 'antd';

export interface Props {
  className?: string;
  hasSider?: boolean;
  style?: React.CSSProperties;
}

const CustomLayout: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Layout {...props}>{props.children}</Layout>;

CustomLayout.defaultProps = {
  style: { height: '100%' },
};

export default CustomLayout;
