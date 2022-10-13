export function currencyVN(number) {
    return number.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    });
}
