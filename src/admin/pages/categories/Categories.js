import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { Button, Title } from '~/components';
import { categoryServices } from '~/services';

import { context, cx } from './constant';

const updateStateCategory = ({ id, name, state }, fetchApi) => {
    Swal.fire({
        title: 'Thay đổi trạng thái',
        didOpen: async () => {
            Swal.showLoading();
            const result = await categoryServices.updateCategory(id, {
                name,
                state,
            });
            const expectMessage = 'update category success ';
            const toastSucssess = 'Thay đổi trạng thái thành công';
            const toastError = 'Thay đổi trạng thái thất bại';

            if (result.message === expectMessage) {
                toast.success(toastSucssess);
            } else {
                toast.error(toastError);
            }

            fetchApi();
            Swal.close();
        },
    });
};

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchApi = async () => {
        const result = await categoryServices.getCategoriesRoleAdmin();
        setCategories(result);
    };

    const handleState = (category) => {
        Swal.fire({
            title: 'Chọn trạng thái cho danh mục sản phẩm',
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
            confirmButtonText: 'Xác nhận',
            showCancelButton: true,
            cancelButtonText: 'Hủy',
        }).then(async ({ isConfirmed, value }) => {
            if (isConfirmed) {
                updateStateCategory({ ...category, state: value }, fetchApi);
            }
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
