import { useState } from 'react';

import Product from '~/components/product/Product';
import { cx, tabs, products, context } from './constant';

function Home() {
    const [tab, setTab] = useState(0);
    const handleClickTab = (index) => setTab(index);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tabs')}>
                {tabs.map((item, index) => (
                    <button
                        key={index}
                        className={cx('tab', { 'tab--active': tab === index })}
                        onClick={() => handleClickTab(index)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <Product key={index} product={item} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('section-btn')}>
                        <button className={cx('btn-viewmore')}>
                            {context.viewMoreButton}
                        </button>
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
                        <span className={cx('cate-link')}>
                            {context.viewMoreText}
                        </span>
                    </nav>
                    <div className={cx('row')}>
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <Product key={index} product={item} />
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
                        <span className={cx('cate-link')}>
                            {context.viewMoreText}
                        </span>
                    </nav>
                    <div className={cx('row')}>
                        {products.map((item, index) => (
                            <div key={index} className={cx('col', 'l-2-4')}>
                                <Product key={index} product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
