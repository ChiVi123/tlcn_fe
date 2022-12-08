import { Controller, useForm } from 'react-hook-form';
import StarRatings from 'react-star-ratings';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Button, Form, FormGroup, FormQuill } from '~/components';
import * as services from '~/services/services';
import { context, cx } from './constant';
import Review from './review/Review';

const schema = yup.object({
    content: yup.string().required('Bạn chưa điền nội dung'),
    rate: yup.number().min(1, 'Bạn cần đánh giá số sao'),
});

function Comments({ reviews, setIsReview, isReview, productId }) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            rate: 0,
        },
    });
    const color = '#ffc120';

    const handleOnSubmit = async (data) => {
        const result = await services.addReview({ ...data, productId });
        const expectMessage = 'Add comment success ';
        const toastMessage = 'Đánh giá sản sản phẩm';

        if (result?.message === expectMessage) {
            toast.success(`${toastMessage} thành công`);
            setIsReview(false);
        } else {
            toast.error(`${toastMessage} thất bại`);
        }
    };

    return (
        <>
            {isReview && (
                <Form
                    onSubmit={handleSubmit(handleOnSubmit)}
                    classes={cx('form-no-gutters')}
                >
                    <FormGroup
                        name={'rate'}
                        errors={errors}
                        classes={cx('col', 'l-12', 'wrapper-review')}
                    >
                        <Controller
                            control={control}
                            name={'rate'}
                            render={({ field: { onChange, value } }) => (
                                <StarRatings
                                    rating={value}
                                    starRatedColor={color}
                                    starHoverColor={color}
                                    starDimension='20px'
                                    starSpacing='2px'
                                    changeRating={(rating) => onChange(rating)}
                                />
                            )}
                        />
                    </FormGroup>
                    <FormGroup
                        name={'content'}
                        errors={errors}
                        classes={cx('col', 'l-12', 'wrapper-review')}
                    >
                        <FormQuill name='content' control={control} />
                    </FormGroup>

                    <Button className={cx('button')}>
                        {context.addReviewButton}
                    </Button>
                </Form>
            )}
            <ul className={cx('comments')}>
                {reviews.map((item, index) => (
                    <Review key={index} review={item} />
                ))}
            </ul>
        </>
    );
}

export default Comments;
