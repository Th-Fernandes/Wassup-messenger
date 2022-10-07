import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";

import { InputContainer } from "components/InputContainer";
import { FooterSignMessage } from "./FooterSignMessage";

import illustration from "assets/images/index-demonstration.png";
import { SignErrorMessage } from "./SignErrorMessage";
import { SignTitle } from "./SignTitle";
import { NextImage } from "components/Next/Image";
import { SubmitButton } from "./SubmitButton";

interface Props {
  setIsEmailModalOpened: Dispatch<SetStateAction<boolean>>
}

export function SignTypeToggle({setIsEmailModalOpened}:Props) {
  const auth = useAuth();
  const router = useRouter();
  const [sign, setSign] = useState<"login" | "signUp">("login");
  const [inputData, setInputData] = useState({ email: "", password: "", username: "" });
  const [onLoading, setOnLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  function handleGetInput(input, dataType: "username" | "password" | "email") {
    const userData = input.target.value;
    setInputData(latestState => ({ ...latestState, [dataType]: userData }));
  }

  function handleSetSignAction(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sign == "login" ? handleSignIn() : handleSignUp();
  }

  async function handleSignIn() {
    setOnLoading(true);

    auth
      .signIn(
        inputData.email,
        inputData.password,
        error => {
          setAuthError(error.message);
          setOnLoading(false);
        }
      )
      .then(isSignInDone => {
        if (isSignInDone) {
          setOnLoading(false);
          router.push("/chat");
        }
      });

    
  }


  async function handleSignUp() {
    setOnLoading(true);

    auth
      .signUp(
        inputData.email,
        inputData.password,
        inputData.username,
        error => {
          setAuthError(error.message);
          setOnLoading(false);
        }
      )
      .then(isSignUpDone => {
        if (isSignUpDone) {
          setSign("login");
          setOnLoading(false);
          setIsEmailModalOpened(true);
        }
      });
  }


  return (
    <form
      className="grow py-32 bg-dark-bg-400 flex flex-col items-center justify-between"
      onSubmit={(event) => handleSetSignAction(event)}
    >
      <fieldset className="w-[90%] max-w-[350px] mx-auto">
        <SignTitle onLoading={onLoading} sign={sign} />
        <SignErrorMessage authError={authError} />

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

        <SubmitButton 
          onLoading={onLoading} 
          sign={sign} 
          inputData={inputData}
        />

        <FooterSignMessage
          changeSignType={setSign}
          selectedSignType={sign}
        />
      </fieldset>

      <NextImage 
        src={illustration.src}
        alt="demonstration"
        width={350}
        height={212}
      />
    </form>
  );
}