import { faBasketShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import {
    imgCate2,
    imgCate3,
    imgCate4,
    imgCate5,
    imgCate6,
    imgCate7,
    imgCate8,
    imgCate9,
    imgCate10,
    imgCate11,
    imgCate12,
    imgCate13,
} from '~/assets/images/categories';

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

const menuCate = [
    {
        name: 'Vi điều khiển - Nhúng',
        to: '/1',
        img: imgCate2,
    },
    {
        name: 'Module ứng dụng',
        to: '/',
        img: imgCate3,
    },
    {
        name: 'Cảm biến',
        to: '/',
        img: imgCate4,
    },
    {
        name: 'Linh kiện điện tử',
        to: '/',
        img: imgCate5,
    },
    {
        name: 'IC chức năng',
        to: '/',
        img: imgCate6,
    },
    {
        name: 'Thiết bị chế tạo',
        to: '/',
        img: imgCate7,
    },
    {
        name: 'Dụng cụ - phụ kiện',
        to: '/',
        img: imgCate8,
    },
    {
        name: 'Connector',
        to: '/',
        img: imgCate9,
    },
    {
        name: 'Sản phẩm combo',
        to: '/',
        img: imgCate10,
    },
    {
        name: 'Nam châm đất hiếm',
        to: '/',
        img: imgCate11,
    },
    {
        name: 'Phụ kiện điện thoại',
        to: '/',
        img: imgCate12,
    },
    {
        name: 'Phụ kiện máy tính',
        to: '/',
        img: imgCate13,
    },
];

export { cx, actions, navItems, menuCate, topbarsLeft };
