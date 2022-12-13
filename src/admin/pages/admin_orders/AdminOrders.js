import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, Fragment } from 'react';

import { ButtonPagination, Title } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { ButtonCustomize } from '~/admin/components';
import { orderServices } from '~/services';
import { enumStateOrder } from '~/utils/constant';

import { context, cx } from './constant';

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [rangeDisplay, setRangeDisplay] = useState(3);

    useEffect(() => {
        const fetchApi = async ({ currentPage }) => {
            const result = await orderServices.adminGetAllOrder(currentPage);

            setOrders(result.list);
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
        <>
            <Title as='h1'>{context.title}</Title>

            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>{context.idOrderCol}</th>
                        <th>{context.userNameCol}</th>
                        <th>{context.createAtCol}</th>
                        <th>{context.totalCol}</th>
                        <th>{context.statusCol}</th>
                        <th>{context.actionsCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        if (order.state !== 'enable') {
                            return (
                                <tr key={index}>
                                    <td
                                        className={cx('td-id')}
                                        title={order.id}
                                    >
                                        {order.id}
                                    </td>
                                    <td className={cx('td-name')}>
                                        {order.userName}
                                    </td>
                                    <td>
                                        {order.lastModifiedDate ||
                                            order.createdDate}
                                    </td>
                                    <td>{currencyVN(order.totalPrice)}</td>
                                    <td>{enumStateOrder[order.state].state}</td>
                                    <td>
                                        <ButtonCustomize
                                            to={`/admin/order/${order.id}`}
                                            isEdit={true}
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </ButtonCustomize>
                                    </td>
                                </tr>
                            );
                        } else return <Fragment />;
                    })}
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
        </>
    );
}

export default AdminOrders;
