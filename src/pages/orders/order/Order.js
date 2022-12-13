import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { currencyVN } from '~/utils/funcs';
import { enumStateOrder } from '~/utils/constant';
import { cx, context } from './constant';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ButtonCustomize } from '~/admin/components';

function Order({ order }) {
    if (order.state === 'enable') {
        return <Fragment />;
    } else {
        return (
            <tr>
                <td className={cx('td-id')} title={order.id}>
                    {order.id}
                </td>
                <td className={cx('td-createDate')}>{order.createdDate}</td>
                <td className={cx('td-summary')}>
                    {context.summaryItems(order.items)}
                </td>
                <td
                    className={cx('td-address')}
                    title={context.dataAddress(order.delivery)}
                >
                    {context.dataAddress(order.delivery)}
                </td>
                <td>{currencyVN(order.totalPrice)}</td>
                <td>
                    <span className={cx(order.state)}>
                        {enumStateOrder[order.state].state}
                    </span>
                </td>
                <td>
                    <ButtonCustomize isEdit={true} to={`/order/${order.id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </ButtonCustomize>
                </td>
            </tr>
        );
    }
}

export default Order;
