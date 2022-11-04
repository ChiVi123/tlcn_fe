import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { Title } from '~/components';
import { pathNames } from '~/routes';
import { user } from '~/utils/constant';
import { userAction } from '~/redux';

import { cx, context, form, schema } from './constant';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: 'nhatsangtv123@gmail.com',
            password: '1234567890',
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmitData = (data) => {
        if (data.email === user.email && data.password === user.password) {
            dispatch(userAction.addUser(user));
            navigate(pathNames.home);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitData)}
            className={cx('wrapper')}
        >
            <Title line center as='h1'>
                {context.title}
            </Title>
            <div className={cx('form')}>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.emailLabel}
                        <span>*</span>
                    </label>
                    <input
                        type={'text'}
                        className={cx('input', {
                            'invalid-input': !!errors.email?.message,
                        })}
                        placeholder={context.emailPlaceholder}
                        {...register(form.email)}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.email?.message}
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.passwordLabel}
                        <span>*</span>
                    </label>
                    <input
                        type={'password'}
                        className={cx('input', {
                            'invalid-input': !!errors.password?.message,
                        })}
                        placeholder={context.passwordPlaceholder}
                        {...register(form.password)}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.password?.message}
                    </span>
                </div>
            </div>
            <div className={cx('text-center', 'line')}>
                <button type='submit' className={cx('btn-login')}>
                    {context.login}
                </button>
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
        </form>
    );
}

export default Login;
