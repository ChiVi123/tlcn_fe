import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Section, Title, Wrapper } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { pathNames } from '~/routes';
import { cartActions } from '~/redux';
import * as services from '~/services/services';

import { cxCart, context } from './constant';
import CartItem from './CartItem';

function Cart() {
    const [cart, setCart] = useState({});
    // const cart = useSelector(cartSelector.getCart);
    const dispatch = useDispatch();

    // const total = useMemo(() => {
    //     return cart.items.reduce((accumulator, currentValue) => {
    //         return accumulator + currentValue.price * currentValue.quantity;
    //     }, 0);
    // }, [cart.items]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.getCartByToken();

            if (result.message === 'Get cart success') {
                setCart(result.data);
            }
        };

        fetchApi();
    }, []);

    const handleReset = () => {
        dispatch(cartActions.resetCart());
    };

    console.log(cart);

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
                                        <Button onClick={handleReset} fullWidth>
                                            Reset
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
