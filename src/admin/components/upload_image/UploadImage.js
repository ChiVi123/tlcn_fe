import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faXmark, faImage } from '@fortawesome/free-solid-svg-icons';

import { imgCloudUpload } from '~/assets/images/statics';
import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';

import { cx, context } from './constant';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Title } from '~/components';

function UploadImage({ id, onChange, value = [], isMultiple, colBase }) {
    // Hooks
    // - useState
    const [dragover, setDragOver] = useState(false);
    const [files, setFiles] = useState(value);
    const [filesAddition, setFilesAddition] = useState([]);
    // constant
    const navigate = useNavigate();
    // - useEffect
    useEffect(() => {
        return () =>
            filesAddition.forEach((item) => {
                URL.revokeObjectURL(item.preview);
            });
    }, [filesAddition]);

    // Handle event
    const handleDragEnter = () => setDragOver(true);
    const handleDragLeave = () => setDragOver(false);
    const handleDrop = () => setDragOver(false);
    const handleOnChange = ({ target: { files } }) => {
        const multipleFile = [...files];

        multipleFile.map((item) => (item.preview = URL.createObjectURL(item)));

        setFilesAddition(multipleFile);

        if (onChange) {
            onChange(multipleFile);
        }
    };
    const handleAddImages = (event) => {
        event.preventDefault();
        const formData = new FormData();

        filesAddition.forEach((item) => {
            if (item.preview) {
                formData.append('url', item);
            }
        });

        Swal.fire({
            title: 'Thêm ảnh',
            didOpen: async () => {
                Swal.showLoading();
                const result = await services.addImagesProduct(id, formData);

                console.log(result);

                if (result.isSuccess === 'true') {
                    toast.success('Thêm ảnh thành công');
                    setFiles(result.data);
                    setFilesAddition([]);
                } else {
                    toast.error('Thêm ảnh thất bại');
                }

                Swal.close();
            },
        });
    };
    const handleDeleteImage = ({ id_image }) => {
        Swal.fire({
            title: 'Xóa ảnh',
            didOpen: async () => {
                Swal.showLoading();
                const result = await services.deleteImageProduct(id, id_image);

                if (result.isSuccess === 'true') {
                    toast.success('Xóa ảnh thành công');
                } else {
                    toast.error('Xóa ảnh thất bại');
                }

                navigate(0);
                Swal.close();
            },
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('dropzone', {
                    'dropzone--dragover': dragover,
                    'dropzone--single': !isMultiple,
                })}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img
                    src={imgCloudUpload}
                    alt='upload'
                    className={cx('upload-img')}
                />
                <input
                    type='file'
                    title=''
                    multiple={isMultiple}
                    className={cx('input-img')}
                    onChange={handleOnChange}
                />
                <span className={cx('topic')}>{context.dragNDrop}</span>
            </div>

            <div
                className={cx('images-preview', {
                    'images-preview--empty': !files.length,
                    'images-preview--single': !isMultiple,
                })}
            >
                {!!files.length && <Title as='h2'>Ảnh cũ</Title>}
                <ul className={cx('row')}>
                    {!!files.length &&
                        files.map((item, index) => (
                            <li
                                key={index}
                                className={cx('image-preview', 'col', colBase)}
                            >
                                <div
                                    className={cx('wrapper-image', {
                                        'wrapper-image--single': !isMultiple,
                                    })}
                                >
                                    <img
                                        className={cx('image')}
                                        src={item?.url || item}
                                        alt={item?.name || `response-${index}`}
                                    />
                                </div>
                                {isMultiple && (
                                    <ButtonCustomize
                                        isDelete={true}
                                        fullWidth
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleDeleteImage(item);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </ButtonCustomize>
                                )}
                            </li>
                        ))}
                </ul>
            </div>

            <div
                className={cx('images-preview', {
                    'images-preview--empty': !filesAddition.length,
                    'images-preview--single': !isMultiple,
                })}
            >
                {!!filesAddition.length && <Title as='h2'>Ảnh mới</Title>}
                <ul className={cx('row')}>
                    {filesAddition.map((item, index) => (
                        <li
                            key={index}
                            className={cx('image-preview', 'col', colBase)}
                        >
                            <div
                                className={cx('wrapper-image', {
                                    'wrapper-image--single': !isMultiple,
                                })}
                            >
                                <img
                                    className={cx('image')}
                                    src={item.preview}
                                    alt={`upload-${index}`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {id && (
                <div
                    style={{
                        width: '80rem',
                        margin: '0 auto',
                        padding: '0 1rem',
                    }}
                >
                    {!!filesAddition.length && (
                        <ButtonCustomize
                            isEdit={true}
                            fullWidth
                            onClick={handleAddImages}
                        >
                            <FontAwesomeIcon icon={faImage} />
                        </ButtonCustomize>
                    )}
                </div>
            )}
        </div>
    );
}

export default UploadImage;
