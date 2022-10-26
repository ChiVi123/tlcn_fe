import { useState } from 'react';

import { ProductCart, Button } from '~/components';
import { products } from '~/utils/constant';
import { cx, tabs, context } from './constant';

function Home() {
    const [tab, setTab] = useState(0);
    const handleClickTab = (index) => setTab(index);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <h1 className={cx('title')}>{context.title}</h1>
            </div>
            <div className={cx('tabs')}>
                {tabs.map((item, index) => (
                    <Button
                        key={index}
                        className={cx('tab', { 'tab--active': tab === index })}
                        onClick={() => handleClickTab(index)}
                    >
                        {item}
                    </Button>
                ))}
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
                        <Button to={'/search'} className={cx('btn-viewmore')}>
                            {context.viewMoreButton}
                        </Button>
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
                        <Button to={'/search'} className={cx('cate-link')}>
                            {context.viewMoreText}
                        </Button>
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
                        <Button to={'/search'} className={cx('cate-link')}>
                            {context.viewMoreText}
                        </Button>
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
