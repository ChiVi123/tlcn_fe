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
    enable: {
        level: 0,
        state: 'Trong giỏ hàng',
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
        level: 1,
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
        level: 2,
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
        level: 3,
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
        level: 4,
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
        level: 5,
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
