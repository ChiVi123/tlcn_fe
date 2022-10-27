import {
    faBasketShopping,
    faUser,
    faPhone,
    faArrowRightFromBracket,
    faTable,
} from '@fortawesome/free-solid-svg-icons';
import { faClock, faAddressBook } from '@fortawesome/free-regular-svg-icons';
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
} from '~/assets/images';

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

const topbarsRight = [
    {
        icon: faUser,
        context: 'Tài khoản',
        to: '/login',
    },
    {
        icon: faTable,
        context: 'Trang quản trị',
        to: '/admin',
    },
    {
        icon: faAddressBook,
        context: 'Sổ địa chỉ',
        to: '/addresses',
    },
    {
        icon: faArrowRightFromBracket,
        context: 'Đăng xuất',
        to: '/logout',
    },
];

const actions = [
    {
        icon: faBasketShopping,
        context: '(10) Sẩn phẩm',
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
    { name: 'Mã giảm giá', to: '/sale' },
    { name: 'Theo dõi đơn hàng', to: '/orders' },
];

const menuCate = [
    {
        name: 'Vi điều khiển - Nhúng',
        to: '/1',
        img: imgCate2,
        subMenu: [
            {
                name: 'Kit phát triển',
                to: '/2',
                subMenu: [
                    { name: '8051', to: '/3' },
                    { name: 'PIC', to: '/4' },
                    { name: 'ARM - STM', to: '/5' },
                    { name: 'Arduino', to: '/6' },
                    { name: 'Raspberry', to: '/7' },
                    { name: 'AVR', to: '/8' },
                    { name: 'Phụ kiện KIT', to: '/9' },
                    { name: 'NaNo - Pi', to: '/10' },
                ],
            },
            {
                name: 'Mạch nạp',
                to: '/11',
                subMenu: [
                    { name: 'Mạch nạp 8051', to: '/12' },
                    { name: 'Mạch nạp AVR', to: '/13' },
                    { name: 'Mạch nạp PIC', to: '/14' },
                    { name: 'Mạch nạp STM-ARM', to: '/15' },
                    { name: 'Mạch nạp MSP430', to: '/16' },
                    { name: 'Mạch nạp MSP430', to: '/17' },
                ],
            },
            {
                name: 'Vi điều khiển',
                to: '/',
                subMenu: [
                    { name: 'Vi điều khiển 8051', to: '/' },
                    { name: 'Vi điều khiển AVR', to: '/' },
                    { name: 'Vi điều khiển STM', to: '/' },
                    { name: 'PIC - DSPIC', to: '/' },
                    { name: 'Vi điều khiển MSP430', to: '/' },
                ],
            },
        ],
    },
    {
        name: 'Module ứng dụng',
        to: '/',
        img: imgCate3,
        subMenu: [
            { name: 'Module RF', to: '/' },
            { name: 'Module RFID', to: '/' },
            { name: 'Ethernet/Wifi', to: '/' },
            { name: 'Bluetooth', to: '/' },
            { name: 'Camera', to: '/' },
            { name: 'Sim-GMS/GPRS/GPS/3G', to: '/' },
            { name: 'Module động cơ', to: '/' },
            { name: 'Module SD', to: '/' },
            { name: 'Module VGA', to: '/' },
            { name: 'Module chuyển đổi', to: '/' },
            { name: 'Hồng ngoại/Ánh sáng', to: '/' },
            { name: 'Module relay', to: '/' },
            { name: 'Module nguồn', to: '/' },
            { name: 'Matrix phím', to: '/' },
            { name: 'Module driver', to: '/' },
            { name: 'Audio/MP3', to: '/' },
            { name: 'Thời gian/Tạo trễ', to: '/' },
            { name: 'Vân tay ( Finger-Print )', to: '/' },
            { name: 'Module AD', to: '/' },
            { name: 'Module DTMF', to: '/' },
            { name: 'Module led', to: '/' },
            { name: 'Khống chế nhiệt độ', to: '/' },
            { name: 'Đo dòng/Đo áp', to: '/' },
            { name: 'Máy in 3D', to: '/' },
            { name: 'Dao động/Phát xung', to: '/' },
            { name: 'Module tạo sương', to: '/' },
            { name: 'Module cảm biến', to: '/' },
        ],
    },
    {
        name: 'Cảm biến',
        to: '/',
        img: imgCate4,
        subMenu: [
            { name: 'Cảm biến nhiệt độ', to: '/' },
            { name: 'Cảm biến độ ẩm', to: '/' },
            { name: 'Cảm biến chuyển động', to: '/' },
            { name: 'Cảm biến ánh sáng', to: '/' },
            { name: 'Cảm biến khí', to: '/' },
            { name: 'Cảm biến siêu âm', to: '/' },
            { name: 'Cảm biến màu', to: '/' },
            { name: 'Cảm biến gia tốc,góc', to: '/' },
            { name: 'Cảm biến áp suất', to: '/' },
            { name: 'Cảm biến Từ', to: '/' },
            { name: 'Cảm biến nước', to: '/' },
            { name: 'Cảm biến khoảng cách', to: '/' },
            { name: 'Cảm biến âm thanh', to: '/' },
            { name: 'Cảm biến rung', to: '/' },
            { name: 'Load Cell', to: '/' },
            { name: 'Cảm biến dòng', to: '/' },
            { name: 'La bàn số', to: '/' },
            { name: 'Cảm biến nhịp tim', to: '/' },
            { name: 'Mở cửa/Báo động', to: '/' },
        ],
    },
    {
        name: 'Linh kiện điện tử',
        to: '/',
        img: imgCate5,
        subMenu: [
            {
                name: 'Linh kiện cơ bản',
                to: '/',
                subMenu: [
                    { name: 'Điện trở', to: '/' },
                    { name: 'Cuộn cảm', to: '/' },
                    { name: 'Tụ điện', to: '/' },
                ],
            },
            {
                name: 'Linh kiện bán dẫn',
                to: '/',
                subMenu: [
                    { name: 'Diode', to: '/' },
                    { name: 'Mosfet & Fets', to: '/' },
                    { name: 'Transistor', to: '/' },
                    { name: 'Triac-Thy-Diac', to: '/' },
                    { name: 'Opto-Photocouplers', to: '/' },
                ],
            },
            {
                name: 'Linh kiện thụ động',
                to: '/',
                subMenu: [
                    { name: 'Biến trở', to: '/' },
                    { name: 'Triết áp', to: '/' },
                    { name: 'Loa/Còi báo', to: '/' },
                    { name: 'Cầu chì', to: '/' },
                    { name: 'Thạch anh', to: '/' },
                    { name: 'Relay', to: '/' },
                    { name: 'Varistor/Tụ Chống Sét', to: '/' },
                    { name: 'Nút nhấn/Công tắc/SW', to: '/' },
                ],
            },
            {
                name: 'Led/Lcd/Text',
                to: '/',
                subMenu: [
                    { name: 'Led 7 thanh', to: '/' },
                    { name: 'Bóng đèn LED', to: '/' },
                    { name: 'LCD/Text', to: '/' },
                    { name: 'Led Matrix', to: '/' },
                    { name: 'Led Công Suất', to: '/' },
                ],
            },
        ],
    },
    {
        name: 'IC chức năng',
        to: '/',
        img: imgCate6,
        subMenu: [
            { name: 'IC nguồn', to: '/' },
            { name: 'Ic real time', to: '/' },
            { name: 'IC Opam', to: '/' },
            { name: 'IC giao tiếp', to: '/' },
            { name: 'IC CD', to: '/' },
            { name: 'IC công suất', to: '/' },
            { name: 'IC audio', to: '/' },
            { name: 'ADC/DAC', to: '/' },
            { name: 'IC driver', to: '/' },
            { name: '74HC/ 74LS/ IC số', to: '/' },
            { name: 'IC mã hóa/Giải mã', to: '/' },
            { name: 'IC cảm ứng', to: '/' },
            { name: 'IC can', to: '/' },
            { name: 'IC khác', to: '/' },
            { name: 'Đế IC', to: '/' },
        ],
    },
    {
        name: 'Thiết bị chế tạo',
        to: '/',
        img: imgCate7,
        subMenu: [
            {
                name: 'Robot mô hình',
                to: '/',
                subMenu: [
                    { name: 'Động cơ', to: '/' },
                    { name: 'máy bơm/Tạo khí', to: '/' },
                    { name: 'Máy bay mô hình', to: '/' },
                    { name: 'Mô hình/Xe robot', to: '/' },
                    { name: 'Phụ kiện', to: '/' },
                ],
            },
            {
                name: 'Thiết bị hàn',
                to: '/',
                subMenu: [
                    { name: 'Máy hàn', to: '/' },
                    { name: 'Thiếc hàn', to: '/' },
                    { name: 'Phụ kiện hàn', to: '/' },
                    { name: 'Máy Khò', to: '/' },
                ],
            },
            {
                name: 'Mạch in',
                to: '/',
                subMenu: [
                    { name: 'Phíp đồng', to: '/' },
                    { name: 'PCB/Board Test', to: '/' },
                    { name: 'Hóa chất', to: '/' },
                    { name: 'Dụng cụ phụ trợ', to: '/' },
                ],
            },
        ],
    },
    {
        name: 'Dụng cụ - phụ kiện',
        to: '/',
        img: imgCate8,
        subMenu: [
            {
                name: 'Dụng cụ cầm tay',
                to: '/',
                subMenu: [
                    { name: 'Kính lúp', to: '/' },
                    { name: 'Súng bắn keo', to: '/' },
                    { name: 'Máy khoan/Cắt/Mài', to: '/' },
                    { name: 'Phụ kiện máy khoan/Máy cắt', to: '/' },
                    { name: 'Kìm/Kẹp/Tua vít', to: '/' },
                ],
            },
            {
                name: 'Tản nhiệt/Cách điện',
                to: '/',
                subMenu: [
                    { name: 'Quạt tản nhiệt', to: '/' },
                    { name: 'Nhôm tản nhiệt', to: '/' },
                    { name: 'Keo/Mỡ tản nhiệt', to: '/' },
                    { name: 'Sò nóng lạnh và phụ kiện', to: '/' },
                ],
            },
            {
                name: 'Hộp các loại',
                to: '/',
                subMenu: [
                    { name: 'Hộp đựng 1 ngăn', to: '/' },
                    { name: 'Hộp đựng nhiều ngăn', to: '/' },
                ],
            },
            {
                name: 'Thiết bị đo/Kiểm tra',
                to: '/',
                subMenu: [
                    { name: 'Đồng hồ đo', to: '/' },
                    { name: 'Thước đo', to: '/' },
                    { name: 'Thiết Bị Đo', to: '/' },
                ],
            },
            {
                name: 'Tạo nguồn điện',
                to: '/',
                subMenu: [
                    { name: 'Nguồn adapter', to: '/' },
                    { name: 'Biến áp', to: '/' },
                    { name: 'Nguồn tổ ong/Nguồn xung', to: '/' },
                    { name: 'Pin, Ắc Quy', to: '/' },
                    { name: 'Mạch sạc pin, ắc quy', to: '/' },
                    { name: 'Box sạc dự phòng', to: '/' },
                    { name: 'Đế pin', to: '/' },
                    { name: 'Bộ chuyển đổi điện', to: '/' },
                    { name: 'Anten', to: '/' },
                ],
            },
            {
                name: 'Thiết bị gia dụng',
                to: '/',
                subMenu: [
                    { name: 'Thiết bị an toàn', to: '/' },
                    { name: 'Remote- Điều Khiển', to: '/' },
                    { name: 'Túi Đựng Dụng Cụ', to: '/' },
                ],
            },
        ],
    },
    {
        name: 'Connector',
        to: '/',
        img: imgCate9,
        subMenu: [
            {
                name: 'Dây kết nối',
                to: '/',
                subMenu: [
                    { name: 'Dây đồng/Dây điện', to: '/' },
                    { name: 'Dây cáp nối', to: '/' },
                    { name: 'Dây bus, Dây Buộc', to: '/' },
                    { name: 'Dây co nhiệt, chịu nhiệt', to: '/' },
                ],
            },
            {
                name: 'Cổng kết nối',
                to: '/',
                subMenu: [
                    { name: 'Terminal', to: '/' },
                    { name: 'Jack DC', to: '/' },
                    { name: 'Cổng USB', to: '/' },
                    { name: 'Header', to: '/' },
                    { name: 'Audio', to: '/' },
                    { name: 'Cổng DB-DP', to: '/' },
                    { name: 'IDE - IDC', to: '/' },
                    { name: 'Jumper', to: '/' },
                ],
            },
            {
                name: 'Phụ kiện',
                to: '/',
                subMenu: [
                    { name: 'Cọc đồng/Cọc nhựa', to: '/' },
                    { name: 'Kẹp cá sấu/ Móc', to: '/' },
                    { name: 'Socket', to: '/' },
                    { name: 'Ốc - Vít', to: '/' },
                ],
            },
        ],
    },
    {
        name: 'Sản phẩm combo',
        to: '/',
        img: imgCate10,
        subMenu: [
            { name: 'Combo máy hàn', to: '/' },
            { name: 'Combo máy khoan', to: '/' },
            { name: 'Sản phẩm DIY', to: '/' },
            { name: 'Combo khác', to: '/' },
        ],
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
        subMenu: [
            { name: 'Pin Sạc', to: '/' },
            { name: 'Cáp Sạc', to: '/' },
            { name: 'Thẻ Nhớ', to: '/' },
            { name: 'Loa', to: '/' },
            { name: 'Giá Đỡ Điện Thoại', to: '/' },
            { name: 'Chuột/ Bàn Phím', to: '/' },
            { name: 'Ống Kinh Điện Thoai', to: '/' },
        ],
    },
    {
        name: 'Phụ kiện máy tính',
        to: '/',
        img: imgCate13,
        subMenu: [{ name: 'Dây Nguồn', to: '/' }],
    },
];

export { cx, actions, navItems, menuCate, topbarsRight, topbarsLeft };
