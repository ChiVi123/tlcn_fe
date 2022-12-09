import * as request from '~/utils/request';

// Auth
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

export const registerSendMail = async (data) => {
    try {
        const response = await request.post('auth/registersendmail', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Otp
export const verifyOtp = async (data) => {
    try {
        const response = await request.post('auth/verify', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getOtpReset = async (data) => {
    try {
        const response = await request.post(
            `auth/getotpreset?email=${data.email}`,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getOtp = async ({ email }) => {
    try {
        const response = await request.post(`auth/getotp?email=${email}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// User
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

export const resetPassword = async (id, data) => {
    try {
        const response = await request.put(`users/resetpassword/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const adminBlockUserById = async ({ id }) => {
    try {
        const response = await request.requestDelete(
            `admin/manage/users/${id}`,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const adminUnblockUserById = async ({ id }) => {
    try {
        const response = await request.put(
            `admin/manage/users/unblockuser/${id}`,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const adminSetRoleUserById = async ({ id, data }) => {
    try {
        const response = await request.put(
            `admin/manage/users/setrole/${id}`,
            data,
        );
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

export const getProductsByState = async ({ page, size }) => {
    try {
        const response = await request.get(
            `products/byState/?page=${page}&size=${size}`,
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

export const deleteProduct = async (id) => {
    try {
        const response = await request.requestDelete(`products/delete/${id}`);
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

export const deleteImageProduct = async (id, idImage) => {
    try {
        const response = await request.requestDelete(
            `products/deleteimage/${id}/${idImage}`,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addOptionProduct = async (id, data) => {
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

export const editOptionProduct = async (id, data) => {
    try {
        const response = await request.put(
            `manage/products/option/${id}`,
            data,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteOptionProduct = async (id) => {
    try {
        const response = await request.requestDelete(`manage/delete/${id}`);
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
export const getUsers = async ({ page }) => {
    try {
        const response = await request.get(`admin/manage/users?page=${page}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = async ({ id }) => {
    try {
        const response = await request.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const changePassword = async (id, data) => {
    try {
        const response = await request.put(`users/password/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Cart
export const getCartByToken = async () => {
    try {
        const response = await request.get('cart');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addCart = async (data) => {
    try {
        const response = await request.post('cart', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCart = async (itemCartId) => {
    try {
        const response = await request.requestDelete(`cart/${itemCartId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Payment
export const postPayment = async ({ cartId, type, data }) => {
    try {
        const response = await request.post(`checkout/${type}/${cartId}`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Search
export const searchProducts = async ({ q, page, size }) => {
    try {
        const response = await request.get(
            `products/search?q=${q}&page=${page}&size=${size}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Order
export const adminGetAllOrder = async (page) => {
    try {
        const response = await request.get(`admin/manage/orders?page=${page}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const adminGetOrderById = async ({ id }) => {
    try {
        const response = await request.get(`admin/manage/orders/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const userGetAllOrder = async (page) => {
    try {
        const response = await request.get(`orders/getallorder?page=${page}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const userGetOrderById = async ({ id }) => {
    try {
        const response = await request.get(`orders/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const adminCancelOrderById = async ({ id }) => {
    try {
        const response = await request.put(
            `admin/manage/orders/setcancel/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const adminDeliveryOrderById = async ({ id }) => {
    try {
        const response = await request.put(
            `admin/manage/orders/setdelivery/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const adminCompletelOrderById = async ({ id }) => {
    try {
        const response = await request.put(
            `admin/manage/orders/setcomplete/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const userCancelOrderById = async ({ id }) => {
    try {
        const response = await request.put(`orders/cancel/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

// Review
export const adminGetReviews = async () => {
    try {
        const response = await request.get('admin/manage/comment/findall');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewByProductId = async (id) => {
    try {
        const response = await request.get(`comment/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addReview = async (data) => {
    try {
        const response = await request.post('comment', data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const editReview = async ({ id, data }) => {
    try {
        const response = await request.put(`comment/edit/${id}`, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const blockReview = async ({ id }) => {
    try {
        const response = await request.requestDelete(
            `admin/manage/comment/block/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const unblockReview = async ({ id }) => {
    try {
        const response = await request.put(
            `admin/manage/comment/setenable/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteReviewByUser = async ({ id }) => {
    try {
        const response = await request.requestDelete(
            `comment/deletebyuser/${id}`,
        );
        return response;
    } catch (error) {
        throw error;
    }
};
