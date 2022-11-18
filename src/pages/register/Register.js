import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Title } from '~/components';
import { pathNames } from '~/routes';
import * as services from '~/services/services';

import { cx, context, placeholder, schema } from './constant';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userActions } from '~/redux';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnSubmit = async (data) => {
        const { name, email, password } = data;
        const user = await services.register({ name, email, password });

        if (user) {
            toast.success('Tạo tài khoản thành công');
            dispatch(userActions.addUser(user));
            navigate(pathNames.home);
        } else {
            toast.success('Tạo tài khoản thất bại');
        }
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className={cx('wrapper')}>
            <Title line center as={'h1'}>
                {context.title}
            </Title>

            <div className={cx('form')}>
                <div className={cx('group')}>
                    <label className={cx('label-input')}>
                        {context.name}
                        <span>*</span>
                    </label>
                    <input
                        className={cx('input', {
                            'invalid-input': !!errors.name?.message,
                        })}
                        placeholder={placeholder.name}
                        {...register('name')}
                    />
                    <span className={cx('invalid-message')}>
                        {errors.name?.message}
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
