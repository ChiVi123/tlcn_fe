import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Button } from '~/components';
import { imgLogo } from '~/assets/images';
import { cx, actions, navItems, menuCate, topbars } from './constant';
import Menu from './components/menu/Menu';

function Header() {
    const [dropDown, setDropDown] = useState(false);

    const handleMouseEnter = () => setDropDown(true);
    const handleMouseLeave = () => setDropDown(false);

    return (
        <header className={cx('header')}>
            <div className={cx('grid', 'wide')}>
                <ul className={cx('topbar')}>
                    {topbars.map((item, index) => (
                        <li key={index} className={cx('topbar__item')}>
                            <Button to={item.to}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.context}</span>
                            </Button>
                        </li>
                    ))}
                </ul>

                <div className={cx('wrapper')}>
                    <Button to={'/'} className={cx('logo')}>
                        <img src={imgLogo} alt='logo' />
                    </Button>

                    <div className={cx('wrapper-right')}>
                        {/* Search */}
                        <div className={cx('wrapper-input')}>
                            <input
                                className={cx('input')}
                                placeholder='Tìm kiếm sản phẩm...'
                            />
                            <button className={cx('btn-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>

                        {/* Actions */}
                        <div className={cx('wrapper-actions')}>
                            {actions.map((item, index) => (
                                <Button
                                    key={index}
                                    className={cx('action-item')}
                                    to={item.to}
                                    href={item.href}
                                >
                                    <FontAwesomeIcon
                                        className={cx('action-item__icon')}
                                        icon={item.icon}
                                    />
                                    <div>
                                        <span
                                            className={cx(
                                                'action-item__context',
                                            )}
                                        >
                                            {item.context}
                                        </span>
                                        <span
                                            className={cx('action-item__title')}
                                        >
                                            {item.title}
                                        </span>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className={cx('navigation')}>
                <div className={cx('grid', 'wide')}>
                    <span
                        className={cx('nav-item', 'nav-item--head')}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon
                            className={cx('nav-item__icon')}
                            icon={faBars}
                        />
                        <span className={cx('nav-item__context')}>
                            Danh mục sản phẩm
                        </span>

                        {dropDown && <Menu items={menuCate} top />}
                    </span>

                    {navItems.map((item, index) => (
                        <Button
                            key={index}
                            className={cx('nav-item')}
                            to={item.to}
                        >
                            <span className={cx('nav-item__context')}>
                                {item.name}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
