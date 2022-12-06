import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Title } from '~/components';
import { currencyVN, formatDate } from '~/utils/funcs';
import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';

import { context, cx } from './constant';

function AdminOrders() {
    const [orders, setOrders] = useState({
        totalPage: 0,
        list: [],
    });

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.adminGetAllOrder();

            setOrders((prev) => ({ ...prev, ...result }));
        };

        fetchApi();
    }, []);
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
                    {orders.list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.userName}</td>
                            <td>{formatDate(new Date())}</td>
                            <td>{currencyVN(item.totalPrice)}</td>
                            <td>{item.state}</td>
                            <td>
                                <ButtonCustomize
                                    to={`/admin/order/${item.id}`}
                                    isEdit={true}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AdminOrders;
