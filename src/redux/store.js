import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
