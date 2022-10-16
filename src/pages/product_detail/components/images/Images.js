import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Images.module.scss';

const cx = classNames.bind(styles);

function Images({ images }) {
    const [indexSelect, setIndexSelect] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const handleSelect = (index) => setIndexSelect(index);
    const handlePrev = () => setTranslateX(translateX + 100);
    const handleNext = () => setTranslateX(translateX - 100);

    return (
        <>
            <div
                className={cx('product-img-select')}
                style={{
                    backgroundImage: `url(${images[indexSelect]})`,
                }}
            ></div>
            <div className={cx('img-list-wrapper')}>
                <button
                    className={cx('btn-arrow', 'btn-arrow--left')}
                    onClick={handlePrev}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <ul
                    className={cx('img-list')}
                    style={{
                        transform: `translateX(${translateX}px)`,
                    }}
                >
                    {images.map((item, index) => (
                        <li
                            key={index}
                            className={cx('img-item')}
                            onClick={() => handleSelect(index)}
                        >
                            <img
                                src={item}
                                className={cx('product-img')}
                                alt={'img'}
                            />
                        </li>
                    ))}
                </ul>
                <button
                    className={cx('btn-arrow', 'btn-arrow--right')}
                    onClick={handleNext}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </>
    );
}

export default Images;
