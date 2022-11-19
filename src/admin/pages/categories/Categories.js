import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen } from '@fortawesome/free-solid-svg-icons';

import { Button, Title } from '~/components';
import * as services from '~/services/services';

import { context, cx } from './constant';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchApi = async () => {
        const result = await services.getCategoriesRoleAdmin();
        setCategories(result);
    };

    const handleState = (category) => {
        Swal.fire({
            title: 'Chọn trạng thái cho category',
            input: 'radio',
            inputOptions: {
                enable: 'Enable',
                disable: 'Disable',
            },
            inputValue: category.state,
            inputValidator: (value) => {
                if (!value) {
                    return 'Bạn cần chọn trạng thái cho sản phẩm!';
                }
            },
        }).then(async ({ value }) => {
            Swal.fire({
                title: 'Tiến hành thay đổi trạng thái',
                didOpen: async () => {
                    Swal.showLoading();

                    const result = await services.updateCategory(category.id, {
                        name: category.name,
                        state: value,
                    });

                    if (result.message === 'update category success ') {
                        toast.success('Thay đổi trạng thái thành công');
                        fetchApi();
                    } else {
                        toast.error('Thay đổi trạng thái thất bại');
                        fetchApi();
                    }

                    Swal.close();
                },
            });
        });
    };

    useEffect(() => {
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
                                        to={`/admin/category-form/${item.id}`}
                                        solid={true}
                                        className={cx('btn', 'btn--edit')}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </Button>
                                    <Button
                                        solid={true}
                                        className={cx('btn', 'btn--check')}
                                        onClick={() => handleState(item)}
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck} />
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
