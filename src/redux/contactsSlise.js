import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  extraReducers: {
[fetchContacts.pending]: handlePending,
[fetchContacts.fulfilled](state, action) {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
},

[fetchContacts.rejected] : handleRejected,
  
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

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

