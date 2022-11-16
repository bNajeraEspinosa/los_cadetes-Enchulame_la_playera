// format to MXN currency

const currencies = {
  mxn: {
    locale: "es-MX",
    currency: "MXN",
    style: "currency",
  },
};

/**
 * currency formatter mxn param
 * @param {{amount: number, format: "mxn"}} param0
 * @returns string
 */
export const formatCurrency = ({ amount, format }) => {
  const currency = currencies[format];
  if (!currency) return;
  const { locale, currency: currencyCode, style } = currency;

  return new Intl.NumberFormat(locale, {
    style,
    currency: currencyCode,
  }).format(amount);
};
