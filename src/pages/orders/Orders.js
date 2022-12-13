import { useEffect, useState } from 'react';

import { ButtonPagination, Section, Title, Wrapper } from '~/components';
import { orderServices } from '~/services';
import { cx, context } from './constant';
import Order from './order/Order';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [rangeDisplay, setRangeDisplay] = useState(3);

    useEffect(() => {
        const fetchApi = async ({ currentPage }) => {
            const result = await orderServices.userGetAllOrder(currentPage);

            if (result?.list?.length) {
                setOrders(result.list);
            }
            setTotalPage(result.totalPage);
            setRangeDisplay(() => {
                if (result.totalPage > 5) {
                    return 5;
                } else {
                    return result.totalPage;
                }
            });
        };

        fetchApi({ currentPage: page - 1 });
    }, [page]);

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
                                        <th>{context.actions}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <Order key={index} order={order} />
                                    ))}
                                </tbody>
                            </table>

                            {totalPage > 1 && (
                                <ButtonPagination
                                    nextLabel={'next >'}
                                    previousLabel={'< previous'}
                                    currentPage={page}
                                    rangeDisplay={rangeDisplay}
                                    totalPage={totalPage}
                                    onClick={(value) => setPage(value)}
                                />
                            )}
                        </div>
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Orders;
