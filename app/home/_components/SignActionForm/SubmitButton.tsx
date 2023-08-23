import { Loading } from "../../../_components/Loading";

interface Props {
  onLoading: boolean;
  sign: "login" | "signUp";
  inputData: {
    email: string;
    password: string;
    username?:string;
  }
}

export function SubmitButton({onLoading, sign, inputData}:Props) {
  function hasEmptyInputs(): boolean {
    const inputsValue = Object.values(getInputsBySign());
    const emptyValues = inputsValue.filter(input => input.length === 0);
    const hasEmptyValues = emptyValues.length != 0;

    return hasEmptyValues;
  }

  function getInputsBySign() {
    const inputs = {
      signUp: inputData,
      login: {email: inputData.email, password: inputData.password}
    };
    return inputs[sign];
  }

  function changeTextContentBySign() {
    const textContent = {
      login: "entrar",
      signUp: "Criar conta"
    };

    return textContent[sign];
  }
  return (
    <button
      disabled={hasEmptyInputs()}
      type="submit"
      className={`w-full ${hasEmptyInputs() ? "bg-light-txt-200 cursor-not-allowed" : "bg-brand"}  rounded-2xl h-[45px] mt-8 text-light-txt-100 font-medium text-lg flex justify-center items-center`}
    >
      {onLoading ? <Loading/> : changeTextContentBySign()}
    </button>
  );
}