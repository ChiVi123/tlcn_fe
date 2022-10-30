import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

const context = {
    idProduct: 'Mã sản phẩm:',
    quantity: 'Số lượng',
    addToCart: 'Thêm vào giỏ hàng',
    buyNow: 'Mua ngay',
    tags: 'Tags:',
    description: 'Mô tả sản phẩm',
    relation: 'Sản phẩm cùng loại',
    comment: 'Bình luận (780 bình luận)',
};

const form = {
    quantity: 'quantity',
};

export { cx, context, form };
