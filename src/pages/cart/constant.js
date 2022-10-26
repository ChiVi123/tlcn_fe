import classNames from 'classnames/bind';
import stylesCart from './Cart.module.scss';
import stylesCartItem from './CartItem.module.scss';

export const cxCart = classNames.bind(stylesCart);
export const cxCartItem = classNames.bind(stylesCartItem);

export const context = {
    title: 'Giỏ hàng',
    product: 'Sản phẩm',
    total: 'Thành tiền:',
    buyNow: 'Thanh toán ngay',
    keepShopping: 'Tiếp tục mua',
    delete: 'Xóa',
};
