import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Button } from '~/components';
import { cx } from './constant';

function BreadCrumb() {
    return (
        <div className={cx('grid', 'wide')}>
            <ul className={cx('bread-crumb')}>
                <li>
                    <Button
                        to={'/'}
                        className={cx('bread-crumb-text', 'url')}
                        title='Trang chủ'
                    >
                        Trang chủ
                    </Button>
                    <span className={cx('bread-crumb-icon')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </li>
                <li>
                    <Button
                        to={'/search'}
                        className={cx('bread-crumb-text', 'url')}
                        title='Raspberry'
                    >
                        Raspberry
                    </Button>
                    <span className={cx('bread-crumb-icon')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </li>
                <li>
                    <span className={cx('bread-crumb-text', 'current')}>
                        Module camera OV2640 200W Pixel
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default BreadCrumb;
