import React from 'react';
import RadioGroup from 'antd/lib/radio/group';
import { RadioGroupProps } from 'antd/lib/radio';

const CustomRadioGroup: React.FunctionComponent<RadioGroupProps> = ({
  ...props
}): React.ReactElement => <RadioGroup {...props}>{props.children}</RadioGroup>;

export default CustomRadioGroup;
