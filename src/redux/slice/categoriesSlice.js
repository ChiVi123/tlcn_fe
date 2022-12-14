import { createSlice } from '@reduxjs/toolkit';
import * as asyncThunk from '../async_thunk/categoriesAsync';

const initialState = {
    isLoading: false,
    items: [],
    message: '',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: {
        [asyncThunk.getAllCategory.pending]: (state) => {
            state.isLoading = true;
        },
        [asyncThunk.getAllCategory.fulfilled]: (state, { payload }) => {
            state.isLoading = true;
            state.items = payload;
        },
        [asyncThunk.getAllCategory.rejected]: (state, { payload }) => {
            state.message = payload;
        },
    },
});

export default categoriesSlice.reducer;
