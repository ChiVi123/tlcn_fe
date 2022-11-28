import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './InputQuantity.module.scss';

const cx = classNames.bind(styles);

function InputQuantity({ startNumber, step, max, min, onChange }) {
    const [quantity, setQuantity] = useState(startNumber);

    // Handle event
    const handleDecrease = (event) => {
        event.preventDefault();

        let result = quantity - step;
        result = result < min ? min : result;

        if (onChange) {
            onChange(result);
        }

        setQuantity(result);
    };
    const handleIncrease = (event) => {
        event.preventDefault();

        let result = quantity + step;
        result = max && result > max ? max : result;

        if (onChange) {
            onChange(result);
        }

        setQuantity(result);
    };
    const handleChange = ({ target: { value } }) => {
        const text = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        let newValue = text ? parseInt(text) : '';

        if (onChange) {
            onChange(newValue);
        }

        setQuantity(newValue);
    };

    return (
        <div className={cx('wrapper')}>
            <button
                className={cx('button', 'button--decrease')}
                onClick={handleDecrease}
            >
                –
            </button>
            <input
                type='text'
                className={cx('input-quantity')}
                value={quantity}
                onChange={handleChange}
            />
            <button
                className={cx('button', 'button--increase')}
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}

InputQuantity.propTypes = {
    startNumber: PropTypes.number,
    step: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
};

InputQuantity.defaultProps = {
    startNumber: 1,
    step: 1,
    min: 1,
};

export default InputQuantity;
