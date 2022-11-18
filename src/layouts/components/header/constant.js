import { faBasketShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const topbarsLeft = [
    {
        icon: faFacebookF,
        href: 'https://www.facebook.com/sangtran8321',
    },
    {
        icon: faGooglePlusG,
        href: 'mailto:transang8320001@gmail.com',
    },
];

const actions = [
    {
        icon: faBasketShopping,
        context: 'Sẩn phẩm',
        title: 'Giỏ hàng',
        to: '/cart',
    },
    {
        icon: faPhone,
        context: '0326574849',
        title: 'Hỗ trợ',
        to: '',
        href: 'tel:0326574849',
    },
    {
        icon: faClock,
        context: '8:00 AM - 5:00 PM',
        title: 'Thời gian làm việc',
        to: '',
        href: '',
    },
];

const navItems = [
    { name: 'Trang chủ', to: '/' },
    { name: 'Theo dõi đơn hàng', to: '/orders' },
];

const context = {
    categories: 'Danh mục sản phẩm',
};

export { cx, actions, navItems, context, topbarsLeft };
