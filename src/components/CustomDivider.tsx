import React from 'react';
import { Divider } from 'antd';
import { DividerProps } from 'antd/lib/divider';

type CustomDividerProps = DividerProps;

const CustomDivider: React.FunctionComponent<DividerProps> = (
  props
): React.ReactElement => <Divider {...props}>{props.children}</Divider>;

CustomDivider.defaultProps = {
  dashed: false,
  orientation: 'center',
  type: 'horizontal',
  plain: true,
};

export default CustomDivider;
