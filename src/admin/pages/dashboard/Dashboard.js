import ProgressBar from '@ramonak/react-progress-bar';
import { useEffect, useState } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Title } from '~/components';
import { statisticalServices } from '~/services';
import logger from '~/utils/logger';
import { enumStateOrder } from '~/utils/constant';
import { cx } from './constant';
import { formatDate } from '~/utils/funcs';

const randomColor = () => {
    let result = '';
    do {
        result = Math.floor(Math.random() * 16777215).toString(16);
    } while (result === 'e0e0de');
    return result;
};

function Dashboard() {
    const [categoryCount, setCategoryCount] = useState({
        totalQuantity: 0,
        list: [],
    });
    const [orderCount, setOrderCount] = useState({
        totalQuantity: 0,
        list: [],
    });
    const [productCount, setProductCount] = useState({
        totalQuantity: 0,
        list: [],
    });
    const [userCount, setUserCount] = useState({
        totalQuantity: 0,
        list: [],
    });
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resultCount = await statisticalServices.getCountByState();
                const expectMessage = 'Get count by state success';
                if (resultCount?.message === expectMessage) {
                    const { data } = resultCount;

                    setCategoryCount(data.category);
                    setOrderCount(data.order);
                    setProductCount(data.product);
                    setUserCount(data.user);
                }
            } catch (error) {
                logger({ groupName: 'Dashboard catch', values: [error] });
            }
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const date = formatDate(new Date());
            logger({
                groupName: 'Order',
                values: [date],
            });
            try {
                const result = await statisticalServices.getStats({
                    from: '12-01-2022',
                    to: date,
                });
                const expectMessage = 'Get orders sale successful';
                if (result?.message === expectMessage) {
                    const { data } = result;
                    setOrders(data);
                }
            } catch (error) {
                logger({ groupName: 'Dashboard catch', values: [error] });
            }
        };

        fetchApi();
    }, []);

    return (
        <>
            <Title as='h1'>C??c s??? li???u th???ng k??</Title>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('section')}>
                        <Title as={'h2'}>Danh m???c s???n ph???m</Title>
                        <div className={cx('row')}>
                            {categoryCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'enable'
                                            ? 'Danh m???c ???????c ph??p xu???t hi???n'
                                            : 'Danh m???c kh??ng ???????c xu???t hi???n'}
                                    </Title>
                                    <ProgressBar
                                        completed={item.count.toString()}
                                        maxCompleted={
                                            categoryCount.totalQuantity
                                        }
                                        bgColor={'#' + randomColor()}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cx('col', 'l-4')}>
                    <div className={cx('section')}>
                        <Title as={'h2'}>Ng?????i d??ng</Title>
                        <div className={cx('row')}>
                            {userCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'active'
                                            ? '???? ???????c k??ch ho???t'
                                            : 'Ch??a ???????c k??ch ho???t'}
                                    </Title>
                                    <ProgressBar
                                        completed={item.count.toString()}
                                        maxCompleted={userCount.totalQuantity}
                                        bgColor={'#' + randomColor()}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cx('col', 'l-4')}>
                    <div className={cx('section')}>
                        <Title as={'h2'}>S???n ph???m</Title>
                        <div className={cx('row')}>
                            {productCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'enable'
                                            ? 'S???n ph???m ???????c ph??p xu???t hi???n'
                                            : 'S???n ph???m kh??ng ???????c xu???t hi???n'}
                                    </Title>
                                    <ProgressBar
                                        completed={item.count.toString()}
                                        maxCompleted={
                                            productCount.totalQuantity
                                        }
                                        bgColor={'#' + randomColor()}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cx('col', 'l-12')}>
                    <div className={cx('section')}>
                        <Title as={'h2'}>????n h??ng</Title>
                        <div className={cx('row')}>
                            {orderCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-6')}>
                                    <Title as={'h3'}>
                                        {enumStateOrder[item.state].state}
                                    </Title>
                                    <ProgressBar
                                        completed={item.count.toString()}
                                        maxCompleted={orderCount.totalQuantity}
                                        bgColor={'#' + randomColor()}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <br style={{ marginTop: '1rem' }} />

            <Title as={'h2'}>Th???ng k?? t???ng doanh thu</Title>
            <ResponsiveContainer width='100%' height={500}>
                <BarChart
                    data={orders}
                    margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
                >
                    <XAxis dataKey='date' />
                    <YAxis />
                    <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey='amount'
                        fill='green'
                        name='T???ng doanh thu th??ng'
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Dashboard;
