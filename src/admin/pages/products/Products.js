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
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Products() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [rangeDisplay, setRangeDisplay] = useState(3);
    const navigate = useNavigate();
    const itemPerPage = 8;

    useEffect(() => {
        const fetchApi = async (page, size) => {
            const result = await services.getProducts(page, size);
            setProducts(result.list);
            setTotalPage(result.totalPage);
            setRangeDisplay((prev) => {
                if (result.totalPage > 5) {
                    return 5;
                } else {
                    return prev;
                }
            });
        };

        fetchApi(page - 1, itemPerPage);
    }, [page]);

    const handleDelete = ({ id, name }) => {
        Swal.fire({
            title: `Bạn có chắc sẽ xóa ${name}`,
            confirmButtonText: 'Xóa sản phẩm',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
            width: 'auto',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await services.deleteProduct(id);

                if (result?.message === 'Delete product successfully ') {
                    navigate(0);
                }
            }
        });
    };

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
                                {item.images[0]?.url && (
                                    <img
                                        className={cx('img')}
                                        src={item.images[0].url}
                                        alt={item.name}
                                    />
                                )}
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
                                <ButtonCustomize
                                    isDelete={true}
                                    onClick={() =>
                                        handleDelete({
                                            id: item.id,
                                            name: item.name,
                                        })
                                    }
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {!!products.length && (
                <ButtonPagination
                    nextLabel={'next >'}
                    previousLabel={'< previous'}
                    currentPage={page}
                    rangeDisplay={rangeDisplay}
                    totalPage={totalPage}
                    onClick={(value) => setPage(value)}
                />
            )}
        </>
    );
}

export default Products;
