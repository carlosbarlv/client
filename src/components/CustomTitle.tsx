import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
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
  ellipsis?:
    | boolean
    | {
        rows?: number;
        expandable?: boolean;
        suffix?: string;
        onExpand?: React.MouseEventHandler<HTMLElement>;
        onEllipsis?: (ellipsis: boolean) => void;
      };
  level?: 1 | 2 | 3 | 4;
  mark?: boolean;
  onChange?: (value: string) => void;
  type?: 'secondary' | 'warning' | 'danger';
  underlined?: boolean;
}

const CustomTitle: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Title {...props}>{props.children}</Title>;

CustomTitle.defaultProps = {
  code: false,
  copyable: false,
  delete: false,
  disabled: false,
  editable: false,
  ellipsis: false,
  level: 1,
  mark: false,
  onChange: () => {},
  underlined: false,
};

export default CustomTitle;
