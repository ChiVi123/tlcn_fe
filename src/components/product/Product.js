import classNames from 'classnames/bind';
import {
    faBasketShopping,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ product }) {
    return (
        <div className={cx('product')}>
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
                            <span className={cx('product-price')}>
                                {product.price.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                        </div>
                    </div>
                    <div className={cx('product-left')}>
                        <button className={cx('btn-buy')}>
                            <FontAwesomeIcon
                                className={cx('btn-buy__icon')}
                                icon={faBasketShopping}
                            />
                            Mua ngay
                        </button>
                        <button className={cx('btn-detail')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
