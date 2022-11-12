import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Button } from '~/components';

function TopbarRightLogout({ topbarSection, topbarItem, btn }) {
    return (
        <ul className={topbarSection}>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/login'}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Tài khoản</span>
                </Button>
            </li>
        </ul>
    );
}

export default TopbarRightLogout;
