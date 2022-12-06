import { currencyVN } from '~/utils/funcs';
import * as services from '~/services/services';

import { cxCartItem, context } from './constant';
import { InputQuantity } from '../components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CartItem({ product }) {
    const navigate = useNavigate();

    // Handle event
    const handleChange = (value) => {};
    const handleDelete = async (id) => {
        const result = await services.deleteCart(id);

        if (result?.message === `Delete item ${id} in cart success`) {
            navigate(0);
        } else {
            toast.error('Xóa sản phẩm khỏi giỏ hàng thất bại');
        }
    };

    return (
        <li className={cxCartItem('cart-item')}>
            <div className={cxCartItem('col', 'l-3', 'm-2', 's-3')}>
                <img
                    src={product.image[0].url}
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
                            onClick={() => handleDelete(product.itemId)}
                        >
                            {context.delete}
                        </span>
                    </div>

                    <span className={cxCartItem('cart-item__price')}>
                        {currencyVN(product.subPrice)}
                    </span>
                </div>
            </div>

            <div className={cxCartItem('col', 'l-2', 'm-2', 's-3')}>
                <InputQuantity
                    startNumber={product.quantity}
                    small
                    onChange={(value) => handleChange(value)}
                />
                <span
                    className={cxCartItem({
                        'invalid-message': !product.quantity,
                    })}
                >
                    {!product.quantity && context.errorMessage}
                </span>
            </div>
        </li>
    );
}

export default CartItem;
