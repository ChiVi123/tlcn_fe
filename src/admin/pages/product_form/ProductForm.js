import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Title } from '~/components';
import {
    context,
    cx,
    formatsDescription,
    formatsSummary,
    modulesDescription,
    modulesSummary,
    schema,
    defaultValues,
} from './constant';
import {
    ButtonCustomize,
    FormQuill,
    UploadImage,
    FormSelect,
    Input,
    Form,
    FormGroup,
} from '~/admin/components';
import { categories } from '~/utils/constant';

// Component
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
        defaultValues,
    });

    // Hanlde event
    const handleOnSubmit = (data) => console.log(data);

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
                    />
                </FormGroup>

                {/* Category */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'category'}
                    label={context.categoryLabel}
                >
                    <FormSelect
                        name='category'
                        control={control}
                        options={categories}
                        label={'name'}
                        value={'name'}
                    />
                </FormGroup>

                {/* Options */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'options'}
                    label={context.optionsLabel}
                >
                    <Input
                        type={'text'}
                        name='options'
                        register={register}
                        errors={errors}
                    />
                </FormGroup>

                {/* Tags */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'tags'}
                    label={context.tagsLabel}
                >
                    <Input
                        type={'text'}
                        name='tags'
                        register={register}
                        errors={errors}
                    />
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
                    name={'imgs'}
                    label={context.imagesLabel}
                >
                    <Controller
                        name='imgs'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <UploadImage
                                value={value}
                                onChange={(files) => onChange(files)}
                                isMultiple
                            />
                        )}
                    />
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
