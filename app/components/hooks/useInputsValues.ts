import { useState } from "react";

export function useInputsValues() {
  const [inputData, setInputData] = useState({ email: "", password: "", username: "" });

  function handleGetInput(input, dataType: "username" | "password" | "email") {
    const userData = input.target.value;
    setInputData(latestState => ({ ...latestState, [dataType]: userData }));
  }

  return {
    inputData,
    handleGetInput,
  };
}