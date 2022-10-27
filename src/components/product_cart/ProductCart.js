import {
    faBasketShopping,
    faMagnifyingGlass,
    faTurnDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { pathNames } from '~/routes';
import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { cx, context } from './constant';

function ProductCart({ product }) {
    const percent = 100;
    const priceSale = priceSaleVN(product.price, product.sale);

    return (
        <Link to={pathNames.home} className={cx('product')}>
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
        </Link>
    );
}

export default ProductCart;
