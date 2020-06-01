import React from 'react';
import { Progress } from 'antd';

interface Props {
  type?: 'line' | 'circle' | 'dashboard';
  format?: (percent?: number, successPercent?: number) => React.ReactNode;
  percent?: number;
  showInfo?: boolean;
  status?: 'success' | 'exception' | 'normal' | 'active';
  strokeLinecap?: 'round' | 'square';
  strokeColor?: string | {};
  successPercent?: number;
  trailColor?: string;
  strokeWidth?: number;
  steps?: number;
  width?: number;
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const CustomProgress: React.FunctionComponent<Props> = (
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
