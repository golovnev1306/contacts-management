import {
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import ContactEntity, { Contact } from '../../common/types/entities/Contact';

const initialState = {
  contacts: [] as ContactEntity[],
  isLoading: false,
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState,
  reducers: {
    setContacts(
      state,
      { payload: contacts }: PayloadAction<ContactEntity[]>,
    ) {
      state.contacts = contacts;
    },

    setIsContactsLoading(
      state,
      { payload: isLoading }: PayloadAction<boolean>,
    ) {
      state.isLoading = isLoading;
    },
  },
});

export const fetchContacts = createAction('contactSlice/fetchContacts');
export const editContact = createAction<ContactEntity>('contactSlice/editContact');
export const createContact = createAction<Contact>('contactSlice/createContact');
export const deleteContact = createAction<number>('contactSlice/deleteContact');

export const {
  setIsContactsLoading,
  setContacts,
} = contactSlice.actions;

export const contact = contactSlice.reducer;
