import React from 'react';
import { Progress } from 'antd';
import { ProgressProps } from 'antd/lib/progress';

type CustomProgressProps = ProgressProps;

const CustomProgress: React.FunctionComponent<CustomProgressProps> = ({
  type = 'line',
  percent = 0,
  showInfo = true,
  strokeLinecap = 'round',
  successPercent = 0,
  strokeWidth = 10,
  ...props
}): React.ReactElement => (
  <Progress
    type={type}
    percent={percent}
    showInfo={showInfo}
    strokeLinecap={strokeLinecap}
    successPercent={successPercent}
    strokeWidth={strokeWidth}
    {...props}
  >
    {props.children}
  </Progress>
);

export default CustomProgress;
