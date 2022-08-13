import React, { FC } from 'react';
import PageContentLayout from '../../common/components/PageContentLayout';
import { Input, List } from 'antd';
import useContactList from './hooks/useContactList';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import ActionModal from './components/ActionModal';
import ShowModal from './components/ShowModal';
import FlexBox from '../../common/components/FlexBox';
import ContactItemWithStickyLetter from './components/ContactItemWithStickyLetter';
import ButtonWithTooltip from '../../common/components/ButtonWithTooltip';

const ContactList: FC = () => {
  const {
    processedContacts,
    currentContact,
    editModal,
    createModal,
    showModal,
    onCreate,
    onEdit,
    onDelete,
    setSearch,
    search,
  } = useContactList();

  return (
    <PageContentLayout
      title={'Contact List'}
      actions={(
        <FlexBox gap={'20px'}>
          <Input
            prefix={<SearchOutlined />}
            placeholder={'Search'}
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            allowClear
          />
          <ButtonWithTooltip
            title={'Create'}
            onClick={createModal.onShowCreateModal}
            icon={<PlusOutlined />}
          />
        </FlexBox>
      )}
    >
      <div style={{width: '100%', overflowY: 'auto'}}>
        <List
          dataSource={processedContacts}
          renderItem={(contact, index) => (
            <ContactItemWithStickyLetter
              contact={contact}
              contacts={processedContacts}
              index={index}
              onShowClick={showModal.onShowShowModal}
              onEditClick={editModal.onShowEditModal}
              onDeleteConfirm={onDelete}
              key={contact.id}
            />
          )}
        />
      </div>

      <ActionModal
        title={'Editing'}
        contact={currentContact}
        onSubmit={onEdit}
        visible={editModal.visibleEditModal}
        onClose={editModal.onCloseEditModal}
      />
      <ActionModal
        title={'Creating'}
        onSubmit={onCreate}
        visible={createModal.visibleCreateModal}
        onClose={createModal.onCloseCreateModal}
      />
      <ShowModal
        contact={currentContact}
        onClose={showModal.onCloseShowModal}
        visible={showModal.visibleShowModal}
      />
    </PageContentLayout>
  )
}

export default  ContactList;