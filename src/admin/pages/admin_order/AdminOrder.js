import Avatar from 'react-avatar';

import { Button, Title } from '~/components';
import { addresses, orders, products, user } from '~/utils/constant';
import { currencyVN } from '~/utils/funcs';

import { cx, context } from './constant';

function AdminOrder() {
    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/orders'}>{context.backToPage}</Button>

            <div className={cx('row')} style={{ marginTop: '20px' }}>
                <div className={cx('col', 'l-6')}>
                    <Avatar
                        src={user.avatar}
                        size='200'
                        alt='avatar'
                        round='50px'
                    />

                    <Title as='h2' classNames={cx('user-name')}>
                        {context.userName}
                        {user.firstName} {user.lastName}
                    </Title>
                </div>

                <div className={cx('col', 'l-6')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <span className={cx('large-text')}>
                                {context.status}
                                {orders[0].status}
                            </span>
                        </div>
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <span className={cx('large-text')}>
                                {context.address}
                                {addresses[0].address}
                            </span>
                        </div>
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.tempResult}
                            </span>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {currencyVN(900000)}
                            </span>
                        </div>
                    </div>

                    <div className={cx('row')}>
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
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6')}>
                            <span className={cx('large-text')}>
                                {context.total}
                            </span>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <span
                                className={cx('large-text', 'large-text--blue')}
                            >
                                {currencyVN(900000)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Title as='h2'>{'Danh sách sản phẩm trong đơn hàng'}</Title>

            <ul className={cx('products')}>
                {products.map((item, index) => (
                    <li key={index} className={cx('product')}>
                        <span className={cx('quantity')}>1</span>
                        <div className={cx('info')}>
                            <img
                                src={item.imgs[0]}
                                alt={item.name}
                                className={cx('img')}
                            />
                            <Title as='h3'>{item.name}</Title>
                        </div>
                        <span className={cx('text')}>
                            {currencyVN(item.price)}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AdminOrder;
