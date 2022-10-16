import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);
const product = {
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
const context = {
    idProduct: 'Mã sản phẩm:',
    quantity: 'Số lượng',
    addToCart: 'Thêm vào giỏ hàng',
    buyNow: 'Mua ngay',
    tags: 'Tags:',
    description: 'Mô tả sản phẩm',
    relation: 'Sản phẩm cùng loại',
};
const form = {
    quantity: 'quantity',
};
const products = [
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/228/168/products/module-camera-200w-gia-re.jpg?v=1594438145000',
        name: 'Module camera OV2640 200W Pixel',
        price: 95000,
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/228/168/products/kim-tuot-day-dien-asaki-ak-9100-3.jpg?v=1634800647000',
        name: 'Kìm Tuốt Dây Điện Asaki AK-9100',
        price: 99000,
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/10dd.jpg?v=1641283308823',
        name: 'Dây Cắm Test Board 10cm, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 10cm',
        price: 8000,
        sale: 0.25,
        options: [
            { name: 'Phân loại', selects: ['Đực Đực', 'Đực Cái', 'Cái Cái'] },
            { name: 'Tệp', selects: ['10 Sợi', '40 Sợi'] },
        ],
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/qua-tang.jpg?v=1638262765800',
        name: 'Tô Vít Móc Chìa Khóa MK01',
        price: 10000,
        status: 'Hết hàng',
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/may-han-kho-gordak-952952a-17.jpg?v=1632910266057',
        name: 'Máy Hàn Khò GORDAK 952/952A Chính hãng',
        price: 1450000,
        options: [{ name: 'Model', selects: ['GORDAK 952', 'GORDAK 952A'] }],
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/kit-easy-8051-1.jpg?v=1616301164190',
        name: 'Kit EASY 8051',
        price: 270000,
        sale: 0.17,
        status: 'Hết hàng',
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/duc-duc10.jpg?v=1640750040837',
        name: 'Dây Cắm Test Board, Dây Đực Đực, Dây Đực Cái, Dây Cái Cái, Dây Nối 7 Màu 20cm',
        price: 9000,
        sale: 0.22,
        options: [
            { name: 'Phân loại', selects: ['Đực Đực', 'Đực Cái', 'Cái Cái'] },
            { name: 'Tệp', selects: ['10 Sợi', '40 Sợi'] },
        ],
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/ni2.jpg?v=1615772857003',
        name: 'Dây Kẽm Hàn Cell Pin Niken 0.1x4mm Dài 1M',
        price: 10000,
        status: 'Hết hàng',
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/cong-usb-a-3-0-9-chan-cai-cong-90-do.jpg?v=1633339037413',
        name: 'Cổng USB A 3.0 9 chân cái cong 90 độ',
        price: 5000,
        sale: 0.1,
        options: [{ name: 'Title', selects: ['1 Chiếc', '10 Chiếc'] }],
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/dong-ho-van-nang-man-hinh-lon-2-88-inch-tool-2.jpg?v=1608610374250',
        name: 'Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động',
        price: 669000,
        status: 'Hết hàng',
    },
    {
        src: 'https://bizweb.dktcdn.net/100/228/168/products/kinh-lup-hoc-sinh-vien-kim-loai-6.jpg?v=1607595342410',
        name: 'Kính Lúp Học Sinh Thực Hành Viền Kim Loại',
        price: 35000,
        options: [
            {
                name: 'Kích thước',
                selects: ['50 MM', '60 MM', '75 MM', '90 MM', '100 MM'],
            },
        ],
    },
];

export { cx, product, context, form, products };
