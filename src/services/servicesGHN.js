import * as request from '~/utils/requestGHN';

export const getProvince = async () => {
    try {
        const response = await request.get('province');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getDistrict = async (id) => {
    try {
        const response = await request.get('district', {
            params: { province_id: id },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getWard = async (id) => {
    try {
        const response = await request.get('ward', {
            params: { district_id: id },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
