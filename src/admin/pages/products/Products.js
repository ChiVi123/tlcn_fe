import classNames from 'classnames/bind';

import { Button, Title } from '~/components';
import { products } from '~/utils/constant';

import styles from './Products.module.scss';
import { context } from './constant';
import { currencyVN } from '~/utils/funcs';

const cx = classNames.bind(styles);

function Products() {
    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/product-form'}>{context.addButton}</Button>

            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th className={cx('t-h')}>{context.imageCol}</th>
                        <th className={cx('t-h')}>{context.productNameCol}</th>
                        <th className={cx('t-h')}>{context.priceCol}</th>
                        <th className={cx('t-h')}>{context.saleCol}</th>
                        <th className={cx('t-h')}>{context.summaryCol}</th>
                        <th className={cx('t-h')}>{context.actionCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td className={cx('col-img')}>
                                <img
                                    className={cx('img')}
                                    src={item.imgs[0]}
                                    alt={item.name}
                                />
                            </td>
                            <td className={cx('td', 'td-name')}>
                                <span className={cx('product-name')}>
                                    {item.name}
                                </span>
                            </td>
                            <td className={cx('td')}>
                                {currencyVN(item.price)}
                            </td>
                            <td className={cx('td')}>
                                {item.sale && item.sale * 100 + '%'}
                            </td>
                            <td className={cx('td', 'td-summary')}>
                                <ul className={cx('summary')}>
                                    {item.summary.map((item, index) => (
                                        <li key={index}>
                                            <span
                                                className={cx(
                                                    'summary__context',
                                                )}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className={cx('td')}>
                                <Button
                                    to={`/admin/product-form/${index}`}
                                    solid={true}
                                    className={cx('btn', 'btn--edit')}
                                >
                                    {context.editButton}
                                </Button>
                                <Button
                                    solid={true}
                                    className={cx('btn', 'btn--delete')}
                                >
                                    {context.deleteButton}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;
