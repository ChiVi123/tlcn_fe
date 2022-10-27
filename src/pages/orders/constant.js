import classNames from 'classnames/bind';
import { formatDate } from '~/utils/funcs';
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

export const orders = [
    {
        id: '1',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Module camera OV2640 200W Pixel',
            },
            {
                name: 'Kìm Tuốt Dây Điện Asaki AK-9100',
            },
            {
                name: 'Dây Cắm Test Board 10cm, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 10cm',
            },
            {
                name: 'Tô Vít Móc Chìa Khóa MK01',
            },
            {
                name: 'Máy Hàn Khò GORDAK 952/952A Chính hãng',
            },
            {
                name: 'Kit EASY 8051',
            },
            {
                name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
            },
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'done',
    },
    {
        id: '2',
        date: formatDate(new Date()),
        address: 'vo va ngan vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Module camera OV2640 200W Pixel',
            },
            {
                name: 'Kìm Tuốt Dây Điện Asaki AK-9100',
            },
            {
                name: 'Tô Vít Móc Chìa Khóa MK01',
            },
            {
                name: 'Máy Hàn Khò GORDAK 952/952A Chính hãng',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'done',
    },
    {
        id: '3',
        date: formatDate(new Date()),
        address: 'vo va ngan vo va ngan vo va ngan',
        value: 59495403,
        products: [
            {
                name: 'Module camera OV2640 200W Pixel',
            },
            {
                name: 'Kìm Tuốt Dây Điện Asaki AK-9100',
            },
            {
                name: 'Kit EASY 8051',
            },
            {
                name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
            },
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'procces',
    },
    {
        id: '4',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 59495403,
        products: [
            {
                name: 'Tô Vít Móc Chìa Khóa MK01',
            },
            {
                name: 'Máy Hàn Khò GORDAK 952/952A Chính hãng',
            },
            {
                name: 'Kit EASY 8051',
            },
            {
                name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
            },
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'done',
    },
    {
        id: '5',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Kit EASY 8051',
            },
            {
                name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
            },
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'procces',
    },
    {
        id: '6',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 59495403,
        products: [
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'done',
    },
    {
        id: '7',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'procces',
    },
    {
        id: '8',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'cancel',
    },
    {
        id: '9',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Kit EASY 8051',
            },
            {
                name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
            },
            {
                name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
            },
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'cancel',
    },
    {
        id: '10',
        date: formatDate(new Date()),
        address: 'vo va ngan',
        value: 10000000,
        products: [
            {
                name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
            },
            {
                name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
            },
            {
                name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
            },
        ],
        status: 'done',
    },
];
