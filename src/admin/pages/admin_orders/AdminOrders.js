import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { Title } from '~/components';
import { currencyVN, formatDate } from '~/utils/funcs';

import { context, cx } from './constant';
import { ButtonCustomize } from '~/admin/components';
import { orders } from '~/utils/constant';

function AdminOrders() {
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
                    {orders.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>Nguyen Van A</td>
                            <td>{formatDate(new Date())}</td>
                            <td>{currencyVN(item.value)}</td>
                            <td>{item.status}</td>
                            <td>
                                <ButtonCustomize
                                    to={`/admin/order/${index}`}
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
