import { FormData } from "@/interfaces/FormData";

export function convertStateToPayload(state: FormData) {
  return {
    empresa: state.empresa,
    linkFornecedorOriginal: "",
    razaoSocial: state.razaoSocial,
    cnpj: state.cnpj,
    inscricao: state.inscricaoEstadual,
    idDescricao: +state.idDescricao,
    idMarca: +state.idMarca,
    idPlano: +state.idPlano,
    assinatura: {
      diaPagamento: 15,
      idPlano: +state.idPlano,
      bigBannerUrl: state.bannerGrande,
      smallBannerUrl: state.bannerPequeno,
    },
    contato: {
      vendedores: state.vendedores,
      emailPecas: state.email,
      emailEstoque: state.email,
      emailContasPagar: state.email,
      emailNotaFiscal: state.email,
      fonePecas: state.telefone,
      whatsappGeral: state.whatsapp,
      whatsappPecas: state.whatsapp,
      website: state.website,
    },
    endereco: {
      endereco: state.endereco,
      cidade: state.cidade,
      cep: state.cep,
      estado: state.estado,
      pais: "Brasil",
      idEstado: +state.estado,
    },
  };
}
