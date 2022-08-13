import ContactEntity from '../../../common/types/entities/Contact';
import { useMemo } from 'react';
import isObjectHasSubStringInValues from '../helpers/isObjectHasSubStringInValues';

type UseProcessContacts = {
  contacts: ContactEntity[]
  search?: string
}

const useProcessContacts = ({ contacts, search }: UseProcessContacts) => {
  const foundContacts = useMemo(() => {
    if (!search) {
      return [...contacts];
    }
    return contacts.filter(
      (contact) => isObjectHasSubStringInValues(contact, search, ['name', 'email', 'phone'])
    )
  }, [search, contacts]);


  return useMemo(() => {
    return [...foundContacts]
      .sort(
        (a, b) => a.name[0].toLowerCase() > b.name[0].toLowerCase() ? 1 : -1
      );
  }, [foundContacts]);
}

export default useProcessContacts;