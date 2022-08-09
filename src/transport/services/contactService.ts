import transport from '../transport';
import Contact from '../../common/types/entities/Contact';

class ContactService {
  static getAll() {
    return transport.get<Contact[]>('/contacts').then(response => response.data)
  }
}

export default ContactService;