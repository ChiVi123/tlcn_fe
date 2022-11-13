import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { cartAction } from '~/redux';
import { currencyVN } from '~/utils/funcs';

import { cxCartItem, context } from './constant';

function CartItem({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    console.log(product);

    // Handle event
    const handleQuantity = ({ target: { value } }) => {
        if (Number.isInteger(value)) {
            setQuantity(value);
            return;
        }

        const text = value.trim();

        if (!text) {
            setQuantity('');
            return;
        }

        setQuantity(parseInt(text, 10));
    };
    const handleKeyUp = (event, id) => {
        switch (event.key) {
            case 'Enter':
                if (!quantity) {
                    toast.error('Lượng sản phẩm không hợp lệ');
                } else {
                    dispatch(
                        cartAction.changeQuantityProduct({
                            id,
                            quantity,
                        }),
                    );
                }
                break;
            default:
                break;
        }
    };
    const handleDecreaseQuantity = (id) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(cartAction.subtractQuantityProduct(id));
        }
    };
    const handleIncreaseQuantity = (id) => {
        setQuantity(quantity + 1);
        dispatch(cartAction.plusQuantityProduct(id));
    };
    const handleDelete = (id) => {
        dispatch(cartAction.removeProduct(id));
    };

    return (
        <li className={cxCartItem('cart-item')}>
            <div className={cxCartItem('col', 'l-3')}>
                <img
                    src={product.image.url}
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

            <div className={cxCartItem('col', 'l-2')}>
                <div className={cxCartItem('quantity')}>
                    <button
                        className={cxCartItem(
                            'btn-input',
                            'btn-input--decrease',
                        )}
                        onClick={() =>
                            handleDecreaseQuantity(product.productId)
                        }
                    >
                        –
                    </button>

                    <input
                        type={'number'}
                        inputMode={'numberic'}
                        onChange={handleQuantity}
                        onKeyUp={(event) =>
                            handleKeyUp(event, product.productId)
                        }
                        value={quantity}
                        className={cxCartItem('input-quantity')}
                    />

                    <button
                        className={cxCartItem(
                            'btn-input',
                            'btn-input--increase',
                        )}
                        onClick={() =>
                            handleIncreaseQuantity(product.productId)
                        }
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;
