import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

// import logger from '~/utils/logger';
import styles from './Slick.module.scss';

const cx = classNames.bind(styles);
// const pathname = 'src/pages/components/slick/Slick';

function Slick({ list, component, nameProp, onClick, large, medium, small }) {
    const [translateX, setTranslateX] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState({
        item: 0,
        listViewPort: 0,
    });
    const itemElement = useRef();
    const listElement = useRef();
    const Component = component;
    const itemCount = list.length;

    useEffect(() => {
        setOffsetWidth((prev) => {
            // const selector = '> Slick > useEffect > setOffsetWidth';
            // logger({
            //     groupName: `${pathname} ${selector}`,
            //     values: [itemElement],
            // });

            const item = itemElement.current?.offsetWidth;
            const list = listElement.current?.offsetWidth;
            const listViewPort = item * itemCount - list;

            return {
                ...prev,
                item,
                listViewPort,
            };
        });
    }, [itemCount, itemElement, listElement]);

    const handlePrevious = () => {
        setTranslateX(translateX + offsetWidth.item);
    };
    const handleNext = () => {
        setTranslateX(translateX - offsetWidth.item);
    };
    const handleClick = ({ item, index }) => {
        if (onClick) {
            onClick({ item, index });
        }
    };

    return (
        <div className={cx('slick')}>
            <button
                className={cx('button', 'button--previous', {
                    'button--disable': translateX === 0,
                })}
                onClick={handlePrevious}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <ul
                ref={listElement}
                style={{
                    transform: `translateX(${translateX}px)`,
                }}
                className={cx('list', 'row', 'row--nowrap')}
            >
                {list.map((item, index) => {
                    let props = {};
                    props[nameProp] = item;

                    return (
                        <li
                            key={index}
                            ref={itemElement}
                            className={cx('item', 'col', {
                                [`l-${large}`]: large,
                                [`m-${medium}`]: medium,
                                [`s-${small}`]: small,
                            })}
                            onClick={() => handleClick({ item, index })}
                        >
                            <Component {...props} />
                        </li>
                    );
                })}
            </ul>

            <button
                className={cx('button', 'button--next', {
                    'button--disable':
                        translateX - offsetWidth.item <
                        -offsetWidth.listViewPort,
                })}
                onClick={handleNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

Slick.propTypes = {
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
};

Slick.defaultProps = {
    large: '2-4',
    medium: '3',
    small: '6',
};

export default Slick;
