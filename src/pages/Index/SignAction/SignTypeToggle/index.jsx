import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabaseDatabaseActions } from "helpers/supabase-database-actions";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
// import colors from "common/colors.json";
import { FooterSignMessage } from "./FooterSignMessage";
import { Loading } from ".";
import PropTypes from "prop-types";
import { InputContainer } from "components/InputContainer";

SignTypeToggle.propTypes = {
  emailModal: PropTypes.func
};

export function SignTypeToggle({ emailModal }) {
  const [sign, setSign] = useState("login");
  const [inputData, setInputData] = useState({ email: "", password: "", username: "" });
  const [onLoading, setOnLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [hasSession, setHasSession] = useState(false);
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
        setHasSession(true);

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

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: (session) => {
        const hasUserUsername = !session.user.user_metadata.username ? false : true;

        if (!hasUserUsername) {
          supabaseDatabaseActions.readAll({
            inTable: "temporary_user_data",
            thenDo: (data) => {
              data.map(userData => {
                if (userData.email === inputData.email) {
                  supabaseAuthActions.updateUserInfo({
                    update: { data: { username: userData.username } }
                  });

                  supabaseDatabaseActions.delete({
                    inTable: "temporary_user_data",
                    match: { email: userData.email }
                  });
                }
              });
            }
          });
        } else { console.log("username: ", session.user.user_metadata.username); }
      }
    });
  }, [hasSession, inputData.email]);

  return (
    <form
      className="grow py-32 bg-dark-bg-400"
      onSubmit={(event) => {
        event.preventDefault();
        sign == "login" ? handleSignIn() : handleSignUp();
      }}
    >
      <fieldset className="max-w-[350px] mx-auto">
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
    </form>
  );
}