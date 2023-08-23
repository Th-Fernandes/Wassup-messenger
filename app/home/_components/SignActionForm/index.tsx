import illustration from "../../../_assets/images/index-demonstration.png";

import React, { FormEvent, useContext } from "react";
import { NextImage } from "../../../_components/Next/Image";

import { useInputsValues } from "../../_hooks/useInputsValues";
import { useAuth } from "../../../_hooks/useAuth";
import { useToggleSignAction } from "../../_hooks/useToggleSignAction";

import { SignTitle } from "./SignTitle";
import { SignErrorMessage } from "./SignErrorMessage";
import { SubmitButton } from "./SubmitButton";
import { SignActionToggler } from "./SignActionToggler";
import { InputsContainer } from "./InputsContainer";
import { signUpModalContext } from "../../_providers/signUpModalProvider";


export function SignActionForm () {
  const { inputData, handleGetInput } = useInputsValues();
  const { sign, setSign } = useToggleSignAction();

  const {
    signIn,
    signUp,
    isSignActionLoading,
    authError,
  } = useAuth();

  const theme = useContext(signUpModalContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    switch(sign) {
    case "login": 
      signIn(inputData.email, inputData.password);
      break;
    case "signUp": 
      signUp(inputData.email, inputData.password, inputData.username);
      theme?.setIsEmailModalOpened(true);
      break;
    }
  }

  return (
    <form
      className="grow py-32 bg-dark-bg-400 flex flex-col items-center justify-between"
      onSubmit={handleSubmit}
    >
      <fieldset className="w-[90%] max-w-[350px] mx-auto">
        <SignTitle onLoading={isSignActionLoading} sign={sign} />
        <SignErrorMessage authError={authError} />

        <InputsContainer sign={sign} handleGetInput={handleGetInput} />

        <SubmitButton 
          onLoading={isSignActionLoading} 
          sign={sign} 
          inputData={inputData}
        />

        <SignActionToggler
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