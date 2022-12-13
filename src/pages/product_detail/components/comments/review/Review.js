import parser from 'html-react-parser';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import StarRatings from 'react-star-ratings';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { Button, FormGroup, FormQuill } from '~/components';
import { reviewServices } from '~/services';
import { userSelector } from '~/redux';
import { cx, context } from './constant';

const schema = yup.object({
    content: yup.string().required('Bạn chưa điền nội dung'),
    rate: yup.number().min(1, 'Bạn cần đánh giá số sao'),
});

function Review({ review }) {
    const [isEdit, setIsEdit] = useState(false);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            rate: review.rate,
            content: review.content === '<p><br></p>' ? '' : review.content,
        },
    });
    const navigate = useNavigate();
    const userId = useSelector(userSelector.getUserId);
    const color = '#ffc120';
    const handleEdit = () => {
        setIsEdit(true);
    };
    const handleDelete = async () => {
        Swal.fire({
            title: 'Bạn muốn xóa đánh giá của mình',
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await reviewServices.deleteReviewByUser({
                    id: review.id,
                });
                navigate(0);
            }
        });
    };
    const handleCancel = (event) => {
        event.preventDefault();
        setIsEdit(false);
    };
    const handleOnSubmit = async (data) => {
        const expectMessage = 'Update comment successfully';
        const result = await reviewServices.editReview({ id: review.id, data });
        if (result?.message === expectMessage) {
            navigate(0);
        } else {
            toast.error('Đánh giá này không chỉnh sửa được');
        }
    };

    return (
        <li className={cx('comment')}>
            <div className={cx('comment-left')}>
                <img
                    src={review.userimage}
                    alt={review.reviewedBy}
                    className={cx('comment-avatar')}
                />
                <span className={cx('comment-name')}>
                    {review.reviewedBy}
                    <StarRatings
                        rating={review.rate}
                        starRatedColor={color}
                        starHoverColor={color}
                        starDimension='12px'
                        starSpacing='2px'
                    />
                </span>
            </div>

            {/* Right */}
            <div className={cx('comment-right')}>
                {isEdit ? (
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className={cx('row')}>
                            <FormGroup
                                name={'rate'}
                                errors={errors}
                                classes={cx('col', 'l-12')}
                            >
                                <Controller
                                    control={control}
                                    name={'rate'}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <StarRatings
                                            rating={value}
                                            starRatedColor={color}
                                            starHoverColor={color}
                                            starDimension='20px'
                                            starSpacing='2px'
                                            changeRating={(rating) =>
                                                onChange(rating)
                                            }
                                        />
                                    )}
                                />
                            </FormGroup>
                            <FormGroup
                                name={'content'}
                                errors={errors}
                                classes={cx('col', 'l-12')}
                            >
                                <FormQuill name='content' control={control} />
                            </FormGroup>

                            <div className={cx('col', 'l-12')}>
                                <Button
                                    className={cx(
                                        'button',
                                        'button-form',
                                        'button--edit',
                                    )}
                                >
                                    {context.editButton}
                                </Button>
                                <Button
                                    className={cx('button', 'button-form')}
                                    onClick={handleCancel}
                                >
                                    {context.cancelButton}
                                </Button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className={cx('comment-content')}>
                            {parser(review.content)}
                        </div>
                        <div className={cx('comment-actions')}>
                            {userId === review.userid && (
                                <>
                                    <span
                                        className={cx(
                                            'button',
                                            'comment-small-text',
                                        )}
                                        onClick={handleEdit}
                                    >
                                        {context.editButton}
                                    </span>
                                    <span
                                        className={cx(
                                            'button',
                                            'comment-small-text',
                                        )}
                                        onClick={handleDelete}
                                    >
                                        {context.deleteButton}
                                    </span>
                                </>
                            )}
                            <span className={cx('comment-small-text')}>
                                {review.createdDate}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </li>
    );
}

export default Review;
