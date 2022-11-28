import { Controller, useForm } from 'react-hook-form';
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
import parser from 'html-react-parser';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { comments } from '~/utils/constant';
import { ProductCard, Title } from '~/components';
import { cartActions, cartSelector } from '~/redux';
import * as services from '~/services/services';

import { cx, context, form } from './constant';
import { Images, Rating, CheckBox, Comments } from './components';

import { InputQuantity } from '../components';

function ProductDetail() {
    const [translateXRelation, setTranslateXRelation] = useState(0);
    const [productsRelation, setProductsRelation] = useState([]);
    const [product, setProduct] = useState({});

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            quantity: 1,
        },
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    const cart = useSelector(cartSelector.getCart);

    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await services.getProduct(id);
            const resultRelation = await services.getProductsByCategory(
                result.category_id,
            );

            setProduct(result);
            setProductsRelation(resultRelation.list);
        };

        fetchApi(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle event
    const handlePrevRelation = () => {
        setTranslateXRelation(translateXRelation + 240);
    };
    const handleNextRelation = () => {
        setTranslateXRelation(translateXRelation - 240);
    };
    const onSubmit = (data) => {
        const existProduct = cart.items.find((item) => item.productId === id);
        const option = product.options.find(
            (item) => item.value === data.option,
        );

        if (
            (option && data.quantity > option.stock) ||
            data.quantity > product.quantity
        ) {
            toast.error(
                `Sản phẩm không thể vượt quá ${
                    option?.stock || product.quantity
                }`,
            );
            return;
        }

        if (!existProduct) {
            console.log({
                ...data,
                productId: id,
                name: product?.name,
                image: product?.images[0],
                price: priceSaleVN(product?.price, product?.sale),
            });
            // dispatch(
            //     cartActions.addProduct({
            //         ...data,
            //         productId: id,
            //         name: product?.name,
            //         image: product?.images[0],
            //         price: priceSaleVN(product?.price, product?.sale),
            //         quantity: parseInt(data.quantity),
            //     }),
            // );

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
                                    {product?.sale !== 0 &&
                                        currencyVN(product?.price)}
                                </span>
                            )}
                        </div>

                        {/* Id Product */}
                        <div className={cx('section-right__group')}>
                            <span className={cx('section-title')}>
                                {context.idProduct}{' '}
                            </span>
                            <span className={cx('section-text')}>
                                {product?.id}
                            </span>
                        </div>

                        {/* Tags */}
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
                        <div className={cx('section-right__group')}>
                            <div className={cx('ql-editor', 'summary')}>
                                {product?.summary && parser(product?.summary)}
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Options */}
                            <div className={cx('section-right__group')}>
                                {!!product?.options?.length && (
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

                                <Controller
                                    control={control}
                                    name={form.quantity}
                                    render={({ field: { onChange } }) => (
                                        <InputQuantity
                                            onChange={(value) =>
                                                onChange(value)
                                            }
                                        />
                                    )}
                                />
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
                        <div className={cx('ql-editor', 'description')}>
                            {product?.description &&
                                parser(product?.description)}
                        </div>
                    </div>
                </div>

                {/* Comment */}
                <div className={cx('section')}>
                    <div className={cx('section__wrapper')}>
                        <Title as='h2' line>
                            {context.comment}
                        </Title>
                    </div>

                    <Comments comments={comments} />
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
                            <ul
                                style={{
                                    transform: `translateX(${translateXRelation}px)`,
                                }}
                                className={cx(
                                    'relations',
                                    'row',
                                    'row--nowrap',
                                )}
                            >
                                {productsRelation.length > 0 &&
                                    productsRelation.map((item, index) => (
                                        <li
                                            key={index}
                                            className={cx(
                                                'col',
                                                'l-2-4',
                                                'm-3',
                                                's-6',
                                            )}
                                        >
                                            <ProductCard product={item} />
                                        </li>
                                    ))}
                            </ul>
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
