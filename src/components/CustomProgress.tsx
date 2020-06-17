import React from 'react';
import { Progress } from 'antd';
import { ProgressProps } from 'antd/lib/progress';

type CustomProgressProps = ProgressProps;

const CustomProgress: React.FunctionComponent<CustomProgressProps> = (
  props
): React.ReactElement => <Progress {...props}>{props.children}</Progress>;

CustomProgress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  strokeLinecap: 'round',
  successPercent: 0,
  strokeWidth: 10,
};

export default CustomProgress;
