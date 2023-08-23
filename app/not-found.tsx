"use client";

import { NextImage } from "./_components/Next/Image";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <NextImage
        src="/wassup-logo-404.svg"
        alt="logo"
        width={120}
        height={120}
      />

      <h1 className="text-brand text-2xl md:text-4xl lg:text-5xl font-bold">
        Ops! Página não encontrada
      </h1>
      <p className="text-light-txt-200 mt-4 text-sm  lg:text-lg">
        Parece que você tentou acessar uma página que não existe
        ou foi excluída.
      </p>

      <button
        className="bg-brand rounded-2xl mt-4 py-2 px-4 hover:bg-brand-hover transition-colors"
        onClick={() =>router.push("/")}
      >
        Voltar ao menu principal
      </button>
    </main>
  );
}