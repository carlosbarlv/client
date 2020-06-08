import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

type CustomModalProps = ModalProps;

const CustomModal: React.FunctionComponent<CustomModalProps> = (
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
