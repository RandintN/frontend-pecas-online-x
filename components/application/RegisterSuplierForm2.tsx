// "use client";
// import { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { STATES } from "@/utils/States";
// import { Plano } from "@/interfaces/Plano";
// import convertCentsToBRL from "@/utils/convertCentsToBRL";
// import { useRouter } from "next/navigation";

// // Define the schema for Zod validation
// const formSchema = z.object({
//   empresa: z.string().min(1, "O nome da empresa é obrigatório"),
//   razaoSocial: z.string().min(1, "A razão social da empresa é obrigatória"),
//   cnpj: z.string().min(1, "O CNPJ do fornecedor é obrigatório"),
//   inscricaoEstadual: z.string().min(1, "A inscrição estadual é obrigatória"),
//   idMarca: z.string().min(1, "O ID da marca do fornecedor é obrigatório"),
//   endereco: z.string().min(1, "O endereço do fornecedor é obrigatório"),
//   idDescricao: z.string().min(1, "O ID da descrição é obrigatório"),
//   telefone: z.string().min(1, "O telefone do fornecedor é obrigatório"),
//   whatsapp: z.string().min(1, "O whatsapp do fornecedor é obrigatório"),
//   email: z.string().min(1, "O email do fornecedor é obrigatório").email(),
//   idPlano: z.string().min(1, "O plano do fornecedor é obrigatório"),
//   cidade: z.string().min(1, "A cidade do fornecedor é obrigatória"),
//   estado: z.string().min(1, "O estado do fornecedor é obrigatório"),
//   cep: z.string().min(1, "O CEP do fornecedor é obrigatório"),
//   bairro: z.string().min(1, "O bairro do fornecedor é obrigatório"),
//   website: z.string().url().optional(),
//   vendedores: z.string().optional(),
// });

// export default function RegisterSuplierForm() {
//   const [planos, setPlanos] = useState<Plano[]>([]);
//   const [afterSubmitMessage, setAfterSubmitMessage] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/planos`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPlanos(data);
//       });
//   }, []);

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const createNewSupplier = async (payload: any) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/fornecedores`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (response.status === 201) {
//       setAfterSubmitMessage("Fornecedor cadastrado com sucesso!");
//       return true;
//     }
//     if (response.status === 400) {
//       setAfterSubmitMessage("Erro ao cadastrar fornecedor. CNPJ já cadastrado.");
//       return false;
//     }
//     return false;
//   };

//   const onSubmit = async (data: any) => {
//     const payload = {
//       ...data,
//       // Any transformation logic here (if needed)
//     };
//     const response = await createNewSupplier(payload);
//     if (response) {
//       router.push("/thanks");
//     }
//   };

//   return (
//     <form
//       className="space-y-8 max-w-2xl mx-auto p-6 rounded-lg shadow"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <div className="space-y-4">
//         <h2 className="text-2xl font-bold">Informações da Empresa</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="empresa">Empresa</Label>
//             <Controller
//               control={control}
//               name="empresa"
//               render={({ field }) => (
//                 <Input
//                   id="empresa"
//                   placeholder="Empresa"
//                   {...field}
//                 />
//               )}
//             />
//             {errors.empresa && (
//               <p className="text-red-500 text-sm h-4">{errors.empresa.message}</p>
//             )}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="razaoSocial">Razão Social</Label>
//             <Controller
//               control={control}
//               name="razaoSocial"
//               render={({ field }) => (
//                 <Input
//                   id="razaoSocial"
//                   placeholder="Razao Social"
//                   {...field}
//                 />
//               )}
//             />
//             {errors.razaoSocial && (
//               <p className="text-red-500 text-sm h-4">{errors.razaoSocial.message}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2 col-span-2">
//             <Label htmlFor="cnpj">CNPJ</Label>
//             <Controller
//               control={control}
//               name="cnpj"
//               render={({ field }) => (
//                 <Input
//                   id="cnpj"
//                   placeholder="xx.xxx.xxx/xxxx-xx"
//                   maxLength={18}
//                   {...field}
//                 />
//               )}
//             />
//             {errors.cnpj && (
//               <p className="text-red-500 text-sm h-4">{errors.cnpj.message}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="plano">Plano</Label>
//             <Controller
//               control={control}
//               name="idPlano"
//               render={({ field }) => (
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Selecione um plano" />
//                   </SelectTrigger>
//                   <SelectContent id="plano">
//                     {planos.map((plano) => (
//                       <SelectItem key={plano.id} value={plano.id.toString()}>
//                         {plano.nome}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               )}
//             />
//             {errors.idPlano && (
//               <p className="text-red-500 text-sm h-4">{errors.idPlano.message}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Other fields like 'Endereco', 'Contato', etc., will be similar */}

//       <div className="space-y-4">
//         <Button type="submit" className="w-full">
//           Enviar Formulário
//         </Button>
//       </div>

//       {afterSubmitMessage && (
//         <p className={`text-center text-sm text-red-500 h-4`}>
//           {afterSubmitMessage}
//         </p>
//       )}
//     </form>
//   );
// }
