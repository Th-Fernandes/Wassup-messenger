import { Box } from "@skynexui/components";
import { useRouter } from "next/router";

export default function Error404() {
  const router = useRouter();

  return (
    <Box
      as="article"
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}>Ops! algo deu errado</h1>
      <p style={{ fontSize: "clamp(1.2rem, 8vw, 1.6rem)", marginBlock: "1.2rem" }}>
        Parece que você tentou acessar uma página
        excluída ou não existente.
      </p>

      <button
        onClick={() => router.push("/chat")}
        className="animated-bg"
        style={{ paddingInline: "1.2rem", height: "3.5rem" }}>
        voltar ao menu principal
      </button>

    </Box>
  );
}