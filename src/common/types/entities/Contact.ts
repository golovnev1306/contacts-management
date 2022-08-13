import Entity from '../Entity';

export type Contact = {
  name: string
  phone?: string
  photo?: string
  email?: string
}

type ContactEntity = Entity & Contact

export default ContactEntity;