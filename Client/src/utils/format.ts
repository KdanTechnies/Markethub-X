export function formatCurrency(amount: number, currency: string, locale = "en-NG"): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}

export function formatDate(value: string | Date, locale = "en-NG"): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "Date unavailable";
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
}

export function getSafeErrorMessage(error: unknown, fallback = "Something went wrong. Please try again.") {
  if (error instanceof Error && !/axios|network|request failed/i.test(error.message)) {
    return error.message;
  }
  return fallback;
}
