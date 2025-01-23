export function formatPhoneNumber(input: string) {
  let valor = input.replace(/\D/g, "");

  if (valor.length <= 10) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1)$2-$3");
  } else {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3");
  }

  return valor;
}

export function formatWhatsappNumber(input: string) {
  let valor = input.replace(/\D/g, "");

  if (valor.length <= 11) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3");
  }
  return valor;
}
