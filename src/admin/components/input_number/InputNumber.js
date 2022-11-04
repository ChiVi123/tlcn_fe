import { cx } from './constant';

function InputNumber({ classes, register, name, placeHolder, ...props }) {
    const classNames = cx('input-number', {
        [classes]: classes,
    });

    return (
        <input
            type={'number'}
            inputMode={'numeric'}
            className={classNames}
            placeholder={placeHolder}
            {...register(name)}
            {...props}
        />
    );
}

export default InputNumber;
