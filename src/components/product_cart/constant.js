import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';

const cx = classNames.bind(styles);
const context = {
    unavailable: 'Hết hàng',
    option: 'Tùy chọn',
    buyNow: 'Mua ngay',
};

export { cx, context };