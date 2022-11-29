// Library
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
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
import { currencyVN } from '~/utils/funcs';
import * as servicesGHN from '~/services/servicesGHN';
import { cartSelector, userSelector } from '~/redux';

// Local
import { context, cx, schema } from './constant';

function Checkout() {
    // Hooks
    const cart = useSelector(cartSelector.getCart);
    const user = useSelector(userSelector.getUser);
    // - useState
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const total = useMemo(() => {
        return cart.items.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0);
    }, [cart.items]);

    // - useForm
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: user.email,
            phone: '',
            note: '',
        },
    });
    // - useEffect
    useEffect(() => {
        const fetchApi = async () => {
            const resultProvinces = await servicesGHN.getProvince();
            setProvinces(resultProvinces);

            const resultDistricts = await servicesGHN.getDistrict(214);
            setDistricts(resultDistricts);

            const resultWards = await servicesGHN.getWard(1560);
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

    const handleOnSubmit = (data) => {
        const { address, province, district, ward } = data;

        const newCart = { ...cart, total };

        console.log({
            ...data,
            address: `${address}, ${ward.label}, ${district.label}, ${province.label}`,
            newCart,
        });
    };

    return (
        <div className={cx('grid', 'wide')}>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className={cx('col', 'l-7', 'm-12', 's-12')}>
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
                        {/* Email */}
                        <FormGroup
                            classes={cx('col', 'l-6', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-6', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-6', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-6', 'm-6', 's-12')}
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
                        <FormGroup
                            classes={cx('col', 'l-6', 'm-4', 's-12')}
                            name={'province'}
                            errors={errors}
                        >
                            <FormSelect
                                name='province'
                                control={control}
                                options={provinces}
                                label={'ProvinceName'}
                                value={'ProvinceID'}
                                placeholder={'Tỉnh thành ...'}
                            />
                        </FormGroup>

                        {/* Districts */}
                        <FormGroup
                            classes={cx('col', 'l-6', 'm-4', 's-12')}
                            name={'district'}
                            errors={errors}
                        >
                            <FormSelect
                                name='district'
                                control={control}
                                options={districts}
                                label={'DistrictName'}
                                value={'DistrictID'}
                                placeholder={'Quận, huyện ...'}
                            />
                        </FormGroup>

                        {/* Wards */}
                        <FormGroup
                            classes={cx('col', 'l-6', 'm-4', 's-12')}
                            name={'ward'}
                            errors={errors}
                        >
                            <FormSelect
                                name='ward'
                                control={control}
                                options={wards}
                                label={'WardName'}
                                value={'WardID'}
                                placeholder={'Xã ...'}
                            />
                        </FormGroup>

                        {/* Note */}
                        <FormGroup classes={cx('col', 'l-12', 'm-12', 's-12')}>
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

                <div className={cx('col', 'l-5', 'm-12', 's-12')}>
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
                            <div className={cx('col', 'l-12', 'm-12', 's-12')}>
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
                                                    src={item.image.url}
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
                            <div className={cx('col', 'l-12', 'm-12', 's-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('text')}>
                                        {context.tempCalc}
                                    </span>
                                    <span className={cx('text')}>
                                        {currencyVN(total)}
                                    </span>
                                </div>
                            </div>
                            <div className={cx('col', 'l-12', 'm-12', 's-12')}>
                                <div className={cx('section-text')}>
                                    <span className={cx('text')}>
                                        {context.feeShip}
                                    </span>
                                    <span className={cx('text')}>-</span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12', 'm-12', 's-12')}>
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
                                        {currencyVN(total)}
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
