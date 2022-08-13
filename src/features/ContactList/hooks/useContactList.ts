import useAppDispatch from '../../../common/hooks/useAppDispatch';
import useAppSelector from '../../../common/hooks/useAppSelector';
import { useCallback, useEffect, useState } from 'react';
import { createContact, deleteContact, editContact, fetchContacts } from '../../../store/contact/contactSlice';
import useAppLoading from '../../../common/hooks/useAppLoading';
import useContactModals from './useContactModals';
import ContactEntity, { Contact } from '../../../common/types/entities/Contact';
import useProcessContacts from './useProcessContacts';

const useContactList = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading } = useAppSelector(state => state.contact);
  const [currentContact, setCurrentContact] = useState<ContactEntity | null>(null);
  const [search, setSearch] = useState<string>();

  useAppLoading(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const processedContacts = useProcessContacts({
    contacts,
    search,
  });

  const { editModal, createModal, showModal } = useContactModals({
    setCurrentContact,
  });

  const onEdit = useCallback((contact: ContactEntity) => {
    if (currentContact?.id) {
      dispatch(editContact({...contact, id: currentContact.id}));
      setCurrentContact(null);
      editModal.closeEditModal();
    }
  }, [editModal.closeEditModal, setCurrentContact, currentContact]);

  const onCreate = useCallback((contact: Contact) => {
    dispatch(createContact(contact));
    createModal.onCloseCreateModal();
  }, [createModal.onCloseCreateModal, dispatch]);

  const onDelete = useCallback((id: number) => {
    dispatch(deleteContact(id));
  }, [dispatch]);

  return {
    editModal,
    createModal,
    showModal,
    currentContact,
    onEdit,
    onCreate,
    onDelete,
    setSearch,
    search,
    processedContacts,
  }
}

export default useContactList;