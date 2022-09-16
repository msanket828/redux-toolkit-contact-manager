import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: 1,
      fullName: 'saknet mane',
      contactNumber: 9082675567,
      emailId: 'sanketmane159@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contactslice',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const deleteIndex = state.contacts.findIndex((contact) => contact.id === action.payload)
      state.contacts.splice(deleteIndex, 1);
    },
    updateContact(state,action) {
      const deleteIndex=state.contacts.findIndex((contact)=> contact.id === action.payload.id);
      state.contacts.splice(deleteIndex,1,action.payload);
    }
  }
})

export const { addContacts, deleteContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;

