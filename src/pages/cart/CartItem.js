import { currencyVN } from '~/utils/funcs';
import { cxCartItem, context } from './constant';

function CartItem({ product }) {
    // Handle event
    const handleQuantity = (event) => {};
    const handleDecreaseQuantity = (event) => {};
    const handleIncreaseQuantity = (event) => {};

    return (
        <li className={cxCartItem('cart-item')}>
            <div className={cxCartItem('col', 'l-3')}>
                <img
                    src={product.imgs[0]}
                    alt={product.name}
                    className={cxCartItem('cart-item__image')}
                />
            </div>
            <div className={cxCartItem('col', 'l-7')}>
                <div className={cxCartItem('cart-item__info')}>
                    <div>
                        <h3 className={cxCartItem('cart-item__name')}>
                            {product.name}
                        </h3>
                        <span className={cxCartItem('delete-text')}>
                            {context.delete}
                        </span>
                    </div>

                    <span className={cxCartItem('cart-item__price')}>
                        {currencyVN(product.price)}
                    </span>
                </div>
            </div>

            <div className={cxCartItem('col', 'l-2')}>
                <div className={cxCartItem('quantity')}>
                    <button
                        className={cxCartItem(
                            'btn-input',
                            'btn-input--decrease',
                        )}
                        onClick={handleDecreaseQuantity}
                    >
                        –
                    </button>
                    <input
                        type={'text'}
                        onChange={handleQuantity}
                        className={cxCartItem('input-quantity')}
                    />
                    <button
                        className={cxCartItem(
                            'btn-input',
                            'btn-input--increase',
                        )}
                        onClick={handleIncreaseQuantity}
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;
