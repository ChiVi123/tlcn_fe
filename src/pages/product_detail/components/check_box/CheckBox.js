import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);

function CheckBox({ options, register }) {
    return (
        <Fragment>
            <span className={cx('section-title')}>Phân loại</span>
            <ul className={cx('options')}>
                {options.map((option, index) => (
                    <li key={index} className={cx('options-item')}>
                        <input
                            type={'radio'}
                            id={option.value}
                            {...register('option')}
                            value={option.value}
                            defaultChecked={!index}
                        />
                        <label
                            htmlFor={option.value}
                            className={cx('options-item__label')}
                        >
                            {option.value}
                        </label>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default CheckBox;
