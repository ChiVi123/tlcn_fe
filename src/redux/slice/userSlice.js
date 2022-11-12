import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    email: '',
    name: '',
    avatar: '',
    address: '',
    phone: '',
    role: '',
    accessToken: '',
    isToast: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, { payload }) {
            state.id = payload.id;
            state.email = payload.email;
            state.name = payload.name;
            state.avatar = payload.avatar;
            state.address = payload.address;
            state.phone = payload.phone;
            state.role = payload.role;
            state.accessToken = payload.accessToken;
        },
        showedToast(state) {
            state.isToast = true;
        },
        resetUser(state) {
            state.id = '';
            state.email = '';
            state.name = '';
            state.avatar = '';
            state.address = '';
            state.phone = '';
            state.role = '';
            state.accessToken = '';
            state.isToast = false;
        },
    },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
