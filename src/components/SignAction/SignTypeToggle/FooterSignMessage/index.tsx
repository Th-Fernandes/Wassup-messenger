import colors from "common/colors.json";
import { Dispatch, SetStateAction } from "react";

interface Props {
  changeSignType: Dispatch<SetStateAction<string>>;
  selectedSignType: "login" | "signUp"
}

export function FooterSignMessage({ changeSignType, selectedSignType }: Props) {
  function handleChangeSignAction() {
    if(selectedSignType === "login") changeSignType("signUp");
    if(selectedSignType === "signUp") changeSignType("login");
  }

  return (
    <small style={{ fontSize: " 1.6rem", marginTop: "1.2rem", display: "block" }}>
      {selectedSignType === "login" ? "Não" : "Já"} possui conta?
      <span
        onClick={handleChangeSignAction}
        style={{
          textDecoration: "underline",
          margin: "0 0.5rem",
          color: colors.primary["purple"],
          cursor: "pointer",
        }}
      >
        clique aqui
      </span>
      para {selectedSignType === "login" ? "criar!" : "fazer login!"}
    </small>
  );
}