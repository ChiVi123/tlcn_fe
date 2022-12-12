import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { cartServices } from '~/services';

import { cxCartItem, context } from './constant';
import { InputQuantity } from '../components';

function CartItem({ product }) {
    const navigate = useNavigate();

    // Handle event
    const handleChange = async (isAddition, number) => {
        if (number < 1) {
            return;
        }

        const { productid: producId, productOptionid, value } = product;
        const result = await cartServices.addCart({
            producId,
            productOptionId: productOptionid || null,
            value,
            quantity: isAddition ? 1 : -1,
        });
        const expectMessage = `Update product ${
            productOptionid ? productOptionid : 'null'
        } in cart success`;

        if (result?.message === expectMessage) {
            navigate(0);
        } else {
            toast.error('Không thể thêm hoặc giảm số lượng');
        }
    };
    const handleDelete = (id) => {
        const title = `Bạn có chắc xóa ${product.name}`;

        Swal.fire({
            title,
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                const result = await cartServices.deleteCart(id);
                const expectMessage = `Delete item ${id} in cart success`;

                if (result?.message === expectMessage) {
                    navigate(0);
                } else {
                    toast.error('Xóa sản phẩm khỏi giỏ hàng thất bại');
                }
            }
        });
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
                        <Link
                            to={`/product/${product.productid}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <h3 className={cxCartItem('cart-item__name')}>
                                {product.name}
                            </h3>
                        </Link>
                        <span
                            className={cxCartItem('delete-text')}
                            onClick={() => handleDelete(product.itemId)}
                        >
                            {context.delete}
                        </span>
                    </div>

                    <span className={cxCartItem('cart-item__price')}>
                        {currencyVN(priceSaleVN(product.price, product.sale))}
                    </span>
                </div>
            </div>

            <div className={cxCartItem('col', 'l-2', 'm-2', 's-3')}>
                <InputQuantity
                    startNumber={product.quantity}
                    small
                    onSpecial={(isAddition, value) =>
                        handleChange(isAddition, value)
                    }
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
