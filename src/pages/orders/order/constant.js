import classNames from 'classnames/bind';
import styles from './Order.module.scss';

export const cx = classNames.bind(styles);
export const context = {
    summaryItems: (items) => {
        if (items.length > 1) {
            return `${items[0].name} ...và ${items.length - 1} sản phẩm khác.`;
        } else {
            return `${items[0].name}.`;
        }
    },
    dataAddress: ({ shipAddress, shipProvince, shipDistrict, shipWard }) => {
        return `${shipAddress}, ${shipProvince}, ${shipDistrict}, ${shipWard}`;
    },
};
