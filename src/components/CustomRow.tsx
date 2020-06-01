import React from 'react';
import { Row } from 'antd';

interface Props {
  align?: 'top' | 'middle' | 'bottom';
  gutter?: number | object;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
}

const CustomRow: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Row {...props}>{props.children}</Row>;

CustomRow.defaultProps = {
  align: 'middle',
  gutter: 0,
  justify: 'end',
};

export default CustomRow;
