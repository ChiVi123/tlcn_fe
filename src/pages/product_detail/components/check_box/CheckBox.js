import { useState } from 'react';
import PropTypes from 'prop-types';

import { cx, context } from './constant';

function CheckBox({ options, onChange, value }) {
    const [checked, setChecked] = useState({ index: 0, value });

    const handleClick = (index, option) => {
        setChecked({ index, value: option });

        if (onChange) {
            onChange(option);
        }
    };

    return (
        <>
            <span className={cx('section-title')}>{context.title}</span>
            <ul className={cx('options')}>
                {options.map((option, index) => (
                    <li key={index} className={cx('option')}>
                        <span
                            htmlFor={option.value}
                            className={cx('option__label', {
                                'option--checked': checked.index === index,
                            })}
                            onClick={() => handleClick(index, option)}
                        >
                            {option.value}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

CheckBox.propTypes = {
    options: PropTypes.array,
};

export default CheckBox;
