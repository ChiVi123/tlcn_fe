export const enumStateOrder = {
    cancel: {
        level: -1,
        state: 'Hủy đơn hàng',
        COD: {
            isPay: 'Chưa thanh toán',
            isCancel: false,
            isDelivery: false,
            isComplete: false,
        },
        PAYPAL: {
            isPay: 'Chưa thanh toán',
            isCancel: false,
            isDelivery: false,
            isComplete: false,
        },
    },
    process: {
        level: 0,
        state: 'Đang tiến hành',
        COD: {
            isPay: 'Chưa thanh toán',
            isCancel: true,
            isDelivery: false,
            isComplete: false,
        },
        PAYPAL: {
            isPay: 'Chưa thanh toán',
            isCancel: true,
            isDelivery: false,
            isComplete: false,
        },
    },
    pendingpay: {
        level: 1,
        state: 'Đã thanh toán và đang xử lý',
        COD: {
            isPay: 'Chưa thanh toán',
            isCancel: true,
            isDelivery: true,
            isComplete: false,
        },
        PAYPAL: {
            isPay: 'Đã thanh toán',
            isCancel: false,
            isDelivery: true,
            isComplete: false,
        },
    },
    pending: {
        level: 2,
        state: 'Đang xử lý',
        COD: {
            isPay: 'Chưa thanh toán',
            isCancel: true,
            isDelivery: true,
            isComplete: false,
        },
        PAYPAL: {
            isPay: 'Đã thanh toán',
            isCancel: false,
            isDelivery: true,
            isComplete: false,
        },
    },
    delivery: {
        level: 3,
        state: 'Đang giao hàng',
        COD: {
            isPay: 'Chưa thanh toán',
            isCancel: true,
            isDelivery: false,
            isComplete: true,
        },
        PAYPAL: {
            isPay: 'Đã thanh toán',
            isCancel: false,
            isDelivery: false,
            isComplete: true,
        },
    },
    complete: {
        level: 4,
        state: 'Giao hàng thành công',
        COD: {
            isPay: 'Đã thanh toán',
            isCancel: false,
            isDelivery: false,
            isComplete: false,
        },
        PAYPAL: {
            isPay: 'Đã thanh toán',
            isCancel: false,
            isDelivery: false,
            isComplete: false,
        },
    },
};
