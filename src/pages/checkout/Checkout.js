import { useState } from 'react';
import Select from 'react-select';

import { imgLogo } from '~/assets/images';
import { addresses } from '~/utils/constant';
import dataLocal from '~/utils/local.json';
import { getArray } from '~/utils/funcs';

import SelectControlAddresses from './component/SelectControlAddresses';
import SelectControlLocals from './component/SelectControlLocals';
import { context, cx, inputId } from './constant';

function Checkout() {
    const [form, setForm] = useState({
        mail: '1234@gmail.com',
        name: '',
        phone: '',
        address: '',
        note: '',
    });
    const [locals, setLocals] = useState({
        local: '1',
        district: '1',
        ward: '1',
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
    const handleLocal = (value) =>
        setLocals((prev) => {
            return {
                ...prev,
                local: value.id,
            };
        });
    const handleDistrict = (value) =>
        setLocals((prev) => {
            return {
                ...prev,
                district: value.id,
            };
        });
    const handleWard = (value) =>
        setLocals((prev) => {
            return {
                ...prev,
                ward: value.id,
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
                                    components={{
                                        Option: SelectControlAddresses,
                                    }}
                                    getOptionLabel={(option) =>
                                        `${option.name} ${option.addresses[0]}`
                                    }
                                />
                            </div>
                        </div>

                        {/* Mail */}
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

                        {/* Name */}
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

                        {/* Phone */}
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

                        {/* Address */}
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

                        {/* Local */}
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={dataLocal}
                                    className={cx('input-select')}
                                    components={{ Option: SelectControlLocals }}
                                    getOptionLabel={(option) => option.name}
                                    onChange={handleLocal}
                                />
                            </div>
                        </div>

                        {/* Districts */}
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={getArray(
                                        dataLocal,
                                        locals.local,
                                        'districts',
                                    )}
                                    className={cx('input-select')}
                                    components={{ Option: SelectControlLocals }}
                                    getOptionLabel={(option) => option.name}
                                    onChange={handleDistrict}
                                />
                            </div>
                        </div>

                        {/* Wards */}
                        <div className={cx('col', 'l-6')}>
                            <div className={cx('group')}>
                                <Select
                                    options={getArray(
                                        getArray(
                                            dataLocal,
                                            locals.local,
                                            'districts',
                                        ),
                                        locals.district,
                                        'wards',
                                    )}
                                    className={cx('input-select')}
                                    components={{ Option: SelectControlLocals }}
                                    getOptionLabel={(option) => option.name}
                                    onChange={handleWard}
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
