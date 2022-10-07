import { Loading } from "components/Loading";

interface Props {
  onLoading: boolean;
  sign: "login" | "signUp";
}

export function SignTitle({onLoading, sign}:Props) {
  return (
    <legend className="text-light-txt-100 text-5xl font-bold text-center mb-4">
      {
        onLoading
          ? <Loading />
          : sign === "login"
            ? "LOGIN"
            : "CRIAR CONTA"
      }
    </legend>
  );
}