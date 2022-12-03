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
    Form,
    FormGroup,
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
    defaultValues,
    productValues,
} from './constant';
import { BasicInput } from './components';

// Component
function ProductForm() {
    // Hooks
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const {
        register,
        control,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });
    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: 'options',
    });

    useEffect(() => {
        const fetchApi = async (id) => {
            if (id) {
                const resultProduct = await services.getProduct(id);

                if (resultProduct) {
                    productValues.forEach((item) => {
                        setValue(
                            item.name,
                            resultProduct[item.property] || item.defaultValue,
                        );
                    });

                    resultProduct.options.forEach((item, index) => {
                        insert(index, { value: item.value, stock: item.stock });
                        setValue(`options.${index}.value`, item.value);
                        setValue(`options.${index}.stock`, item.stock);
                    });

                    const newTags = resultProduct?.tags.map((item, index) => ({
                        label: item,
                        value: index,
                    }));

                    setValue('tags', newTags);
                }

                setProduct({
                    ...resultProduct,
                    state: resultProduct?.state || '',
                });
            }
        };

        fetchApi(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Hanlde event
    const handleOnSubmit = async (data) => {
        const newSale = parseFloat(data.sale);
        const newTags = data.tags.map((item) => item.label);
        const newSlugify = slugify(data.name);
        const formData = new FormData();

        data.images.forEach((image) => {
            if (image.preview) {
                formData.append('url', image);
            }
        });

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
            category_id: product.category_id,
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
                            await services.addOptionsProduct(id, item);
                        });

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
                {id ? (
                    product?.id && (
                        <BasicInput
                            product={product}
                            register={register}
                            control={control}
                            fields={fields}
                            append={append}
                            remove={remove}
                            errors={errors}
                        />
                    )
                ) : (
                    <BasicInput
                        product={product}
                        register={register}
                        control={control}
                        fields={fields}
                        append={append}
                        remove={remove}
                        errors={errors}
                    />
                )}

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
                                render={({ field: { onChange } }) => (
                                    <UploadImage
                                        id={id}
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
                            render={({ field: { onChange } }) => (
                                <UploadImage
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
