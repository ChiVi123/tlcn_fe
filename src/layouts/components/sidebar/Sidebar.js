import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

import { imgLogo } from '~/assets/images/logo';
import { Title } from '~/components';
import { pathNames } from '~/routes';
import { user } from '~/utils/constant';
import { cx, sidebarItems } from './constant';

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Link to={pathNames.home} className={cx('logo')}>
                <img src={imgLogo} alt='logo' className={cx('logo-img')} />
            </Link>

            <Title as={'h2'}>
                {'Xin chào '}
                {user.lastName}
            </Title>

            <ul className={cx('sidebar')}>
                {sidebarItems.map((item, index) => (
                    <li key={index} className={cx('item')}>
                        <NavLink
                            to={item.navTo}
                            className={({ isActive }) =>
                                cx('link', { active: isActive })
                            }
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={cx('font-icon')}
                            />
                            <span className={cx('context')}>
                                {item.context}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
