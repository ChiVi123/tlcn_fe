import StarRatings from 'react-star-ratings';

import { cx, context } from './constant';

function Rating({ rating }) {
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
            <span className={cx('rating-title')}>{context.ratingText}</span>
        </>
    );
}

export default Rating;
