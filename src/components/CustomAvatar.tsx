import React, { ReactNode } from 'react';
import { Avatar } from 'antd';

interface Props {
  icon?: ReactNode;
  shape?: 'circle' | 'square';
  size?: number | 'large' | 'small' | 'default';
  src?: string;
  srcSet?: string;
  alt?: string;
  onError?: () => boolean;
}

const CustomAvatar: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Avatar {...props}>{props.children}</Avatar>;

CustomAvatar.defaultProps = {
  shape: 'circle',
  size: 'default',
  src: '',
  srcSet: '',
  alt: '',
  onError: () => false,
};

export default CustomAvatar;
