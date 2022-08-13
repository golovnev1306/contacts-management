import React, { FC, useMemo } from 'react';
import { Avatar, List, Modal } from 'antd';
import defaultUser from '../../../../common/assets/default-user.png';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, EyeOutlined } from '@ant-design/icons';
import ContactEntity from '../../../../common/types/entities/Contact';
import ButtonWithTooltip from '../../../../common/components/ButtonWithTooltip';

type ContactItemProps = {
  contact: ContactEntity
  onEditClick: (contact: ContactEntity) => void
  onDeleteConfirm: (id: number) => void
  onShowClick: (contact: ContactEntity) => void
}

const ContactItem: FC<ContactItemProps> = ({ contact, onEditClick, onDeleteConfirm, onShowClick }) => {
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      content: `Are you sure you want to delete contact "${contact.name}"`,
      onOk() {
        onDeleteConfirm(contact.id);
      },
      icon: <ExclamationCircleOutlined />,
      title: 'Warning',
    });
  }

  const actions = useMemo(() => {
    return [
      <ButtonWithTooltip
        title={'Show'}
        onClick={() => onShowClick(contact)}
        icon={<EyeOutlined />}
      />,
      <ButtonWithTooltip
        title={'Edit'}
        onClick={() => onEditClick(contact)}
        icon={<EditOutlined />}
      />,
      <ButtonWithTooltip
        title={'Delete'}
        onClick={showConfirm}
        icon={<DeleteOutlined />}
      />,
    ]
  }, [contact])

  return (
    <List.Item actions={actions}>
      <List.Item.Meta
        avatar={<Avatar src={contact.photo || defaultUser} />}
        title={contact.name}
        description={contact.email}
      />
    </List.Item>
  );
}

export default ContactItem;