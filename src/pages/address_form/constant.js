import classNames from 'classnames/bind';
import styles from './AddressForm.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    lastName: 'Họ',
    firstName: 'Tên',
    address: 'Địa chỉ',
    address2: 'Địa chỉ 2',
    city: 'Thành phố',
    phone: 'Số điện thoại',
    setDefault: 'Đặt làm địa chỉ mặc định?',
    addAddressBtn: 'Thêm địa chỉ',
    cancelBtn: 'Hủy',
};

export const placeHolder = {
    lastName: 'Nhập họ của bạn',
    firstName: 'Nhập  tên của bạn',
    address: 'Nhập địa chỉ của bạn',
    city: 'Nhập thành phố của bạn',
    phone: 'Nhập số điện thoại của bạn',
};

export const idInput = {
    lastName: 'lastname',
    firstName: 'firstname',
    address: 'address',
    address2: 'address2',
    city: 'city',
    phone: 'phone',
    setDefault: 'setDefault',
};
