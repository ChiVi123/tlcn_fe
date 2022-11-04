import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Select, { components } from 'react-select';

import { Button, Title } from '~/components';
import { context, cx, schema } from './constant';
import { ButtonCustomize, InputNumber, UploadImage } from '~/admin/components';
import { categories } from '~/utils/constant';

function ProductForm() {
    // Hooks
    const { id } = useParams();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            price: 0,
            sale: 0,
            summary: '',
            description: '',
            category: '',
            imgs: [],
        },
    });

    const formatsDescription = [
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
    const formatsSummary = ['list', 'imageBlot'];
    const modulesDescription = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image', { color: [] }],
        ],
    };
    const modulesSummary = {
        toolbar: [[{ list: 'orderd' }, { list: 'bullet' }]],
    };

    // Hanlde event
    const handleOnSubmit = (data) => console.log(data);

    // Componens Select
    const SelectCategories = ({ children, ...props }) => {
        const { data } = props;
        props.value = data.name;

        return <components.Control {...props}>{data.name}</components.Control>;
    };

    return (
        <>
            <Title as='h1'>{id ? context.titleEdit : context.titleAdd}</Title>
            <Button to={'/admin/products'}>{context.backToProductsPage}</Button>

            <form
                onSubmit={handleSubmit(handleOnSubmit)}
                className={cx('form')}
            >
                <div className={cx('row')}>
                    {/* Name */}
                    <div className={cx('col', 'l-12')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.nameLabel}
                                <span>*</span>
                            </label>
                            <input
                                type='text'
                                className={cx('input-text', {
                                    'invalid-input': !!errors.name?.message,
                                })}
                                {...register('name')}
                            />
                        </div>
                        <span className={cx('invalid-message')}>
                            {errors.name?.message}
                        </span>
                    </div>

                    {/* Price */}
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.priceLabel}
                                <span>*</span>
                            </label>
                            <InputNumber
                                classes={cx('input-text', {
                                    'invalid-input': !!errors.price?.message,
                                })}
                                register={register}
                                name={'price'}
                            />
                            <span className={cx('invalid-message')}>
                                {errors.price?.message}
                            </span>
                        </div>
                    </div>

                    {/* Sale */}
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.saleLabel}
                            </label>
                            <InputNumber
                                classes={cx('input-text', {
                                    'invalid-input': !!errors.sale?.message,
                                })}
                                register={register}
                                name={'sale'}
                            />
                            <span className={cx('invalid-message')}>
                                {errors.sale?.message}
                            </span>
                        </div>
                    </div>

                    {/* Category */}
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.categoryLabel}
                            </label>
                            <Controller
                                name='category'
                                control={control}
                                render={({ field: { onChange } }) => (
                                    <Select
                                        options={categories}
                                        components={{
                                            Option: SelectCategories,
                                        }}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(option) =>
                                            onChange(option.name)
                                        }
                                    />
                                )}
                            />
                        </div>
                    </div>

                    {/* Options */}
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.optionsLabel}
                            </label>
                            <input type='text' className={cx('input-text')} />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className={cx('col', 'l-4')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.tagsLabel}
                            </label>
                            <input type='text' className={cx('input-text')} />
                        </div>
                    </div>

                    {/* Summary */}
                    <div className={cx('col', 'l-12')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.summaryLabel}
                            </label>
                            <Controller
                                name='summary'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <ReactQuill
                                        theme='snow'
                                        value={value}
                                        onChange={(value) => onChange(value)}
                                        formats={formatsSummary}
                                        modules={modulesSummary}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className={cx('col', 'l-12')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.descriptionLabel}
                            </label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <ReactQuill
                                        theme='snow'
                                        value={value}
                                        onChange={(value) => onChange(value)}
                                        formats={formatsDescription}
                                        modules={modulesDescription}
                                    />
                                )}
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className={cx('col', 'l-12')}>
                        <div className={cx('group')}>
                            <label htmlFor='' className={cx('label-input')}>
                                {context.imagesLabel}
                            </label>
                            <Controller
                                name='imgs'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <UploadImage
                                        value={value}
                                        onChange={(files) => onChange(files)}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    {/* End form */}
                </div>

                <br style={{ marginBottom: '1rem' }} />

                <ButtonCustomize isEdit={true}>
                    {context.addBtn}
                </ButtonCustomize>
            </form>
        </>
    );
}

export default ProductForm;
