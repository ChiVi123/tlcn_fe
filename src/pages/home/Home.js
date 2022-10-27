import { Link } from 'react-router-dom';

import { ProductCart, Title } from '~/components';
import { pathNames } from '~/routes';
import { products } from '~/utils/constant';
import { cx, context } from './constant';

function Home() {
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
