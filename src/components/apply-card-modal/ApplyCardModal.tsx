import React from 'react';
import { Modal, ModalFuncProps } from 'antd';
import { Content, Title } from './style';
import './override.css';

const ApplyCardModal = (args?: ModalFuncProps) => {
  return Modal.confirm({
    title: (
      <Title>
        <div>!</div>
      </Title>
    ),
    icon: false,
    centered: true,
    width: 327,
    maskClosable: true,
    content: <Content>please apply for your first Karbon card!</Content>,
    okButtonProps: { block: true, style: { width: 287, borderRadius: 8 } },
    cancelButtonProps: { style: { display: 'none' } },
    okText: 'Apply for a card',
    closable: true,
    ...args,
  });
};

export default ApplyCardModal;
