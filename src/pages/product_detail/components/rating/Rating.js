import StarRatings from 'react-star-ratings';

import { cx, context } from './constant';

function Rating({ rating, setIsReview }) {
    const color = '#ffc120';
    const maxStars = 5;
    const averageRating = () => {
        if (rating.quantity) {
            return rating.totalStar / rating.quantity;
        } else return 0;
    };

    return (
        <>
            <StarRatings
                starRatedColor={color}
                starDimension='12px'
                starSpacing='2px'
                rating={averageRating()}
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
