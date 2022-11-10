import classNames from 'classnames/bind';
import * as yup from 'yup';

import styles from './Checkout.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Đơn hàng (',
    titleCounter: ') sản phẩm',
    email: 'Email',
    name: 'Họ và tên',
    phone: 'Số điện thoại',
    address: 'Địa chỉ',
    note: 'Ghi chú (tùy chọn)',
    code: 'Nhập mã giảm giá',
    applyCode: 'Áp dụng',
    tempCalc: 'Tạm tính',
    feeShip: 'Phí vận chuyển',
    priceTotal: 'Tổng tiền',
    backToCart: 'Quay về vỏ hàng',
    order: 'Đặt hàng',
};

export const inputId = {
    email: 'email',
    name: 'name',
    phone: 'phone',
    address: 'address',
    note: 'note',
    code: 'code',
};

export const schema = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().required(),
    phone: yup.string().trim().required(),
    note: yup.string().trim(),
});

export const defaultValues = {
    name: '',
    email: 'nhatsangtv123@gmail.com',
    phone: '',
    note: '',
};
