import React from 'react';
import { Col } from 'antd';

interface Props {
  flex?: number | string;
  lg?: number | object;
  md?: number | object;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  sm?: number | object;
  span?: number;
  xl?: number | object;
  xs?: number | object;
  xxl?: number | object;
}

const CustomCol: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Col {...props}>{props.children}</Col>;

CustomCol.defaultProps = {
  flex: 0,
  lg: {},
  md: {},
  offset: 0,
  order: 0,
  pull: 0,
  push: 0,
  sm: {},
  span: 0,
  xl: {},
  xs: {},
  xxl: {},
};

export default CustomCol;
