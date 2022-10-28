import { faCheck, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '~/components';

import { cx, context, idInput, placeHolder } from './constant';

function AddressForm() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.lastName}
                        className={cx('label-input')}
                    >
                        {context.lastName}
                        <strong>*</strong>
                    </label>
                    <input
                        id={idInput.lastName}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.lastName}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.firstName}
                        className={cx('label-input')}
                    >
                        {context.firstName}
                        <strong>*</strong>
                    </label>
                    <input
                        id={idInput.firstName}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.firstName}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.address}
                        className={cx('label-input')}
                    >
                        {context.address}
                        <strong>*</strong>
                    </label>
                    <input
                        id={idInput.address}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.address}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.address2}
                        className={cx('label-input')}
                    >
                        {context.address2}
                    </label>
                    <input
                        id={idInput.address2}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.address}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label htmlFor={idInput.city} className={cx('label-input')}>
                        {context.city}
                        <strong>*</strong>
                    </label>
                    <input
                        id={idInput.city}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.city}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.phone}
                        className={cx('label-input')}
                    >
                        {context.phone}
                        <strong>*</strong>
                    </label>
                    <input
                        id={idInput.phone}
                        type='text'
                        className={cx('input')}
                        placeholder={placeHolder.phone}
                    />
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <label
                        htmlFor={idInput.setDefault}
                        className={cx('label-input')}
                    >
                        <input
                            id={idInput.setDefault}
                            type='checkbox'
                            className={cx('input', 'input-checkbox')}
                        />
                        <span>{context.setDefault}</span>
                    </label>
                </div>
                <div className={cx('col', 'l-12', 'group')}>
                    <Button solid className={cx('btn')}>
                        <FontAwesomeIcon
                            className={cx('font-icon')}
                            icon={faCheck}
                        />
                        {context.addAddressBtn}
                    </Button>
                    <Button solid className={cx('btn')}>
                        <FontAwesomeIcon
                            className={cx('font-icon')}
                            icon={faRectangleXmark}
                        />
                        {context.cancelBtn}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;
