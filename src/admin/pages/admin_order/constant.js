import classNames from 'classnames/bind';
import styles from './AdminOrder.module.scss';

export const cx = classNames.bind(styles);

export const context = {
    title: 'Chi tiết hóa đơn',
    backToPage: 'Về trang danh sách hóa đơn',
    userName: 'Tên người dùng: ',
    status: 'Tình trạng thanh toán: ',
    methodPay: 'Phương thức thanh toán: ',
    address: ({ shipAddress, shipProvince, shipDistrict, shipWard }) => {
        return `Địa chỉ: ${shipAddress}, ${shipProvince}, ${shipDistrict}, ${shipWard}`;
    },
    tempResult: 'Tạm tính',
    feeShipping: 'Phí vận chuyển',
    feeShippingValue: 'Miễn phí',
    total: 'Tổng tiền',
    listProduct: 'Các sản phẩm trong đơn hàng',
};
