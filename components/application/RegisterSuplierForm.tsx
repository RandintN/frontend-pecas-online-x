"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STATES } from "@/utils/States";
import { Plano } from "@/interfaces/Plano";
import { FormData, INITIAL_STATE } from "@/interfaces/FormData";
import convertCentsToBRL from "@/utils/convertCentsToBRL";
import { convertStateToPayload } from "@/utils/convertStateToPayload";
import { useRouter } from "next/navigation";
import InputMask from "react-input-mask";

//valid cnpj: 15826705000130

export default function RegisterSuplierForm() {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [afterSubmitMessage, setAfterSubmitMessage] = useState("");

  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/planos`)
      .then((response) => response.json())
      .then((data) => {
        setPlanos(data);
      });
  }, []);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.empresa)
      newErrors.empresa = "O nome da empresa é obrigatório";
    if (!formData.razaoSocial)
      newErrors.razaoSocial = "A razão social da empresa é obrigatória";
    if (!formData.cnpj) newErrors.cnpj = "O CNPJ do fornecedor é obrigatório";
    if (!formData.inscricaoEstadual)
      newErrors.inscricao = "A inscrição estadual é obrigatória";
    if (!formData.idMarca)
      newErrors.idMarca = "O ID da marca do fornecedor é obrigatório";
    if (!formData.endereco)
      newErrors.endereco = "O endereço do fornecedor é obrigatório";
    if (!formData.idDescricao)
      newErrors.idDescricao = "O ID da descrição é obrigatório";
    if (!formData.telefone)
      newErrors.telefone = "O telefone do fornecedor é obrigatório";
    if (!formData.whatsapp)
      newErrors.whatsapp = "O whatsapp do fornecedor é obrigatório";
    if (!formData.email)
      newErrors.email = "O email do fornecedor é obrigatório";
    if (!formData.idPlano)
      newErrors.idPlano = "O plano do fornecedor é obrigatório";
    if (!formData.cidade)
      newErrors.cidade = "A cidade do fornecedor é obrigatório";
    if (!formData.estado)
      newErrors.estado = "O estado do fornecedor é obrigatório";
    if (!formData.cep) newErrors.cep = "O CEP do fornecedor é obrigatório";
    if (!formData.bairro)
      newErrors.bairro = "O bairro do fornecedor é obrigatório";
    if (!formData.vendedores)
      newErrors.vendedores = "O nome dos vendedores é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createNewSupplier = async (payload: any) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/fornecedores`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (response.status === 201) {
      setAfterSubmitMessage("Fornecedor cadastrado com sucesso!");
      return true;
    }
    if (response.status === 400) {
      setAfterSubmitMessage(
        "Erro ao cadastrar fornecedor. CNPJ já cadastrado."
      );
      return false;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form: ", formData);
      const payload = convertStateToPayload(formData);
      console.log("Payload: ", payload);
      const response = await createNewSupplier(payload);
      if (response) {
        router.push("/thanks");
      }
    }
  };

  return (
    <form
      className="space-y-8 max-w-2xl mx-auto p-6 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="text-2xl font-bold">
          Se você quer anunciar seu estoque, se inscreva abaixo e selecione seu
          plano desejado.
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  empresa: e.target.value,
                });
              }}
            />
            {errors.empresa && (
              <p className="text-red-500 text-sm h-4">{errors.empresa}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="razaoSocial">Razão Social</Label>
            <Input
              id="razaoSocial"
              placeholder="Razao Social"
              value={formData.razaoSocial}
              onChange={(e) =>
                setFormData({ ...formData, razaoSocial: e.target.value })
              }
            />
            {errors.razaoSocial && (
              <p className="text-red-500 text-sm h-4">{errors.razaoSocial}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="space-y-2 col-span-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <InputMask
              mask="99.999.999/9999-99" // CNPJ format mask
              maskChar="" // Placeholder character
              value={formData.cnpj} // Bind form data value
              onChange={(e: any) => {
                setFormData({
                  ...formData,
                  cnpj: e.target.value, // Update the value on change
                });
              }}
            >
              {/* Input component from shadcn */}
              {(inputProps: any) => (
                <Input
                  id="empresa"
                  placeholder="xx.xxx.xxx/xxxx-xx"
                  {...inputProps} // Spread the inputProps into the Input component
                />
              )}
            </InputMask>
            {errors.cnpj && (
              <p className="text-red-500 text-sm h-4">{errors.cnpj}</p>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="plano">Plano</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, idPlano: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um plano" />
              </SelectTrigger>
              <SelectContent id="plano">
                {planos.map((plano) => (
                  <SelectItem key={plano.id} value={plano.id.toString()}>
                    {plano.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.idPlano && (
              <p className="text-red-500 text-sm h-4">{errors.idPlano}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preco">Preço</Label>
            <Input
              id="preco"
              className="text-muted-foreground"
              placeholder="Preço"
              readOnly
              value={convertCentsToBRL(
                planos.find((plano) => plano.id === Number(formData.idPlano))
                  ?.precoEmCentavos ?? ""
              )}
            />
          </div>

          {formData.idPlano === "2" && (
            <div className="space-y-2 col-span-2">
              <Label htmlFor="bannerPequeno">Banner Pequeno</Label>
              <Input
                id="bannerPequeno"
                type="url"
                placeholder="Link para o banner pequeno"
                value={formData.bannerPequeno}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bannerPequeno: e.target.value,
                  })
                }
              />
            </div>
          )}

          {formData.idPlano === "3" && (
            <div className="space-y-4 col-span-2">
              {/* Banner Pequeno */}
              <div className="space-y-2 ">
                <Label htmlFor="bannerPequeno">Banner Pequeno</Label>
                <Input
                  id="bannerPequeno"
                  type="url"
                  placeholder="Link para o banner pequeno"
                  value={formData.bannerPequeno}
                  onChange={(e) =>
                    setFormData({ ...formData, bannerPequeno: e.target.value })
                  }
                />
              </div>
              {/* Banner Grande */}
              <div className="space-y-2 ">
                <Label htmlFor="bannerGrande">Banner Grande</Label>
                <Input
                  id="bannerGrande"
                  type="url"
                  placeholder="Link para o banner grande"
                  value={formData.bannerGrande}
                  onChange={(e) =>
                    setFormData({ ...formData, bannerGrande: e.target.value })
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Endereço</h2>
        <div className="space-y-2">
          <Label htmlFor="endereco">Endereço</Label>
          <Input
            id="endereco"
            placeholder="Endereço completo"
            value={formData.endereco}
            onChange={(e) =>
              setFormData({ ...formData, endereco: e.target.value })
            }
          />
          {errors.endereco && (
            <p className="text-red-500 text-sm h-4">{errors.endereco}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={(e) =>
                setFormData({ ...formData, cidade: e.target.value })
              }
            />
            {errors.cidade && (
              <p className="text-red-500 text-sm h-4">{errors.cidade}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="estado">Estado</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, estado: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((state) => (
                  <SelectItem
                    key={state.id}
                    id={state.id.toString()}
                    value={state.id.toString()}
                  >
                    {state.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.estado && (
              <p className="text-red-500 text-sm h-4">{errors.estado}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cep">C.E.P</Label>
            <Input
              id="cep"
              placeholder="xxxxx-xxx"
              value={formData.cep}
              onChange={(e) =>
                setFormData({ ...formData, cep: e.target.value })
              }
            />
            {errors.cep && (
              <p className="text-red-500 text-sm h-4">{errors.cep}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="bairro">Bairro</Label>
            <Input
              id="bairro"
              value={formData.bairro}
              placeholder="Bairro"
              onChange={(e) =>
                setFormData({ ...formData, bairro: e.target.value })
              }
            />
            {errors.bairro && (
              <p className="text-red-500 text-sm h-4">{errors.bairro}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Contato</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              placeholder="(xxx) xxxxx-xxxx"
              value={formData.telefone}
              onChange={(e) =>
                setFormData({ ...formData, telefone: e.target.value })
              }
              maxLength={15}
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm h-4">{errors.telefone}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">Whatsapp</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              placeholder="(xxx) xxxxx-xxxx"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  whatsapp: e.target.value,
                })
              }
              maxLength={15}
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm h-4">{errors.whatsapp}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email-pecas">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@exemplo.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm h-4">{errors.email}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Informações Adicionais</h2>
        <div className="space-y-2">
          <Label htmlFor="website">WebSite</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://www.exemplo.com"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vendedores">Nome dos vendedores de peças</Label>
          <Textarea
            id="vendedores"
            placeholder="Leandro, Vanessa, Rafael"
            value={formData.vendedores}
            onChange={(e) =>
              setFormData({ ...formData, vendedores: e.target.value })
            }
          />
          {errors.vendedores && (
            <p className="text-red-500 text-sm h-4">{errors.vendedores}</p>
          )}
        </div>
      </div>
      <Button type="submit" className="w-full">
        Enviar Formulário
      </Button>

      {afterSubmitMessage && (
        <p className={`text-center text-sm text-red-500 h-4`}>
          {afterSubmitMessage}
        </p>
      )}
    </form>
  );
}
