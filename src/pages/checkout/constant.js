import classNames from 'classnames/bind';
import * as yup from 'yup';

import styles from './Checkout.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Đơn hàng (',
    titleCounter: ') sản phẩm',
    titlePayment: 'Chọn phương thức thanh toán',
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
    backToCart: 'Quay về giỏ hàng',
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
    name: yup.string().trim().required('Tên đang trống'),
    email: yup.string().trim().required(),
    phone: yup.string().trim().required('Số điện thoại đang trống'),
    note: yup.string().trim(),
    address: yup.string().trim().required('Địa chỉ đang trống'),
    province: yup.object().required('Chọn tỉnh thành'),
    district: yup.object().required('Chọn quận, huyện'),
    ward: yup.object().required('Chọn xã'),
});
