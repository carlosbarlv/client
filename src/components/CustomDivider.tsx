import React from 'react';
import { Divider } from 'antd';

interface Props {
  className?: string;
  dashed?: boolean;
  orientation?: 'left' | 'right' | 'center';
  style?: React.CSSProperties;
  type?: 'horizontal' | 'vertical';
  plain?: boolean;
}

const CustomDivider: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Divider {...props}>{props.children}</Divider>;

CustomDivider.defaultProps = {
  dashed: false,
  orientation: 'center',
  type: 'horizontal',
  plain: true,
};

export default CustomDivider;
