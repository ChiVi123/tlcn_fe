import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard, Title } from '~/components';
import { pathNames } from '~/routes';
import { userActions, userSelector } from '~/redux';
import * as services from '~/services/services';

import { cx, context } from './constant';

const itemCapacity = 15;
const pageNumber = 0;

function Home() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector.getUser);
    const [products, setProducts] = useState([]);
    const [microcontrollers, setMicrocontrollers] = useState([]);
    const [toolers, setToolers] = useState([]);

    useEffect(() => {
        if (user.email && !user.isToast) {
            dispatch(userActions.showedToast());
            toast.success(context.loginSuccess);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const fetchApi = async (page, size) => {
            const result = await services.getProducts(page, size);
            setProducts(result.list);

            const resultMicrocontrollers = await services.getProductsByCategory(
                '6377c780e5faa15251783671',
                page,
                size,
            );
            setMicrocontrollers(resultMicrocontrollers.list);

            const resultToolers = await services.getProductsByCategory(
                '6377c803e5faa15251783677',
                page,
                size,
            );
            setToolers(resultToolers.list);
        };

        fetchApi(pageNumber, itemCapacity);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <Title line center as={'h1'}>
                    {context.title}
                </Title>
            </div>

            {/* Products */}
            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className={cx('col', 'l-2-4', 'm-4', 's-6')}
                            >
                                <ProductCard key={index} product={item} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('section-btn')}>
                        <Link
                            to={pathNames.search}
                            className={cx('btn-viewmore')}
                        >
                            {context.viewMoreButton}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Microcontrollers */}
            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <nav className={cx('section-cate')}>
                        <span
                            className={cx('cate-title', 'cate-title--yellow')}
                        >
                            {context.titleControl}
                        </span>
                        <Link to={pathNames.search} className={cx('cate-link')}>
                            {context.viewMoreText}
                        </Link>
                    </nav>
                    <div className={cx('row')}>
                        {microcontrollers.map((item, index) => (
                            <div
                                key={index}
                                className={cx('col', 'l-2-4', 'm-4', 's-6')}
                            >
                                <ProductCard key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Toolers */}
            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <nav className={cx('section-cate')}>
                        <span className={cx('cate-title', 'cate-title--black')}>
                            {context.titleTool}
                        </span>
                        <Link to={pathNames.search} className={cx('cate-link')}>
                            {context.viewMoreText}
                        </Link>
                    </nav>
                    <div className={cx('row')}>
                        {toolers.map((item, index) => (
                            <div
                                key={index}
                                className={cx('col', 'l-2-4', 'm-4', 's-6')}
                            >
                                <ProductCard key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
