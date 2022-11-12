import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCart, Title } from '~/components';
import { pathNames } from '~/routes';
import { userAction, userSelector } from '~/redux';
import * as services from '~/services/services';

import { cx, context } from './constant';

function Home() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector.getUser);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (user.email && !user.isToast) {
            dispatch(userAction.showedToast());
            toast.success(context.loginSuccess);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const fetchApi = async (page, size) => {
            const result = await services.getProducts(page, size);
            setProducts(result.list);
        };

        fetchApi(1, 3);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <Title line center as={'h1'}>
                    {context.title}
                </Title>
            </div>

            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <ProductCart key={index} product={item} />
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
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <ProductCart key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <ProductCart key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
