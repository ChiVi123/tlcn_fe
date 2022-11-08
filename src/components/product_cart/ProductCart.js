import { Link } from 'react-router-dom';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { cx } from './constant';

function ProductCart({ product, index = 0 }) {
    const percent = 100;
    const priceSale = priceSaleVN(product.price, product.sale);

    return (
        <Link to={`/product/${index}`} className={cx('product')}>
            {product.sale && (
                <span className={cx('label-sale')}>
                    <span>{product.sale * percent}%</span> Giảm
                </span>
            )}
            <img
                className={cx('product-img')}
                src={product.imgs[0]}
                alt={product.name}
            />
            <div className={cx('product-wrapper')}>
                <div className={cx('product-right')}>
                    <div>
                        <span className={cx('product-name')}>
                            {product.name}
                        </span>
                    </div>
                    <div>
                        {product.sale && (
                            <span className={cx('product-price')}>
                                {currencyVN(product.price)}
                            </span>
                        )}
                        <span className={cx('product-price-sale')}>
                            {currencyVN(priceSale)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCart;
