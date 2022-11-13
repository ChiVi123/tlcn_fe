import * as request from '~/utils/request';

export const login = async (data) => {
    try {
        const response = await request.post('auth/login', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (data) => {
    try {
        const response = await request.post('auth/register', data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// Get
// - Product/Products
export const getProducts = async (page, size) => {
    try {
        const response = await request.get(
            `products?page=${page}&size=${size}`,
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsByCategory = async (id, page, size) => {
    try {
        const response = await request.get(
            `products/category/${id}?page=${page}&size=${size}`,
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (id) => {
    try {
        const response = await request.get(`products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCategories = async () => {
    try {
        const response = await request.get('categories');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// Add
export const addProduct = async (data) => {
    try {
        const response = await request.post('products/add', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addOptionsProduct = async (data, id) => {
    try {
        const response = await request.post(
            `manage/products/option/${id}`,
            data,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            },
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addCategory = async (data) => {
    try {
        const response = await request.post('admin/manage/categories', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};
