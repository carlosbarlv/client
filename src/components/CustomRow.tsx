import React from 'react';
import { Row } from 'antd';
import { RowProps } from 'antd/lib/row';

type CustomRowProps = RowProps;

const CustomRow: React.FunctionComponent<CustomRowProps> = (
  props
): React.ReactElement => <Row {...props}>{props.children}</Row>;

CustomRow.defaultProps = {
  align: 'middle',
  gutter: 0,
  justify: 'end',
};

export default CustomRow;
