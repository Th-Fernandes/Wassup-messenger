import { useState } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
import { FooterSignMessage } from "./FooterSignMessage";
import { Loading } from ".";
import PropTypes from "prop-types";
import { InputContainer } from "components/InputContainer";
import illustration from "assets/images/index-demonstration.png";

SignTypeToggle.propTypes = {
  emailModal: PropTypes.func
};

export function SignTypeToggle({ emailModal }) {
  const [sign, setSign] = useState("login");
  const [inputData, setInputData] = useState({ email: "", password: "", username: "" });
  const [onLoading, setOnLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const router = useRouter();

  function handleGetInput(input, dataType) {
    const userData = input.target.value;
    setInputData(latestState => ({ ...latestState, [dataType]: userData }));
  }

  async function handleSignIn() {
    setOnLoading(true);

    supabaseAuthActions.signIn({
      ...inputData,
      onError: signInErrorMessage => setAuthError(signInErrorMessage),
      thenDo: () => {
        router.push("/chat");
        setOnLoading(false);
      }
    });
    setOnLoading(false);
  }


  async function handleSignUp() {
    setOnLoading(true);

    supabaseAuthActions.signUp({
      ...inputData,
      onError: signUpErrorMessage => setAuthError(signUpErrorMessage),
      thenDo: () => {
        emailModal(true);
        setSign("login");
        setInputData({ email: "", password: "" });
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