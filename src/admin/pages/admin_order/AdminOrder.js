import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';

import { avatarDefault } from '~/assets/images/statics';
import { Button, Title } from '~/components';
import { currencyVN, replaceMethodOrder } from '~/utils/funcs';
import * as services from '~/services/services';

import { cx, context } from './constant';
import { useParams } from 'react-router-dom';

function AdminOrder() {
    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        const fetchApi = async ({ id }) => {
            const result = await services.adminGetOrderById({ id });

            setOrder(result);
        };
        fetchApi({ id });
    }, [id]);

    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/orders'}>{context.backToPage}</Button>

            <div className={cx('row')} style={{ marginTop: '20px' }}>
                <div className={cx('col', 'l-4')}>
                    <Avatar
                        src={order?.userimage || avatarDefault}
                        size='200'
                        alt='avatar'
                        round='100%'
                    />

                    <Title as='h2' classNames={cx('user-name')}>
                        {context.userName}
                        {order?.userName}
                    </Title>
                </div>

                <div className={cx('col', 'l-8')}>
                    <div className={cx('row')}>
                        {/* Method payment */}
                        {order?.paymentType && order?.state && (
                            <div className={cx('col', 'l-12')}>
                                <span className={cx('large-text')}>
                                    {context.methodPay}
                                    {replaceMethodOrder(
                                        order?.paymentType,
                                        order?.state,
                                    )}
                                </span>
                            </div>
                        )}

                        {/* Delivery */}
                        <div className={cx('col', 'l-12')}>
                            {order?.delivery && (
                                <span className={cx('large-text')}>
                                    {context.address(order?.delivery)}
                                </span>
                            )}
                        </div>

                        {/* Template solve */}
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.tempResult}
                            </span>
                        </div>
                        {order?.totalPrice && (
                            <div className={cx('col', 'l-6')}>
                                <span className={cx('large-text')}>
                                    {currencyVN(order?.totalPrice)}
                                </span>
                            </div>
                        )}

                        {/* Fee shipping */}
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.feeShipping}
                            </span>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.feeShippingValue}
                            </span>
                        </div>

                        {/* Total price */}
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.total}
                            </span>
                        </div>
                        {order?.totalPrice && (
                            <div className={cx('col', 'l-6')}>
                                <span
                                    className={cx(
                                        'large-text',
                                        'large-text--blue',
                                    )}
                                >
                                    {currencyVN(order?.totalPrice)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Title as='h2'>{'Danh sách sản phẩm trong đơn hàng'}</Title>

            <ul className={cx('products')}>
                {order?.items.map((item, index) => (
                    <li key={index} className={cx('product')}>
                        <span className={cx('quantity')}>{item.quantity}</span>
                        <div className={cx('info')}>
                            <img
                                src={item.image[0].url}
                                alt={item.name}
                                className={cx('img')}
                            />
                            <Title as='h3'>{item.name}</Title>
                        </div>
                        {item?.subPrice && (
                            <span className={cx('text')}>
                                {currencyVN(item?.subPrice)}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AdminOrder;
