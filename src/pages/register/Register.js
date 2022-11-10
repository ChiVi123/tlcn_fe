import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Title } from '~/components';
import { pathNames } from '~/routes';
import { cx, context, placeholder, schema } from './constant';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleOnSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className={cx('wrapper')}>
            <Title line center as={'h1'}>
                {context.title}
            </Title>
            <div className={cx('form')}>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.lastName}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.lastName?.message,
                        })}
                        placeholder={placeholder.lastName}
                        {...register('lastName')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.lastName?.message}
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.firstName}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.firstName?.message,
                        })}
                        placeholder={placeholder.firstName}
                        {...register('firstName')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.firstName?.message}
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.email}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.email?.message,
                        })}
                        placeholder={placeholder.email}
                        {...register('email')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.email?.message}
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.fieldPassword}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.password?.message,
                        })}
                        placeholder={placeholder.fieldPassword}
                        type={'password'}
                        {...register('password')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.password?.message}
                    </span>
                </div>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.retypePassword}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.passwordComfirm?.message,
                        })}
                        placeholder={placeholder.retypePassword}
                        type={'password'}
                        {...register('passwordComfirm')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.passwordComfirm?.message}
                    </span>
                </div>
            </div>
            <div className={cx('text-center')}>
                <button className={cx('btn-register')}>
                    {context.register}
                </button>
                <Link to={pathNames.login} className={cx('btn-login')}>
                    {context.login}
                </Link>
            </div>
        </form>
    );
}

export default Register;
