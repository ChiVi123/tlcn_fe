import { useEffect, useState } from 'react';

import { imgCloudUpload } from '~/assets/images/statics';
import { cx, context } from './constant';

function UploadImage({ onChange, value = [], isMultiple, colBase }) {
    // Hooks
    // - useState
    const [dragover, setDragOver] = useState(false);
    const [files, setFiles] = useState(value);

    // - useEffect
    useEffect(() => {
        return () => files.map((item) => URL.revokeObjectURL(item.preview));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files]);

    // Handle event
    const handleDragEnter = () => setDragOver(true);
    const handleDragLeave = () => setDragOver(false);
    const handleDrop = () => setDragOver(false);
    const handleOnChange = (event) => {
        const multipleFile = [...event.target.files];

        multipleFile.map((item) => (item.preview = URL.createObjectURL(item)));

        setFiles(multipleFile);

        if (onChange) {
            onChange(multipleFile);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('dropzone', {
                    'dropzone--dragover': dragover,
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

            <ul
                className={cx('images-preview', {
                    'images-preview--empty': !(files.length > 0),
                })}
            >
                <div className={cx('row')}>
                    {files.length > 0 &&
                        files.map((item, index) => (
                            <li
                                key={index}
                                className={cx('image-preview', 'col', colBase)}
                            >
                                <div className={cx('wrapper-image')}>
                                    <img
                                        className={cx('image')}
                                        src={item?.preview || item.url}
                                        alt={item?.name || `image ${index}`}
                                    />
                                </div>
                            </li>
                        ))}
                </div>
            </ul>
        </div>
    );
}

export default UploadImage;
