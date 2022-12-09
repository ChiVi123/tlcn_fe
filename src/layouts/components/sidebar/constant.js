import {
    faBox,
    faRectangleList,
    faAddressCard,
    faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

export const cx = classNames.bind(styles);

export const sidebarItems = [
    {
        context: 'Danh sách sản phẩm',
        navTo: '/admin/products',
        icon: faBox,
    },
    {
        context: 'Danh sách mục sản phẩm',
        navTo: '/admin/categories',
        icon: faRectangleList,
    },
    {
        context: 'Danh sách đơn hàng',
        navTo: '/admin/orders',
        icon: faReceipt,
    },
    {
        context: 'Danh sách người dùng',
        navTo: '/admin/users',
        icon: faAddressCard,
    },
    {
        context: 'Danh sách đánh giá sản phẩm',
        navTo: '/admin/reviews',
        icon: faMessage,
    },
];
