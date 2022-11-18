import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Button, Title } from '~/components';
import * as services from '~/services/services';

import { context, cx } from './constant';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.getCategories();
            setCategories(result);
        };

        fetchApi();
    }, []);
    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/category-form'}>{context.addButton}</Button>

            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>{context.imageCol}</th>
                        <th>{context.nameCol}</th>
                        <th>{context.stateCol}</th>
                        <th>{context.actionsCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 &&
                        categories.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item['categoryimage'] && (
                                        <img
                                            className={cx('image-category')}
                                            src={item['categoryimage']}
                                            alt={item.name}
                                        />
                                    )}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.state}</td>
                                <td>
                                    <Button
                                        solid={true}
                                        className={cx('btn', 'btn--delete')}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default Categories;
