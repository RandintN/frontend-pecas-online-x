export const formatCEP = (value: string) => {
  const numericValue = value.replace(/\D/g, "");

  return numericValue.replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
};
