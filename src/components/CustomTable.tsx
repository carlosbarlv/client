import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';

const CustomTable: React.FunctionComponent<TableProps<any>> = ({
  ...props
}): React.ReactElement => <Table {...props}>{props.children}</Table>;

export default CustomTable;
