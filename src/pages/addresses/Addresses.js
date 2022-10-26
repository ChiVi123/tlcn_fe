import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { cx, context, addresses } from './constant';

function Addresses() {
    return (
        <ul className={cx('addresses')}>
            {addresses.map((item, index) => (
                <li key={index} className={cx('address')}>
                    <div className={cx('group')}>
                        <span className={cx('field')}>{context.name}</span>
                        <span className={cx('text')}>{item.name}</span>
                        {item.setDefault ? (
                            <span className={cx('default')}>
                                (Địa chỉ mặc định)
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className={cx('group')}>
                        <span className={cx('field')}>{context.address}</span>
                        <span className={cx('text')}>
                            {item.addresses.join(', ')}
                        </span>
                    </div>
                    <div className={cx('group')}>
                        <span className={cx('field')}>{context.phone}</span>
                        <span className={cx('text')}>{item.phone}</span>
                    </div>
                    <div className={cx('group')}>
                        <button className={cx('btn', 'btn--solid')}>
                            <FontAwesomeIcon
                                className={cx('font-icon')}
                                icon={faArrowRotateLeft}
                            />
                            {context.editAddressBtn}
                        </button>
                        <button className={cx('btn', 'btn--solid')}>
                            <FontAwesomeIcon
                                className={cx('font-icon')}
                                icon={faTrash}
                            />
                            {context.deleteAddressBtn}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Addresses;
