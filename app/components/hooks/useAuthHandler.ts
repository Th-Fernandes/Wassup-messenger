import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/navigation";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";

export function useAuthHandler(setIsEmailModalOpened: Dispatch<SetStateAction<boolean>> ,email: string, password: string, username: string) {
  const auth = useAuth();
  const router = useRouter();
  const [sign, setSign] = useState<"login" | "signUp">("login");
  const [onLoading, setOnLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  function handleSetSignAction(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function handleSignIn() {
      setOnLoading(true);
  
      auth
        .signIn(
          email,
          password,
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
          email,
          password,
          username,
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
    sign == "login" ? handleSignIn() : handleSignUp();
  }

  return {
    handleSetSignAction,
    onLoading,
    authError,
    sign,
    setSign
  };
}