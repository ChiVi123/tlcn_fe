import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    mail: 'Mail',
    name: 'Họ và tên',
    phone: 'Số điện thoại',
    address: 'Địa chỉ',
    note: 'Ghi chú (tùy chọn)',
};

export const inputId = {
    mail: 'mail',
    name: 'name',
    phone: 'phone',
    address: 'address',
    note: 'note',
};
