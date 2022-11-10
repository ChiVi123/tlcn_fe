import classNames from 'classnames/bind';
import * as yup from 'yup';

export const cx = classNames.bind();

export const context = {
    titleAdd: 'Add category',
    titleEdit: 'Edit category',
    backToCategoriesPage: 'Back to categories page',
    nameLabel: 'Name ',
    imageLabel: 'Image ',
    addBtn: '+ Add category',
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
