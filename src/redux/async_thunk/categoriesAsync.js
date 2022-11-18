import { createAsyncThunk } from '@reduxjs/toolkit';
import * as serivces from '~/services/services';

export const getAllCategory = createAsyncThunk(
    'categories/getAllcategory',
    async (params, { rejectWithValue }) => {
        try {
            const result = await serivces.getCategories();
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
