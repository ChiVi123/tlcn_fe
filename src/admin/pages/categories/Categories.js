import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Button, Title } from '~/components';
import { categories } from '~/utils/constant';

import { context, cx } from './constant';

function Categories() {
    return (
        <>
            <Title as='h1'>{context.title}</Title>
            <Button to={'/admin/category-form'}>{context.addButton}</Button>

            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>{context.imageCol}</th>
                        <th>{context.nameCol}</th>
                        <th>{context.actionsCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img
                                    className={cx('image-category')}
                                    src={item.image}
                                    alt={item.name}
                                />
                            </td>
                            <td>{item.name}</td>
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
