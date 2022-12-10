import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryServices } from '~/services';
// import logger from '~/utils/logger';

export const getAllCategory = createAsyncThunk(
    'categories/getAllcategory',
    async (params, { rejectWithValue }) => {
        try {
            const result = await categoryServices.getCategories();
            return result;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
