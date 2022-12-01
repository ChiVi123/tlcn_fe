import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Button, Form, FormGroup, Input, Title } from '~/components';
import * as services from '~/services/services';
import { userActions } from '~/redux';

import { cx, context, schema, defaultValues, form } from './constant';

function LoginAdmin() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnSubmit = async (data) => {
        const user = await services.login(data);

        if (user) {
            dispatch(userActions.addUser(user));
            navigate('/admin/products');
        } else {
            toast.error('Email hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className={cx('row', 'wrapper')}>
            <div className={cx('col', 'l-6', 'side-left')}></div>
            <div className={cx('col', 'l-6')}>
                <Title as='h1' line center={true} classNames={cx('title')}>
                    {context.title}
                </Title>

                <Form onSubmit={handleSubmit(handleOnSubmit)}>
                    <FormGroup
                        classes={cx('col', 'l-12')}
                        name={form.email}
                        label={context.emailLabel}
                        errors={errors}
                        isRequired
                    >
                        <Input
                            name={form.email}
                            type={'text'}
                            register={register}
                            errors={errors}
                        />
                    </FormGroup>
                    <FormGroup
                        classes={cx('col', 'l-12')}
                        name={form.password}
                        label={context.passwordLabel}
                        errors={errors}
                        isRequired
                    >
                        <Input
                            name={form.password}
                            type={form.password}
                            register={register}
                            errors={errors}
                        />
                    </FormGroup>

                    <div className={cx('col', 'l-12', 'buttons')}>
                        <Button solid={true}>{context.login}</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default LoginAdmin;
