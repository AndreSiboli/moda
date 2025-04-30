export function formatToDecimal(value: number, num: number) {
  return value.toFixed(num);
}

export function formatPhone(e: string) {
  let value = e.replace(/\D/g, "");
  if (value.length > 10) value = value.slice(0, 10);

  let formatted = "";
  if (value.length > 0) formatted += "(" + value.slice(0, 3);
  if (value.length >= 4) formatted += ") " + value.slice(3, 6);
  if (value.length >= 7) formatted += "-" + value.slice(6);

  return formatted
}
