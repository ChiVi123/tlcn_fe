import { useMemo } from 'react';

import { Button, Section, Wrapper } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { products } from '~/utils/constant';
import { cxCart, context } from './constant';
import CartItem from './CartItem';
import { pathNames } from '~/routes';

function Cart() {
    const total = useMemo(() => {
        return products.reduce((total, product) => total + product.price, 0);
    }, []);
    return (
        <Wrapper>
            <div className={cxCart('grid', 'wide')}>
                <Section>
                    <div className={cxCart('row')}>
                        {products ? (
                            <>
                                <div className={cxCart('col', 'l-9')}>
                                    <h1 className={cxCart('title')}>
                                        {context.title}
                                    </h1>
                                    <span>(10 {context.product})</span>

                                    <ul className={cxCart('carts')}>
                                        {products.map((item, index) => (
                                            <CartItem
                                                key={index}
                                                product={item}
                                            />
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
                                                solid
                                                fullWidth
                                                to={pathNames.checkout}
                                            >
                                                {context.buyNow}
                                            </Button>
                                            <Button
                                                fullWidth
                                                to={pathNames.home}
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
                </Section>
            </div>
        </Wrapper>
    );
}

export default Cart;
