// import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Section, Title, Wrapper } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { pathNames } from '~/routes';
import { cartAction, cartSelector } from '~/redux';

import { cxCart, context } from './constant';
import CartItem from './CartItem';

function Cart() {
    const cart = useSelector(cartSelector.getCart);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(cartAction.resetCart());
    };

    return (
        <Wrapper>
            <div className={cxCart('grid', 'wide')}>
                <Section>
                    {cart.items.length > 0 ? (
                        <div className={cxCart('row')}>
                            <div className={cxCart('col', 'l-9')}>
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
                            <div className={cxCart('col', 'l-3')}>
                                <div className={cxCart('wrapper-total')}>
                                    <div className={cxCart('price-info')}>
                                        <span className={cxCart('text')}>
                                            {context.total}
                                        </span>
                                        <span className={cxCart('price')}>
                                            {currencyVN(cart.total)}
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
                                        <Button onClick={handleReset} fullWidth>
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Title as='h1' center>
                            Vỏ hàng rỗng
                        </Title>
                    )}
                </Section>
            </div>
        </Wrapper>
    );
}

export default Cart;
