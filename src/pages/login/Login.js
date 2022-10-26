import { Button } from '~/components';
import { cx, context } from './constant';

function Login() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{context.title}</h1>
            <div className={cx('form')}>
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
                        placeholder={context.fieldPassword}
                    />
                </div>
            </div>
            <div className={cx('text-center', 'line')}>
                <button className={cx('btn-login')}>{context.login}</button>
                <Button
                    className={cx('link-forgot-password')}
                    to={'/forgot-password'}
                >
                    {context.forgotPass}
                </Button>
            </div>
            <div className={cx('text-center')}>
                <span className={cx('message')}>{context.messageSignIn}</span>
                <Button className={cx('link')} to={'/register'}>
                    {context.createAcc}
                </Button>
            </div>
        </div>
    );
}

export default Login;
