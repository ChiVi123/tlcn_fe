import { useParams } from 'react-router-dom';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { Button, Title } from '~/components';
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

import {
    context,
    cx,
    formatsDescription,
    formatsSummary,
    modulesDescription,
    modulesSummary,
    schema,
} from './constant';

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
            quantity: 0,
        },
    });
    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: 'options',
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
                setValue('category', resultProduct['category_id'] || '');
                setValue('quantity', resultProduct.quantity);

                resultProduct.options.map((item, index) => {
                    insert(index, { value: item.value, stock: item.stock });
                    setValue(`options.${index}.value`, item.value);
                    setValue(`options.${index}.stock`, item.stock);

                    return 0;
                });

                const newTags = resultProduct?.tags.map((item) => ({
                    value: item,
                    label: item,
                }));

                setValue('tags', newTags.length > 0 ? newTags : []);
                setValue('summary', resultProduct.summary || []);
                setValue('description', resultProduct.description || '');
                setValue('images', resultProduct.images || []);
            }

            setProduct({ ...resultProduct, state: resultProduct?.state || '' });
            setCategories(resultCategories);
        };

        fetchApi(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Hanlde event
    const handleOnSubmit = async (data) => {
        const newSale = parseFloat(data.sale);
        const newTags = data.tags.map((item) => item.value);
        const newSlugify = slugify(data.name);
        const formData = new FormData();

        if (data.images.length > 0) {
            if (!data.images[0]?.url) {
                data.images.forEach((image) => {
                    formData.append('url', image);
                });
            }
        }

        data.options.forEach((option) => {
            option.stock = parseInt(option.stock);
            data.quantity += option.stock;
        });

        const newData = {
            name: data.name,
            slugify: newSlugify,
            price: data.price,
            sale: newSale,
            category: data.category,
            quantity: data.quantity,
            tags: newTags,
            summary: data.summary,
            description: data.description,
            state: product.state,
        };

        if (id) {
            Swal.fire({
                title: 'Chỉnh sửa sản phẩm',
                didOpen: async () => {
                    Swal.showLoading();
                    const result = await services.editProduct(id, newData);
                    if (result.isSuccess === 'true') {
                        data.options.forEach(async (item) => {
                            await services.addOptionsProduct(
                                result.data.id,
                                item,
                            );
                        });
                        if (data.images.length > 0) {
                            if (!data.images[0]?.url) {
                                await services.addImagesProduct(
                                    result.data.id,
                                    formData,
                                );
                            }
                        }
                        toast.success('Chỉnh sửa sản phẩm thành công');
                    } else {
                        toast.error('Chỉnh sửa sản phẩm thất bại');
                    }
                    Swal.close();
                },
            });
        } else {
            Swal.fire({
                title: 'Thêm sản phẩm',
                didOpen: async () => {
                    Swal.showLoading();

                    const result = await services.addProduct(newData);

                    if (result.isSuccess === 'true') {
                        data.options.forEach(async (item) => {
                            await services.addOptionsProduct(
                                result.data.id,
                                item,
                            );
                        });

                        await services.addImagesProduct(
                            result.data.id,
                            formData,
                        );

                        toast.success('Thêm sản phẩm thành công');
                    } else {
                        toast.error('Thêm sản phẩm thất bại');
                    }

                    Swal.close();
                },
            });
        }
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
                    errors={errors}
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
                    {fields.map((item, index) => (
                        <div key={item.id} className={cx('row')}>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('row')}>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.${index}.value`}
                                        label={`Tùy chọn ${index}`}
                                    >
                                        <Input
                                            type={'text'}
                                            name={`options.${index}.value`}
                                            register={register}
                                            errors={errors}
                                            placeholder={'Type label'}
                                        />
                                    </FormGroup>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.${index}.stock`}
                                    >
                                        <Input
                                            type={'number'}
                                            name={`options.${index}.stock`}
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

                    {fields.length === 0 && (
                        <div className={cx('row')}>
                            <FormGroup
                                classes={cx('col', 'l-8')}
                                name={`quantity`}
                                label={'Quantity'}
                            >
                                <Input
                                    type={'number'}
                                    name={`quantity`}
                                    register={register}
                                    errors={errors}
                                    placeholder={'Type quantity'}
                                />
                            </FormGroup>
                        </div>
                    )}
                </div>

                {/* Tags */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'tags'}
                    label={context.tagsLabel}
                    errors={errors}
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
                    errors={errors}
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
                    errors={errors}
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
                    errors={errors}
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
                                        colBase={'l-3'}
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
                                    colBase={'l-3'}
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
                        {id ? context.titleEdit : context.addBtn}
                    </ButtonCustomize>
                </div>
            </Form>
        </>
    );
}

export default ProductForm;
