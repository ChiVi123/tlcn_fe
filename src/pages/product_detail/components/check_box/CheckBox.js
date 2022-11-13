import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);
function CheckBox({ options, register }) {
    return (
        <Fragment>
            {options.map((item, index) => (
                <Fragment key={index}>
                    <span className={cx('section-title')}>{item.name}</span>
                    <ul className={cx('options')}>
                        {item.selects.map((option, index) => (
                            <li key={index} className={cx('options-item')}>
                                <input
                                    type={'radio'}
                                    id={option.id}
                                    {...register(item.name)}
                                    value={option.value}
                                    defaultChecked={!index}
                                />
                                <label
                                    htmlFor={option.id}
                                    className={cx('options-item__label')}
                                >
                                    {option.value}
                                </label>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </Fragment>
    );
}

export default CheckBox;
