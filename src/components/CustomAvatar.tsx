import React from 'react'
import { Avatar } from 'antd'
import { AvatarProps } from 'antd/lib/avatar'

type CustomAvatarProps = AvatarProps

const CustomAvatar: React.FunctionComponent<CustomAvatarProps> = ({
  alt = '',
  onError = () => false,
  shape = 'circle',
  size = 'default',
  src = '',
  srcSet = '',
  ...props
}): React.ReactElement => (
  <Avatar
    alt={alt}
    onError={onError}
    shape={shape}
    size={size}
    src={src}
    srcSet={srcSet}
    {...props}
  >
    {props.children}
  </Avatar>
)

export default CustomAvatar
