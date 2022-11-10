import {
    faBox,
    faRectangleList,
    faAddressCard,
    faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

export const cx = classNames.bind(styles);

export const sidebarItems = [
    {
        context: 'Products',
        navTo: '/admin/products',
        icon: faBox,
    },
    {
        context: 'Categories',
        navTo: '/admin/categories',
        icon: faRectangleList,
    },
    {
        context: 'Orders',
        navTo: '/admin/orders',
        icon: faReceipt,
    },
    {
        context: 'Users',
        navTo: '/admin/users',
        icon: faAddressCard,
    },
];
