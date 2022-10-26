import { Button } from '~/components';
import { cx, context, placeHolder } from './constant';

function Register() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{context.title}</h1>
            <div className={cx('form')}>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.lastName}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input')}
                        placeholder={placeHolder.lastName}
                    />
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.firstName}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input')}
                        placeholder={placeHolder.firstName}
                    />
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        Email<span>*</span>
                    </label>
                    <input
                        className={cx('input', 'invalid-input')}
                        placeholder='Email'
                    />
                    <span className={cx('invalid-message')}>
                        Email sai định dạng
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.fieldPassword}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input')}
                        placeholder={placeHolder.fieldPassword}
                    />
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.retypePassword}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input')}
                        placeholder={placeHolder.retypePassword}
                    />
                </div>
            </div>
            <div className={cx('text-center')}>
                <button className={cx('btn-register')}>
                    {context.register}
                </button>
                <Button to={'/login'} className={cx('btn-login')}>
                    {context.login}
                </Button>
            </div>
        </div>
    );
}

export default Register;
