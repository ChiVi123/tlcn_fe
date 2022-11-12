// import
import classNames from 'classnames/bind';
import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import * as yup from 'yup';

Quill.register('modules/imageResize', ImageResize);

// Export
export const cx = classNames.bind();

export const context = {
    titleAdd: 'Thêm sản phẩm',
    titleEdit: 'Chỉnh sửa sản phẩm',
    backToProductsPage: 'Quay về trang danh sách sản phẩm',
    nameLabel: 'Tên ',
    priceLabel: 'Giá ',
    saleLabel: 'Giảm giá ',
    categoryLabel: 'Danh mục ',
    optionsLabel: 'Mục lụa chọn ',
    tagsLabel: 'Tags ',
    summaryLabel: 'Summary ',
    descriptionLabel: 'Mô tả ',
    imagesLabel: 'Chọn ảnh ',
    addBtn: '+ Thêm sản phẩm',
    addOptionBtn: '+ Thêm mục lụa chọn',
    deleteOptionBtn: 'Xóa mục lựa chọn',
};

export const placeholder = {
    namePlaceHolder: 'Nhập tên sản phẩm',
    pricePlaceHolder: '0',
    salePlaceHolder: '0',
};

export const schema = yup.object({
    name: yup.string().trim().required(),
    price: yup
        .number()
        .typeError('Must be a number')
        .positive()
        .required('Must be required')
        .min(500, 'To little'),
    sale: yup.number().typeError('Must be a number').min(0, 'To little'),
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
    'align',
];

export const modulesDescription = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [
            { align: '' },
            { align: 'center' },
            { align: 'right' },
            { align: 'justify' },
        ],
        ['link', 'image', { color: [] }],
    ],
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
    },
};

export const formatsSummary = ['list', 'imageBlot'];

export const modulesSummary = {
    toolbar: [[{ list: 'orderd' }, { list: 'bullet' }]],
};
