import { useEffect, useState } from 'react';

import { Button, Section, Title, Wrapper } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { pathNames } from '~/routes';
import { cartServices } from '~/services';

import { cxCart, context } from './constant';
import CartItem from './CartItem';
import logger from '~/utils/logger';

function Cart() {
    const [cart, setCart] = useState({
        items: [],
        totalPrice: 0,
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await cartServices.getCartByToken();

                if (result.message === 'Get cart success') {
                    setCart(result.data);
                }
            } catch (error) {
                logger({ groupName: 'Cart', values: [error] });
            }
        };

        fetchApi();
    }, []);

    return (
        <Wrapper>
            <div className={cxCart('grid', 'wide')}>
                <Section>
                    {cart.items?.length ? (
                        <div className={cxCart('row')}>
                            <div
                                className={cxCart('col', 'l-9', 'm-12', 's-12')}
                            >
                                <h1 className={cxCart('title')}>
                                    {context.title}
                                </h1>
                                <span>
                                    ({cart.items.length} {context.product})
                                </span>

                                <ul className={cxCart('carts')}>
                                    {cart.items.map((item, index) => (
                                        <CartItem key={index} product={item} />
                                    ))}
                                </ul>
                            </div>
                            <div
                                className={cxCart('col', 'l-3', 'm-12', 's-12')}
                            >
                                <div className={cxCart('wrapper-total')}>
                                    <div className={cxCart('price-info')}>
                                        <span className={cxCart('text')}>
                                            {context.total}
                                        </span>
                                        <span className={cxCart('price')}>
                                            {currencyVN(cart.totalPrice)}
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
                                        <Button fullWidth to={pathNames.home}>
                                            {context.keepShopping}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Title as='h1' center>
                            {context.emptyCart}
                        </Title>
                    )}
                </Section>
            </div>
        </Wrapper>
    );
}

export default Cart;
