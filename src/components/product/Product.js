import {
    faBasketShopping,
    faMagnifyingGlass,
    faTurnDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cx, context } from './constant';
import { currencyVN } from '~/utils/funcs';

function Product({ product }) {
    const percent = 100;
    const thousand = 1000;
    const priceSale = product.sale
        ? product.price -
          Math.round((product.price * product.sale) / thousand) * thousand
        : product.price;

    return (
        <div className={cx('product')}>
            {product.sale && (
                <span className={cx('label-sale')}>
                    <span>{product.sale * percent}%</span> Giảm
                </span>
            )}
            <img
                className={cx('product-img')}
                src={product.src}
                alt={product.name}
            />
            <div className={cx('product-wrapper')}>
                <div className={cx('product-caption')}>
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
                    <div className={cx('product-left')}>
                        <button
                            className={cx('btn-buy', {
                                'btn-buy--unavailable': product.status,
                            })}
                        >
                            <FontAwesomeIcon
                                className={cx('btn-buy__icon')}
                                icon={
                                    product.status
                                        ? faTurnDown
                                        : faBasketShopping
                                }
                            />
                            {product.status
                                ? context.unavailable
                                : product.options
                                ? context.option
                                : context.buyNow}
                        </button>
                        <button className={cx('btn-quickreview')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
