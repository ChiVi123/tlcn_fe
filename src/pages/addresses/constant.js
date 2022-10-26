import classNames from 'classnames/bind';
import styles from './Addresses.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    lastName: 'Họ:',
    firstName: 'Tên:',
    editAddressBtn: 'Chỉnh sửa địa chỉ',
    deleteAddressBtn: 'Xóa',
    name: 'Tên tài khoản:',
    address: 'Địa chỉ:',
    address2: 'Địa chỉ 2:',
    city: 'Thành phố:',
    phone: 'Số điện thoại:',
};

export const addresses = [
    {
        name: 'nhat sang',
        addresses: ['so 1 vvn', 'so 2 vvn', 'tphcm'],
        phone: '0X261XXXXXX',
        setDefault: false,
    },
    {
        name: 'sang nhat',
        addresses: ['so 3 vvn', 'so 4 vvn', 'tphcm'],
        phone: '0X262XXXXXX',
        setDefault: true,
    },
];
