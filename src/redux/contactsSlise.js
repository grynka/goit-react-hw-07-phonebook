import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactsName = state.map(contact => contact.name);
        if (contactsName.includes(action.payload.name)) {
          alert(contactsName + ' allready exist');
          return;
        } else state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name: name,
            number: number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.filter(contact => contact.id !== action.payload.id);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
