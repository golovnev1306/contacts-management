import { all, call, put, takeLeading } from "redux-saga/effects";
import {
  createContact,
  deleteContact,
  editContact,
  fetchContacts,
  setContacts,
  setIsContactsLoading,
} from './contactSlice';
import ContactEntity, { Contact } from '../../common/types/entities/Contact';
import ContactService from '../../transport/services/contactService';
import { PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';

function* fetchContactsWorker() {
  try {
    yield put(setIsContactsLoading(true));
    const contacts: ContactEntity[] = yield call(ContactService.getAll);
    yield put(setContacts(contacts));

  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsContactsLoading(false));
  }
}

function* editContactWorker({ payload: contact }: PayloadAction<ContactEntity>) {
  try {
    yield put(setIsContactsLoading(true));
    yield call(ContactService.edit, contact);
    message.success('successfully edited');
    yield put(fetchContacts());
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsContactsLoading(false));
  }
}

function* createContactWorker({ payload: contact }: PayloadAction<Contact>) {
  try {
    yield put(setIsContactsLoading(true));
    yield call(ContactService.create, contact);
    message.success('successfully created');
    yield put(fetchContacts());
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsContactsLoading(false));
  }
}

function* deleteContactWorker({ payload: id }: PayloadAction<number>) {
  try {
    yield put(setIsContactsLoading(true));
    yield call(ContactService.delete, id);
    message.success('successfully deleted');
    yield put(fetchContacts());
  } catch (e) {
    console.warn(e);
  } finally {
    yield put(setIsContactsLoading(false));
  }
}

export function* contactWatcher() {
  yield all([
    takeLeading(fetchContacts, fetchContactsWorker),
    takeLeading(editContact, editContactWorker),
    takeLeading(createContact, createContactWorker),
    takeLeading(deleteContact, deleteContactWorker),
  ])
}