import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBasketShopping,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '~/components';
import { imgLogo } from '~/assets/images/logo';
import { pathNames } from '~/routes';
import * as services from '~/services/services';

import {
    cartSelector,
    userSelector,
    categoriesSelector,
    modalActions,
} from '~/redux';

import { cx, actions, navItems, topbarsLeft, context } from './constant';
import Menu from './components/menu/Menu';
import { TopbarRightLogin, TopbarRightLogout } from './components/topbar_right';

function Header() {
    const [dropDown, setDropDown] = useState(false);
    const [totalProduct, setTotalProduct] = useState(0);
    const [inputSearch, setInputSearch] = useState('');

    let TopbarRight = TopbarRightLogout;
    const dispatch = useDispatch();
    const user = useSelector(userSelector.getUser);
    const productQuantity = useSelector(cartSelector.getProductQuantity);
    const categories = useSelector(categoriesSelector.getAllcategory);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.getCartByToken();

            if (result?.message === 'Get cart success') {
                setTotalProduct(result.data.totalProduct);
            }
        };

        fetchApi();
    }, []);

    // Handle event
    // - Handle menu
    const handleMouseEnter = () => setDropDown(true);
    const handleMouseLeave = () => setDropDown(false);
    const handleClickMenu = () => dispatch(modalActions.open());
    // - Handle search
    const handleChangeSearch = ({ target: { value } }) => setInputSearch(value);
    const handleClickSearch = () => {
        navigate({ pathname: pathNames.search, search: `?q=${inputSearch}` });
    };
    const handleKeyDown = ({ key }) => {
        switch (key) {
            case 'Enter':
                navigate({
                    pathname: pathNames.search,
                    search: `?q=${inputSearch}`,
                });
                break;

            default:
                break;
        }
    };

    if (user.email) {
        TopbarRight = TopbarRightLogin;
    }

    return (
        <header className={cx('header')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('topbar')}>
                    <ul className={cx('topbar-section')}>
                        {topbarsLeft.map((item, index) => (
                            <li
                                key={index}
                                className={cx(
                                    'topbar__item',
                                    'topbar__item--icon-only',
                                )}
                            >
                                <Button
                                    reset={true}
                                    to={item.to}
                                    href={item.href}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <TopbarRight
                        topbarSection={cx(
                            'topbar-section',
                            'topbar-section--mobile',
                        )}
                        topbarItem={cx('topbar__item')}
                        btn={cx('btn')}
                    />
                </div>

                <div className={cx('wrapper')}>
                    <div className={cx('wrapper-left')}>
                        <Button
                            className={cx('menu-btn')}
                            onClick={handleClickMenu}
                        >
                            <FontAwesomeIcon
                                className={cx('menu-btn__icon')}
                                icon={faBars}
                            />
                        </Button>

                        <Button
                            reset={true}
                            to={pathNames.home}
                            className={cx('logo')}
                        >
                            <img src={imgLogo} alt='logo' />
                        </Button>

                        <Button
                            to={'/cart'}
                            className={cx('basket-icon-mobile')}
                        >
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={cx('')}
                            />
                            <span>{productQuantity}</span>
                        </Button>
                    </div>

                    <div className={cx('wrapper-right')}>
                        {/* Search */}
                        <div className={cx('wrapper-input')}>
                            <input
                                className={cx('input')}
                                placeholder='Tìm kiếm sản phẩm...'
                                value={inputSearch}
                                onChange={handleChangeSearch}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className={cx('btn-search')}
                                onClick={handleClickSearch}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>

                        {/* Actions */}
                        <div className={cx('wrapper-actions')}>
                            {actions.map((item, index) => (
                                <Button
                                    reset={true}
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
                                            {item.context === 'Sẩn phẩm'
                                                ? `(${totalProduct}) ${item.context}`
                                                : item.context}
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
                            {context.categories}
                        </span>

                        {dropDown && categories && (
                            <Menu items={categories} top />
                        )}
                    </span>

                    {navItems.map((item, index) => (
                        <Button
                            reset={true}
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
