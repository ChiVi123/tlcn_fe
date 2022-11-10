import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, { payload }) {
            state.total += payload.price * payload.quantity;
            state.items = [...state.items, payload];
        },
        removeProduct(state, { payload }) {
            const product = state.items.find(
                (item) => item.productId === payload,
            );

            state.items = state.items.filter(
                (item) => item.productId !== payload,
            );

            state.total -= product.price * product.quantity;
        },
        plusQuantityProduct(state, { payload }) {
            const product = state.items.find(
                (item) => item.productId === payload,
            );

            state.total += product.price;
            product.quantity += 1;
        },
        subtractQuantityProduct(state, { payload }) {
            const product = state.items.find(
                (item) => item.productId === payload,
            );

            state.total -= product.price;
            product.quantity -= 1;
        },
        changeQuantityProduct(state, { payload }) {
            const product = state.items.find(
                (item) => item.productId === payload.id,
            );

            state.total +=
                product.price * (payload.quantity - product.quantity);

            product.quantity = payload.quantity;
        },
        resetCart(state) {
            state.items = [];
            state.total = 0;
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
