import { useDispatch } from 'react-redux';

import { cartActions } from '~/redux';
import { currencyVN } from '~/utils/funcs';

import { cxCartItem, context } from './constant';
import { InputQuantity } from '../components';

function CartItem({ product }) {
    const dispatch = useDispatch();

    // Handle event
    const handleChange = (value) => {
        dispatch(
            cartActions.changeQuantityProduct({
                id: product.productId,
                quantity: value,
            }),
        );
    };
    const handleDelete = (id) => {
        dispatch(cartActions.removeProduct(id));
    };

    return (
        <li className={cxCartItem('cart-item')}>
            <div className={cxCartItem('col', 'l-3', 'm-2', 's-3')}>
                <img
                    src={product.image.url}
                    alt={product.name}
                    className={cxCartItem('cart-item__image')}
                />
            </div>
            <div className={cxCartItem('col', 'l-7', 'm-8', 's-6')}>
                <div className={cxCartItem('cart-item__info')}>
                    <div className={cxCartItem('cart-item--mobile')}>
                        <h3 className={cxCartItem('cart-item__name')}>
                            {product.name}
                        </h3>
                        <span
                            className={cxCartItem('delete-text')}
                            onClick={() => handleDelete(product.productId)}
                        >
                            {context.delete}
                        </span>
                    </div>

                    <span className={cxCartItem('cart-item__price')}>
                        {currencyVN(product.price)}
                    </span>
                </div>
            </div>

            <div className={cxCartItem('col', 'l-2', 'm-2', 's-3')}>
                <InputQuantity
                    startNumber={product.quantity}
                    small
                    onChange={(value) => handleChange(value)}
                />
            </div>
        </li>
    );
}

export default CartItem;
