import classNames from 'classnames/bind';
import styles from './AdminOrders.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Các đơn hàng',
    idOrderCol: 'Mã đơn hàng',
    userNameCol: 'Tên người đặt',
    createAtCol: 'Ngày đặt',
    totalCol: 'Tổng tiền',
    statusCol: 'Trạng thái',
    actionsCol: 'Hoạt động',
};
