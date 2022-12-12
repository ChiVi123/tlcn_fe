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
    isToast: true,
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
        updateUser(state, { payload }) {
            state.name = payload.name;
            state.avatar = payload.avatar && state.avatar;
        },
        showedToast(state) {
            state.isToast = false;
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
            state.isToast = true;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
