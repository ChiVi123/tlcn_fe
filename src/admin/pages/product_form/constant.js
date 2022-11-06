import classNames from 'classnames/bind';
import * as yup from 'yup';

// Export
export const cx = classNames.bind();

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

export const defaultValues = {
    name: '',
    price: 0,
    sale: 0,
    summary: '',
    description: '',
    category: '',
    imgs: [],
};

export const formatsDescription = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'imageBlot', // #5 Optinal if using custom formats
];

export const modulesDescription = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image', { color: [] }],
    ],
};

export const formatsSummary = ['list', 'imageBlot'];

export const modulesSummary = {
    toolbar: [[{ list: 'orderd' }, { list: 'bullet' }]],
};
