import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useNavigate, useParams } from 'react-router-dom';

import { avatarDefault } from '~/assets/images/statics';
import { Button, Title } from '~/components';
import { currencyVN, priceSaleVN } from '~/utils/funcs';
import * as services from '~/services/services';
import { enumStateOrder } from '~/utils/constant';
import { ButtonCustomize } from '~/admin/components';

import { cx, context } from './constant';
import Swal from 'sweetalert2';

function AdminOrder() {
    const [order, setOrder] = useState();
    const [user, setUser] = useState();
    const [orderState, setOrderState] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async ({ id }) => {
            const resultOrder = await services.adminGetOrderById({ id });
            setOrder(resultOrder);

            const state = enumStateOrder[resultOrder.state];
            setOrderState(state[resultOrder.paymentType]);

            const resultUser = await services.getUserById({
                id: resultOrder.userId,
            });
            setUser(resultUser);
        };
        fetchApi({ id });
    }, [id]);

    const handleCancel = () => {
        Swal.fire({
            title: 'Bạn muốn hủy đơn hàng',
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Bỏ qua',
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                const expectMessage = 'Cancel order successfully';
                const result = await services.adminCancelOrderById({ id });
                if (result?.message === expectMessage) {
                    navigate(0);
                }
            }
        });
    };

    const handleDelivery = () => {
        Swal.fire({
            title: 'Bạn muốn xác nhận đơn hàng',
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Bỏ qua',
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                const expectMessage = 'Delivery order successfully';
                const result = await services.adminDeliveryOrderById({ id });
                if (result?.message === expectMessage) {
                    navigate(0);
                }
            }
        });
    };

    const handleComplete = () => {
        Swal.fire({
            title: 'Giao hàng thành công',
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Bỏ qua',
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                const expectMessage = 'Complete order successfully';
                const result = await services.adminCompletelOrderById({ id });
                if (result?.message === expectMessage) {
                    navigate(0);
                }
            }
        });
    };

    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/orders'}>{context.backToPage}</Button>

            <div className={cx('row')} style={{ marginTop: '20px' }}>
                <div className={cx('col', 'l-4')}>
                    <Avatar
                        src={user?.avatar || avatarDefault}
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
                        <div className={cx('col', 'l-12')}>
                            <span className={cx('large-text')}>
                                {context.methodPay}
                                {order?.paymentType}
                            </span>
                        </div>

                        {/* State payment */}
                        {order?.paymentType && order?.state && (
                            <div className={cx('col', 'l-12')}>
                                <span className={cx('large-text')}>
                                    {context.status}
                                    {orderState.isPay}
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

                        {orderState.isCancel && (
                            <div
                                className={cx('col', 'l-4')}
                                style={{ marginTop: '1.2rem' }}
                            >
                                <ButtonCustomize
                                    isDelete={true}
                                    onClick={handleCancel}
                                >
                                    {context.cancelButton}
                                </ButtonCustomize>
                            </div>
                        )}

                        {orderState.isDelivery && (
                            <div
                                className={cx('col', 'l-4')}
                                style={{ marginTop: '1.2rem' }}
                            >
                                <ButtonCustomize
                                    isRead={true}
                                    onClick={handleDelivery}
                                >
                                    {context.deliveryButton}
                                </ButtonCustomize>
                            </div>
                        )}

                        {orderState.isComplete && (
                            <div
                                className={cx('col', 'l-4')}
                                style={{ marginTop: '1.2rem' }}
                            >
                                <ButtonCustomize
                                    isEdit={true}
                                    onClick={handleComplete}
                                >
                                    {context.completeButton}
                                </ButtonCustomize>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Title as='h2'>{context.titleListProduct}</Title>

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
                        {item?.price && (
                            <span className={cx('text')}>
                                {currencyVN(
                                    priceSaleVN(item?.price, item?.sale),
                                )}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AdminOrder;
