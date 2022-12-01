import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Form, FormGroup, Input, Title } from '~/components';
import * as services from '~/services/services';
import { userActions } from '~/redux';

import { cx, context, schema, defaultValues, form } from './constant';

function SendOtp() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnSubmit = async (data) => {
        const result = await services.getOtpReset(data);

        if (result.data === data.email) {
            toast.success('Gửi OTP thành công');
            dispatch(userActions.addUser(data));
            navigate('/check-otp');
        } else {
            toast.error('Gửi OTP thất bại');
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

                <div className={cx('col', 'l-12', 'buttons')}>
                    <Button>{context.button}</Button>
                </div>
            </Form>
        </div>
    );
}

export default SendOtp;
