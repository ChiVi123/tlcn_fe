import { formatDate } from './funcs';
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

export const products = [
    {
        rating: 4,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/sanpham1-5bbd70d0-c6c6-450b-8ba2-0db72233cf94.jpg?v=1573442474897',
            'https://bizweb.dktcdn.net/100/228/168/products/sanpham2-1836851d-607c-4d27-a4a6-a9acbe047cf5.jpg?v=1573442474897',
            'https://bizweb.dktcdn.net/100/228/168/products/sanpham3-12f95f29-5cce-48e1-91ce-b14062d659ba.jpg?v=1573442474897',
        ],
        name: 'Module camera OV2640 200W Pixel',
        price: 95000,
        summary: [
            'Khối lượng: 1 gram',
            'Góc quan sát tối đa: 62 độ',
            'Kích thước: 22*16*6',
            'Độ phân giải:&nbsp; 2.0 MP',
            'Chất lượng đảm bảo',
            'Giao hàng toàn quốc',
        ],
        tags: ['camera', 'RASPBERRY'],
        options: [],
    },
    {
        rating: 3,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-3.jpg?v=1634800647700',
            'https://bizweb.dktcdn.net/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-1.jpg?v=1634800651567',
            'https://bizweb.dktcdn.net/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-5.jpg?v=1634800654967',
            'https://bizweb.dktcdn.net/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-7.jpg?v=1634800658553',
            'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-8.jpg?v=1634800663797',
        ],
        name: 'Kìm Tuốt Dây Điện Asaki AK-9100',
        price: 99000,
        summary: [
            'Model: AK-9100',
            'Thương hiệu: Asaki',
            'Màu sắc: Cam đen',
            'Đường kính dây điện: 0.6/0.8/1.0/1.3/1.6/2.0/2.6 mm',
            'Kích thước kìm AK-9100: Xem chi tiết trên hình',
            'Trọng lượng: 200g',
        ],
        tags: [],
        options: [],
    },
    {
        rating: 2,
        imgs: [
            'https://bizweb.dktcdn.net/100/228/168/products/40-10cc.jpg?v=1641283209027',
            'https://bizweb.dktcdn.net/100/228/168/products/dc.jpg?v=1641283227840',
            'https://bizweb.dktcdn.net/100/228/168/products/dd.jpg?v=1641283243017',
            'https://bizweb.dktcdn.net/100/228/168/products/kt10.jpg?v=1641283286270',
            'https://bizweb.dktcdn.net/100/228/168/products/10cc.jpg?v=1641283293067',
            'https://bizweb.dktcdn.net/100/228/168/products/10dd.jpg?v=1641283308823',
            'https://bizweb.dktcdn.net/100/228/168/products/cd.jpg?v=1641283325167',
        ],
        name: 'Dây Cắm Test Board 10cm, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 10cm',
        price: 8000,
        sale: 0.25,
        options: [
            {
                name: 'phan-loai',
                label: 'Phân loại',
                selects: [
                    { label: 'Đực Đực', value: 'duc-duc' },
                    { label: 'Đực Cái', value: 'duc-cai' },
                    { label: 'Cái Cái', value: 'cai-cai' },
                ],
            },
            {
                name: 'tep',
                label: 'Tệp',
                selects: [
                    { label: '10 Sợi', value: '10-soi' },
                    { label: '40 Sợi', value: '40-soi' },
                ],
            },
        ],
        summary: [
            'Chiều dài: 10cm',
            'Phân loại: Đực Đực, Đực Cái, Cái - Cái',
            'Khoảng cách testboard: 2.54cm',
            'Màu sắc: 7 màu',
        ],
        tags: [],
    },
    {
        rating: 1,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/qua-tang.jpg?v=1638262765800',
            'https://bizweb.dktcdn.net/100/228/168/products/qua-tang1.jpg?v=1638262767430',
            'https://bizweb.dktcdn.net/100/228/168/products/qua-tang3.jpg?v=1638262769087',
            'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/11-37d98946-f02f-4ed3-b5f9-0ac99a48c256.jpg?v=1638262829420',
        ],
        name: 'Tô Vít Móc Chìa Khóa MK01',
        price: 10000,
        status: 'Hết hàng',
        summary: [
            'Chất liệu: Hợp kim thép không gỉ',
            'Kích thước không tính móc khóa: 5x60mm',
            'Bao gồm 3 đầu: 1 đầu 2 cạnh, 1 đầu 4 cạnh, 1 đầu vặn bulong',
        ],
        tags: [],
        options: [],
    },
    {
        rating: 0,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/may-han-kho-gordak-952952a-17.jpg',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-3.jpg?v=1632910235370',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-4.jpg?v=1632910240097',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-7.jpg?v=1632910244017',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-8.jpg?v=1632910247563',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-10.jpg?v=1632910253783',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-14.jpg?v=1632910257847',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-16.jpg?v=1632910262340',
            'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-17.jpg?v=1632910266057',
        ],
        name: 'Máy Hàn Khò GORDAK 952/952A Chính hãng',
        price: 1450000,
        options: [
            {
                name: 'model',
                label: 'Model',
                selects: [
                    { label: 'GORDAK 952', value: 'GORDAK-952' },
                    { label: 'GORDAK 952A', value: 'GORDAK-952A' },
                ],
            },
        ],
        summary: [
            'Thương hiệu: GORDAK',
            'Model: 952/952A',
            'Điện áp hoạt động: 220VAC',
            'Điện áp đầu ra: 24VAC',
            'Công suất tổng: 330W',
            'Kích thước: 25x19x14 cm',
            'Trọng lượng: 4kg',
        ],
        tags: [],
    },
    {
        rating: 4,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/kit-easy-8051-1.jpg?v=1616301164190',
            'https://bizweb.dktcdn.net/100/228/168/products/kit-easy-8051-2.jpg?v=1616301169847',
            'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/kit-easy-8051-5.jpg?v=1616301176757',
            'https://bizweb.dktcdn.net/100/228/168/products/kit-easy-8051-7.jpg?v=1616301183407',
            'https://bizweb.dktcdn.net/100/228/168/products/kit-easy-8051-8.jpg?v=1616301188847',
            'https://bizweb.dktcdn.net/100/228/168/products/kit-easy-8051-10.jpg?v=1616301194163',
        ],
        name: 'Kit EASY 8051',
        price: 270000,
        sale: 0.17,
        status: 'Hết hàng',
        summary: [
            'Giao tiếp máy tính dùng RS232',
            'Hỗ trợ màn hình LCD1602 và LCD12864',
            'Đo nhiệt độ DS18b20',
            'Sử dụng hồng ngoại H1838',
            'Còi chíp 5V',
            'Chống ngắn mạch',
            'Relay&nbsp;5VDC-220VAC',
            'Trọng lượng: 120g',
        ],
        tags: [],
        options: [],
    },
    {
        rating: 4,
        imgs: [
            'https://bizweb.dktcdn.net/100/228/168/products/day-noi-7-mau.jpg?v=1640749948657',
            'https://bizweb.dktcdn.net/100/228/168/products/kich-thuoc.jpg?v=1640749958170',
            'https://bizweb.dktcdn.net/100/228/168/products/cai-cai40.jpg?v=1640749967007',
            'https://bizweb.dktcdn.net/100/228/168/products/cai-cai-10.jpg?v=1640749973120',
            'https://bizweb.dktcdn.net/100/228/168/products/duc-cai40.jpg?v=1640750008217',
            'https://bizweb.dktcdn.net/100/228/168/products/duc-cai10.jpg?v=1640750014427',
            'https://bizweb.dktcdn.net/100/228/168/products/duc-duc40.jpg?v=1640750034187',
            'https://bizweb.dktcdn.net/100/228/168/products/duc-duc10.jpg?v=1640750040837',
        ],
        name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
        price: 9000,
        sale: 0.22,
        options: [
            {
                name: 'phan-loai',
                label: 'Phân loại',
                selects: [
                    { label: 'Đực Đực', value: 'duc-duc' },
                    { label: 'Đực Cái', value: 'duc-cai' },
                    { label: 'Cái Cái', value: 'cai-cai' },
                ],
            },
            {
                name: 'tep',
                label: 'Tệp',
                selects: [
                    { label: '10 Sợi', value: '10-soi' },
                    { label: '40 Sợi', value: '40-soi' },
                ],
            },
        ],
        summary: [
            'Chiều dài: 21cm',
            'Phân loại: Đực Đực, Đực Cái, Cái - Cái',
            'Khoảng cách testboard: 2.54cm',
            'Màu sắc: 7 màu',
        ],
        tags: [],
    },
    {
        rating: 5,
        imgs: [
            'https://bizweb.dktcdn.net/thumb/1024x1024/100/228/168/products/ni2.jpg?v=1615772857003',
            'https://bizweb.dktcdn.net/100/228/168/products/ni1.jpg?v=1615772857003',
            'https://bizweb.dktcdn.net/100/228/168/products/ni3.jpg?v=1615772857003',
        ],
        name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
        price: 10000,
        status: 'Hết hàng',
        summary: [
            'Dây Niken: Kích thước 0.1x4mm',
            'Chất liệu: thép mạ Niken',
            'Ứng dụng: hàn cell pin các loại như pin 3.7v 18650',
            'Chiều dài: 1m',
            'Độ dày: 0.1mm',
        ],
        tags: [],
        options: [],
    },
    {
        rating: 4,
        imgs: [
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do.jpg?v=1633339037413',
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do-2.jpg?v=1633339037413',
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do-4.jpg?v=1633339037413',
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-11.jpg?v=1633339037413',
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do-9.jpg?v=1633339037413',
            'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do-10.jpg?v=1633339037413',
        ],
        name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
        price: 5000,
        sale: 0.1,
        options: [
            {
                name: 'title',
                label: 'Title',
                selects: [
                    { label: '1 Chiếc', value: '1-chiec' },
                    { label: '10 Chiếc', value: '10-chiec' },
                ],
            },
        ],
        summary: [
            'Phiên bản USB: 3.0',
            'Phân loại: Cái',
            'Độ cong: 90 độ',
            'Số cổng: 1',
            'Dòng định mức: 1.8A',
            'Điện áp định mức:30VAC',
            'Vật liệu tiếp đểm: Hợp kim đồng',
            'Nhiệt độ hoạt động: -55 đến 85 độ C',
        ],
        tags: [],
    },
    {
        rating: 3,
        imgs: [
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-2.jpg?v=1608610374250',
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-7.jpg?v=1608610377357',
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool.jpg?v=1608610380213',
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-4.jpg?v=1608610383853',
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-9.jpg?v=1608610387127',
            'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-10.jpg?v=1608610391467',
        ],
        name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
        price: 669000,
        status: 'Hết hàng',
        summary: [
            'Chất liệu chính: NHỰA ABS',
            'Màu sắc: Đen',
            'Pin: 2x nút pin CR2302',
            'Kích thước đóng gói: 13*6.5*2cm&nbsp;',
            'Trọng lượng gói hàng: 265g / 9.3ounce',
        ],
        tags: [],
        options: [],
    },
    {
        rating: 4,
        imgs: [
            'https://bizweb.dktcdn.net/100/228/168/products/kinh-lup-hoc-sinh-vien-kim-loai-7.jpg?v=1607595345743',
            'https://bizweb.dktcdn.net/100/228/168/products/kinh-lup-hoc-sinh-vien-kim-loai-1.jpg?v=1607595336360',
            'https://bizweb.dktcdn.net/100/228/168/products/kinh-lup-hoc-sinh-vien-kim-loai-5.jpg?v=1607595339737',
        ],
        name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
        price: 35000,
        options: [
            {
                name: 'kich-thuoc',
                label: 'Kích thước',
                selects: [
                    { label: '50 MM', value: '50-MM' },
                    { label: '60 MM', value: '60-MM' },
                    { label: '75 MM', value: '75-MM' },
                    { label: '90 MM', value: '90-MM' },
                    { label: '100 MM', value: '100-MM' },
                ],
            },
        ],
        summary: [
            'Viền kính lúp: Bằng kim loại',
            'Chuôi: Bằng nhựa',
            'Đường kính của kính lúp: 50mm/60mm/75mm/90mm/100mm',
            'Trọng lượng: 200g',
        ],
        tags: [],
    },
];

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

export const product = {
    id: 'PVN11634',
    imgs: [
        'https://bizweb.dktcdn.net/100/228/168/products/kt10.jpg?v=1641283286270s',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/40-10cc.jpg?v=1641283209027',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/dc.jpg?v=1641283227840',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/dd.jpg?v=1641283243017',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/kt10.jpg?v=1641283286270',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/10cc.jpg?v=1641283293067',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/10dd.jpg?v=1641283308823',
        'https://bizweb.dktcdn.net/thumb/medium/100/228/168/products/cd.jpg?v=1641283325167',
    ],
    name: 'Dây Cắm Test Board 10cm, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 10cm',
    price: 8000,
    sale: 0.25,
    rating: 4,
    summary: [
        'Chiều dài: 10cm',
        'Phân loại: Đực Đực, Đực Cái, Cái - Cái',
        'Khoảng cách testboard: 2.54cm',
        'Màu sắc: 7 màu',
    ],
    options: [
        {
            name: 'phan-loai',
            context: 'Phân loại',
            selects: [
                { value: 'duc-duc', context: 'Đực Đực' },
                { value: 'duc-cai', context: 'Đực Cái' },
                { value: 'cai-cai', context: 'Cái Cái' },
            ],
        },
        {
            name: 'tep',
            context: 'Tệp',
            selects: [
                { value: '10-soi', context: '10 Sợi' },
                { value: '40-soi', context: '40 Sợi' },
            ],
        },
    ],
    tags: ['Case', 'RASPBERRY', 'AVR'],
    description: '',
};

export const addresses = [
    {
        id: 1,
        name: 'nhat sang',
        address: 'so 1 vvn, so 2 vvn, tphcm',
        phone: '0X261XXXXXX',
        setDefault: false,
    },
    {
        id: 2,
        name: 'sang nhat',
        address: 'so 3 vvn, so 4 vvn, tphcm',
        phone: '0X262XXXXXX',
        setDefault: true,
    },
];

export const comments = [
    {
        userName: 'học phan',
        img: 'https://www.gravatar.com/avatar/d60537067c787a1ee47b1d1ac8f02803?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content:
            'Shop cần kiểm tra kỹ số lượng trước khi gửi vì.thiếu 1 vài linh kiện người mua lại không làm được gây khó chịu.và cửa hàng nên để chế độ cho xem trước khi đưa tiền thì người mua sẽ dễ kiểm tra chất lượng và số lượng linh kiện.cũng như tránh trường hợp thất lạc trong lúc vận chuyển.và có khi không thiếu nhưng khách lại báo thiếu gây thiệt hại cho cửa hàng.mong shop ngày càng đa dạng sản phẩm hơn.để mua 1 lần có thể đủ không đến shop khác cũng như đỡ tiền ship cho khách sẽ có nhiều khách tới với s',
    },
    {
        userName: 'Lý Ngọc Huỳnh',
        img: 'https://www.gravatar.com/avatar/1c8d1b49f0eef57b0cb73c1e7ea8e510?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content: 'Cần gói hàng cẩn thận hơn',
    },
    {
        userName: 'Văn Minh',
        img: 'https://www.gravatar.com/avatar/b34dda057a3109d27343d39e7091a2cc?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content:
            'mình đã mua linh kiện ở đây rất nhiều lần vì shop này làm ăn uy tín, sản phẩm chất lượng tốt',
    },
    {
        userName: 'Nguyễn Quang Thiên',
        img: 'https://www.gravatar.com/avatar/1d1bead9851345aef95f34d392e992d0?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content:
            'shop phục vụ tốt giao hàn nhanh, thích nhất là bộ phận Thông tin kỹ thuật trao đổi nhiệt tình',
    },
    {
        userName: 'Vu nguyen the anh',
        img: 'https://www.gravatar.com/avatar/3b7d054fbc35ce085cf387347a212a9b?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content: 'shop phục vụ tốt sản phẩm chất lượng ít sai số',
    },
    {
        userName: 'Huỳnh Quang Duy',
        img: 'https://www.gravatar.com/avatar/e650173e498f97c32fc24d5aa7d3ece7?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content:
            'Hàng đúng như quảng cáo, giống với hình trên trang web. Sẽ ủng hộ lâu dài.',
    },
    {
        userName: 'Huynh huu thien an',
        img: 'https://www.gravatar.com/avatar/8da39c91d3c3e144138f0801eb4c81a7?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content: 'Giao hàng đúng như quảng cáo. Thanks',
    },
    {
        userName: 'Chu Văn Hưng',
        img: 'https://www.gravatar.com/avatar/069e2b00c815d028e75c8cc3e2eda2dc?s=55&d=identicon',
        createdAt: formatDate(new Date()),
        content:
            'Mình đang dùng hàng shop chế đồ. Thấy 1 số linh kiện ngon. Tuy nhiên cần check kỹ hơn nữa trước khi giao hàng là Ok',
    },
];

export const user = {
    lastName: 'sang',
    firstName: 'nhat',
    email: 'nhatsangtv123@gmail.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiDaOkbNZij3ZYaLI24Vanv7s8TlhVrpNJQ&usqp=CAU',
    password: '1234567890',
    role: 'admin',
};

export const categories = [
    {
        name: 'Vi điều khiển - Nhúng',
        image: imgCate2,
        subCategories: [
            {
                name: 'Kit phát triển',
                subCategories: [
                    { name: '8051' },
                    { name: 'PIC' },
                    { name: 'ARM - STM' },
                    { name: 'Arduino' },
                    { name: 'Raspberry' },
                    { name: 'AVR' },
                    { name: 'Phụ kiện KIT' },
                    { name: 'NaNo - Pi' },
                ],
            },
            {
                name: 'Mạch nạp',
                subCategories: [
                    { name: 'Mạch nạp 8051' },
                    { name: 'Mạch nạp AVR' },
                    { name: 'Mạch nạp PIC' },
                    { name: 'Mạch nạp STM-ARM' },
                    { name: 'Mạch nạp MSP430' },
                    { name: 'Mạch nạp MSP430' },
                ],
            },
            {
                name: 'Vi điều khiển',
                subCategories: [
                    { name: 'Vi điều khiển 8051' },
                    { name: 'Vi điều khiển AVR' },
                    { name: 'Vi điều khiển STM' },
                    { name: 'PIC - DSPIC' },
                    { name: 'Vi điều khiển MSP430' },
                ],
            },
        ],
    },
    {
        name: 'Module ứng dụng',
        image: imgCate3,
        subCategories: [
            { name: 'Module RF' },
            { name: 'Module RFID' },
            { name: 'Ethernet/Wifi' },
            { name: 'Bluetooth' },
            { name: 'Camera' },
            { name: 'Sim-GMS/GPRS/GPS/3G' },
            { name: 'Module động cơ' },
            { name: 'Module SD' },
            { name: 'Module VGA' },
            { name: 'Module chuyển đổi' },
            { name: 'Hồng ngoại/Ánh sáng' },
            { name: 'Module relay' },
            { name: 'Module nguồn' },
            { name: 'Matrix phím' },
            { name: 'Module driver' },
            { name: 'Audio/MP3' },
            { name: 'Thời gian/Tạo trễ' },
            { name: 'Vân tay ( Finger-Print )' },
            { name: 'Module AD' },
            { name: 'Module DTMF' },
            { name: 'Module led' },
            { name: 'Khống chế nhiệt độ' },
            { name: 'Đo dòng/Đo áp' },
            { name: 'Máy in 3D' },
            { name: 'Dao động/Phát xung' },
            { name: 'Module tạo sương' },
            { name: 'Module cảm biến' },
        ],
    },
    {
        name: 'Cảm biến',
        image: imgCate4,
        subCategories: [
            { name: 'Cảm biến nhiệt độ' },
            { name: 'Cảm biến độ ẩm' },
            { name: 'Cảm biến chuyển động' },
            { name: 'Cảm biến ánh sáng' },
            { name: 'Cảm biến khí' },
            { name: 'Cảm biến siêu âm' },
            { name: 'Cảm biến màu' },
            { name: 'Cảm biến gia tốc,góc' },
            { name: 'Cảm biến áp suất' },
            { name: 'Cảm biến Từ' },
            { name: 'Cảm biến nước' },
            { name: 'Cảm biến khoảng cách' },
            { name: 'Cảm biến âm thanh' },
            { name: 'Cảm biến rung' },
            { name: 'Load Cell' },
            { name: 'Cảm biến dòng' },
            { name: 'La bàn số' },
            { name: 'Cảm biến nhịp tim' },
            { name: 'Mở cửa/Báo động' },
        ],
    },
    {
        name: 'Linh kiện điện tử',
        image: imgCate5,
        subCategories: [
            {
                name: 'Linh kiện cơ bản',
                subCategories: [
                    { name: 'Điện trở' },
                    { name: 'Cuộn cảm' },
                    { name: 'Tụ điện' },
                ],
            },
            {
                name: 'Linh kiện bán dẫn',
                subCategories: [
                    { name: 'Diode' },
                    { name: 'Mosfet & Fets' },
                    { name: 'Transistor' },
                    { name: 'Triac-Thy-Diac' },
                    { name: 'Opto-Photocouplers' },
                ],
            },
            {
                name: 'Linh kiện thụ động',

                subCategories: [
                    { name: 'Biến trở' },
                    { name: 'Triết áp' },
                    { name: 'Loa/Còi báo' },
                    { name: 'Cầu chì' },
                    { name: 'Thạch anh' },
                    { name: 'Relay' },
                    { name: 'Varistor/Tụ Chống Sét' },
                    { name: 'Nút nhấn/Công tắc/SW' },
                ],
            },
            {
                name: 'Led/Lcd/Text',
                subCategories: [
                    { name: 'Led 7 thanh' },
                    { name: 'Bóng đèn LED' },
                    { name: 'LCD/Text' },
                    { name: 'Led Matrix' },
                    { name: 'Led Công Suất' },
                ],
            },
        ],
    },
    {
        name: 'IC chức năng',
        image: imgCate6,
        subCategories: [
            { name: 'IC nguồn' },
            { name: 'Ic real time' },
            { name: 'IC Opam' },
            { name: 'IC giao tiếp' },
            { name: 'IC CD' },
            { name: 'IC công suất' },
            { name: 'IC audio' },
            { name: 'ADC/DAC' },
            { name: 'IC driver' },
            { name: '74HC/ 74LS/ IC số' },
            { name: 'IC mã hóa/Giải mã' },
            { name: 'IC cảm ứng' },
            { name: 'IC can' },
            { name: 'IC khác' },
            { name: 'Đế IC' },
        ],
    },
    {
        name: 'Thiết bị chế tạo',
        image: imgCate7,
        subCategories: [
            {
                name: 'Robot mô hình',

                subCategories: [
                    { name: 'Động cơ' },
                    { name: 'máy bơm/Tạo khí' },
                    { name: 'Máy bay mô hình' },
                    { name: 'Mô hình/Xe robot' },
                    { name: 'Phụ kiện' },
                ],
            },
            {
                name: 'Thiết bị hàn',
                subCategories: [
                    { name: 'Máy hàn' },
                    { name: 'Thiếc hàn' },
                    { name: 'Phụ kiện hàn' },
                    { name: 'Máy Khò' },
                ],
            },
            {
                name: 'Mạch in',
                subCategories: [
                    { name: 'Phíp đồng' },
                    { name: 'PCB/Board Test' },
                    { name: 'Hóa chất' },
                    { name: 'Dụng cụ phụ trợ' },
                ],
            },
        ],
    },
    {
        name: 'Dụng cụ - phụ kiện',
        image: imgCate8,
        subCategories: [
            {
                name: 'Dụng cụ cầm tay',

                subCategories: [
                    { name: 'Kính lúp' },
                    { name: 'Súng bắn keo' },
                    { name: 'Máy khoan/Cắt/Mài' },
                    { name: 'Phụ kiện máy khoan/Máy cắt' },
                    { name: 'Kìm/Kẹp/Tua vít' },
                ],
            },
            {
                name: 'Tản nhiệt/Cách điện',
                subCategories: [
                    { name: 'Quạt tản nhiệt' },
                    { name: 'Nhôm tản nhiệt' },
                    { name: 'Keo/Mỡ tản nhiệt' },
                    { name: 'Sò nóng lạnh và phụ kiện' },
                ],
            },
            {
                name: 'Hộp các loại',
                subCategories: [
                    { name: 'Hộp đựng 1 ngăn' },
                    { name: 'Hộp đựng nhiều ngăn' },
                ],
            },
            {
                name: 'Thiết bị đo/Kiểm tra',
                subCategories: [
                    { name: 'Đồng hồ đo' },
                    { name: 'Thước đo' },
                    { name: 'Thiết Bị Đo' },
                ],
            },
            {
                name: 'Tạo nguồn điện',
                subCategories: [
                    { name: 'Nguồn adapter' },
                    { name: 'Biến áp' },
                    { name: 'Nguồn tổ ong/Nguồn xung' },
                    { name: 'Pin, Ắc Quy' },
                    { name: 'Mạch sạc pin, ắc quy' },
                    { name: 'Box sạc dự phòng' },
                    { name: 'Đế pin' },
                    { name: 'Bộ chuyển đổi điện' },
                    { name: 'Anten' },
                ],
            },
            {
                name: 'Thiết bị gia dụng',
                subCategories: [
                    { name: 'Thiết bị an toàn' },
                    { name: 'Remote- Điều Khiển' },
                    { name: 'Túi Đựng Dụng Cụ' },
                ],
            },
        ],
    },
    {
        name: 'Connector',
        image: imgCate9,
        subCategories: [
            {
                name: 'Dây kết nối',
                subCategories: [
                    { name: 'Dây đồng/Dây điện' },
                    { name: 'Dây cáp nối' },
                    { name: 'Dây bus, Dây Buộc' },
                    { name: 'Dây co nhiệt, chịu nhiệt' },
                ],
            },
            {
                name: 'Cổng kết nối',
                subCategories: [
                    { name: 'Terminal' },
                    { name: 'Jack DC' },
                    { name: 'Cổng USB' },
                    { name: 'Header' },
                    { name: 'Audio' },
                    { name: 'Cổng DB-DP' },
                    { name: 'IDE - IDC' },
                    { name: 'Jumper' },
                ],
            },
            {
                name: 'Phụ kiện',
                subCategories: [
                    { name: 'Cọc đồng/Cọc nhựa' },
                    { name: 'Kẹp cá sấu/ Móc' },
                    { name: 'Socket' },
                    { name: 'Ốc - Vít' },
                ],
            },
        ],
    },
    {
        name: 'Sản phẩm combo',
        image: imgCate10,
        subCategories: [
            { name: 'Combo máy hàn' },
            { name: 'Combo máy khoan' },
            { name: 'Sản phẩm DIY' },
            { name: 'Combo khác' },
        ],
    },
    {
        name: 'Nam châm đất hiếm',
        image: imgCate11,
    },
    {
        name: 'Phụ kiện điện thoại',
        image: imgCate12,
        subCategories: [
            { name: 'Pin Sạc' },
            { name: 'Cáp Sạc' },
            { name: 'Thẻ Nhớ' },
            { name: 'Loa' },
            { name: 'Giá Đỡ Điện Thoại' },
            { name: 'Chuột/ Bàn Phím' },
            { name: 'Ống Kinh Điện Thoai' },
        ],
    },
    {
        name: 'Phụ kiện máy tính',
        image: imgCate13,
        subCategories: [{ name: 'Dây Nguồn' }],
    },
];
