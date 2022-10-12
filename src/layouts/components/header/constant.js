import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons';
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
const actions = [
    {
        icon: faBasketShopping,
        context: '(0) Giỏ hàng',
    },
    {
        icon: faUser,
        context: 'Tài khoản',
    },
];
const navItems = ['Trang chủ', 'Mã giảm giá', 'Theo dõi đơn hàng'];
const menuCate = [
    {
        name: 'Vi điều khiển - Nhúng',
        img: imgCate2,
        subMenu: [
            {
                name: 'Kit phát triển',
                subMenu: [
                    '8051',
                    'PIC',
                    'ARM - STM',
                    'Arduino',
                    'Raspberry',
                    'AVR',
                    'Phụ kiện KIT',
                    'NaNo - Pi',
                ],
            },
            {
                name: 'Mạch nạp',
                subMenu: [
                    'Mạch nạp 8051',
                    'Mạch nạp AVR',
                    'Mạch nạp PIC',
                    'Mạch nạp STM-ARM',
                    'Mạch nạp MSP430',
                    'Mạch nạp MSP430',
                ],
            },
            {
                name: 'Vi điều khiển',
                subMenu: [
                    'Vi điều khiển 8051',
                    'Vi điều khiển AVR',
                    'Vi điều khiển STM',
                    'PIC - DSPIC',
                    'Vi điều khiển MSP430',
                ],
            },
        ],
    },
    {
        name: 'Module ứng dụng',
        img: imgCate3,
        subMenu: [
            'Module RF',
            'Module RFID',
            'Ethernet/Wifi',
            'Bluetooth',
            'Camera',
            'Sim-GMS/GPRS/GPS/3G',
            'Module động cơ',
            'Module SD',
            'Module VGA',
            'Module chuyển đổi',
            'Hồng ngoại/Ánh sáng',
            'Module relay',
            'Module nguồn',
            'Matrix phím',
            'Module driver',
            'Audio/MP3',
            'Thời gian/Tạo trễ',
            'Vân tay ( Finger-Print )',
            'Module AD',
            'Module DTMF',
            'Module led',
            'Khống chế nhiệt độ',
            'Đo dòng/Đo áp',
            'Máy in 3D',
            'Dao động/Phát xung',
            'Module tạo sương',
            'Module cảm biến',
        ],
    },
    {
        name: 'Cảm biến',
        img: imgCate4,
        subMenu: [
            'Cảm biến nhiệt độ',
            'Cảm biến độ ẩm',
            'Cảm biến chuyển động',
            'Cảm biến ánh sáng',
            'Cảm biến khí',
            'Cảm biến siêu âm',
            'Cảm biến màu',
            'Cảm biến gia tốc,góc',
            'Cảm biến áp suất',
            'Cảm biến Từ',
            'Cảm biến nước',
            'Cảm biến khoảng cách',
            'Cảm biến âm thanh',
            'Cảm biến rung',
            'Load Cell',
            'Cảm biến dòng',
            'La bàn số',
            'Cảm biến nhịp tim',
            'Mở cửa/Báo động',
        ],
    },
    {
        name: 'Linh kiện điện tử',
        img: imgCate5,
        subMenu: [
            {
                name: 'Linh kiện cơ bản',
                subMenu: ['Điện trở', 'Cuộn cảm', 'Tụ điện'],
            },
            {
                name: 'Linh kiện bán dẫn',
                subMenu: [
                    'Diode',
                    'Mosfet & Fets',
                    'Transistor',
                    'Triac-Thy-Diac',
                    'Opto-Photocouplers',
                ],
            },
            {
                name: 'Linh kiện thụ động',
                subMenu: [
                    'Biến trở',
                    'Triết áp',
                    'Loa/Còi báo',
                    'Cầu chì',
                    'Thạch anh',
                    'Relay',
                    'Varistor/Tụ Chống Sét',
                    'Nút nhấn/Công tắc/SW',
                ],
            },
            {
                name: 'Led/Lcd/Text',
                subMenu: [
                    'Led 7 thanh',
                    'Bóng đèn LED',
                    'LCD/Text',
                    'Led Matrix',
                    'Led Công Suất',
                ],
            },
        ],
    },
    {
        name: 'IC chức năng',
        img: imgCate6,
        subMenu: [
            'IC nguồn',
            'Ic real time',
            'IC Opam',
            'IC giao tiếp',
            'IC CD',
            'IC công suất',
            'IC audio',
            'ADC/DAC',
            'IC driver',
            '74HC/ 74LS/ IC số',
            'IC mã hóa/Giải mã',
            'IC cảm ứng',
            'IC can',
            'IC khác',
            'Đế IC',
        ],
    },
    {
        name: 'Thiết bị chế tạo',
        img: imgCate7,
        subMenu: [
            {
                name: 'Robot mô hình',
                subMenu: [
                    'Động cơ',
                    'máy bơm/Tạo khí',
                    'Máy bay mô hình',
                    'Mô hình/Xe robot',
                    'Phụ kiện',
                ],
            },
            {
                name: 'Thiết bị hàn',
                subMenu: ['Máy hàn', 'Thiếc hàn', 'Phụ kiện hàn', 'Máy Khò'],
            },
            {
                name: 'Mạch in',
                subMenu: [
                    'Phíp đồng',
                    'PCB/Board Test',
                    'Hóa chất',
                    'Dụng cụ phụ trợ',
                ],
            },
        ],
    },
    {
        name: 'Dụng cụ - phụ kiện',
        img: imgCate8,
        subMenu: [
            {
                name: 'Dụng cụ cầm tay',
                subMenu: [
                    'Kính lúp',
                    'Súng bắn keo',
                    'Máy khoan/Cắt/Mài',
                    'Phụ kiện máy khoan/Máy cắt',
                    'Kìm/Kẹp/Tua vít',
                ],
            },
            {
                name: 'Tản nhiệt/Cách điện',
                subMenu: [
                    'Quạt tản nhiệt',
                    'Nhôm tản nhiệt',
                    'Keo/Mỡ tản nhiệt',
                    'Sò nóng lạnh và phụ kiện',
                ],
            },
            {
                name: 'Hộp các loại',
                subMenu: ['Hộp đựng 1 ngăn', 'Hộp đựng nhiều ngăn'],
            },
            {
                name: 'Thiết bị đo/Kiểm tra',
                subMenu: ['Đồng hồ đo', 'Thước đo', 'Thiết Bị Đo'],
            },
            {
                name: 'Tạo nguồn điện',
                subMenu: [
                    'Nguồn adapter',
                    'Biến áp',
                    'Nguồn tổ ong/Nguồn xung',
                    'Pin, Ắc Quy',
                    'Mạch sạc pin, ắc quy',
                    'Box sạc dự phòng',
                    'Đế pin',
                    'Bộ chuyển đổi điện',
                    'Anten',
                ],
            },
            {
                name: 'Thiết bị gia dụng',
                subMenu: [
                    'Thiết bị an toàn',
                    'Remote- Điều Khiển',
                    'Túi Đựng Dụng Cụ',
                ],
            },
        ],
    },
    {
        name: 'Connector',
        img: imgCate9,
        subMenu: [
            {
                name: 'Dây kết nối',
                subMenu: [
                    'Dây đồng/Dây điện',
                    'Dây cáp nối',
                    'Dây bus, Dây Buộc',
                    'Dây co nhiệt, chịu nhiệt',
                ],
            },
            {
                name: 'Cổng kết nối',
                subMenu: [
                    'Terminal',
                    'Jack DC',
                    'Cổng USB',
                    'Header',
                    'Audio',
                    'Cổng DB-DP',
                    'IDE - IDC',
                    'Jumper',
                ],
            },
            {
                name: 'Phụ kiện',
                subMenu: [
                    'Cọc đồng/Cọc nhựa',
                    'Kẹp cá sấu/ Móc',
                    'Socket',
                    'Ốc - Vít',
                ],
            },
        ],
    },
    {
        name: 'Sản phẩm combo',
        img: imgCate10,
        subMenu: [
            'Combo máy hàn',
            'Combo máy khoan',
            'Sản phẩm DIY',
            'Combo khác',
        ],
    },
    {
        name: 'Nam châm đất hiếm',
        img: imgCate11,
    },
    {
        name: 'Phụ kiện điện thoại',
        img: imgCate12,
        subMenu: [
            'Pin Sạc',
            'Cáp Sạc',
            'Thẻ Nhớ',
            'Loa',
            'Giá Đỡ Điện Thoại',
            'Chuột/ Bàn Phím',
            'Ống Kinh Điện Thoai',
        ],
    },
    {
        name: 'Phụ kiện máy tính',
        img: imgCate13,
        subMenu: ['Dây Nguồn'],
    },
];

export { cx, actions, navItems, menuCate };
