import {
    faBorderAll,
    faBox,
    faRectangleList,
    faAddressCard,
    faReceipt,
    faGift,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

export const cx = classNames.bind(styles);

export const sidebarItems = [
    {
        context: 'Dashboard',
        navTo: '/admin/dashboard',
        icon: faBorderAll,
    },
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
        context: 'Users',
        navTo: '/admin/users',
        icon: faAddressCard,
    },
    {
        context: 'Orders',
        navTo: '/admin/orders',
        icon: faReceipt,
    },
    {
        context: 'Sales',
        navTo: '/admin/sales',
        icon: faGift,
    },
];