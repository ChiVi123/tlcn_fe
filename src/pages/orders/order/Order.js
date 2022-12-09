import { Fragment } from 'react';
import { currencyVN } from '~/utils/funcs';
import { enumStateOrder } from '~/utils/constant';
import { cx, context } from './constant';
import { Link } from 'react-router-dom';

function Order({ order }) {
    if (order.state === 'enable') {
        return <Fragment />;
    } else {
        return (
            <tr>
                <td className={cx('td-id')} title={order.id}>
                    <Link to={`/order/${order.id}`} className={cx('td-link')}>
                        {order.id}
                    </Link>
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
            </tr>
        );
    }
}

export default Order;
