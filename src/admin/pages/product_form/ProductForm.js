import { useParams } from 'react-router-dom';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
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
    FormCreatable,
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
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'options',
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
                <div className={cx('col', 'l-8')}>
                    {fields.map((item, index) => (
                        <div key={item.id} className={cx('row')}>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('row')}>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.${index}.name`}
                                        label={`Mục ${index}`}
                                    >
                                        <Input
                                            type={'text'}
                                            name={`options.${index}.name`}
                                            register={register}
                                            errors={errors}
                                            placeholder={
                                                'Nhập tên mục lụa chọn'
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup
                                        classes={cx('col', 'l-12')}
                                        name={`options.${index}.selects`}
                                    >
                                        <FormCreatable
                                            name={`options.${index}.selects`}
                                            control={control}
                                            placeholder={'Nhập mục lựa chọn'}
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
                            append({});
                        }}
                    >
                        {context.addOptionBtn}
                    </ButtonCustomize>
                </div>

                {/* Tags */}
                <FormGroup
                    classes={cx('col', 'l-4')}
                    name={'tags'}
                    label={context.tagsLabel}
                >
                    <FormCreatable
                        name={`tags`}
                        control={control}
                        placeholder={'Nhập các tag'}
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
