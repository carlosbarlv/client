import React from 'react';
import Search, { SearchProps } from 'antd/lib/input/Search';

type CustomSearchProps = SearchProps;

const CustomSearch: React.FunctionComponent<CustomSearchProps> = ({
  ...props
}) => <Search {...props}>{props.children}</Search>;

export default CustomSearch;
