import classNames from 'classnames/bind';
import styles from './AdminOrder.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Chi tiết hóa đơn',
    backToPage: 'Quay trở về trang danh sách hóa đơn',
    userName: 'Tên người dùng: ',
    status: 'Trạng thái: ',
    address: 'Địa chỉ: ',
    tempResult: 'Tạm tính',
    feeShipping: 'Phí vận chuyển',
    feeShippingValue: 'Miễn phí',
    total: 'Tổng tiền',
    listProduct: 'Danh sách sản phẩm trong đơn hàng',
};
