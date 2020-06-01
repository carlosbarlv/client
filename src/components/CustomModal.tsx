import React, { ReactNode } from 'react';
import { Modal } from 'antd';

interface Props {
  bodyStyle?: object;
  content?: string | ReactNode;
  cancelButtonProps?: object;
  cancelText?: string | ReactNode;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  confirmLoading?: boolean;
  destroyOnClose?: boolean;
  footer?: string | ReactNode;
  forceRender?: boolean;
  getContainer?: string | HTMLElement | false | null;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: object;
  okButtonProps?: object;
  okText?: string | ReactNode;
  okType?: 'primary' | 'link' | 'default' | 'ghost' | 'dashed' | 'danger';
  style?: object;
  title?: string | ReactNode;
  visible?: boolean;
  width?: string | number;
  wrapClassName?: string;
  zIndex?: number;
  afterClose?: () => {};
  onCancel?: (e: React.MouseEvent<Element>) => {};
  onOk?: (e: React.MouseEvent<Element>) => {};
}

const CustomModal: React.FunctionComponent<Props> = (
  props
): React.ReactElement => <Modal {...props}>{props.children}</Modal>;

CustomModal.defaultProps = {
  bodyStyle: {},
  cancelText: 'Cancel',
  centered: false,
  closable: false,
  confirmLoading: false,
  destroyOnClose: false,
  forceRender: false,
  mask: true,
  maskClosable: true,
  maskStyle: {},
  okText: 'OK',
  okType: 'primary',
  visible: false,
  width: 520,
  zIndex: 1000,
};

export default CustomModal;
