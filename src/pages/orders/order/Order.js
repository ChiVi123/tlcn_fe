import { Fragment } from 'react';
import { currencyVN, replaceStateOrder } from '~/utils/funcs';
import { cx, context } from './constant';

function Order({ order }) {
    if (order.state === 'enable') {
        return <Fragment />;
    } else {
        return (
            <tr>
                <td className={cx('td-id')} title={order.id}>
                    {order.id}
                </td>
                <td>{order.createdDate}</td>
                <td>{context.summaryItems(order.items)}</td>
                <td
                    className={cx('td-address')}
                    title={context.dataAddress(order.delivery)}
                >
                    {context.dataAddress(order.delivery)}
                </td>
                <td>{currencyVN(order.totalPrice)}</td>
                <td className={cx(order.state)}>
                    {replaceStateOrder(order.state)}
                </td>
            </tr>
        );
    }
}

export default Order;
