import illustration from "assets/images/index-demonstration.png";

import { Dispatch, SetStateAction } from "react";
import { NextImage } from "components/Next/Image";

import { useAuthHandler } from "./hooks/useAuthHandler";
import { useInputsValues } from "./hooks/useInputsValues";

import { SignTitle } from "./SignTitle";
import { SignErrorMessage } from "./SignErrorMessage";
import { useToggleSignAction } from "./hooks/useToggleSignAction";
import { SubmitButton } from "./SubmitButton";
import { SignActionToggler } from "./SignActionToggler";
import { InputsContainer } from "./InputsContainer";

interface Props {
  setIsEmailModalOpened: Dispatch<SetStateAction<boolean>>
}

export function SignActionForm ({setIsEmailModalOpened}:Props) {
  const { inputData, handleGetInput } = useInputsValues();
  const { sign, setSign } = useToggleSignAction();
  
  const {
    handleSetSignAction,
    onLoading,
    authError,
  } = useAuthHandler(setIsEmailModalOpened , inputData.email, inputData.password, inputData.username);


  return (
    <form
      className="grow py-32 bg-dark-bg-400 flex flex-col items-center justify-between"
      onSubmit={(event) => handleSetSignAction(event)}
    >
      <fieldset className="w-[90%] max-w-[350px] mx-auto">
        <SignTitle onLoading={onLoading} sign={sign} />
        <SignErrorMessage authError={authError} />

        <InputsContainer sign={sign} handleGetInput={handleGetInput} />

        <SubmitButton 
          onLoading={onLoading} 
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