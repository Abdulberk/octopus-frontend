const formatCurrency = (value: number, locale?: string) => {
    const localeValue = locale || 'en-US';
    const options: Intl.NumberFormatOptions = {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol', 
        minimumFractionDigits: 0,   
        maximumFractionDigits: 0,   
    };
    const numberFormat = new Intl.NumberFormat(localeValue, options);
    return numberFormat.format(value);
}

export default formatCurrency;
