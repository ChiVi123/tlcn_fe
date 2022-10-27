import { Section, Title, Wrapper } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { cx, context, orders } from './constant';

function Orders() {
    return (
        <Wrapper>
            <div className={cx('grid', 'wide')}>
                <Section classNames={cx('containter')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <Title as='h1'>{context.title}</Title>
                        </div>

                        <div className={cx('col', 'l-12')}>
                            <Title as='h3'>{context.hello}</Title>
                        </div>

                        <div className={cx('col', 'l-12')}>
                            <Title as='h2'>{context.titleTable}</Title>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col l-12'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{context.id}</th>
                                        <th>{context.date}</th>
                                        <th>{context.product}</th>
                                        <th>{context.address}</th>
                                        <th>{context.value}</th>
                                        <th>{context.status}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                {item.products[0].name}{' '}
                                                {context.and}{' '}
                                                {item.products.length}{' '}
                                                {context.otherProduct}
                                            </td>
                                            <td>{item.address}</td>
                                            <td>{currencyVN(item.value)}</td>
                                            <td className={cx(item.status)}>
                                                {item.status === 'done'
                                                    ? context.done
                                                    : item.status === 'procces'
                                                    ? context.procces
                                                    : context.cancel}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Orders;
