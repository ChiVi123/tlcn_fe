import { Controller, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import parser from 'html-react-parser';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { comments } from '~/utils/constant';
import { ProductCard, Title } from '~/components';
import * as services from '~/services/services';

import { cx, context, form } from './constant';
import { Images, Rating, CheckBox, Comments } from './components';

import { InputQuantity, Slick } from '../components';

function ProductDetail() {
    const [productsRelation, setProductsRelation] = useState([]);
    const [product, setProduct] = useState({});
    const { control, handleSubmit } = useForm({
        defaultValues: {
            quantity: 1,
        },
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await services.getProduct(id);
            setProduct(result);

            const resultRelation = await services.getProductsByCategory(
                result.category_id,
            );
            setProductsRelation(resultRelation.list);
        };

        fetchApi(id);
    }, [id]);

    // Handle event
    const onSubmit = async (data) => {
        const {
            quantity,
            option: { id: productOptionId, value },
        } = data;
        const result = await services.addCart({
            producId: id,
            productOptionId,
            value,
            quantity,
        });

        if (result.isSuccess === 'true') {
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
                                    <Controller
                                        control={control}
                                        name={'option'}
                                        render={({ field: { onChange } }) => (
                                            <CheckBox
                                                options={product?.options}
                                                onChange={(value) =>
                                                    onChange(value)
                                                }
                                            />
                                        )}
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

                        {!!productsRelation.length && (
                            <Slick
                                list={productsRelation}
                                component={ProductCard}
                                nameProp={'product'}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
