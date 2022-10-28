import classNames from 'classnames/bind';
import styles from './Orders.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Thông tin đơn hàng',
    hello: 'Xin chào nhat sang',
    titleTable: 'Đơn hàng gần nhất',
    id: '#',
    date: 'Ngày',
    product: 'Sản phẩm',
    address: 'Địa chỉ',
    value: 'Giá trị',
    status: 'Trạng thái đơn hàng',
    done: 'Giao hàng thành công',
    procces: 'Đang giao',
    cancel: 'Đã hủy',
    and: '...và ',
    otherProduct: 'sản phẩm khác.',
};
