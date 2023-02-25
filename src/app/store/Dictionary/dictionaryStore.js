import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showAlertHandlerSuccess } from '../../../utils/alerts';
const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const initialState = {
  word: [],
  status: 'idle', // 'idle' | 'loading' | 'sucess' | 'faild'
  error: null,
};
export const getWordMeaning = createAsyncThunk('word', (intial) => {
  return axios.get(`${baseUrl}/${intial}`).then((res) => res.data);
});

const dictionaryStore = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getWordMeaning.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getWordMeaning.fulfilled, (state, action) => {
        state.status = 'success';

        state.word = action.payload;
        console.log(action.payload);
      })
      .addCase(getWordMeaning.rejected, (state, action) => {
        state.status = 'failed';
        showAlertHandlerSuccess('مشکلی پیش آمده');
      });
  },
});
export const getWord = (state) => state.dictionary.word;
export const getWordStatus = (state) => state.dictionary.status;

export default dictionaryStore.reducer;
