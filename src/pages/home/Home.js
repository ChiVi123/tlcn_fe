import {
    faMagnifyingGlass,
    faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { cx, tabs } from './constant';

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
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-2-4')}>
                        <div className={cx('product')}>
                            <img
                                className={cx('product-img')}
                                src='https://bizweb.dktcdn.net/thumb/large/100/228/168/products/module-camera-200w-gia-re.jpg?v=1594438145000'
                                alt='module'
                            />
                            <div className={cx('product-wrapper')}>
                                <div className={cx('product-caption')}>
                                    <div className={cx('product-right')}>
                                        <span className={cx('product-name')}>
                                            Module camera OV2640 200W Pixel
                                        </span>
                                        <span className={cx('product-price')}>
                                            {(95000).toLocaleString('vi', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </span>
                                    </div>
                                    <div className={cx('product-left')}>
                                        <button className={cx('btn-buy')}>
                                            <FontAwesomeIcon
                                                className={cx('btn-buy__icon')}
                                                icon={faBasketShopping}
                                            />
                                            Mua ngay
                                        </button>
                                        <button className={cx('btn-detail')}>
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
