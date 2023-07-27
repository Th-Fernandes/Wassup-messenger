import { InputContainer } from "components/InputContainer";
import { useInputsValues } from "./hooks/useInputsValues";

interface Props {
  sign: string
}

export function InputsContainer({sign}:Props) {
  const { handleGetInput } = useInputsValues();

  return (
    <div className="flex flex-col gap-4">
      {
        sign === "signUp" &&
            <InputContainer
              onChange={el => handleGetInput(el, "username")}
              label="Username"
            />
      }
      <InputContainer
        onChange={el => handleGetInput(el, "email")}
        label="E-mail"
        type="email"
      />
      <InputContainer
        onChange={el => handleGetInput(el, "password")}
        label="Senha"
        type="password"
      />
    </div>
  );
}