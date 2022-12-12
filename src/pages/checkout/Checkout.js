// Library
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
import { servicesGHN } from '~/services';
import { paymentServices, cartServices } from '~/services';
import { userSelector } from '~/redux';

// Local
import { context, cx, schema } from './constant';
import { ChoosePayment } from './components';

function Checkout() {
    // Hooks
    const user = useSelector(userSelector.getUser);
    const navigate = useNavigate();

    // - useState
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [cart, setCart] = useState();

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
            payment: 'cod',
        },
    });
    // - useEffect
    useEffect(() => {
        const fetchApi = async () => {
            const resultCart = await cartServices.getCartByToken();
            setCart(resultCart.data);

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
        const { province, district, ward, payment, ...rest } = data;
        const { id: cartId } = cart;
        const newData = {
            ...rest,
            province: province.label,
            district: district.label,
            ward: ward.label,
            payment,
        };

        Swal.fire({
            title: 'Nếu bạn muốn kiểm tra đơn hàng thêm lần nữa hãy nhấn nút hủy',
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                const result = await paymentServices.postPayment({
                    cartId,
                    type: payment,
                    data: newData,
                });

                switch (result?.message) {
                    case 'Payment init complete':
                        window.open(result.data);
                        break;
                    case ' Pay by COD successfully':
                        toast.success('Thanh toán thành công');
                        navigate(pathNames.home);
                        break;
                    default:
                        toast.error('Thanh toán thất bại');
                        navigate(pathNames.cart);
                        break;
                }
            }
        });
    };

    return (
        <div className={cx('grid', 'wide')}>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className={cx('col', 'l-3', 'm-12', 's-12')}>
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
                            classes={cx('col', 'l-12', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-6', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-4', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-4', 's-12')}
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
                            classes={cx('col', 'l-12', 'm-4', 's-12')}
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

                <div className={cx('col', 'l-4')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <Title as='h1' classNames={cx('title')}>
                                    {context.titlePayment}
                                </Title>
                            </div>
                        </div>

                        <ChoosePayment register={register} />
                    </div>
                </div>

                <div className={cx('col', 'l-5', 'm-12', 's-12')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12')}>
                                <Title as='h1' classNames={cx('title')}>
                                    {context.title}
                                    {cart?.items?.length}
                                    {context.titleCounter}
                                </Title>
                            </div>
                        </div>

                        {/* Products */}
                        <div className={cx('row', 'section')}>
                            <div className={cx('col', 'l-12', 'm-12', 's-12')}>
                                <ul className={cx('products')}>
                                    {!!cart?.items.length &&
                                        cart.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className={cx('product')}
                                            >
                                                <span
                                                    className={cx('quantity')}
                                                >
                                                    {item.quantity}
                                                </span>
                                                <div className={cx('info')}>
                                                    <img
                                                        src={item.image[0].url}
                                                        alt={item.name}
                                                        className={cx('img')}
                                                    />
                                                    <Title as='h3'>
                                                        {item.name}
                                                    </Title>
                                                </div>
                                                <span className={cx('text')}>
                                                    {currencyVN(item.subPrice)}
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
                                        {cart?.totalPrice &&
                                            currencyVN(cart?.totalPrice)}
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
                                        {cart?.totalPrice &&
                                            currencyVN(cart?.totalPrice)}
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
