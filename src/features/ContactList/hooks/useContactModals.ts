import useVisible from '../../../common/hooks/useVisible';
import { useCallback } from 'react';
import Contact from '../../../common/types/entities/Contact';

type UseContactModals = {
  setCurrentContact: (contact: Contact | null) => void
}

const useContactModals = ({
  setCurrentContact
}: UseContactModals) => {
  const [visibleEditModal, showEditModal, closeEditModal] = useVisible();
  const [visibleCreateModal, onShowCreateModal, onCloseCreateModal] = useVisible();
  const [visibleShowModal, showShowModal, closeShowModal] = useVisible();

  const onShowEditModal = useCallback((contact: Contact) => {
    setCurrentContact(contact);
    showEditModal();
  }, [showEditModal, setCurrentContact]);

  const onCloseEditModal = useCallback(() => {
    setCurrentContact(null);
    closeEditModal();
  }, [closeEditModal, setCurrentContact]);

  const onShowShowModal = useCallback((contact: Contact) => {
    setCurrentContact(contact);
    showShowModal();
  }, [showShowModal, setCurrentContact]);

  const onCloseShowModal = useCallback(() => {
    setCurrentContact(null);
    closeShowModal();
  }, [closeShowModal, setCurrentContact]);

  return {
    editModal: {
      visibleEditModal,
      onShowEditModal,
      onCloseEditModal,
      closeEditModal,
    },
    createModal: {
      visibleCreateModal,
      onShowCreateModal,
      onCloseCreateModal,
    },
    showModal: {
      visibleShowModal,
      onShowShowModal,
      onCloseShowModal,
    }
  }
}

export default useContactModals;