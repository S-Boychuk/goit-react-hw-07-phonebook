import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://64a5419400c3559aa9bf601e.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    console.log('contact :>> ', contact);
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (taskId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      console.log('successfully deleted id:>> ', taskId);
      return response.data;
    } catch (error) {
      console.log('failed to delete id:>> ', taskId);
      return rejectWithValue(error.message);
    }
  }
);
