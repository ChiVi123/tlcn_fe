import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, Fragment } from 'react';

import { ButtonPagination, Title } from '~/components';
import { currencyVN, replaceStateOrder } from '~/utils/funcs';
import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';

import { context, cx } from './constant';

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [rangeDisplay, setRangeDisplay] = useState(3);

    useEffect(() => {
        const fetchApi = async ({ currentPage }) => {
            const result = await services.adminGetAllOrder(currentPage);

            console.log(result);

            setOrders(result.list);
            setTotalPage(result.totalPage);
            setRangeDisplay((prev) => {
                if (result.totalPage > 5) {
                    return 5;
                } else {
                    return prev;
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
                                    <td>{order.id}</td>
                                    <td>{order.userName}</td>
                                    <td>
                                        {order.lastModifiedDate ||
                                            order.createdDate}
                                    </td>
                                    <td>{currencyVN(order.totalPrice)}</td>
                                    <td>{replaceStateOrder(order.state)}</td>
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

            {!!orders.length && (
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
