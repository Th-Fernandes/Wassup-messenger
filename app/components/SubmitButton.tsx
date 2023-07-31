import { Loading } from "components/Loading";

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
  function checkIfInputsAreEmpty() {
    if(inputData.email.length === 0 ) return true;
    if(inputData.password.length === 0 ) return true;
    if(inputData?.username?.length === 0 && sign == "signUp" ) return true;
  }

  function handleChangeButtonMessage() {
    if( sign === "login") return "Entrar";
    if( sign === "signUp") return "Criar conta";
  }

  return (
    <button
      disabled={checkIfInputsAreEmpty()}
      type="submit"
      className={`w-full ${checkIfInputsAreEmpty() ? "bg-light-txt-200 cursor-not-allowed" : "bg-brand"}  rounded-2xl h-[45px] mt-8 text-light-txt-100 font-medium text-lg flex justify-center items-center`}
    >
      {onLoading ? <Loading/> : handleChangeButtonMessage()}
    </button>
  );
}