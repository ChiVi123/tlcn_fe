import StarRatings from 'react-star-ratings';

import { cx, context } from './constant';

function Rating({ rating, setIsReview }) {
    const color = '#ffc120';
    const maxStars = 5;

    return (
        <>
            <StarRatings
                starRatedColor={color}
                starDimension='12px'
                starSpacing='2px'
                rating={rating}
                numberOfStars={maxStars}
            />
            <a
                href={`#review`}
                style={{ textDecoration: 'none' }}
                onClick={() => setIsReview(true)}
            >
                <span className={cx('rating-title')}>{context.ratingText}</span>
            </a>
        </>
    );
}

export default Rating;
