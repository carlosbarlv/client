import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';

type CustomTableProps = TableProps<any>;

const CustomTable: React.FunctionComponent<CustomTableProps> = ({
  ...props
}): React.ReactElement => {
  return <Table {...props}>{props.children}</Table>;
};

export default CustomTable;
