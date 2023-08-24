import { InputContainer } from "@/_components/InputContainer";

interface Props {
  sign: string,
  // eslint-disable-next-line no-unused-vars
  handleGetInput(input: any, dataType: "email" | "password" | "username"): void
}

export function InputsContainer({sign, handleGetInput}:Props) {

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