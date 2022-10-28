import { useState } from 'react';
import Select from 'react-select';

import { imgLogo } from '~/assets/images';
import { addresses } from '~/utils/constant';
import { context, cx, inputId } from './constant';
import local from '~/utils/local.json';

function Checkout() {
    const [form, setForm] = useState({
        mail: '1234@gmail.com',
        name: '',
        phone: '',
        address: '',
        note: '',
    });

    const handleAddresses = (value) =>
        setForm((prev) => {
            return {
                ...prev,
                name: value.name,
                phone: value.phone,
                address: value.addresses[0],
            };
        });

    const handleName = (event) =>
        setForm((prev) => {
            return { ...prev, name: event.target.value };
        });
    const handlePhone = (event) =>
        setForm((prev) => {
            return { ...prev, phone: event.target.value };
        });
    const handleAddress = (event) =>
        setForm((prev) => {
            return { ...prev, address: event.target.value };
        });
    const handleNote = (event) =>
        setForm((prev) => {
            return { ...prev, note: event.target.value };
        });

    console.log(local);

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-7')}>
                    <div className={cx('logo')}>
                        <img
                            src={imgLogo}
                            alt='logo'
                            className={cx('logo-img')}
                        />
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={addresses}
                                    className={cx('input-select')}
                                    onChange={handleAddresses}
                                />
                            </div>
                        </div>

                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <label
                                    htmlFor={inputId.mail}
                                    className={cx('label-input', 'disable', {
                                        focus: !!form.mail,
                                    })}
                                >
                                    {context.mail}
                                </label>
                                <input
                                    id={inputId.mail}
                                    type='text'
                                    className={cx('input', 'disable')}
                                    value={form.mail}
                                    onChange={() => {}}
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <label
                                    htmlFor={inputId.name}
                                    className={cx('label-input', {
                                        focus: !!form.name,
                                    })}
                                >
                                    {context.name}
                                </label>
                                <input
                                    id={inputId.name}
                                    type='text'
                                    value={form.name}
                                    onChange={handleName}
                                    className={cx('input')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <label
                                    htmlFor={inputId.phone}
                                    className={cx('label-input', {
                                        focus: !!form.phone,
                                    })}
                                >
                                    {context.phone}
                                </label>
                                <input
                                    id={inputId.phone}
                                    type='text'
                                    value={form.phone}
                                    onChange={handlePhone}
                                    className={cx('input')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <label
                                    htmlFor={inputId.address}
                                    className={cx('label-input', {
                                        focus: !!form.address,
                                    })}
                                >
                                    {context.address}
                                </label>
                                <input
                                    id={inputId.address}
                                    type='text'
                                    value={form.address}
                                    onChange={handleAddress}
                                    className={cx('input')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={addresses}
                                    className={cx('input-select')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={addresses}
                                    className={cx('input-select')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={addresses}
                                    className={cx('input-select')}
                                />
                            </div>
                        </div>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('group')}>
                                <label
                                    htmlFor={inputId.note}
                                    className={cx(
                                        'label-input',
                                        'label-input--text-area',
                                        {
                                            focus: !!form.note,
                                        },
                                    )}
                                >
                                    {context.note}
                                </label>
                                <textarea
                                    id={inputId.note}
                                    type='text'
                                    rows={3}
                                    cols={20}
                                    className={cx('input')}
                                    value={form.note}
                                    onChange={handleNote}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-5')}></div>
            </div>
        </div>
    );
}

export default Checkout;
