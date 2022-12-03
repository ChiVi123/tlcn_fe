import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cx, payments } from './constant';

function ChoosePayment({ register }) {
    return (
        <div className={cx('choose-method')}>
            {payments.map((item, index) => (
                <label key={index} className={cx('payment')}>
                    <input
                        type='radio'
                        value={item.value}
                        className={cx('payment-input')}
                        {...register('payment')}
                    />
                    <span className={cx('payment-content')}>
                        {item.name}
                        <FontAwesomeIcon
                            icon={item.icon}
                            className={cx('payment-icon')}
                        />
                    </span>
                </label>
            ))}
        </div>
    );
}

export default ChoosePayment;
