// import { faX } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { filesize } from 'filesize';

import { imgCloudUpload } from '~/assets/images/statics';
import { cx, context } from './constant';

function UploadImage({ onChange, value = [], isMultiple }) {
    // Hooks
    // - useState
    const [dragover, setDragOver] = useState(false);
    const [files, setFiles] = useState(value);
    // const [objectFiles, setObjectFiles] = useState({});

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

        // files.map((item) => URL.revokeObjectURL(item.preview));
        multipleFile.map((item) => (item.preview = URL.createObjectURL(item)));

        setFiles(multipleFile);
        // setObjectFiles(event.target.files);

        if (onChange) {
            onChange(multipleFile);
        }
    };
    // const handleDelete = (index) => {
    //     delete objectFiles[index];

    //     setObjectFiles(objectFiles);
    //     setFiles((prev) => {
    //         const newFiles = [...prev];

    //         URL.revokeObjectURL(newFiles[index].preview);
    //         newFiles.splice(index, 1);

    //         return newFiles;
    //     });
    // };

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
                {files.map((item, index) => (
                    <li key={index} className={cx('image-preview')}>
                        <div className={cx('file')}>
                            <div className={cx('file__appearance')}>
                                <img
                                    className={cx('file__image')}
                                    src={item.preview}
                                    alt={item.name}
                                />
                                <div className={cx('file__info')}>
                                    <span className={cx('file__name')}>
                                        {item.name}
                                    </span>
                                    <span className={cx('file__extension')}>
                                        file: {item.name.split('.').pop()}
                                    </span>
                                    <span className={cx('file__size')}>
                                        {filesize(item.size, {
                                            base: 2,
                                            standard: 'jedec',
                                        })}
                                    </span>
                                </div>
                            </div>
                            {/* <span
                                className={cx('delete')}
                                onClick={() => handleDelete(index)}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </span> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UploadImage;
