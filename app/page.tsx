"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { TableSkeleton } from "@/components/application/SkeletonTable";
import ProductTable from "@/components/application/ProductTable";
import Header from "@/components/application/Header";
import { Product } from "@/components/application/ProductTable";
import { PaginationControls } from "@/components/application/PaginationControls";

export default function Home() {
  const [code, setCode] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const fetchData = async (code: string, page: number = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://novo-pecas-online-backend-production.up.railway.app/api/v1/estoque/codigo/${code}?page=${page}&size=10`
      );
      const data = await res.json();
      setProducts(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!code) {
      setProducts([]);
      setTotalPages(0);
      return;
    }
    fetchData(code, currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen w-full container mx-auto">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Encontre tudo que precisa em um só lugar
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 md:mt-6">
                  Digite os códigos das peças e encontre os melhores
                  fornecedores do mercado
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Digite os códigos das peças"
                    type="search"
                    value={code}
                    onChange={handleSearch}
                  />
                  <Button type="button" onClick={() => fetchData(code)}>
                    Pesquisar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Catálogo de Peças</h2>
            {loading ? <TableSkeleton /> : <ProductTable products={products} />}
            <div className="flex container mx-auto">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
