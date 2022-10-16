export function currencyVN(number) {
    return number.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
    });
}

export function priceSaleVN(priceCurrent, sale) {
    const thousand = 1000;
    if (sale) {
        return (
            priceCurrent -
            Math.round((priceCurrent * sale) / thousand) * thousand
        );
    } else return priceCurrent;
}
