import { useState } from 'react';

import Product from '~/components/product/Product';
import { cx, tabs, products } from './constant';

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
                </div>
            </div>
        </div>
    );
}

export default Home;
