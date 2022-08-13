import ContactEntity from '../../../common/types/entities/Contact';

export type ContactItemProps = {
  contact: ContactEntity
  onEditClick: (contact: ContactEntity) => void
  onDeleteConfirm: (id: number) => void
  onShowClick: (contact: ContactEntity) => void
}