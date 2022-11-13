import { useParams } from 'react-router-dom';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import slugify from 'slugify';
import Swal from 'sweetalert2';

import { Button, Title } from '~/components';
import {
    context,
    cx,
    formatsDescription,
    formatsSummary,
    modulesDescription,
    modulesSummary,
    schema,
} from './constant';
import {
    ButtonCustomize,
    FormQuill,
    UploadImage,
    FormSelect,
    Input,
    Form,
    FormGroup,
    FormCreatable,
} from '~/admin/components';
import * as services from '~/services/services';
import { toast } from 'react-toastify';

// Component
function ProductForm() {
    // Hooks
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);
    const { id } = useParams();

    const {
        register,
        control,
        setValue,
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
        },
    });
    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: 'options.selects',
    });

    useEffect(() => {
        const fetchApi = async (id) => {
            let resultProduct;

            if (id) {
                resultProduct = await services.getProduct(id);
            }
            const resultCategories = await services.getCategories();

            if (resultProduct) {
                setValue('name', resultProduct.name || '');
                setValue('price', resultProduct.price || 0);
                setValue('sale', resultProduct.sale || 0);
                setValue('category', resultProduct.category || '');
                setValue('options.name', resultProduct.options[0]?.name || '');

                resultProduct.options[0]?.selects.map((item, index) => {
                    insert(index, { value: item.value, stock: item.stock });
                    setValue(`options.selects.${index}.value`, item.value);
                    setValue(`options.selects.${index}.stock`, item.stock);

                    return 0;
                });

                setValue('tags', resultProduct.tags || []);
                setValue('summary', resultProduct.summary || []);
                setValue('description', resultProduct.description || '');
                setValue('images', resultProduct.images || []);
            }
            setProduct(resultProduct);
            setCategories(resultCategories);
        };

        fetchApi(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Hanlde event
    const handleOnSubmit = async (data) => {
        const {
            options: { selects },
        } = data;
        const newSale = parseFloat(data.sale);
        const newTags = data.tags.map((item) => item.value);
        const newSlugify = slugify(data.name);
        const formData = new FormData();
        const formDataOption = new FormData();

        formData.append('name', data.name);
        formData.append('slugify', newSlugify);
        formData.append('price', data.price);
        formData.append('sale', newSale);
        formData.append('category', data.category);
        formData.append('tags', newTags);
        formData.append('summary', data.summary);
        formData.append('description', data.description);
        formDataOption.append('name', data.options);

        data.images.forEach((image) => {
            formData.append('images', image);
        });

        Swal.fire({
            title: 'Wating process add product',
            didOpen: async () => {
                Swal.showLoading();
                const result = await services.addProduct(formData);
                // selects.forEach(async (item) => {
                //     formDataOption.append('value', item.value);
                //     formDataOption.append('stock', parseInt(item.stock));

                //     const resultOption = await services.addOptionsProduct(
                //         formDataOption,
                //         result.data.id,
                //     );

                //     if(resultOption.isSuccess === 'true') {
                //         formDataOption.delete('value');
                //         formDataOption.delete('stock');
                //     } else {

                //     };

                // });

                formDataOption.append('value', selects[0].value);
                formDataOption.append('stock', parseInt(selects[0].stock));

                const resultOption = await services.addOptionsProduct(
                    formDataOption,
                    result.data.id,
                );

                // resultOption.isSuccess === 'true'
                if (result.isSuccess === 'true') {
                    toast.success('Thêm sản phẩm thành công');
                } else {
                    toast.error('Thêm sản phẩm thất bại');
                }

                Swal.close();
            },
        });
    };

    return (
        <>
            <Title as='h1'>{id ? context.titleEdit : context.titleAdd}</Title>
            <Button to={'/admin/products'}>{context.backToProductsPage}</Button>

            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                {/* Product name */}
                <FormGroup
                    classes={cx('col', 'l-12')}
                    name={'name'}
                    label={context.nameLabel}
                    errors={errors}
                    isRequired
                >
                    <Input
                        type={'text'}
                        name='name'
                        register={register}
                        errors={errors}
                    />
                </FormGroup>

                {/* Price */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'price'}
                    label={context.priceLabel}
                    errors={errors}
                    isRequired
                >
                    <Input
                        type={'number'}
                        name='price'
                        register={register}
                        errors={errors}
                    />
                </FormGroup>

                {/* Sale */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'sale'}
                    label={context.saleLabel}
                    errors={errors}
                    isRequired
                >
                    <Input
                        type={'number'}
                        name='sale'
                        register={register}
                        errors={errors}
                        step={0.01}
                        min={0}
                        max={1}
                    />
                </FormGroup>

                {/* Category */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'category'}
                    label={context.categoryLabel}
                >
                    {id ? (
                        product?.category && (
                            <FormSelect
                                name='category'
                                control={control}
                                options={categories}
                                label={'name'}
                                value={'id'}
                                defaultValue={product.category}
                            />
                        )
                    ) : (
                        <FormSelect
                            name='category'
                            control={control}
                            options={categories}
                            label={'name'}
                            value={'id'}
                        />
                    )}
                </FormGroup>

                {/* Options */}
                <div className={cx('col', 'l-8')}>
                    <div className={cx('row')}>
                        <FormGroup
                            classes={cx('col', 'l-8')}
                            name={`options.name`}
                            label={'Option'}
                        >
                            {fields.length > 0 && (
                                <Input
                                    type={'text'}
                                    name={`options.name`}
                                    register={register}
                                    errors={errors}
                                    placeholder={'Type option name'}
                                />
                            )}
                        </FormGroup>
                    </div>
                    {fields.map((item, index) => (
                        <div key={item.id} className={cx('row')}>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('row')}>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.selects.${index}.value`}
                                        label={`Select ${index}`}
                                    >
                                        <Input
                                            type={'text'}
                                            name={`options.selects.${index}.value`}
                                            register={register}
                                            errors={errors}
                                            placeholder={'Type label'}
                                        />
                                    </FormGroup>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.selects.${index}.stock`}
                                    >
                                        <Input
                                            type={'number'}
                                            name={`options.selects.${index}.stock`}
                                            register={register}
                                            errors={errors}
                                            placeholder={'Type stock'}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div
                                className={cx('col', 'l-6')}
                                style={{
                                    alignSelf: 'flex-end',
                                    marginBottom: '1.2rem',
                                }}
                            >
                                <ButtonCustomize
                                    isDelete={true}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        remove(index);
                                    }}
                                >
                                    {context.deleteOptionBtn}
                                </ButtonCustomize>
                            </div>
                        </div>
                    ))}
                    <ButtonCustomize
                        isEdit={true}
                        onClick={(event) => {
                            event.preventDefault();
                            append({ value: 'name', stock: 1 });
                        }}
                    >
                        {context.addOptionBtn}
                    </ButtonCustomize>

                    <div className={cx('row')}>
                        <FormGroup
                            classes={cx('col', 'l-8')}
                            name={`quantity`}
                            label={'Quantity'}
                        >
                            {fields.length === 0 && (
                                <Input
                                    type={'number'}
                                    name={`quantity`}
                                    register={register}
                                    errors={errors}
                                    placeholder={'Type quantity'}
                                />
                            )}
                        </FormGroup>
                    </div>
                </div>

                {/* Tags */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'tags'}
                    label={context.tagsLabel}
                >
                    {id ? (
                        product?.tags && (
                            <FormCreatable
                                name={'tags'}
                                control={control}
                                placeholder={'Nhập các tag'}
                                defaultValue={product.tags}
                            />
                        )
                    ) : (
                        <FormCreatable
                            name={'tags'}
                            control={control}
                            placeholder={'Nhập các tag'}
                        />
                    )}
                </FormGroup>

                {/* Summary */}
                <FormGroup
                    classes={cx('col', 'l-12')}
                    name={'summary'}
                    label={context.summaryLabel}
                >
                    <FormQuill
                        name='summary'
                        control={control}
                        formats={formatsSummary}
                        modules={modulesSummary}
                    />
                </FormGroup>

                {/* Description */}
                <FormGroup
                    classes={cx('col', 'l-12')}
                    name={'description'}
                    label={context.descriptionLabel}
                >
                    <FormQuill
                        name='description'
                        control={control}
                        formats={formatsDescription}
                        modules={modulesDescription}
                    />
                </FormGroup>

                {/* Images */}
                <FormGroup
                    classes={cx('col', 'l-12')}
                    name={'images'}
                    label={context.imagesLabel}
                >
                    {id ? (
                        product.images && (
                            <Controller
                                name='images'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <UploadImage
                                        value={product.images}
                                        onChange={(files) => onChange(files)}
                                        isMultiple
                                    />
                                )}
                            />
                        )
                    ) : (
                        <Controller
                            name='images'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <UploadImage
                                    value={value}
                                    onChange={(files) => onChange(files)}
                                    isMultiple
                                />
                            )}
                        />
                    )}
                </FormGroup>

                <div
                    className={cx('col', 'l-12')}
                    style={{ marginTop: '1.4rem' }}
                >
                    <ButtonCustomize isEdit={true}>
                        {context.addBtn}
                    </ButtonCustomize>
                </div>
            </Form>
        </>
    );
}

export default ProductForm;
