import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryRequest } from '~/services';
// import logger from '~/utils/logger';

export const getAllCategory = createAsyncThunk(
    'categories/getAllcategory',
    async (params, { rejectWithValue }) => {
        try {
            const result = await categoryRequest.getCategories();
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
