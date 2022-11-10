import classNames from 'classnames/bind';
import * as yup from 'yup';
import { user } from '~/utils/constant';

import styles from './Profile.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Thông tin tài khoản',
    lastName: 'Họ',
    firstName: 'Tên',
    avataButton: 'Thay đôi ảnh đại diện',
    email: 'Email',
    addressesButton: 'Sổ địa chỉ',
    editButton: 'Lưu thay đổi',
};

export const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
});

export const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
};
