import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63a77be17989ad3286f16647.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, API) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (e) {
   return API.rejectWithValue(e.message)
  }
});