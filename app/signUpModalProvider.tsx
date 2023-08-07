import { Dispatch, SetStateAction, createContext } from "react";

interface Theme {
  isEmailModalOpened: boolean,
  setIsEmailModalOpened: Dispatch<SetStateAction<boolean>>
}

export const signUpModalContext = createContext<Theme | null>(null);