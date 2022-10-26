import { useMemo } from 'react';

import { Button } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { products } from '~/utils/constant';
import { cxCart, context } from './constant';
import CartItem from './CartItem';

function Cart() {
    const total = useMemo(() => {
        return products.reduce((total, product) => total + product.price, 0);
    }, []);
    return (
        <div className={cxCart('wrapper')}>
            <div className={cxCart('grid', 'wide')}>
                <div className={cxCart('row', 'section')}>
                    {products ? (
                        <>
                            <div className={cxCart('col', 'l-9')}>
                                <h1 className={cxCart('title')}>
                                    {context.title}
                                </h1>
                                <span>(10 {context.product})</span>

                                <ul className={cxCart('carts')}>
                                    {products.map((item, index) => (
                                        <CartItem key={index} product={item} />
                                    ))}
                                </ul>
                            </div>
                            <div className={cxCart('col', 'l-3')}>
                                <div className={cxCart('wrapper-total')}>
                                    <div className={cxCart('price-info')}>
                                        <span className={cxCart('text')}>
                                            {context.total}
                                        </span>
                                        <span className={cxCart('price')}>
                                            {currencyVN(total)}
                                        </span>
                                    </div>
                                    <div className={cxCart('section-btn')}>
                                        <Button
                                            to={'/shipping'}
                                            className={cxCart(
                                                'btn',
                                                'btn--solid',
                                            )}
                                        >
                                            {context.buyNow}
                                        </Button>
                                        <Button
                                            to={'/'}
                                            className={cxCart('btn')}
                                        >
                                            {context.keepShopping}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <h1>Your Cart Is Empty</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
