import classNames from 'classnames/bind';
import styles from './Orders.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Thông tin đơn hàng',
    hello: 'Xin chào nhat sang',
    titleTable: 'Đơn hàng gần nhất',
    id: 'Mã đơn hàng',
    date: 'Ngày đặt hàng',
    product: 'Các sản phẩm',
    address: 'Địa chỉ',
    totalPrice: 'Tổng giá trị',
    status: 'Trạng thái đơn hàng',
    actions: 'Các hoạt động',
    done: 'Giao hàng thành công',
    procces: 'Đang giao',
    cancel: 'Đã hủy',
};
