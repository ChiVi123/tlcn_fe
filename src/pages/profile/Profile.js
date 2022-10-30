import { Button, Section, Title, Wrapper } from '~/components';
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

                    <div className='row'>
                        <div className='col l-6'>
                            <img src='' alt='anh dai dien' />
                            <br />
                            <Button>{context.avataButton}</Button>
                        </div>
                        <div className='col l-6'>
                            <div className='row'>
                                <div className='col l-12'>
                                    <div className='group'>
                                        <label
                                            htmlFor=''
                                            className='label-input'
                                        ></label>
                                        <input
                                            placeholder={context.lastName}
                                            type='text'
                                            className='input'
                                        />
                                    </div>
                                    <div className='group'>
                                        <label
                                            htmlFor=''
                                            className='label-input'
                                        ></label>
                                        <input
                                            placeholder={context.firstName}
                                            type='text'
                                            className='input'
                                        />
                                    </div>
                                    <div className='group'>
                                        <label
                                            htmlFor=''
                                            className='label-input'
                                        ></label>
                                        <input
                                            placeholder={context.mail}
                                            type='text'
                                            className='input'
                                        />
                                    </div>
                                    <div className='group'>
                                        <Button solid={true}>
                                            {context.addressesButton}
                                        </Button>
                                    </div>
                                    <div className='group'>
                                        <Button solid={true}>
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
