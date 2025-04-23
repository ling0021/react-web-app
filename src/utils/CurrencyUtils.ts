class CurrencyUtils {
  static formatCurrency(value: number, currency: string): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(value);
  }

  static parseCurrency(value: string): number {
    return parseFloat(value.replace(/[^0-9.-]+/g, ""));
  }
}
export default CurrencyUtils;
