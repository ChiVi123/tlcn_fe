import { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { Button, Title } from '~/components';
import { imgLogo } from '~/assets/images/logo';
import { pathNames } from '~/routes';
import { addresses, products } from '~/utils/constant';
import dataLocal from '~/utils/local.json';
import { currencyVN, getArray } from '~/utils/funcs';

import SelectControlAddresses from './component/SelectControlAddresses';
import SelectControlLocals from './component/SelectControlLocals';
import { context, cx, inputId } from './constant';

function Checkout() {
    const [form, setForm] = useState({
        email: '1234@gmail.com',
        name: '',
        phone: '',
        address: '',
        note: '',
        code: '',
    });
    const [localId, setLocalId] = useState({
        local: '0',
        district: '0',
        ward: '0',
    });

    // Handle event
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
        setLocalId((prev) => {
            return {
                ...prev,
                local: value.id,
            };
        });
    const handleDistrict = (value) =>
        setLocalId((prev) => {
            return {
                ...prev,
                district: value.id,
            };
        });
    const handleWard = (value) =>
        setLocalId((prev) => {
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
    const handleCode = (event) =>
        setForm((prev) => {
            return { ...prev, code: event.target.value };
        });

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-7')}>
                    {/* Logo */}
                    <Button to={pathNames.home} className={cx('logo')} reset>
                        <img
                            src={imgLogo}
                            alt='logo'
                            className={cx('logo-img')}
                        />
                    </Button>

                    {/* Info address */}
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
                                    htmlFor={inputId.email}
                                    className={cx('label-input', 'disable', {
                                        focus: !!form.email,
                                    })}
                                >
                                    {context.email}
                                </label>
                                <input
                                    id={inputId.email}
                                    type='text'
                                    className={cx('input', 'disable')}
                                    value={form.email}
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
                                        localId.local,
                                        'districts',
                                    )}
                                    className={cx('input-select')}
                                    components={{ Option: SelectControlLocals }}
                                    getOptionLabel={(option) => option.name}
                                    onChange={handleDistrict}
                                    isDisabled={localId.local === '0'}
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
                                            localId.local,
                                            'districts',
                                        ),
                                        localId.district,
                                        'wards',
                                    )}
                                    className={cx('input-select')}
                                    components={{ Option: SelectControlLocals }}
                                    getOptionLabel={(option) => option.name}
                                    onChange={handleWard}
                                    isDisabled={localId.district === '0'}
                                />
                            </div>
                        </div>

                        {/* Note */}
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

                <div className={cx('col', 'l-5')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <Title as='h1' classNames={cx('title')}>
                                    {context.title}
                                </Title>
                            </div>
                        </div>

                        {/* Products */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <ul className={cx('products')}>
                                    {products.map((item, index) => (
                                        <li
                                            key={index}
                                            className={cx('product')}
                                        >
                                            <span className={cx('quantity')}>
                                                1
                                            </span>
                                            <div className={cx('info')}>
                                                <img
                                                    src={item.imgs[0]}
                                                    alt={item.name}
                                                    className={cx('img')}
                                                />
                                                <Title as='h3'>
                                                    {item.name}
                                                </Title>
                                            </div>
                                            <span className={cx('text')}>
                                                {currencyVN(item.price)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Code */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('group')}>
                                    <label
                                        htmlFor={inputId.code}
                                        className={cx('label-input', {
                                            focus: !!form.code,
                                        })}
                                    >
                                        {context.code}
                                    </label>
                                    <input
                                        id={inputId.code}
                                        type='text'
                                        value={form.code}
                                        onChange={handleCode}
                                        className={cx('input')}
                                    />
                                </div>
                            </div>
                            <div className={cx('col', 'l-6')}>
                                <button
                                    className={cx('btn', {
                                        'btn--disable': !form.code,
                                    })}
                                >
                                    {context.applyCode}
                                </button>
                            </div>
                        </div>

                        {/* Bill */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('text')}>
                                        {context.tempCalc}
                                    </span>
                                    <span className={cx('text')}>
                                        {currencyVN(99000)}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('col', 'l-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('text')}>
                                        {context.feeShip}
                                    </span>
                                    <span className={cx('text')}>-</span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('large-text')}>
                                        {context.priceTotal}
                                    </span>
                                    <span
                                        className={cx(
                                            'large-text',
                                            'large-text--blue',
                                        )}
                                    >
                                        {currencyVN(99000)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-6')}>
                                <Button
                                    to={pathNames.cart}
                                    reset
                                    className={cx('link')}
                                >
                                    <>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                        {context.backToCart}
                                    </>
                                </Button>
                            </div>
                            <div className={cx('col', 'l-6')}>
                                <button
                                    to={pathNames.cart}
                                    className={cx('btn')}
                                >
                                    {context.order}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
