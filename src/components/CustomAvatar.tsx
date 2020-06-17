import React from 'react';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';

type CustomAvatarProps = AvatarProps;

const CustomAvatar: React.FunctionComponent<CustomAvatarProps> = (
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
