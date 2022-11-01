import classNames from 'classnames/bind';
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
