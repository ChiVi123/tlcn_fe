import Avatar from 'react-avatar';

import { Button, Section, Title, Wrapper } from '~/components';
import { pathNames } from '~/routes';
import { user } from '~/utils/constant';
import { context, cx } from './constant';

function Profile() {
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

                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('avatar')}>
                                <Avatar
                                    src={user.avatar}
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
                                    {context.avataButton}
                                </Button>
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'l-12')}>
                                    <div className={cx('group')}>
                                        <label
                                            htmlFor=''
                                            className={cx('label-input')}
                                        >
                                            {context.lastName}
                                        </label>
                                        <input
                                            placeholder={context.lastName}
                                            type='text'
                                            className={cx('input')}
                                            value={user.lastName}
                                        />
                                    </div>
                                    <div className={cx('group')}>
                                        <label
                                            htmlFor=''
                                            className={cx('label-input')}
                                        >
                                            {context.firstName}
                                        </label>
                                        <input
                                            placeholder={context.firstName}
                                            type='text'
                                            className={cx('input')}
                                            value={user.firstName}
                                        />
                                    </div>
                                    <div className={cx('group')}>
                                        <label
                                            htmlFor=''
                                            className={cx('label-input')}
                                        >
                                            {context.email}
                                        </label>
                                        <input
                                            placeholder={context.email}
                                            type='text'
                                            className={cx('input', 'disable')}
                                            value={user.email}
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
                                        <Button
                                            solid={true}
                                            className={cx('btn')}
                                        >
                                            {context.editButton}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </Wrapper>
    );
}

export default Profile;
