import * as request from '~/utils/request';

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
