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
            try {
                const result = await statisticalServices.getStats({
                    from: '12-01-2022',
                    to: '12-12-2022',
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
            <Title as='h1'>Các số liệu thống kê</Title>
            <div className={cx('row')}>
                <div className={cx('col', 'l-4')}>
                    <div className={cx('section')}>
                        <Title as={'h2'}>Danh mục sản phẩm</Title>
                        <div className={cx('row')}>
                            {categoryCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'enable'
                                            ? 'Danh mục được phép xuất hiện'
                                            : 'Danh mục không được xuất hiện'}
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
                        <Title as={'h2'}>Người dùng</Title>
                        <div className={cx('row')}>
                            {userCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'active'
                                            ? 'Đã được kích hoạt'
                                            : 'Chưa được kích hoạt'}
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
                        <Title as={'h2'}>Sản phẩm</Title>
                        <div className={cx('row')}>
                            {productCount.list.map((item, index) => (
                                <div key={index} className={cx('col', 'l-10')}>
                                    <Title as={'h3'}>
                                        {item.state === 'enable'
                                            ? 'Sản phẩm được phép xuất hiện'
                                            : 'Sản phẩm không được xuất hiện'}
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
                        <Title as={'h2'}>Đơn hàng</Title>
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

            <Title as={'h2'}>Thống kê tổng doanh thu</Title>
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
                        name='Tổng doanh thu tháng'
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Dashboard;
