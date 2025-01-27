export const formatCNPJ = (value: string) => {
  const numericValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  return numericValue
    .replace(/^(\d{2})(\d)/, "$1.$2") // Primeiro ponto
    .replace(/^(\d{2}\.\d{3})(\d)/, "$1.$2") // Segundo ponto
    .replace(/^(\d{2}\.\d{3}\.\d{3})(\d)/, "$1/$2") // Barra
    .replace(/^(\d{2}\.\d{3}\.\d{3}\/\d{4})(\d)/, "$1-$2") // Hífen
    .slice(0, 18); // Limita a 18 caracteres
};
