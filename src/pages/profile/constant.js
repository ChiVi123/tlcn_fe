import classNames from 'classnames/bind';
import * as yup from 'yup';

import styles from './Profile.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Thông tin tài khoản',
    name: 'Họ và tên',
    avataButton: 'Thay đôi ảnh đại diện',
    email: 'Email',
    addressesButton: 'Sổ địa chỉ',
    chagnePasswordButton: 'Thay đổi mật khẩu',
    editButton: 'Lưu thay đổi',
};

export const schema = yup.object({
    name: yup.string().required('Nhập họ và tên'),
    email: yup.string().required('Email đang không có sẵn'),
});
