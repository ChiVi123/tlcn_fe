import { useState } from 'react';
import { cx } from './constant';

function ButtonPagination({ rangeDisplay, totalPage }) {
    const [indexItem, setIndexItem] = useState(0);

    const handleDecrease = () => {
        setIndexItem((prev) => {
            if (prev > 0) {
                return prev - 1;
            } else {
                return prev;
            }
        });
    };
    const handleIncrease = () => {
        setIndexItem((prev) => {
            if (prev < totalPage) {
                return prev + 1;
            } else {
                return prev;
            }
        });
    };
    const handleItem = (index) => {
        setIndexItem(index);
    };

    return (
        <div className={cx('pagination')}>
            <button
                className={cx('btn', { 'btn--disable': indexItem === 0 })}
                onClick={handleDecrease}
            >
                {'< previous'}
            </button>
            {(() => {
                const indents = [];
                for (let index = 0; index < rangeDisplay; index++) {
                    indents.push(
                        <button
                            key={index}
                            className={cx('btn', {
                                'btn--active': indexItem === index,
                            })}
                            onClick={() => handleItem(index)}
                        >
                            {index + 4}
                        </button>,
                    );
                }
                return indents;
            })()}
            <button
                className={cx('btn', {
                    'btn--disable': indexItem === totalPage,
                })}
                onClick={handleIncrease}
            >
                {'next >'}
            </button>
        </div>
    );
}

export default ButtonPagination;
