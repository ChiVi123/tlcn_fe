import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Button, Form, FormGroup, Input, Title } from '~/components';
import * as services from '~/services/services';

import { cx, context, schema, form } from './constant';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelector } from '~/redux';

function CheckOtpRegister() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector.getUser);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: user.email,
        },
    });
    const navigate = useNavigate();

    const handleResend = async (event) => {
        event.preventDefault();
        const result = await services.getOtp({ email: user.email });

        if (result.data === user.email) {
            toast.success('Gửi OTP thành công');
        } else {
            toast.error('Gửi OTP thất bại');
        }
    };
    const handleOnSubmit = async (data) => {
        const type = 'register';
        const result = await services.verifyOtp({ ...data, type });

        if (result?.data?.id) {
            dispatch(userActions.addUser(result.data));
            toast.success('OTP đã được xác nhận');
            navigate('/');
        } else {
            toast.error('Mã OTP không đúng');
        }
    };

    return (
        <div className={cx('wrapper')}>
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
                    name={form.otp}
                    label={context.otpLabel}
                    errors={errors}
                    isRequired
                >
                    <Input
                        name={form.otp}
                        type={'text'}
                        register={register}
                        errors={errors}
                    />
                </FormGroup>

                <div className={cx('col', 'l-6', 'buttons')}>
                    <Button>{context.verify}</Button>
                </div>

                <div className={cx('col', 'l-6', 'buttons')}>
                    <Button onClick={handleResend}>{context.reSend}</Button>
                </div>
            </Form>
        </div>
    );
}

export default CheckOtpRegister;
