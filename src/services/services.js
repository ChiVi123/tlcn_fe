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

export const getUser = async (id) => {
    try {
        const response = await request.get(`users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (id, data) => {
    try {
        const response = await request.put(`users/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const uploadAvatar = async (id, data) => {
    try {
        const response = await request.post(`users/avatar/${id}`, data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Product/Products
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

export const addProduct = async (data) => {
    try {
        const response = await request.post('products/add', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const editProduct = async (id, data) => {
    try {
        const response = await request.put(`products/update/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addImagesProduct = async (id, data) => {
    try {
        const response = await request.post(
            `products/uploadimage/${id}`,
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

export const addOptionsProduct = async (id, data) => {
    try {
        const response = await request.post(
            `manage/products/option/${id}`,
            data,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Cateogry/Categories
export const getCategories = async () => {
    try {
        const response = await request.get('categories');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCategoryById = async (id) => {
    try {
        const response = await request.get(`categories/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCategoriesRoleAdmin = async () => {
    try {
        const response = await request.get('admin/manage/categories');
        return response.data;
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

export const updateCategory = async (id, data) => {
    try {
        const response = await request.put(
            `admin/manage/categories/${id}`,
            data,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateImageCategory = async (id, data) => {
    try {
        const response = await request.post(
            `admin/manage/categories/uploadimage/${id}`,
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

// User/users
export const getUsers = async () => {
    try {
        const response = await request.get('admin/manage/users');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
