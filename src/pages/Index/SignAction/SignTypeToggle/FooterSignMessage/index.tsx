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
    <small className=" text-sm lg:text-base text-center block mt-4">
      {selectedSignType === "login" ? "Não" : "Já"} possui conta? 
      <span
        onClick={handleChangeSignAction}
        className="text-brand mx-1 cursor-pointer"
      >
        clique aqui
      </span>
       para {selectedSignType === "login" ? "criar!" : "fazer login!"}
    </small>
  );
}