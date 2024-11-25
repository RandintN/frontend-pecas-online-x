export default function convertCentsToBRL(precoEmCentavos: number | string) {
  const precoEmReais = Number(precoEmCentavos) / 100;
  return precoEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
