import { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Form, Section, Title, Wrapper } from '~/components';
import { pathNames } from '~/routes';
import { user } from '~/utils/constant';
import { context, cx, schema, defaultValues } from './constant';

function Profile() {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    const [file, setFile] = useState({ preview: user.avatar });
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(file.preview);
        };
    }, [file]);

    const handleImage = (event) => {
        setFile((prev) => {
            prev = event.target.files[0];
            prev.preview = URL.createObjectURL(prev);

            return prev;
        });
    };
    const handleOnSubmit = (data) => console.log(data);

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
                                    src={file.preview}
                                    size='200'
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
                                    {context.lastName}
                                </label>
                                <input
                                    placeholder={context.lastName}
                                    type='text'
                                    className={cx('input')}
                                    {...register('lastName')}
                                />
                            </div>
                            <div className={cx('group')}>
                                <label htmlFor='' className={cx('label-input')}>
                                    {context.firstName}
                                </label>
                                <input
                                    placeholder={context.firstName}
                                    type='text'
                                    className={cx('input')}
                                    {...register('firstName')}
                                />
                            </div>
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
                                    to={pathNames.addresses}
                                    solid={true}
                                    className={cx('btn')}
                                >
                                    {context.addressesButton}
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
