import { Link } from 'react-router-dom';

import { Title } from '~/components';
import { pathNames } from '~/routes';
import { cx, context } from './constant';

function Login() {
    return (
        <div className={cx('wrapper')}>
            <Title line center as='h1'>
                {context.title}
            </Title>
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
                <Link
                    className={cx('link-forgot-password')}
                    to={pathNames.forgotPassword}
                >
                    {context.forgotPass}
                </Link>
            </div>
            <div className={cx('text-center')}>
                <span className={cx('message')}>{context.messageSignIn}</span>
                <Link className={cx('link')} to={pathNames.register}>
                    {context.createAcc}
                </Link>
            </div>
        </div>
    );
}

export default Login;
