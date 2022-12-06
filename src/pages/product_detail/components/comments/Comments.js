import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
import StarRatings from 'react-star-ratings';

import { Button, Form, FormGroup, FormQuill } from '~/components';
import { context, cx } from './constant';

function Comments({ comments, setIsReview }) {
    const { handleSubmit, control } = useForm();
    const [star, setStar] = useState(0);
    const color = '#ffc120';

    const handleRating = (value) => {
        setStar(value);
    };
    const handleOnSubmit = (data) => {
        console.log({ ...data, star });
    };

    return (
        <>
            <Form
                onSubmit={handleSubmit(handleOnSubmit)}
                classes={cx('form-no-gutters')}
            >
                <FormGroup classes={cx('col', 'l-12', 'wrapper-review')}>
                    <StarRatings
                        rating={star}
                        starRatedColor={color}
                        starHoverColor={color}
                        starDimension='20px'
                        starSpacing='2px'
                        changeRating={handleRating}
                    />
                </FormGroup>
                <FormGroup classes={cx('col', 'l-12', 'wrapper-review')}>
                    <FormQuill name='review' control={control} />
                </FormGroup>

                <Button
                    className={cx('button')}
                    onClick={() => setIsReview(false)}
                >
                    {context.addReviewButton}
                </Button>
            </Form>
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
        </>
    );
}

export default Comments;
