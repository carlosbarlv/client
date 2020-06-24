import React from 'react';
import { Radio } from 'antd';
import { RadioProps } from 'antd/lib/radio';

type CustomRadioProps = RadioProps;

const CustomRadio: React.FunctionComponent<CustomRadioProps> = ({
  ...props
}): React.ReactElement => <Radio {...props}>{props.children}</Radio>;

export default CustomRadio;
