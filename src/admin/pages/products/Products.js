import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import { Button, ButtonPagination, Title } from '~/components';
import { currencyVN } from '~/utils/funcs';
import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';

import styles from './Products.module.scss';
import { context } from './constant';

const cx = classNames.bind(styles);

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async (page, size) => {
            const result = await services.getProducts(page, size);
            setProducts(result.list);
        };

        fetchApi(0, 4);
    }, []);
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
                        <th className={cx('t-h')}>{context.summaryCol}</th>
                        <th className={cx('t-h')}>{context.stateCol}</th>
                        <th className={cx('t-h')}>{context.actionCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td className={cx('col-img')}>
                                <img
                                    className={cx('img')}
                                    src={item.images[0].url}
                                    alt={item.name}
                                />
                            </td>
                            <td className={cx('td', 'td-name')}>
                                <span className={cx('product-name')}>
                                    {item.name}
                                </span>
                            </td>
                            <td className={cx('td')}>
                                {item.price && currencyVN(item.price)}
                            </td>
                            <td className={cx('td', 'td-summary')}>
                                <div className={cx('ql-editor', 'summary')}>
                                    {parse(item.summary)}
                                </div>
                            </td>
                            <td className={cx('td')}>{item.state}</td>
                            <td className={cx('td')}>
                                <ButtonCustomize
                                    to={`/admin/product-form/${item.id}`}
                                    isEdit={true}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </ButtonCustomize>
                                <ButtonCustomize isDelete={true}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ButtonPagination
                nextLabel={'next >'}
                previousLabel={'< previous'}
                currentPage={0}
                rangeDisplay={5}
                totalPage={12}
            />
        </>
    );
}

export default Products;
