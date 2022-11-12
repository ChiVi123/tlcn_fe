import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { comments, products } from '~/utils/constant';
import { ProductCart, Title } from '~/components';
import { cartAction, cartSelector } from '~/redux';
import * as services from '~/services/services';

import { cx, context, form } from './constant';
import { Images, Rating, CheckBox } from './components';

function ProductDetail() {
    const [translateXRealtion, setTranslateXRealtion] = useState(0);
    const [product, setProduct] = useState({});

    const { register, watch, setValue, handleSubmit } = useForm({
        defaultValues: {
            quantity: 1,
        },
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    const quantityInput = watch(form.quantity, 1);
    const cart = useSelector(cartSelector.getCart);

    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await services.getProduct(id);
            setProduct(result);
        };

        fetchApi(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle event
    const handlePrevRelation = () => {
        setTranslateXRealtion(translateXRealtion + 240);
    };
    const handleNextRelation = () => {
        setTranslateXRealtion(translateXRealtion - 240);
    };
    const handleQuantity = ({ target: { value } }) => {
        if (Number.isInteger(value)) {
            setValue(form.quantity, value);
            return;
        }

        const text = value.trim();

        if (!text) {
            setValue(form.quantity, '');
            return;
        }

        setValue(form.quantity, parseInt(text, 10));
    };
    const handleDecreaseQuantity = (event) => {
        event.preventDefault();
        if (quantityInput > 1) {
            setValue(form.quantity, quantityInput - 1);
        }
    };
    const handleIncreaseQuantity = (event) => {
        event.preventDefault();
        setValue('quantity', quantityInput + 1);
    };
    const onSubmit = (data) => {
        const existProduct = cart.items.find((item) => item.productId === id);

        if (data.quantity > 0 && !existProduct) {
            dispatch(
                cartAction.addProduct({
                    ...data,
                    productId: id,
                    name: product?.name,
                    image: product?.images[0],
                    price: priceSaleVN(product?.price, product?.sale),
                }),
            );
            toast.success('Đã thêm vào vỏ hàng');
        } else {
            toast.error('Không thể thêm vào vỏ hàng');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('section', 'section--flex')}>
                    {/* Image */}
                    <div className={cx('section-left')}>
                        {product?.images && <Images images={product?.images} />}
                    </div>

                    {/* Infomation */}
                    <div className={cx('section-right')}>
                        {product?.name && (
                            <Title as='h1'>{product?.name}</Title>
                        )}

                        {/* Rating */}
                        <div className={cx('section-right__group', 'rating')}>
                            <Rating rating={product?.rate} />
                        </div>

                        {/* Price */}
                        <div className={cx('section-right__group')}>
                            {product?.price && (
                                <span className={cx('product-sale')}>
                                    {currencyVN(
                                        priceSaleVN(
                                            product?.price,
                                            product?.sale,
                                        ),
                                    )}
                                </span>
                            )}
                            {product?.price && (
                                <span className={cx('product-old-price')}>
                                    {currencyVN(product?.price)}
                                </span>
                            )}
                        </div>

                        {/* Id Product */}
                        <div className={cx('section-right__group')}>
                            <span className={cx('section-title')}>
                                {context.idProduct}
                            </span>
                            <span className={cx('section-text')}>
                                {product?.id}
                            </span>
                        </div>

                        {/* Tag */}
                        <div className={cx('section-right__group')}>
                            <span className={cx('section-title')}>
                                <FontAwesomeIcon
                                    className={cx('section-icon')}
                                    icon={faTag}
                                />
                                {context?.tags}{' '}
                            </span>
                            {product?.tags && (
                                <span className={cx('section-text')}>
                                    {product?.tags.join(', ')}
                                </span>
                            )}
                        </div>

                        {/* Summary */}
                        <ul className={cx('section-right__group', 'summary')}>
                            {product?.summary && product?.summary}
                        </ul>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Options */}
                            <div className={cx('section-right__group')}>
                                {product?.options && (
                                    <CheckBox
                                        options={product?.options}
                                        register={register}
                                    />
                                )}
                            </div>

                            {/* Input quantity */}
                            <div className={cx('section-right__group')}>
                                <span className={cx('section-title')}>
                                    {context.quantity}
                                </span>
                                <div className={cx('quantity')}>
                                    <button
                                        className={cx(
                                            'btn-input',
                                            'btn-input--decrease',
                                        )}
                                        onClick={handleDecreaseQuantity}
                                    >
                                        –
                                    </button>
                                    <input
                                        type={'number'}
                                        inputMode={'numberic'}
                                        value={quantityInput}
                                        onChange={handleQuantity}
                                        className={cx('input-quantity')}
                                        {...register(form.quantity)}
                                    />
                                    <button
                                        className={cx(
                                            'btn-input',
                                            'btn-input--increase',
                                        )}
                                        onClick={handleIncreaseQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action */}
                            <div className={cx('section-right__group')}>
                                <button
                                    type={'submit'}
                                    className={cx('action-btn')}
                                >
                                    {context.addToCart}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Description */}
                <div className={cx('section')}>
                    <div className={cx('section__wrapper')}>
                        <Title as='h2' line>
                            {context.description}
                        </Title>
                        <p className={cx('description')}>
                            Et voluptua sanctus diam lorem sed clita dolores. Et
                            duo sed stet et sed takimata ut duo, ea rebum ea
                            diam ipsum magna labore. Sed diam takimata invidunt
                            sed. Tempor ut ipsum sea at duo sed eirmod. Lorem
                            clita et nonumy et sadipscing ipsum dolore at amet.
                            Labore ut sadipscing kasd gubergren dolor ipsum.
                            Diam tempor voluptua consetetur invidunt. Aliquyam
                            ut sit aliquyam amet clita diam stet. Ipsum dolor
                            erat ea consetetur sit, sadipscing sea sit tempor
                            sanctus. Accusam consetetur magna voluptua erat et
                            clita est dolor gubergren, lorem magna et consetetur
                            magna diam consetetur rebum, erat elitr et dolore et
                            amet, gubergren no sed amet et sit rebum no at
                            justo, gubergren ea duo sit aliquyam lorem ea,
                            voluptua.
                        </p>
                    </div>
                </div>

                {/* Comment */}
                <div className={cx('section')}>
                    <div className={cx('section__wrapper')}>
                        <Title as='h2' line>
                            {context.comment}
                        </Title>
                    </div>

                    <ul className={cx('comments')}>
                        {comments.map((item, index) => (
                            <li key={index} className={cx('comment')}>
                                <img
                                    src={item.img}
                                    alt={item.userName}
                                    className={cx('avatar')}
                                />
                                <div className={cx('comment-right-side')}>
                                    <span className={cx('user-name')}>
                                        {item.userName}
                                    </span>
                                    <span className={cx('created-at')}>
                                        {item.createdAt}
                                    </span>
                                    <p className={cx('comment-content')}>
                                        {item.content}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Relation */}
                <div className={cx('section')}>
                    <div className={cx('section__wrapper')}>
                        <Title as='h2' line>
                            {context.relation}
                        </Title>
                        <div className={cx('relation-wrapper')}>
                            <button
                                onClick={handlePrevRelation}
                                className={cx('btn-arrow', 'btn-arrow--left')}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            {/* <ul
                                style={{
                                    transform: `translateX(${translateXRealtion}px)`,
                                }}
                                className={cx('relations')}
                            >
                                {products.map((item, index) => (
                                    <li
                                        key={index}
                                        className={cx('col', 'l-2-4')}
                                    >
                                        <ProductCart product={item} />
                                    </li>
                                ))}
                            </ul> */}
                            <button
                                onClick={handleNextRelation}
                                className={cx('btn-arrow', 'btn-arrow--right')}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
