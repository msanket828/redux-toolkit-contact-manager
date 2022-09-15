import { createSlice } from "@reduxjs/toolkit";

const initialState=[
  {
    id:1,
    fullName:'saknet mane',
    contactNumber:9082675567,
    emailId:'sanketmane159@gmail.com'
  }
]

const contactSlice=createSlice({
  name:'contactslice',
  initialState,
  reducers: {
    addContacts(state,action) {
      state.push(action.payload);
    }
  }
})

export const {addContacts}=contactSlice.actions;
export default contactSlice.reducer;

 