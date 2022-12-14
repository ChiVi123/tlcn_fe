import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfo,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '~/components';
import { cartActions, userActions } from '~/redux';
import { pathNames } from '~/routes';

function TopbarRightLogin({ topbarSection, topbarItem, btn }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userActions.resetUser());
        dispatch(cartActions.resetCart());
        navigate(pathNames.login);
    };

    return (
        <ul className={topbarSection}>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/profile'}>
                    <FontAwesomeIcon icon={faInfo} />
                    <span>Thông tin tài khoản</span>
                </Button>
            </li>
            <li className={topbarItem}>
                <Button className={btn} reset={true} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span>Đăng xuất</span>
                </Button>
            </li>
        </ul>
    );
}

export default TopbarRightLogin;
