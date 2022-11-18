import classNames from 'classnames/bind';
import * as yup from 'yup';

export const cx = classNames.bind();

export const context = {
    titleAdd: 'Thêm mục sản phẩm',
    titleEdit: 'Chỉnh sửa mục sản phẩm',
    backToCategoriesPage: 'Trở về trang danh mục sản phẩm',
    nameLabel: 'Tên danh mục ',
    imageLabel: 'Hình ảnh ',
    addBtn: '+ Thêm mục sản phẩm',
};

export const placeholder = {
    namePlaceHolder: 'Category name',
};

export const schema = yup.object({
    name: yup.string().trim().required(),
});

export const defaultValues = {
    name: '',
    image: [],
};
