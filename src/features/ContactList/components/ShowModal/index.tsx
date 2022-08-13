import { FC } from 'react';
import { Modal, Image, Descriptions } from 'antd';
import FlexBox from '../../../../common/components/FlexBox';
import ContactEntity from '../../../../common/types/entities/Contact';
import defaultUser from '../../../../common/assets/default-user.png';

type ShowModalProps = {
  visible: boolean
  onClose: VoidFunction
  contact?: ContactEntity | null
}

const ShowModal: FC<ShowModalProps> = ({ contact, visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      title={contact?.name}
      footer={false}
      width={300}
    >
      <FlexBox direction={'column'} gap={'40px'}>
        {!contact?.email && !contact?.phone && !contact?.photo && (
          <span>Нет контактов</span>
        )}
        {contact?.photo && (
          <Image
            width={'100%'}
            src={contact?.photo}
            fallback={defaultUser}
            style={{
              objectFit: 'cover',
              borderRadius: '2px',
              maxHeight: '200px',
            }}
          />
        )}
        {(contact?.email || contact?.phone) && (
          <Descriptions title="Contacts" column={1}>
            {contact?.email && <Descriptions.Item label="Email">{contact?.email}</Descriptions.Item>}
            {contact?.phone && <Descriptions.Item label="Phone">{contact?.phone}</Descriptions.Item>}
          </Descriptions>
        )}
      </FlexBox>
    </Modal>
  )
}

export default ShowModal;