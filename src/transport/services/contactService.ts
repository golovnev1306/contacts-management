import transport from '../transport';
import ContactEntity, { Contact } from '../../common/types/entities/Contact';

class ContactService {
  static getAll() {
    return transport.get<ContactEntity[]>('/contacts').then(response => response.data)
  }

  static edit(contact: ContactEntity) {
    return transport.put<ContactEntity>(`/contacts/${contact.id}`, contact).then(response => response.data)
  }

  static create(contact: Contact) {
    return transport.post<ContactEntity>(`/contacts`, contact).then(response => response.data)
  }

  static delete(id: number) {
    return transport.delete(`/contacts/${id}`).then(response => response.data)
  }

}

export default ContactService;