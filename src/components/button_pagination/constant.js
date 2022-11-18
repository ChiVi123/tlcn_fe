import classNames from 'classnames/bind';
import styles from './ButtonPagination.module.scss';

export const cx = classNames.bind(styles);

export const arrayPageItem = (currentItem, range, totalPage) => {
    const array = [];
    const halfRange = parseInt(range / 2);
    const firstPage = 1;
    let countLeft = 0;
    let countRight = 0;

    // first item is current item
    array.push(currentItem);

    while (countLeft < halfRange) {
        // newItem = currentItem - (countLeft + 1);
        const newItem = currentItem - countLeft - 1;

        if (newItem < firstPage) {
            break;
        } else {
            array.unshift(newItem);
            ++countLeft;
        }
    }

    while (countRight < halfRange) {
        const newItem = currentItem + countRight + 1;

        if (newItem > totalPage) {
            break;
        } else {
            array.push(newItem);
            ++countRight;
        }
    }

    if (countLeft - countRight > 0) {
        while (array.length < range) {
            array.unshift(currentItem - countLeft - 1);
            ++countLeft;
        }
    }

    if (countLeft - countRight < 0) {
        while (array.length < range) {
            array.push(currentItem + countRight + 1);
            ++countRight;
        }
    }

    return array;
};
