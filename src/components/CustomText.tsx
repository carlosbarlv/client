import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface CustomTextProps {
  code?: boolean;
  copyable?: boolean | { text: string; onCopy: () => void };
  delete?: boolean;
  disabled?: boolean;
  editable?:
    | boolean
    | {
        editing: boolean;
        onStart: () => void;
        onChange: (value: string) => void;
      };
  ellipsis?: boolean;
  mark?: boolean;
  underline?: boolean;
  onChange?: (value: string) => void;
  strong?: boolean;
  type?: 'secondary' | 'warning' | 'danger';
}

const CustomText: React.FunctionComponent<CustomTextProps> = (
  props
): React.ReactElement => <Text {...props}>{props.children}</Text>;

CustomText.defaultProps = {
  code: false,
  copyable: false,
  delete: false,
  disabled: false,
  editable: false,
  ellipsis: false,
  mark: false,
  underline: false,
  onChange: () => {},
  strong: false,
};

export default CustomText;
