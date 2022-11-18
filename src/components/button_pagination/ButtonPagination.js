import { useEffect, useState } from 'react';
import { arrayPageItem, cx } from './constant';

function ButtonPagination({ currentPage, rangeDisplay, totalPage, onClick }) {
    const [pages, setPages] = useState(
        arrayPageItem(currentPage, rangeDisplay, totalPage),
    );
    const [valueItem, setValueItem] = useState(currentPage);

    useEffect(() => {
        setPages(arrayPageItem(valueItem, rangeDisplay, totalPage));
    }, [valueItem, rangeDisplay, totalPage]);

    const handleDecrease = () => {
        setValueItem((prev) => {
            return prev - 1;
        });

        if (onClick) {
            onClick(valueItem - 1);
        }
    };
    const handleIncrease = () => {
        setValueItem((prev) => {
            return prev + 1;
        });

        if (onClick) {
            onClick(valueItem + 1);
        }
    };
    const handleItem = (item) => {
        setValueItem(item);

        if (onClick) {
            onClick(item);
        }
    };

    return (
        <div className={cx('pagination')}>
            <button
                className={cx('btn', { 'btn--disable': valueItem === 1 })}
                onClick={handleDecrease}
            >
                {'< previous'}
            </button>

            {pages.map((item, index) => (
                <button
                    key={index}
                    className={cx('btn', {
                        'btn--active': item === valueItem,
                    })}
                    onClick={() => handleItem(item)}
                >
                    {item}
                </button>
            ))}

            <button
                className={cx('btn', {
                    'btn--disable': valueItem === totalPage,
                })}
                onClick={handleIncrease}
            >
                {'next >'}
            </button>
        </div>
    );
}

export default ButtonPagination;
