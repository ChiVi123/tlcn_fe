import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { Button, Form, Section, Title, Wrapper } from '~/components';
import { userSelector } from '~/redux';
import { avatarDefault } from '~/assets/images/statics';
import { userServices } from '~/services';
import { userActions } from '~/redux';
import { pathNames } from '~/routes';

import { context, cx, schema } from './constant';

function Profile() {
    const user = useSelector(userSelector.getUser);
    const [file, setFile] = useState({
        preview: user?.avatar || avatarDefault,
    });

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: user.name,
            email: user.email,
        },
    });

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(file.preview);
        };
    }, [file]);
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'avatar' && type === 'change') {
                setFile((prev) => {
                    const { 0: avatar } = value.avatar;

                    if (avatar) {
                        avatar.preview = URL.createObjectURL(avatar);
                        return avatar;
                    } else {
                        return prev;
                    }
                });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    const handleImage = ({ target: { files } }) => {
        setFile((prev) => {
            prev = files[0];
            prev.preview = URL.createObjectURL(prev);

            return prev;
        });
    };
    const handleOnSubmit = async (data) => {
        const { name, email, avatar } = data;
        const formData = new FormData();

        if (avatar) {
            formData.append('avatar', avatar[0]);
        }

        Swal.fire({
            title: 'Đang chỉnh sửa thông tin người dùng',
            didOpen: async () => {
                Swal.showLoading();

                if (name !== user.name) {
                    const result = await userServices.updateUser(user.id, {
                        name,
                        email,
                    });

                    if (result.isSuccess === 'ok') {
                        toast.success('Chỉnh sửa thành công');
                        dispatch(
                            userActions.updateUser({
                                name,
                                avatar: user.avatar,
                            }),
                        );
                    } else {
                        toast.error('Chỉnh sửa thất bại');
                        dispatch(
                            userActions.updateUser({
                                name: user.name,
                                avatar: user.avatar,
                            }),
                        );
                    }
                }

                if (avatar) {
                    const resultImage = await userServices.uploadAvatar(
                        user.id,
                        formData,
                    );

                    if (resultImage.isSuccess === 'true') {
                        toast.success('Chỉnh sửa ảnh thành công');
                        dispatch(
                            userActions.updateUser({
                                name: user.name,
                                avatar: resultImage.data.avatar,
                            }),
                        );
                    } else {
                        toast.error('Chỉnh sửa ảnh thất bại');
                        dispatch(
                            userActions.updateUser({
                                name: user.name,
                                avatar: user.avatar,
                            }),
                        );
                    }
                }

                Swal.close();
            },
        });
    };

    return (
        <Wrapper>
            <div className={cx('grid', 'wide')}>
                <Section>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-12')}>
                            <Title as='h1' classNames={cx('title')}>
                                {context.title}
                            </Title>
                        </div>
                    </div>

                    <Form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('avatar')}>
                                <Avatar
                                    src={file.preview || avatarDefault}
                                    size='200'
                                    round='100%'
                                    alt='anh dai dien'
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button className={cx('btn')}>
                                    <input
                                        type='file'
                                        title=''
                                        className={cx('input-img')}
                                        onChange={handleImage}
                                        {...register('avatar')}
                                    />
                                    {context.avataButton}
                                </Button>
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <label htmlFor='' className={cx('label-input')}>
                                    {context.name}
                                </label>
                                <input
                                    placeholder={context.name}
                                    type='text'
                                    className={cx('input')}
                                    {...register('name')}
                                />
                            </div>
                            <span
                                className={cx('col', 'l-12')}
                                style={{ color: 'red', marginBottom: '1.8rem' }}
                            >
                                {errors && errors.name?.message}
                            </span>

                            <div className={cx('group')}>
                                <label htmlFor='' className={cx('label-input')}>
                                    {context.email}
                                </label>
                                <input
                                    placeholder={context.email}
                                    type='text'
                                    className={cx('input', 'disable')}
                                    {...register('email')}
                                />
                            </div>

                            <div className={cx('group')}>
                                <Button
                                    to={pathNames.changePassword}
                                    className={cx('btn')}
                                >
                                    {context.chagnePasswordButton}
                                </Button>
                            </div>

                            <div className={cx('group')}>
                                <Button solid={true} className={cx('btn')}>
                                    {context.editButton}
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Profile;
