import { useEffect, useState } from 'react';

import { Section, Title, Wrapper } from '~/components';
import * as services from '~/services/services';
import { cx, context } from './constant';
import Order from './order/Order';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.userGetAllOrder();

            if (result?.list?.length) {
                setOrders(result.list);
            }

            console.log(result);
        };

        fetchApi();
    }, []);

    return (
        <Wrapper>
            <div className={cx('grid', 'wide')}>
                <Section classNames={cx('containter')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <Title as='h1'>{context.title}</Title>
                        </div>

                        <div className={cx('col', 'l-12')}>
                            <Title as='h3'>{context.hello}</Title>
                        </div>

                        <div className={cx('col', 'l-12')}>
                            <Title as='h2'>{context.titleTable}</Title>
                        </div>
                    </div>

                    <div className='col l-12'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{context.id}</th>
                                    <th>{context.date}</th>
                                    <th>{context.product}</th>
                                    <th>{context.address}</th>
                                    <th>{context.totalPrice}</th>
                                    <th>{context.status}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <Order key={index} order={order} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Orders;
