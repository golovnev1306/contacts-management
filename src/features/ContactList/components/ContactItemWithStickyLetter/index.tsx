import React, { FC } from 'react';
import { List } from 'antd';
import ContactItem from '../ContactItem';
import { ContactItemProps } from '../../types';
import ContactEntity from '../../../../common/types/entities/Contact';

type ContactItemWithStickyLetterProps = ContactItemProps & {
  index: number
  contacts: ContactEntity[]
}

const ContactItemWithStickyLetter: FC<ContactItemWithStickyLetterProps> = ({
   contacts,
   index,
   ...contactItemProps
}) => {

  return (
    <>
      {(index === 0 || (contacts[index - 1].name[0] !== contactItemProps.contact.name[0])) && (
        <List.Item
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 50,
          }}
        >
          {contactItemProps.contact.name[0].toUpperCase()}
        </List.Item>
      )}
      <ContactItem {...contactItemProps} />
    </>
  );
}

export default ContactItemWithStickyLetter;