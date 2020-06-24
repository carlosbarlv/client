import React from 'react';
import RadioGroup from 'antd/lib/radio/group';
import { RadioGroupProps } from 'antd/lib/radio';

type CustomRadioGroupProps = RadioGroupProps;

const CustomRadioGroup: React.FunctionComponent<CustomRadioGroupProps> = ({
  ...props
}): React.ReactElement => <RadioGroup {...props}>{props.children}</RadioGroup>;

export default CustomRadioGroup;
