// Library
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Common
import {
    Button,
    Title,
    Form,
    FormGroup,
    Input,
    FormSelect,
} from '~/components';
import { imgLogo } from '~/assets/images/logo';
import { pathNames } from '~/routes';
import { addresses } from '~/utils/constant';
import { currencyVN } from '~/utils/funcs';
import * as servicesGHN from '~/services/servicesGHN';

// Local
import SelectControlAddresses from './component/SelectControlAddresses';
import { context, cx, schema, defaultValues } from './constant';
import { useSelector } from 'react-redux';
import { cartSelector } from '~/redux';

function Checkout() {
    // Hooks
    const cart = useSelector(cartSelector.getCart);
    // - useState
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    // - useForm
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    // - useEffect
    useEffect(() => {
        const fetchApi = async () => {
            const resultProvinces = await servicesGHN.getProvince();
            const resultDistricts = await servicesGHN.getDistrict(214);
            const resultWards = await servicesGHN.getWard(1560);

            setProvinces(resultProvinces);
            setDistricts(resultDistricts);
            setWards(resultWards);
        };

        fetchApi();
    }, []);
    useEffect(() => {
        const fetchApi = async (value, name, type) => {
            if (type === 'change') {
                let result;

                switch (name) {
                    case 'province':
                        result = await servicesGHN.getDistrict(
                            value[name].value,
                        );
                        setDistricts(result);
                        break;
                    case 'district':
                        result = await servicesGHN.getWard(value[name].value);
                        setWards(result);
                        break;
                    default:
                        break;
                }
            }
        };

        const subscription = watch((value, { name, type }) => {
            fetchApi(value, name, type);
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    // Handle event
    const handleAddresses = (value) => {
        setValue('name', value.name);
        setValue('phone', value.phone);
        setValue('address', value.address);
    };
    const handleOnSubmit = (data) => {
        const { name, email, phone, note, address, province, district, ward } =
            data;
        console.log({
            name,
            email,
            phone,
            note,
            address: `${address}, ${ward.label}, ${district.label}, ${province.label}`,
            cart,
        });
    };

    return (
        <div className={cx('grid', 'wide')}>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
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
                        <FormGroup classes={cx('col', 'l-6')}>
                            <Select
                                options={addresses}
                                className={cx('input-select')}
                                onChange={handleAddresses}
                                components={{
                                    Option: SelectControlAddresses,
                                }}
                                getOptionLabel={(option) =>
                                    `${option.name} ${option.address}`
                                }
                            />
                        </FormGroup>

                        {/* Email */}
                        <FormGroup
                            classes={cx('col', 'l-6')}
                            name={'email'}
                            errors={errors}
                        >
                            <Input
                                classes={cx('disable')}
                                name={'email'}
                                type={'text'}
                                isDisable
                                register={register}
                                errors={errors}
                            />
                        </FormGroup>

                        {/* Name */}
                        <FormGroup
                            classes={cx('col', 'l-6')}
                            name={'name'}
                            errors={errors}
                        >
                            <Input
                                name={'name'}
                                type={'text'}
                                register={register}
                                errors={errors}
                                placeholder={'Nhập họ tên'}
                            />
                        </FormGroup>

                        {/* Phone */}
                        <FormGroup
                            classes={cx('col', 'l-6')}
                            name={'phone'}
                            errors={errors}
                        >
                            <Input
                                name={'phone'}
                                type={'text'}
                                register={register}
                                errors={errors}
                                placeholder={'Nhập số điện thoại'}
                            />
                        </FormGroup>

                        {/* Address */}
                        <FormGroup
                            classes={cx('col', 'l-6')}
                            name={'address'}
                            errors={errors}
                        >
                            <Input
                                name={'address'}
                                type={'text'}
                                register={register}
                                errors={errors}
                                placeholder={'Nhập địa chỉ'}
                            />
                        </FormGroup>

                        {/* Provinces */}
                        <FormGroup classes={cx('col', 'l-6')}>
                            <FormSelect
                                name='province'
                                control={control}
                                options={provinces}
                                label={'ProvinceName'}
                                value={'ProvinceID'}
                            />
                        </FormGroup>

                        {/* Districts */}
                        <FormGroup classes={cx('col', 'l-6')}>
                            <FormSelect
                                name='district'
                                control={control}
                                options={districts}
                                label={'DistrictName'}
                                value={'DistrictID'}
                            />
                        </FormGroup>

                        {/* Wards */}
                        <FormGroup classes={cx('col', 'l-6')}>
                            <FormSelect
                                name='ward'
                                control={control}
                                options={wards}
                                label={'WardName'}
                                value={'WardID'}
                            />
                        </FormGroup>

                        {/* Note */}
                        <FormGroup classes={cx('col', 'l-12')}>
                            <Input
                                name={'note'}
                                type={'text'}
                                textarea
                                rows={3}
                                cols={20}
                                register={register}
                                errors={errors}
                                placeholder={'Ghi chú'}
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className={cx('col', 'l-5')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <Title as='h1' classNames={cx('title')}>
                                    {context.title}
                                    {cart.items.length}
                                    {context.titleCounter}
                                </Title>
                            </div>
                        </div>

                        {/* Products */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <ul className={cx('products')}>
                                    {cart.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className={cx('product')}
                                        >
                                            <span className={cx('quantity')}>
                                                {item.quantity}
                                            </span>
                                            <div className={cx('info')}>
                                                <img
                                                    src={item.image}
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

                        {/* Bill */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('text')}>
                                        {context.tempCalc}
                                    </span>
                                    <span className={cx('text')}>
                                        {currencyVN(cart.total)}
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
                                        {currencyVN(cart.total)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-6')}>
                                <Button
                                    className={cx('link')}
                                    to={pathNames.cart}
                                    reset
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                    {context.backToCart}
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
            </Form>
        </div>
    );
}

export default Checkout;
