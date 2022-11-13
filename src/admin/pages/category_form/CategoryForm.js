import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { Button, Title } from '~/components';
import {
    ButtonCustomize,
    Form,
    FormGroup,
    Input,
    UploadImage,
} from '~/admin/components';
import * as services from '~/services/services';

import { context, schema, defaultValues, cx } from './constant';

function CategoryForm() {
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
    const handleOnSubmit = async (data) => {
        Swal.fire({
            title: 'Wating process add category',
            didOpen: async () => {
                Swal.showLoading();
                const result = await services.addCategory({
                    name: data.name,
                    state: 'enable',
                });

                if (result.isSuccess === 'true') {
                    toast.success('Thêm danh mục thành công');
                } else {
                    toast.error('Thêm danh mục thất bại');
                }

                Swal.close();
            },
        });
    };

    return (
        <>
            <Title as='h1'>{id ? context.titleEdit : context.titleAdd}</Title>
            <Button to={'/admin/categories'}>
                {context.backToCategoriesPage}
            </Button>

            <Form onSubmit={handleSubmit(handleOnSubmit)}>
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

                <FormGroup
                    classes={cx('col', 'l-12')}
                    name={'image'}
                    label={context.imageLabel}
                >
                    <Controller
                        name='image'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <UploadImage
                                value={value}
                                onChange={(files) => onChange(files)}
                            />
                        )}
                    />
                </FormGroup>

                <FormGroup classes={cx('col', 'l-12')}>
                    <ButtonCustomize isEdit={true}>
                        {context.addBtn}
                    </ButtonCustomize>
                </FormGroup>
            </Form>
        </>
    );
}

export default CategoryForm;
