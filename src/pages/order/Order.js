import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { ButtonCustomize } from '~/admin/components';
import { Section, Title, Wrapper } from '~/components';
import { currencyVN, priceSaleVN } from '~/utils/funcs';
import * as services from '~/services/services';
import { cx, context } from './constant';
import { enumStateOrder } from '~/utils/constant';

function Order() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState();
    const [orderState, setOrderState] = useState();

    useEffect(() => {
        const fetchApi = async ({ id }) => {
            const result = await services.userGetOrderById({ id });
            setOrder(result);

            const state = enumStateOrder[result.state];
            setOrderState(state[result.paymentType]);
            console.log(result);
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
            const expectMessage = 'Cancel order successfully';
            if (isConfirmed) {
                try {
                    const result = await services.userCancelOrderById({ id });
                    if (result?.message === expectMessage) {
                        Swal.fire({
                            title: 'Hủy đơn hàng thành công',
                            icon: 'success',
                            confirmButtonText: 'Xác nhận',
                            allowOutsideClick: false,
                        }).then(({ isConfirmed }) => {
                            if (isConfirmed) {
                                navigate(0);
                            }
                        });
                    }
                } catch (error) {
                    const erroMessage = 'You cannot cancel';
                    if (error === erroMessage) {
                        Swal.fire({
                            title: 'Không thể hủy khi đơn hàng đang được giao',
                            icon: 'error',
                            confirmButtonText: 'Xác nhận',
                            allowOutsideClick: false,
                        }).then(({ isConfirmed }) => {
                            if (isConfirmed) {
                                navigate(0);
                            }
                        });
                    } else {
                        Swal.fire({
                            title: 'Hủy đơn hàng thất bại',
                            icon: 'error',
                            confirmButtonText: 'Xác nhận',
                            allowOutsideClick: false,
                        }).then(({ isConfirmed }) => {
                            if (isConfirmed) {
                                navigate(0);
                            }
                        });
                    }
                }
                // const result = await services.userCancelOrderById({ id });
                // if (result?.message === expectMessage) {
                //     Swal.fire({
                //         title: 'Hủy đơn hàng thành công',
                //         icon: 'success',
                //         confirmButtonText: 'Xác nhận',
                //         allowOutsideClick: false,
                //     }).then(({ isConfirmed }) => {
                //         if (isConfirmed) {
                //             navigate(0);
                //         }
                //     });
                // } else {
                //     Swal.fire({
                //         title: 'Hủy đơn hàng thất bại',
                //         icon: 'error',
                //         confirmButtonText: 'Xác nhận',
                //         allowOutsideClick: false,
                //     }).then(({ isConfirmed }) => {
                //         if (isConfirmed) {
                //             navigate(0);
                //         }
                //     });
                // }
            }
        });
    };

    return (
        <Wrapper>
            <div className={cx('grid', 'wide')}>
                <Section classNames={cx('containter')}>
                    <Title as='h1'>{context.title}</Title>

                    <div className={cx('row')} style={{ marginTop: '20px' }}>
                        <div className={cx('col', 'l-6')}>
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

                                {orderState?.isCancel && (
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
                            </div>
                        </div>

                        <div className={cx('col', 'l-6')}>
                            <Title as='h2'>{context.titleListProduct}</Title>

                            <ul className={cx('products')}>
                                {order?.items.map((item, index) => (
                                    <li key={index} className={cx('product')}>
                                        <span className={cx('quantity')}>
                                            {item.quantity}
                                        </span>
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
                                                    priceSaleVN(
                                                        item?.price,
                                                        item?.sale,
                                                    ),
                                                )}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Order;
