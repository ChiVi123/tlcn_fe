import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Đơn hàng (10) sản phẩm',
    mail: 'Mail',
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
    mail: 'mail',
    name: 'name',
    phone: 'phone',
    address: 'address',
    note: 'note',
    code: 'code',
};
