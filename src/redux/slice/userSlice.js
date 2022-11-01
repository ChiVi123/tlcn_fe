import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    avatar: '',
    email: '',
    isToast: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, { payload }) {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.email = payload.email;
            state.avatar = payload.avatar;
        },
        showedToast(state) {
            state.isToast = true;
        },
    },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
