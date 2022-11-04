import classNames from 'classnames/bind';
import * as yup from 'yup';

import styles from './ProductForm.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    titleAdd: 'Add product',
    titleEdit: 'Edit product',
    backToProductsPage: 'Back to products page',
    nameLabel: 'Name ',
    priceLabel: 'Price ',
    saleLabel: 'Sale ',
    categoryLabel: 'Category ',
    optionsLabel: 'Options ',
    tagsLabel: 'Tags ',
    summaryLabel: 'Summary ',
    descriptionLabel: 'Description ',
    imagesLabel: 'Images ',
    addBtn: '+ Add product',
};

export const placeHolder = {
    namePlaceHolder: 'Product name',
    pricePlaceHolder: '0',
    salePlaceHolder: '0',
};

export const schema = yup.object({
    name: yup.string().trim().required(),
    price: yup.number().positive().required(),
    sale: yup.number().positive(),
});
