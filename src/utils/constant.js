import { formatDate } from './funcs';

export const products = [
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
        addresses: ['so 1 vvn', 'so 2 vvn', 'tphcm'],
        phone: '0X261XXXXXX',
        setDefault: false,
    },
    {
        id: 2,
        name: 'sang nhat',
        addresses: ['so 3 vvn', 'so 4 vvn', 'tphcm'],
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
