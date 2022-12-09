import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faUserPen,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '~/components';

function TopbarRightLogout({ topbarSection, topbarItem, btn }) {
    return (
        <ul className={topbarSection}>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/login'}>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <span>Đăng nhập</span>
                </Button>
            </li>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/register'}>
                    <FontAwesomeIcon icon={faUserPen} />
                    <span>Đăng ký</span>
                </Button>
            </li>
        </ul>
    );
}

export default TopbarRightLogout;
