import { Controller, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import parser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';

import { currencyVN, priceSaleVN } from '~/utils/funcs';
import { Button, ProductCard, Title } from '~/components';
import { cartServices, productServices, reviewServices } from '~/services';
import { cartActions, userSelector } from '~/redux';
import { pathNames } from '~/routes';
// import logger from '~/utils/logger';

import { cx, context, form } from './constant';
import { Images, Rating, CheckBox, Comments } from './components';
import './ProductDetail.scss';
import { InputQuantity, Slick } from '../components';

function ProductDetail() {
    const [productsRelation, setProductsRelation] = useState([]);
    const [isReview, setIsReview] = useState(false);
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState({
        totalQuantity: 0,
        totalPage: 0,
        list: [],
    });
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            quantity: 1,
        },
    });
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(userSelector.getUserId);

    useEffect(() => {
        const fetchApi = async (id) => {
            const result = await productServices.getProduct(id);
            setProduct(result);
            setValue('option', result.options[0]);

            const resultRelation = await productServices.getProductsByCategory({
                id: result.category_id,
                page: 0,
                size: 10,
            });
            const newRelationProducst = resultRelation.list.filter(
                (item) => item.id !== id,
            );
            setProductsRelation(newRelationProducst);

            const resultReviews = await reviewServices.getReviewByProductId(id);
            setReviews(resultReviews);
        };

        fetchApi(id);
    }, [id, setValue]);

    const rating = useMemo(() => {
        const total = reviews.list.reduce(
            (accumulator, currentValue) => {
                if (currentValue.state === 'enable') {
                    accumulator.totalStar += currentValue.rate;
                    accumulator.quantity += 1;
                }
                return accumulator;
            },
            { totalStar: 0, quantity: 0 },
        );

        return total;
    }, [reviews.list]);

    // Handle event
    const onSubmit = async (data) => {
        if (!userId) {
            navigate(pathNames.login);
        }
        const { quantity, option } = data;

        if (
            (option?.stock && quantity > option.stock) ||
            quantity > product.quantity
        ) {
            toast.error(
                `Số lượng không vượt quá ${option?.stock || product.quantity}`,
            );
            return;
        }

        const result = await cartServices.addCart({
            producId: id,
            productOptionId: option?.id,
            value: option?.value,
            quantity,
        });

        if (result.isSuccess === 'true') {
            toast.success('Đã thêm vào giỏ hàng');
            dispatch(cartActions.increaseQuantity());
        } else {
            toast.error('Không thể thêm vào giỏ hàng');
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
                            <Rating rating={rating} />
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
                            {context.review(reviews.totalQuantity)}
                        </Title>

                        {isReview || (
                            <Button onClick={() => setIsReview(true)}>
                                {context.reviewButton}
                            </Button>
                        )}
                    </div>

                    <div className={cx('section__wrapper')}>
                        <Comments
                            reviews={reviews.list}
                            setIsReview={setIsReview}
                            isReview={isReview}
                            productId={id}
                        />
                    </div>
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
