import { useState } from "react";

export function useToggleSignAction() {

  const [sign, setSign] = useState<"login" | "signUp">("login");


  return {
    sign,
    setSign
  };
}