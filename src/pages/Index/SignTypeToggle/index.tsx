import { useState } from "react";
import { useRouter } from "next/router";
import { FooterSignMessage } from "./FooterSignMessage";
import { Loading } from "components/Loading";
import { InputContainer } from "components/InputContainer";
import illustration from "assets/images/index-demonstration.png";
import { useAuth } from "hooks/useAuth";

export function SignTypeToggle() {
  const auth = useAuth();
  const router = useRouter();
  const [sign, setSign] = useState<"login" | "signUp">("login");
  const [inputData, setInputData] = useState({ email: "", password: "", username: "" });
  const [onLoading, setOnLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  function handleGetInput(input, dataType:"username" | "password" | "email") {
    const userData = input.target.value;
    setInputData(latestState => ({ ...latestState, [dataType]: userData }));
  }

  async function handleSignIn() {
    setOnLoading(true);

    auth
      .signIn(
        inputData.email,
        inputData.password,
        error => setAuthError(error.message)
      )
      .then(isSignInDone => {
        if (isSignInDone) {
          setOnLoading(false);
          router.push("/chat");
        }
      });

    setOnLoading(false);
  }


  async function handleSignUp() {
    setOnLoading(true);

    auth
      .signUp(
        inputData.email,
        inputData.password,
        inputData.username,
        error => setAuthError(error.message)
      )
      .then(isSignUpDone => {
        if (isSignUpDone) {
          setSign("login");
          setOnLoading(false);
        }
      });
  }


  return (
    <form
      className="grow py-32 bg-dark-bg-400 flex flex-col items-center justify-between"
      onSubmit={(event) => {
        event.preventDefault();
        sign == "login" ? handleSignIn() : handleSignUp();
      }}
    >
      <fieldset className="w-[90%] max-w-[350px] mx-auto">
        <legend className="text-light-txt-100 text-5xl font-bold text-center mb-4">
          {
            onLoading
              ? <Loading />
              : sign === "login"
                ? "LOGIN"
                : "CRIAR CONTA"
          }
        </legend>

        {authError &&
          <span className="text-error text-center block mb-2">
            {authError}
          </span>
        }

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
          />
          <InputContainer
            onChange={el => handleGetInput(el, "password")}
            label="Senha"
            type="password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand rounded-2xl h-[45px] mt-8 text-light-txt-100 font-medium text-lg"
        >
          Entrar
        </button>

        <FooterSignMessage
          changeSignType={setSign}
          selectedSignType={sign}
        />
      </fieldset>

      <img src={illustration.src} alt="demonstration" />
    </form>
  );
}