import * as request from '~/utils/request';

const cartServices = {
    getCartByToken: async () => {
        try {
            const response = await request.get('cart');
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    addCart: async (data) => {
        try {
            const response = await request.post('cart', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteCart: async (itemCartId) => {
        try {
            const response = await request.requestDelete(`cart/${itemCartId}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
};

export default cartServices;
