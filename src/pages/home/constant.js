import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const tabs = ['Tất cả sản phẩm', 'Vi điều khiển - Nhúng', 'Module ứng dụng'];

const context = {
    title: 'Sản phẩm nổi bật',
    titleControl: 'Vi điều khiển - Nhúng',
    titleTool: 'Dụng cụ - phụ kiện',
    viewMoreButton: 'Xem thêm',
    viewMoreText: 'Xem tất cả',
};

export { cx, tabs, context };
